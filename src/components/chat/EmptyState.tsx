import { Bot } from 'lucide-react'

export function EmptyState() {
    const suggestions = [
        { title: 'Analyze data', desc: 'Process and visualize datasets' },
        { title: 'Write code', desc: 'Generate, debug, or refactor' },
        { title: 'Research topic', desc: 'Deep dive into any subject' },
        { title: 'Create content', desc: 'Draft documents and copy' },
    ]

    return (
        <div className="flex flex-col items-center justify-center h-full p-8 text-center animate-in fade-in zoom-in-95 duration-500">
            <div className="w-16 h-16 bg-black dark:!bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-black/10">
                <Bot className="w-8 h-8 text-white dark:text-zinc-100" />
            </div>
            <h1 className="font-serif text-4xl text-foreground font-normal tracking-tight mb-2">
                How can I help you today?
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-md">
                I can help with analysis, coding, research, and more.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 justify-center opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards" style={{ animationDelay: '0.2s' }}>
                {suggestions.map((s) => (
                    <button key={s.title} className="px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10 bg-white dark:!bg-zinc-900 text-xs text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-black/10 transition-colors cursor-pointer">
                        {s.title}
                    </button>
                ))}
            </div>
        </div>
    )
}
