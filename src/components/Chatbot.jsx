import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

const KNOWLEDGE_BASE = [
  {
    keywords: ["price", "cost", "how much", "rate", "budget", "pricing"],
    response: "Our plots are priced between <strong>₹1,000 to ₹1,100 per sq ft</strong>.<br/><br/>- Compact plots (~1,210 sq ft) start around ₹12.10L<br/>- Mid-size plots (~1,400 sq ft) start around ₹14.05L<br/>- Premium plots (~4,000+ sq ft) start around ₹38L<br/><br/>Would you like to know the exact dimensions of a specific plot?"
  },
  {
    keywords: ["size", "dimension", "area", "sq ft", "how big", "sizes", "available"],
    response: "We offer three main categories in the Tumadi Layout:<br/><br/>- <strong>Compact</strong>: ~1,210 sq ft (Ideal for starter homes)<br/>- <strong>Mid-size</strong>: ~1,400–1,780 sq ft (Great for independent bungalows)<br/>- <strong>Large/Premium</strong>: ~3,740–4,742 sq ft (Best for villas or duplexes)"
  },
  {
    keywords: ["location", "where", "tumadi", "ring road", "address", "city", "map", "projects"],
    response: "Our prime project, <strong>Tumadi Layout</strong>, is nestled in Tumadi Village, near the Nagpur Ring Road.<br/>It's an incredibly fast-appreciating zone with excellent connectivity on the outskirts of Nagpur city.<br/><br/>📍 <a href='https://maps.app.goo.gl/V8rvoYkBnGb7Lu8R6?g_st=ipc' target='_blank' style='color:#C9A84C;text-decoration:underline;'>View on Google Maps</a>"
  },
  {
    keywords: ["legal", "rera", "approved", "approval", "na", "title", "documents"],
    response: "All our land has <strong>Clear Titles</strong> and verified documentation.<br/><br/>We assist with NA (Non-Agricultural) conversion and RERA registrations. Please confirm the exact current RERA status directly with our office team during your site visit!"
  },
  {
    keywords: ["book", "booking", "buy", "process", "how to"],
    response: "<strong>Booking Process:</strong><br/>1. Arrange a free site visit.<br/>2. Choose your preferred plot.<br/>3. Pay the booking amount.<br/>4. We execute the Agreement to Sale.<br/>5. Final registration at the Sub-Registrar office.<br/><br/>Call +91 91376 99685 to start!"
  },
  {
    keywords: ["amenities", "facility", "facilities", "infrastructure", "road", "water", "electricity", "included"],
    response: "<strong>Infrastructure & Amenities included:</strong><br/>- Internal layout roads<br/>- Demarcated plot boundaries with stones<br/>- Proper drainage provisions<br/>- Electricity access provided out to the plot boundary"
  },
  {
    keywords: ["contact", "phone", "number", "email", "call", "whatsapp", "reach", "visit"],
    response: "You can reach our team strictly dedicated to Tumadi Layout at:<br/><br/>📞 <strong>Phone / WhatsApp</strong>: +91 91376 99685<br/>✉️ <strong>Email</strong>: kpvaishali@gmail.com<br/><br/>Feel free to call anytime to schedule a site visit!"
  },
  {
    keywords: ["hi", "hello", "hey", "namaste", "morning", "afternoon"],
    response: "Namaste! 🙏 How can I assist you with your land investment today? You can ask me about pricing, location, or plot sizes!"
  }
];

const FALLBACK_RESPONSE = "I'm your digital Plot Advisor! I'm here to answer common questions about Tumadi Layout, but I couldn't quite catch that. <br/><br/>Could you try asking about <strong>pricing</strong>, <strong>plot sizes</strong>, or <strong>location</strong>? Or feel free to call our human team directly at +91 91376 99685!";


