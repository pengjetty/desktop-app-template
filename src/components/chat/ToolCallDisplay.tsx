import { ChevronDown, ChevronRight, CheckCircle2, XCircle, Loader2, Terminal } from 'lucide-react'
import { useState } from 'react'

export interface ToolCall {
    id: string
    name: string
    status: 'pending' | 'running' | 'complete' | 'error'
    input?: Record<string, unknown>
    output?: string
    error?: string
}

export function ToolCallDisplay({ toolCall }: { toolCall: ToolCall }) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className="border border-border rounded-lg overflow-hidden bg-card w-full max-w-xl">
            {/* Header */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center gap-3 px-3 py-2 hover:bg-muted/50 transition-colors"
            >
                <StatusIcon status={toolCall.status} />
                <Terminal className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-mono flex-1 text-left truncate text-foreground">
                    {toolCall.name}
                </span>
                {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                ) : (
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                )}
            </button>

            {/* Expandable Content */}
            {isExpanded && (
                <div className="border-t border-border p-3 space-y-2 text-xs">
                    {toolCall.input && (
                        <div>
                            <span className="text-muted-foreground font-semibold">Input:</span>
                            <pre className="mt-1 p-2 bg-muted rounded text-xs overflow-x-auto text-foreground">
                                {JSON.stringify(toolCall.input, null, 2)}
                            </pre>
                        </div>
                    )}
                    {toolCall.output && (
                        <div>
                            <span className="text-muted-foreground font-semibold">Output:</span>
                            <pre className="mt-1 p-2 bg-muted rounded text-xs overflow-x-auto whitespace-pre-wrap text-foreground">
                                {toolCall.output}
                            </pre>
                        </div>
                    )}
                    {toolCall.error && (
                        <div className="text-destructive">
                            <span className="font-semibold">Error:</span> {toolCall.error}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

function StatusIcon({ status }: { status: ToolCall['status'] }) {
    switch (status) {
        case 'complete':
            return <CheckCircle2 className="w-4 h-4 text-emerald-500" />
        case 'error':
            return <XCircle className="w-4 h-4 text-destructive" />
        case 'running':
            return <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />
        default:
            return <div className="w-4 h-4 rounded-full border-2 border-muted-foreground" />
    }
}
