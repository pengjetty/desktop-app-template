import { ChevronDown, Bell } from 'lucide-react'
import { ModeToggle } from '@/components/ui/mode-toggle'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function Header() {
    // const [model, setModel] = useState('default')

    return (
        <header className="h-14 flex items-center justify-between px-6 border-b border-border bg-white dark:bg-zinc-950 sticky top-0 z-10 transition-colors">
            {/* Left: Model Selector */}
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-colors cursor-pointer group">
                        <span className="font-medium text-sm text-foreground">Agent 1.0 Lite</span>
                        <ChevronDown size={14} className="text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuItem>
                        Default Model
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Fast Model
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Advanced Model
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Right: Status & Profile */}
            <div className="flex items-center gap-2">
                <ModeToggle />
                <button className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors w-9 h-9 flex items-center justify-center">
                    <Bell size={18} />
                </button>
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-200 to-orange-100 border border-black/5 dark:border-white/10"></div>
            </div>
        </header>
    )
}
