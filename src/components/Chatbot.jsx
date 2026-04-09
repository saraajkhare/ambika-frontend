import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

const COMPANY_CONTEXT = `
You are a friendly and knowledgeable Plot Advisor for Amarnath Infra Systems Pvt Ltd, a residential land development company based in the Nagpur region, Maharashtra, India.

COMPANY OVERVIEW:
- Company: Amarnath Infra Systems Pvt Ltd, established 2023
- Focus: Residential plotted land developments
- Tagline: "Own the Land. Own the Future."
- Philosophy: Transparent dealings, customer-first approach, strategic locations

YOUR PROJECTS:

Project 1 — Tumadi Layout, Tumadi Village (near Ring Road), Nagpur
- Total area: 5 Acres
- Status: Available — New Launch
- Price range: ₹1,000 to ₹1,100 per sq ft

LOCATION DETAILS:
- Village (Mauza): Tumadi (तुमडी)
- Patavari Halka No.: 74
- Gram Panchayat: Tumadi (गट–ग्रामपंचायत तुमडी)
- Taluka: Nagpur (Rural) — नागपूर (ग्रामीण)
- District: Nagpur — नागपूर
- Land type: Agricultural / Shetkari land within Nagpur district limits (हद्दीमधील शेतजमीन)
- Location advantage: Near the Nagpur Ring Road — excellent connectivity, fast-appreciating zone on the outskirts of Nagpur city
- Google Maps: https://maps.app.goo.gl/V8rvoYkBnGb7Lu8R6?g_st=ipc

COMPLETE PLOT DIMENSION TABLE (Tumadi Layout):

Plot 6     — Trapezoid shape | 3,741 sq ft (347.51 sq mt) | ₹37.41L – ₹41.15L
Plots 7–10 — 10.0 x 16.5 m  | 1,776 sq ft (165 sq mt) each | ₹17.76L – ₹19.54L each
Plot 11    — 15.5 x 10.5 m  | 1,752 sq ft (162.75 sq mt) | ₹17.52L – ₹19.27L
Plots 12–23 — 15.5 x 7.25 m | 1,210 sq ft (112.38 sq mt) each | ₹12.10L – ₹13.31L each
Plot 24    — 15.5 x 9.083 m | 1,515 sq ft (140.79 sq mt) | ₹15.15L – ₹16.67L
Plot 25    — 15.5 x 9.083 m | 1,515 sq ft (140.79 sq mt) | ₹15.15L – ₹16.67L
Plots 26–37 — 15.5 x 7.25 m | 1,210 sq ft (112.38 sq mt) each | ₹12.10L – ₹13.31L each
Plot 38    — 15.5 x 10.5 m  | 1,752 sq ft (162.75 sq mt) | ₹17.52L – ₹19.27L
Plot 39    — 15.0 x 10.5 m  | 1,695 sq ft (157.5 sq mt) | ₹16.95L – ₹18.65L
Plots 40–49 — 15.0 x 8.7 m  | 1,405 sq ft (130.5 sq mt) each | ₹14.05L – ₹15.45L each
Plot 50    — 15.0 x 9.083 m | 1,467 sq ft (136.25 sq mt) | ₹14.67L – ₹16.13L
Plot 51    — Trapezoid shape | 3,898 sq ft (362.15 sq mt) | ₹38.98L – ₹42.88L
Plot 52    — 20.772 x 17.4 m | 3,890 sq ft (361.43 sq mt) | ₹38.90L – ₹42.79L
Plot 53    — 20.966 x 17.4 m | 3,927 sq ft (364.81 sq mt) | ₹39.27L – ₹43.20L
Plot 54    — 21.604 x 17.4 m | 4,046 sq ft (375.91 sq mt) | ₹40.46L – ₹44.51L
Plot 55    — 22.243 x 17.4 m | 4,166 sq ft (387.03 sq mt) | ₹41.66L – ₹45.83L
Plot 56    — 22.947 x 19.2 m | 4,742 sq ft (440.58 sq mt) | ₹47.42L – ₹52.17L

SUMMARY BY SIZE CATEGORY:
- Compact plots (~1,210 sq ft): Plots 12–23 and 26–37 — ideal for starter home or investment
- Mid-size plots (~1,400–1,780 sq ft): Plots 7–11, 24, 25, 38–50 — great for independent bungalow
- Large / premium plots (~3,740–4,742 sq ft): Plots 6, 51–56 — villa, duplex, or high-value investment
- Biggest plot: Plot 56 at 4,742 sq ft — most premium in the layout

LEGAL & APPROVALS:
- Clear title land, verified documentation
- NA (Non-Agricultural) conversion — confirm latest status with team
- RERA registration — confirm latest status directly with team

INFRASTRUCTURE:
- Internal roads within the layout
- Plot boundary demarcation with stones
- Drainage provisions
- Electricity access at plot boundary

BOOKING PROCESS:
1. Site visit arranged within 24–48 hours on request
2. Choose your preferred plot number and size
3. Pay booking amount (confirm exact amount with team)
4. Agreement to Sale executed
5. Registration at Sub-Registrar office
6. Documents required: Aadhaar card, PAN card, passport photo, address proof

PAYMENT OPTIONS:
- Outright / full payment purchase
- Bank home loans applicable (buyer arranges with their bank)
- Flexible payment plans may be available — check with team

CONTACT:
- Phone / WhatsApp: +91 91376 99685
- Email: kpvaishali@gmail.com
- Site visits: By appointment — call or WhatsApp to schedule

PERSONALITY GUIDELINES:
- Be warm, professional, and helpful — like a trusted advisor, not a pushy salesperson
- Speak in simple, clear English; you may use a Hindi or Marathi word or phrase if it feels natural
- Always offer to arrange a site visit when a buyer shows interest
- If asked about a specific plot number, give the exact dimensions and price range from the table above
- If unsure about something (e.g. exact RERA number, current availability of a specific plot), say so honestly and ask them to contact the team
- Keep answers concise — 2 to 4 short paragraphs maximum
- Never fabricate information — only share what is listed above
- Always end with a clear next step or offer (e.g. "Would you like to schedule a site visit?")
- For contact, always share: Phone/WhatsApp +91 91376 99685 or email kpvaishali@gmail.com
`;

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

    try {
      // Filter out our custom 'time' property and the first dummy welcome message before sending to API 
      const apiMessages = newMessages
        .filter((m, i) => !(i === 0 && m.role === "assistant"))
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify({
          model: "claude-3-5-haiku-20241022",
          max_tokens: 600,
          system: COMPANY_CONTEXT,
          messages: apiMessages
        })
      });

      const data = await res.json();
      const replyTime = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });

      if (!res.ok) {
        console.error("API Error:", data.error);
        const errorMsg = data.error?.message || "Sorry, something went wrong.";
        setMessages([...newMessages, { role: "assistant", content: errorMsg, time: replyTime }]);
      } else {
        const reply = data?.content?.[0]?.text || "Sorry, I couldn't process that. Please try again.";
        setMessages([...newMessages, { role: "assistant", content: reply, time: replyTime }]);
      }
    } catch (err) {
      console.error(err);
      const replyTime = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
      setMessages([...newMessages, { role: "assistant", content: "Error connecting 😢", time: replyTime }]);
    }

    setIsLoading(false);
  };

  const sendMessage = () => {
    sendWithText(input);
  };

  return (
    <div className="chatbot-wrapper">
      <div className="chat-widget">
        {/* Header */}
        <div className="chat-header">
          <div className="header-avatar">🏡</div>
          <div className="header-text">
            <div className="header-name">Amarnath Infra Plot Advisor</div>
            <div className="header-sub">Residential Land Experts · Nagpur Region</div>
          </div>
          <div className="status-dot"></div>
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
          Powered by <span>Claude AI · Anthropic</span> · Available 24 × 7
        </div>
      </div>
    </div>
  );
}