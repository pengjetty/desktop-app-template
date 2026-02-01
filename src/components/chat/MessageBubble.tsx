import { User, Bot, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ToolCallDisplay, type ToolCall } from './ToolCallDisplay'

export interface Message {
    id: string
    role: 'user' | 'assistant' | 'system'
    content: string
    timestamp: number
    status?: 'pending' | 'streaming' | 'complete' | 'error'
    toolCalls?: ToolCall[]
}

export function MessageBubble({ message }: { message: Message }) {
    const isUser = message.role === 'user'

    return (
        <div className={cn('flex gap-4 w-full max-w-3xl mx-auto', isUser && 'flex-row-reverse')}>
            {/* Avatar */}
            {/* Avatar */}
            {isUser ? (
                <div className="w-8 h-8 rounded-full bg-black text-white dark:bg-zinc-200 dark:text-zinc-900 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                </div>
            ) : (
                <div className="w-8 h-8 rounded-2xl bg-black text-white dark:bg-zinc-200 dark:text-zinc-900 flex items-center justify-center shrink-0 shadow-lg shadow-black/10">
                    <Bot className="w-5 h-5" />
                </div>
            )}

            {/* Content */}
            <div className={cn(
                'flex-1 space-y-2 min-w-0',
                isUser && 'text-right'
            )}>
                <div className={cn(
                    'inline-block px-4 py-2 rounded-2xl text-left',
                    isUser
                        ? 'bg-primary text-primary-foreground rounded-tr-sm'
                        : 'bg-muted rounded-tl-sm text-foreground'
                )}>
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                </div>

                {/* Tool Calls */}
                {message.toolCalls?.map((tool) => (
                    <div key={tool.id} className={cn("flex", isUser ? "justify-end" : "justify-start")}>
                        <ToolCallDisplay toolCall={tool} />
                    </div>
                ))}

                {/* Streaming Indicator */}
                {message.status === 'streaming' && (
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                        <Loader2 className="w-3 h-3 animate-spin" />
                        <span>Generating...</span>
                    </div>
                )}
            </div>
        </div>
    )
}
