import { useState, useRef, useEffect } from "react"
import { EmptyState } from "./EmptyState"
import { ChatInput } from "./ChatInput"
import { MessageBubble, type Message } from "./MessageBubble"

export function ChatView() {
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState('')
    const [isProcessing, setIsProcessing] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    // Auto-scroll to bottom directly, without smooth behavior for instant feedback during rapid updates
    // In a real app, you might want more complex scroll logic
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])

    const handleSubmit = () => {
        if (!input.trim() || isProcessing) return

        // 1. Add User Message
        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input.trim(),
            timestamp: Date.now(),
            status: 'complete'
        }

        // 2. Add Placeholder Assistant Message
        const assistantPlaceholder: Message = {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: "I'm thinking...",
            timestamp: Date.now(),
            status: 'streaming'
        }

        setMessages(prev => [...prev, userMsg, assistantPlaceholder])
        setInput('')
        setIsProcessing(true)

        // Mock Response Delay
        setTimeout(() => {
            setMessages(prev => prev.map(msg =>
                msg.id === assistantPlaceholder.id
                    ? {
                        ...msg,
                        content: `You said: "${userMsg.content}". This is a mock response demonstrating the UI skeleton.`,
                        status: 'complete',
                        toolCalls: userMsg.content.includes("code") ? [
                            {
                                id: 'tool-1',
                                name: 'generate_code',
                                status: 'complete',
                                input: { language: 'python', prompt: 'fibonacci' },
                                output: 'def fib(n):\n  return n if n <= 1 else fib(n-1) + fib(n-2)'
                            }
                        ] : undefined
                    }
                    : msg
            ))
            setIsProcessing(false)
        }, 1500)
    }

    return (
        <div className="flex flex-col h-full">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-8 space-y-8" ref={scrollRef}>
                {messages.length === 0 ? (
                    <EmptyState />
                ) : (
                    messages.map((msg) => (
                        <MessageBubble key={msg.id} message={msg} />
                    ))
                )}
            </div>

            {/* Input Area */}
            <div className="p-4 pb-8">
                <ChatInput
                    value={input}
                    onChange={setInput}
                    onSubmit={handleSubmit}
                    isProcessing={isProcessing}
                />
                <div className="text-center mt-2">
                    <span className="text-[10px] text-muted-foreground opacity-60">
                        AI can make mistakes. Please review responses.
                    </span>
                </div>
            </div>
        </div>
    )
}
