"use client"
import { useState, useRef, useEffect } from "react"
import { MessageSquare, X, Send, Bot } from "lucide-react"

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{role: 'ai' | 'user', content: string}[]>([
    { role: 'ai', content: "Hello! I'm the Noetica-Tech AI Assistant. How can I help you today? Ask me about our courses, admissions, or why you should learn with us!" }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg = input
    setInput("")
    setMessages(prev => [...prev, { role: 'user', content: userMsg }])
    setIsLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg })
      })
      const data = await res.json()
      
      setMessages(prev => [...prev, { role: 'ai', content: data.reply }])
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', content: "Sorry, I am having trouble connecting to the server. Please check your connection." }])
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg hover:scale-110 bg-neon-blue text-black z-[100] flex items-center justify-center animate-bounce transition-transform"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 w-[350px] sm:w-[380px] h-[500px] bg-card border border-slate-200 rounded-2xl shadow-2xl z-[100] flex flex-col overflow-hidden">
      <div className="bg-white border-b border-slate-200 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Bot className="w-5 h-5 text-neon-blue" />
          <span className="font-bold text-slate-900">Noetica AI Assistant</span>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-slate-900 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex max-w-[85%] ${m.role === 'user' ? 'ml-auto justify-end' : 'mr-auto justify-start'}`}>
            <div className={`p-3 rounded-2xl text-sm ${
              m.role === 'user' 
                ? 'bg-primary text-black rounded-br-sm' 
                : 'bg-slate-100 text-slate-800 rounded-bl-sm'
            }`}>
              {m.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex max-w-[85%] mr-auto justify-start">
            <div className="p-3 rounded-2xl bg-slate-100 text-slate-800 rounded-bl-sm flex space-x-1 items-center h-10 w-16 justify-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-slate-200 bg-black/50">
        <form onSubmit={handleSend} className="flex space-x-2">
          <input
            type="text"
            className="flex-1 bg-white border border-slate-200 rounded-full px-4 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-neon-blue"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit" disabled={!input.trim() || isLoading} className="w-10 h-10 shrink-0 rounded-full bg-neon-blue text-black flex items-center justify-center hover:bg-white transition-colors disabled:opacity-50">
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  )
}