export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Namaste! 🙏 Welcome to <strong>Amarnath Infra Systems</strong>.\n\nI'm your Plot Advisor — I can help you explore our residential plots at Tumdi near the Ring Road, understand pricing, check layout details, and guide you through the buying process.\n\nWhat would you like to know today?",
      time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickTopics, setShowQuickTopics] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const API_KEY = process.env.REACT_APP_CLAUDE_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const autoResize = () => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = Math.min(inputRef.current.scrollHeight, 100) + "px";
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    autoResize();
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendQuick = (text) => {
    setInput(text);
    // Use a timeout to guarantee the state is updated before sending
    setTimeout(() => {
      sendWithText(text);
    }, 0);
  };

  const sendWithText = async (textToSend) => {
    if (!textToSend.trim() || isLoading) return;

    if (showQuickTopics) setShowQuickTopics(false);

    const currentTime = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });

    const newUserMsg = { role: "user", content: textToSend, time: currentTime };
    const newMessages = [...messages, newUserMsg];

    setMessages(newMessages);
    setInput("");
    if (inputRef.current) inputRef.current.style.height = "auto";
    setIsLoading(true);

    // Simulate reading/typing delay
    setTimeout(() => {
      const lowerInput = textToSend.toLowerCase();
      let foundResponse = FALLBACK_RESPONSE;

      for (const item of KNOWLEDGE_BASE) {
        if (item.keywords.some(kw => lowerInput.includes(kw))) {
          foundResponse = item.response;
          break; 
        }
      }

      const replyTime = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
      setMessages([...newMessages, { role: "assistant", content: foundResponse, time: replyTime }]);
      setIsLoading(false);
    }, 800);
  };

  const sendMessage = () => {
    sendWithText(input);
  };

  return (
    <div className="chatbot-wrapper">
      {!isOpen && (
        <button className="chat-fab" onClick={() => setIsOpen(true)} aria-label="Open chat">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="chat-widget">
          {/* Header */}
          <div className="chat-header">
            <div className="header-avatar">🏡</div>
            <div className="header-text">
              <div className="header-name">Amarnath Infra Plot Advisor</div>
              <div className="header-sub">Residential Land Experts · Nagpur Region</div>
            </div>
            <div className="status-dot"></div>
            <button className="chat-header-close" onClick={() => setIsOpen(false)} aria-label="Close chat">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

        {/* Quick topic chips */}
        {showQuickTopics && (
          <div className="quick-topics">
            <div className="topic-chip" onClick={() => sendQuick("What plot sizes are available?")}>Plot Sizes</div>
            <div className="topic-chip" onClick={() => sendQuick("What are the price ranges?")}>Pricing</div>
            <div className="topic-chip" onClick={() => sendQuick("Where are your projects located?")}>Locations</div>
            <div className="topic-chip" onClick={() => sendQuick("Is the land RERA approved?")}>Legal & RERA</div>
            <div className="topic-chip" onClick={() => sendQuick("How do I book a plot?")}>How to Book</div>
            <div className="topic-chip" onClick={() => sendQuick("What amenities are included?")}>Amenities</div>
          </div>
        )}

        {/* Messages */}
        <div className="chat-messages-container">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.role === "user" ? "user" : "bot"}`}>
              <div className="msg-avatar">{m.role === "user" ? "You" : "🏡"}</div>
              <div>
                <div 
                  className="msg-bubble"
                  dangerouslySetInnerHTML={{ __html: m.content.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                />
                <div className="msg-time">{m.time || 'Just now'}</div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="chat-msg bot">
              <div className="msg-avatar">🏡</div>
              <div className="typing-bubble">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="chat-input-area">
          <div className="input-row">
            <textarea
              className="chat-input"
              ref={inputRef}
              placeholder="Ask about plots, pricing, location..."
              rows={1}
              value={input}
              onChange={handleInput}
              onKeyDown={handleKey}
            />
            <button
              className="send-btn"
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>

        <div className="chat-footer">
          Powered by <span>Amarnath Infra Systems</span> · Available 24 × 7
        </div>
      </div>
      )}
    </div>
  );
}