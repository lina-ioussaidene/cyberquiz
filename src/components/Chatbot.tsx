import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send } from 'lucide-react';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: "Hello! Ask me anything about cybersecurity.", isUser: false }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setInput('');

    // Mock response
    setTimeout(() => {
      const responses = [
        "Always use a password manager to keep your accounts secure.",
        "Phishing is one of the most common cyber threats today.",
        "Make sure to enable 2FA on all your important accounts.",
        "A VPN encrypts your internet traffic, keeping it safe from prying eyes.",
        "Never click on suspicious links in emails or texts."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 glass-panel rounded-2xl overflow-hidden z-50 flex flex-col shadow-[0_0_30px_rgba(89,255,0,0.2)]"
          >
            <div className="bg-[var(--color-cyber-dark)] p-4 flex justify-between items-center border-b border-[var(--color-cyber-bright)] border-opacity-30">
              <div className="flex items-center gap-2 text-[var(--color-cyber-bright)] font-semibold">
                <MessageSquare size={18} />
                <span>CyberBot</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>
            
            <div className="h-64 overflow-y-auto p-4 flex flex-col gap-3 bg-black bg-opacity-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.isUser ? 'bg-[var(--color-cyber-bright)] text-black self-end rounded-br-none' : 'glass-panel text-white self-start rounded-bl-none'}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            <form onSubmit={handleSend} className="p-3 border-t border-[var(--color-cyber-bright)] border-opacity-30 flex gap-2 bg-[var(--color-cyber-dark)] bg-opacity-50">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about cybersecurity..."
                className="flex-1 bg-black bg-opacity-50 border border-[var(--color-cyber-bright)] border-opacity-30 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-opacity-100"
              />
              <button type="submit" className="bg-[var(--color-cyber-bright)] text-black p-2 rounded-lg hover:bg-[var(--color-cyber-light)] transition-colors">
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[var(--color-cyber-bright)] text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(89,255,0,0.5)] z-50 hover:bg-[var(--color-cyber-light)] transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </>
  );
};
