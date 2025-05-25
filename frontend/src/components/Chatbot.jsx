import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Xin chào! Tôi có thể giúp gì cho bạn?" }
  ]);
  const [userInput, setUserInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const updatedMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(updatedMessages);
    setUserInput("");
    setLoading(true);

    try {
      // Gọi backend của bạn, KHÔNG dùng key OpenAI ở frontend!
      const response = await axios.post(
        "http://localhost:4000/api/chat",
        { message: userInput }
      );
      const reply = response.data.reply || "Xin lỗi, tôi chưa hiểu ý bạn.";
      setMessages([...updatedMessages, { sender: "bot", text: reply }]);
    } catch (err) {
      setMessages([
        ...updatedMessages,
        { sender: "bot", text: "Có lỗi xảy ra, vui lòng thử lại sau." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Nút mở chat */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center text-2xl"
          title="Mở Chatbot"
        >
          💬
        </button>
      )}

      {/* Hộp chat */}
{isOpen && (
  <div className="w-80 max-w-[95vw] bg-white rounded-xl shadow-2xl flex flex-col animate-fade-in">
    {/* Header */}
    <div className="flex justify-between items-center px-4 py-2 bg-blue-600 text-white rounded-t-xl">
      <span className="font-semibold">Chatbot</span>
      <button
        onClick={() => setIsOpen(false)}
        className="text-white hover:text-gray-200 text-xl font-bold"
        title="Đóng"
      >
        ×
      </button>
    </div>

    {/* Nội dung chat */}
    <div
      className="flex-1 p-3 overflow-y-auto space-y-2 text-sm bg-gray-50"
      style={{ maxHeight: "350px", minHeight: "200px" }} // Giới hạn chiều cao
    >
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`px-3 py-2 rounded-2xl max-w-[80%] break-words ${
              msg.sender === "user"
                ? "bg-blue-500 text-white rounded-br-none"
                : "bg-gray-200 text-gray-900 rounded-bl-none"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
      {loading && (
        <div className="text-gray-400 italic text-xs">Đang trả lời...</div>
      )}
    </div>

    {/* Nhập tin nhắn */}
    <div className="flex border-t p-2 bg-white gap-2">
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Nhập tin nhắn..."
        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        disabled={loading}
      />
      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition disabled:opacity-50"
        disabled={loading}
      >
        Gửi
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default Chatbot;