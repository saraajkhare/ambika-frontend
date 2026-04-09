import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! 👋 Ask me about plots, pricing or projects." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    const newMessages = [...messages, userMsg];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://ambika-housing.onrender.com/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          history: newMessages.map((m) => ({
            role: m.role,
            content: m.text,
          })),
        }),
      });

      const data = await res.json();

      setMessages([
        ...newMessages,
        { role: "assistant", text: data.reply },
      ]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: "assistant", text: "Error connecting 😢" },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-red-600 text-white w-14 h-14 rounded-full shadow-lg text-xl z-50"
      >
        💬
      </button>

      {/* CHAT BOX */}
      {open && (
        <div className="fixed bottom-20 right-5 w-80 bg-white shadow-2xl rounded-xl overflow-hidden z-50">

          {/* HEADER */}
          <div className="bg-red-600 text-white p-3 font-semibold">
            AmarInfratech Assistant
          </div>

          {/* MESSAGES */}
          <div className="h-64 overflow-y-auto text-sm p-3 space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <span
                  className={`px-3 py-2 rounded-lg max-w-[75%] ${
                    m.role === "user"
                      ? "bg-red-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {m.text}
                </span>
              </div>
            ))}

            {loading && <div className="text-xs text-gray-400">Typing...</div>}
          </div>

          {/* INPUT */}
          <div className="flex border-t">
            <input
              className="flex-1 p-2 outline-none text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about plots..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-red-600 text-white px-4"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}