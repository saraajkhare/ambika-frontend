import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi 👋 Ask me about plots, pricing or projects." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "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"; // ⚠️ paste here

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify({
          model: "claude-3-haiku-20240307",
          max_tokens: 300,
          system: `
You are a real estate assistant for AmarInfratech.
Talk about Chikana, Dhamana, Tumdi plots.
Be short, friendly, and convincing.
Always try to convert user into a lead.
          `,
          messages: newMessages
        })
      });

      const data = await res.json();

      const reply =
        data?.content?.[0]?.text || "Sorry, something went wrong.";

      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Error connecting 😢" }
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-white shadow-xl rounded-xl p-3 z-50">
      <div className="font-bold mb-2">Chat with us 🏡</div>

      <div className="h-64 overflow-y-auto text-sm mb-2">
        {messages.map((m, i) => (
          <div key={i} className={`mb-2 ${m.role === "user" ? "text-right" : ""}`}>
            <span className="bg-gray-200 px-2 py-1 rounded inline-block">
              {m.content}
            </span>
          </div>
        ))}

        {loading && <div>Typing...</div>}
      </div>

      <div className="flex gap-2">
        <input
          className="border p-2 flex-1 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button
          onClick={sendMessage}
          className="bg-red-500 text-white px-3 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}