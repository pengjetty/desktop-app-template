import { ArrowUp, Paperclip, Mic } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from '@/components/ui/tooltip'

interface ChatInputProps {
    value: string
    onChange: (value: string) => void
    onSubmit: () => void
    isProcessing: boolean
}

export function ChatInput({ value, onChange, onSubmit, isProcessing }: ChatInputProps) {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            if (value.trim() && !isProcessing) {
                onSubmit()
            }
        }
    }

    return (
        <TooltipProvider>
            <div className="w-full max-w-2xl mx-auto relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rounded-[24px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-full bg-white dark:!bg-zinc-900 rounded-[22px] border border-[var(--color-app-border)] dark:border-zinc-800 shadow-[0_12px_32px_rgba(0,0,0,0.02)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)] p-4 transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
                    <textarea
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask anything..."
                        disabled={isProcessing}
                        className="w-full bg-transparent border-0 text-base placeholder:text-muted-foreground focus:ring-0 focus:outline-none resize-none min-h-[44px] max-h-[200px] p-1 text-foreground"
                        rows={1}
                        style={{ fieldSizing: "content" } as any} // Modern CSS usage if supported, else resizing logic needed (omitted for brevity)
                    />

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/40">
                        {/* Left: Attachments */}
                        <div className="flex gap-1">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                                        <Paperclip className="w-4 h-4" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Attach file</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                                        <Mic className="w-4 h-4" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Voice input</TooltipContent>
                            </Tooltip>
                        </div>

                        {/* Right: Submit */}
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    size="icon"
                                    onClick={onSubmit}
                                    disabled={!value.trim() || isProcessing}
                                    className={`rounded-full transition-all h-8 w-8 ${value.trim() && !isProcessing
                                        ? 'bg-primary hover:bg-primary/90'
                                        : 'bg-muted text-muted-foreground'
                                        }`}
                                >
                                    <ArrowUp className="w-4 h-4" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Send message</TooltipContent>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </TooltipProvider>
    )
}
