'use client'
import { useTheme } from '@/hooks/useTheme'
import { useState, useEffect, useRef } from 'react'
import { LuBot, LuBotOff } from 'react-icons/lu'

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content: 'Olá! Sou o assistente do Phillip. Como posso ajudar você hoje?'
    }
  ])
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const { isDarkTheme } = useTheme()

  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isOpen])

  async function handleSend() {
    if (!input.trim()) return

    const userMessage = input
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      })

      const data = await response.json()

      if (data.answer) {
        setMessages((prev) => [...prev, { role: 'bot', content: data.answer }])
      } else {
        throw new Error('No answer received')
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          content: 'Desculpe, tive um problema ao processar sua pergunta.'
        }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-2 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 h-[500px] bg-quaternary rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-tertiary transition-all animate-in slide-in-from-bottom-5">
          <div
            className={`${isDarkTheme ? 'bg-quaternary' : 'bg-tertiary'} p-4 text-white flex justify-between items-center`}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-semibold">Phillip AI</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded transition-colors"
            >
              ✕
            </button>
          </div>
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-black"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    m.role === 'user'
                      ? `${isDarkTheme ? 'bg-tertiary text-quaternary' : 'bg-tertiary'}`
                      : `${isDarkTheme ? 'bg-quaternary text-secondary' : 'bg-quaternary text-primary'}`
                  }`}
                >
                  <strong className="block text-xs opacity-75 mb-1">
                    {m.role === 'user' ? 'Você' : 'Phillip AI'}
                  </strong>
                  <div className="whitespace-pre-line">{m.content}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700">
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </span>
                </div>
              </div>
            )}
          </div>
          <div
            className={`p-4 bg-quaternary ${isDarkTheme ? 'border-t' : 'border-t border-primary'}  flex gap-2`}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pergunte sobre meus projetos..."
              className="flex-1 p-2 text-sm rounded-lg border bg-transparent focus:border-tertiary focus:ring-2 focus:ring-tertiary dark:text-white"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className={`${isDarkTheme ? 'bg-tertiary' : 'bg-secondary'} cursor-pointer disabled:bg-slate-400 text-white p-2 rounded-lg transition-colors`}
            >
              {isLoading ? '...' : '➤'}
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 ${isDarkTheme ? 'bg-secondary text-quaternary border-2 border-quaternary' : 'bg-secondary text-tertiary'} rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer`}
      >
        {isOpen ? (
          <LuBotOff className="text-2xl" />
        ) : (
          <LuBot className="text-2xl" />
        )}
      </button>
    </div>
  )
}
