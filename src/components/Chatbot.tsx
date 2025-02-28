import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, RefreshCw } from 'lucide-react';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Hello! I am CyberPulse Assistant. How can I help you with your IoT device today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I'm analyzing your device data now. Everything seems to be functioning normally.",
        "Your battery level is currently at 78%. Consider charging soon.",
        "I've detected a slight temperature increase. This is within normal parameters.",
        "The signal strength is excellent. No connectivity issues detected.",
        "I can help you troubleshoot that. What specific behavior are you noticing?",
        "Based on your device history, this appears to be normal operation.",
        "I've updated your notification settings as requested."
      ];

      const botMessage: ChatMessage = {
        id: Date.now().toString(),
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="cyberpunk-panel p-4 mb-4">
        <h2 className="text-xl font-bold mb-2 flex items-center">
          <Bot className="mr-2 text-[var(--primary)]" />
          CyberPulse Assistant
        </h2>
        <p className="text-sm text-[var(--text-dim)]">
          Ask questions about your device, troubleshoot issues, or request system actions.
        </p>
      </div>

      <div className="flex-grow cyberpunk-panel p-4 mb-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === 'user' 
                    ? 'bg-[var(--primary-dark)] text-[var(--background)]' 
                    : 'bg-[var(--surface-light)] text-[var(--text)]'
                }`}
              >
                <div className="flex items-center mb-1">
                  {message.sender === 'bot' ? (
                    <Bot size={16} className="mr-1" />
                  ) : (
                    <User size={16} className="mr-1" />
                  )}
                  <span className="text-xs opacity-70">
                    {message.sender === 'bot' ? 'CyberPulse' : 'You'} • {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <p>{message.text}</p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-[var(--surface-light)] rounded-lg p-3 flex items-center">
                <Bot size={16} className="mr-2 text-[var(--primary)]" />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <form onSubmit={handleSendMessage} className="flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow cyberpunk-input rounded-l-md p-3 focus:outline-none"
        />
        <button 
          type="submit" 
          className="bg-[var(--primary)] text-[var(--background)] p-3 rounded-r-md hover:bg-[var(--primary-dark)] transition-colors"
          disabled={!input.trim()}
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default Chatbot;