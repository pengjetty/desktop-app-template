import { X, Maximize2, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PreviewPaneProps {
    content?: {
        type: 'image' | 'code' | 'document'
        data: string
        title?: string
    }
    onClose: () => void
}

export function PreviewPane({ content, onClose }: PreviewPaneProps) {
    if (!content) return null

    return (
        <aside className="w-[40%] border-l border-border flex flex-col bg-muted/30">
            {/* Header */}
            <div className="h-14 border-b border-border px-4 flex items-center justify-between shrink-0">
                <span className="text-sm font-medium truncate">
                    {content.title || 'Preview'}
                </span>
                <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Maximize2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onClose}>
                        <X className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center">
                {content.type === 'image' && (
                    <img src={content.data} alt="" className="max-w-full rounded-lg shadow-sm" />
                )}
                {content.type === 'code' && (
                    <pre className="text-xs font-mono bg-card p-4 rounded-lg overflow-x-auto border border-border w-full">
                        {content.data}
                    </pre>
                )}
                {content.type === 'document' && (
                    <div className="text-sm bg-card p-4 rounded-lg border border-border w-full whitespace-pre-wrap">
                        {content.data}
                    </div>
                )}
            </div>
        </aside>
    )
}
