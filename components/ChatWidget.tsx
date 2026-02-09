import React, { useState, useRef, useEffect } from 'react';
import { Theme } from '../types';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface ChatWidgetProps {
  theme: Theme;
  open: boolean;
  onClose: () => void;
  width?: string;
}

function uniqueId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ theme, open, onClose, width = '400px' }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open) {
      setSlideIn(false);
      const t = requestAnimationFrame(() => {
        requestAnimationFrame(() => setSlideIn(true));
      });
      return () => cancelAnimationFrame(t);
    }
  }, [open]);

  const suggestedQuestions = [
    'tell me about your design process',
    'what projects have you worked on?',
    'how do you approach problem-solving?',
  ];

  const followUpPool = [
    'what was the most challenging part?',
    "what's next?",
    'what inspired that?',
    'how did you get started with that?',
    'what would you do differently?',
    'what tools do you use?',
    'how do you balance aesthetics and function?',
    'any advice for someone starting out?',
    'what are you working on now?',
    'how do you approach feedback?',
    'what’s a project you’re proud of?',
    'how do you stay inspired?',
    'what does your typical process look like?',
    'how do you decide when something is done?',
    'what’s the story behind that?',
    'what’s one thing you’d tell your past self?',
    'how do you collaborate with others?',
    'what’s the most underrated part of design?',
  ];

  const followUpSuggestions = React.useMemo(() => {
    if (messages.length === 0 || messages[messages.length - 1].role !== 'assistant') return [];
    const shuffled = [...followUpPool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, [messages]);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => { if (open) scrollToBottom(); }, [messages, open]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const sendMessage = async (text?: string) => {
    const messageText = text || input.trim();
    console.log('[KAI] sendMessage called', { messageText: messageText?.slice(0, 20), loading });
    if (!messageText || loading) return;

    setInput('');
    const userMsg: Message = { id: uniqueId(), role: 'user', content: messageText };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);
    setError(null);

    const history = [...messages, userMsg].map((m) => ({ role: m.role, content: m.content }));

    const apiUrl = import.meta.env.DEV ? 'http://localhost:3001/api/chat' : '/api/chat';
    console.log('[KAI] Sending to', apiUrl, 'messages:', history.length);

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });
      console.log('[KAI] Response', res.status, res.statusText);

      const contentType = res.headers.get('content-type');
      const isJson = contentType?.includes('application/json');
      const raw = await res.text();
      const data = isJson && raw ? (() => { try { return JSON.parse(raw); } catch { return {}; } })() : {};

      if (!res.ok) {
        const msg = data?.error ?? (isJson ? raw : `Request failed: ${res.status}`);
        throw new Error(typeof msg === 'string' ? msg : 'Request failed');
      }

      const content = data?.content ?? '';
      if (content) {
        const assistantMsg: Message = {
          id: uniqueId(),
          role: 'assistant',
          content,
        };
        setMessages((prev) => [...prev, assistantMsg]);
      } else {
        setError('No response from server.');
      }
    } catch (err) {
      console.error('[KAI] Fetch error', err);
      const message = err instanceof Error ? err.message : 'Something went wrong';
      if (message.includes('Failed to fetch') || message.includes('NetworkError') || message.includes('Load failed')) {
        setError('Chat server isn’t running. Run: npm run server (or npm run dev:all) in the project root.');
      } else if (message.includes('RATE_LIMIT') || message.includes('429') || message.includes('quota')) {
        setError('Rate limit reached. Please try again in about a minute.');
      } else {
        setError(message);
      }
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleSuggestedClick = (question: string) => {
    sendMessage(question);
  };

  const isDark = theme === 'dark';
  const chatBg = isDark ? 'bg-brand-dark' : 'bg-brand-light';
  const textClass = isDark ? 'text-brand-light' : 'text-brand-dark';
  const borderClass = isDark ? 'border-brand-light' : 'border-brand-dark';
  const inputBg = isDark ? 'bg-brand-light/10' : 'bg-brand-dark/5';
  const inputBorder = 'border-brand-dark';
  const userBubbleBg = inputBg;
  const userBubbleBorder = inputBorder;

  if (!open) return null;

  return (
    <div
      className={`fixed top-0 right-0 z-40 h-full ${chatBg} shadow-xl border-l-2 ${borderClass} flex flex-col transition-transform duration-300 ease-out`}
      style={{
        width,
        transform: slideIn ? 'translateX(0)' : 'translateX(100%)',
      }}
    >
      <div className="flex flex-col h-full min-h-0">
      {/* Header */}
      <div className={`flex items-center justify-between border-b-2 ${borderClass} px-6 py-4 shrink-0 ${textClass}`}>
          <div className="flex items-center gap-2">
            {/* Active diamond symbol */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              className="fill-orange-500 cursor-pointer"
              onClick={onClose}
            >
              <path d="M6 0L12 6L6 12L0 6L6 0Z" />
            </svg>
            
            <span className="font-mono font-medium">KAI</span>
            
            {/* Info icon with hover tooltip */}
            <div className="relative">
              <button
                type="button"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="flex items-center justify-center w-5 h-5 rounded-full border border-current opacity-60 hover:opacity-100 transition-opacity"
                aria-label="About KAI"
              >
                <span className="text-xs">i</span>
              </button>
              
              {showTooltip && (
                <div className={`absolute top-6 left-1/2 -translate-x-1/2 w-48 p-3 rounded-lg ${chatBg} border-2 ${borderClass} shadow-lg z-50`}>
                  <p className={`text-xs ${textClass} opacity-90`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 rotate-45 ${chatBg} border-l border-t ${borderClass}`} />
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Refresh icon (optional, can be functional later) */}
            <button
              type="button"
              onClick={() => {
                setMessages([]);
                setError(null);
              }}
              className={`opacity-60 hover:opacity-100 transition-opacity ${textClass}`}
              aria-label="Reset chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M3 21v-5h5" />
              </svg>
            </button>
            
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className={`opacity-60 hover:opacity-100 transition-opacity ${textClass}`}
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
      </div>

      {/* Content Area - lots of top padding so content sits lower like reference */}
      <div className={`flex flex-col flex-1 min-h-0 ${textClass}`}>
        <div className="flex-1 overflow-y-auto px-6 pt-16 pb-6 min-h-0">
            {messages.length === 0 ? (
              <div className="space-y-5 pt-6">
                {/* Greeting */}
                <p className={`text-lg font-medium ${textClass}`}>hey! what’s up?</p>
                {/* Suggestions with ↳ arrow, lighter grey text */}
                <div className="space-y-2">
                  {suggestedQuestions.map((question, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSuggestedClick(question)}
                      className={`w-full text-left flex items-center gap-2 py-2 text-sm opacity-70 hover:opacity-100 transition-opacity ${textClass}`}
                    >
                      <span className="text-base" aria-hidden>↳</span>
                      <span>{question}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {m.role === 'user' ? (
                      <div className={`max-w-[85%] rounded-lg px-4 py-2.5 text-sm border-2 ${userBubbleBorder} ${userBubbleBg} ${textClass}`}>
                        {m.content}
                      </div>
                    ) : (
                      <p className="max-w-[85%] text-sm leading-relaxed">{m.content}</p>
                    )}
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <p className="text-sm opacity-60">Thinking…</p>
                  </div>
                )}
                {error && (
                  <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-2 text-sm text-red-500 dark:text-red-400">
                    {error}
                  </div>
                )}
                {/* Follow-up suggestions after bot reply (when last message is assistant and not loading) */}
                {!loading && messages.length > 0 && messages[messages.length - 1].role === 'assistant' && (
                  <div className="space-y-2 pt-2">
                    {followUpSuggestions.map((s, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSuggestedClick(s)}
                        className={`w-full text-left flex items-center gap-2 py-2 text-sm opacity-70 hover:opacity-100 transition-opacity ${textClass}`}
                      >
                        <span className="text-base" aria-hidden>↳</span>
                        <span>{s}</span>
                      </button>
                    ))}
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
        </div>

        {/* Input Bar - button stretches to match textarea height */}
        <div className={`border-t-2 ${borderClass} px-6 py-4 shrink-0`}>
            <div className="flex items-stretch gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Kunwar…"
                rows={1}
                disabled={loading}
                className={`flex-1 min-h-[44px] resize-none rounded-lg border-2 ${inputBorder} ${inputBg} px-4 py-3 text-sm ${textClass} placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-brand-dark/20 dark:focus:ring-brand-light/20 disabled:opacity-50`}
                style={{ maxHeight: '120px' }}
              />
              <button
                type="button"
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                className={`flex shrink-0 items-center justify-center rounded-lg border-2 ${borderClass} ${inputBg} min-h-[44px] w-[44px] transition-colors focus:outline-none focus:ring-2 focus:ring-brand-dark/20 dark:focus:ring-brand-light/20 disabled:opacity-50 disabled:pointer-events-none ${textClass} hover:opacity-80 active:opacity-70`}
                aria-label="Send message"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="19" x2="12" y2="5" />
                  <polyline points="5 12 12 5 19 12" />
                </svg>
              </button>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ChatWidget;
