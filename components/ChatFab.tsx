import React from 'react';

interface ChatFabProps {
  chatOpen: boolean;
  onToggle: () => void;
}

const ChatFab: React.FC<ChatFabProps> = ({ chatOpen, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={chatOpen ? 'Close KunwarLLM chat' : 'Open KunwarLLM chat'}
      aria-expanded={chatOpen}
      className={`group fixed bottom-6 z-[45] flex h-14 w-14 items-center justify-center rounded-full border-2 bg-brand-light/80 shadow-md backdrop-blur-md transition-[right,border-color,colors] duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark/30 hover:border-orange-500 ${
        chatOpen ? 'border-orange-500 max-md:hidden md:right-[calc(400px+1.5rem)]' : 'border-brand-dark right-6'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`shrink-0 transition-colors duration-300 group-hover:stroke-orange-500 ${chatOpen ? 'stroke-orange-500' : 'stroke-brand-dark'}`}
        aria-hidden
      >
        <path d="M11.5 3V21M20.5 12L2.5 12M15.9497 7.5L7.05024 16.3995M7.05026 7.5L15.9498 16.3995" />
      </svg>
    </button>
  );
};

export default ChatFab;
