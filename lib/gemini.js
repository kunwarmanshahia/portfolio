/**
 * Call Gemini API with chat history. API key must only be used server-side.
 */
export async function chatWithGemini(messages, apiKey) {
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set');
  }

  const systemInstruction = {
    parts: [{
      text: `You are Kunwar Manshahia. You are answering on your portfolio chat (KAI). Reply in first person as Kunwar. Keep replies concise, warm, and in your voice.

Who you are:
- Multidisciplinary designer specializing in cohesive digital experiences.
- Your approach: rigorous systems thinking + sharp aesthetic sensibility.
- Currently exploring generative design and spatial computing.
- Location: Chandigarh, IN — Remote worldwide.

Capabilities: Digital Strategy, Visual Identity, Product Design (UX/UI), Creative Coding, Art Direction.

Work on your site:
- Case studies: Forge, Mosaic (UX/UI), plus other case studies in UI/UX and Brand.
- Projects: e.g. interactive installations, editorial design, experimental web (Project Alpha, Beta, Gamma and others).

Tone: Direct, thoughtful, a bit understated. No corporate fluff. If you don't know something or it's outside your experience, say so briefly. Don't invent projects or facts beyond what's above—steer to your real interests and capabilities.`
    }],
  };

  const contents = messages.map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));

  // gemini-2.0-flash is available on v1beta; use it (fix quota in Google Cloud if you get 429)
  const model = 'gemini-2.0-flash';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
  
  const requestBody = {
    contents,
    systemInstruction,
    generationConfig: {
      maxOutputTokens: 1024,
      temperature: 0.7,
    },
  };

  console.log('Gemini request URL:', url.replace(apiKey, '***'));
  console.log('Gemini request body:', JSON.stringify(requestBody, null, 2));

  const doRequest = async () => {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });
    console.log('Gemini response status:', res.status, res.statusText);
    const errText = await res.text();
    if (!res.ok) {
      return { ok: false, status: res.status, body: errText };
    }
    try {
      return { ok: true, data: JSON.parse(errText) };
    } catch {
      return { ok: false, status: res.status, body: errText };
    }
  };

  const get429DelayMs = (body) => {
    let ms = 35_000;
    try {
      const errJson = JSON.parse(body);
      const retryInfo = errJson?.error?.details?.find?.((d) => d['@type']?.includes('RetryInfo'));
      if (retryInfo?.retryDelay) {
        const sec = parseFloat(String(retryInfo.retryDelay).replace('s', ''));
        if (!Number.isNaN(sec)) ms = Math.ceil(sec * 1000) + 2000;
      }
      const msg = errJson?.error?.message || '';
      const match = msg.match(/retry in (\d+(?:\.\d+)?)\s*s/i);
      if (match) {
        const sec = parseFloat(match[1]);
        if (!Number.isNaN(sec)) ms = Math.ceil(sec * 1000) + 2000;
      }
    } catch (_) { /* use default */ }
    return ms;
  };

  let result = await doRequest();
  const maxRetries = 2;

  for (let attempt = 0; !result.ok && result.status === 429 && attempt < maxRetries; attempt++) {
    const delayMs = get429DelayMs(result.body);
    console.log('Gemini 429 — retrying in', Math.round(delayMs / 1000), 's (attempt', attempt + 1, 'of', maxRetries, ')');
    await new Promise((r) => setTimeout(r, delayMs));
    result = await doRequest();
  }

  if (!result.ok) {
    console.error('Gemini API error response:', result.body);
    if (result.status === 429) {
      throw new Error('RATE_LIMIT: Rate limit reached. Wait a minute and try again. If you just upgraded to paid, make sure the API key in .env is from the same project (check ai.dev/rate-limit).');
    }
    throw new Error(`Gemini API error: ${result.status} ${result.body}`);
  }

  const data = result.data;
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (text == null) {
    console.error('Unexpected response shape:', data);
    throw new Error('Unexpected Gemini response shape');
  }
  return text;
}
