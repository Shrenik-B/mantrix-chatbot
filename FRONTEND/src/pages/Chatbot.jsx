import { useState } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm here to listen and support you. How are you feeling today?",
      sender: "bot",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    "I'm feeling anxious",
    "I need someone to talk to",
    "I'm having a difficult day",
    "I'm feeling better today"
  ];

  const handleSendMessage = (messageText = inputMessage) => {
    if (!messageText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: messageText,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: "Thank you for sharing. I'm here to support you. Remember, it's completely normal to have these feelings, and you're taking an important step by reaching out.",
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[85vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-5 flex items-center gap-4 shadow-lg">
          <div className="relative">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
              🤖
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1">
            <h2 className="text-white font-bold text-xl">MindSpace AI Companion</h2>
            <p className="text-blue-100 text-sm">Always here to listen • Available 24/7</p>
          </div>
        </div>

        
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white to-blue-50/30">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
            >
              <div className={`flex gap-3 max-w-[70%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
                
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0 ${
                  message.sender === "bot" 
                    ? "bg-gradient-to-br from-blue-500 to-purple-500" 
                    : "bg-gradient-to-br from-green-500 to-teal-500"
                }`}>
                  {message.sender === "bot" ? "🤖" : "👤"}
                </div>

                
                <div>
                  <div className={`rounded-2xl px-5 py-3 shadow-md ${
                    message.sender === "bot"
                      ? "bg-white border border-blue-100"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  }`}>
                    <p className={`text-base leading-relaxed ${
                      message.sender === "bot" ? "text-gray-800" : "text-white"
                    }`}>
                      {message.text}
                    </p>
                  </div>
                  <p className={`text-xs text-gray-500 mt-1 px-2 ${
                    message.sender === "user" ? "text-right" : "text-left"
                  }`}>
                    {message.time}
                  </p>
                </div>
              </div>
            </div>
          ))}

          
          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="flex gap-3 max-w-[70%]">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xl">
                  🤖
                </div>
                <div className="bg-white border border-blue-100 rounded-2xl px-5 py-3 shadow-md">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(reply)}
                className="px-4 py-2 bg-white border border-blue-200 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 whitespace-nowrap shadow-sm"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>

        
        <div className="px-6 py-4 bg-white border-t border-gray-200">
          <div className="flex gap-3 items-end">
            <div className="flex-1 relative">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Share your thoughts... (Press Enter to send)"
                className="w-full px-5 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-400 resize-none transition-colors duration-200 max-h-32"
                rows="1"
              />
            </div>
            
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Send</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>

          
          <p className="text-xs text-gray-500 mt-3 text-center">
            💙 This is an AI companion. For emergencies, please contact a mental health professional or crisis helpline.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
