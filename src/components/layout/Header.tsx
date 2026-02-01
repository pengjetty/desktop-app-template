import { ChevronDown, Bell } from 'lucide-react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function Header() {
    // const [model, setModel] = useState('default')

    return (
        <header className="h-14 flex items-center justify-between px-6 border-b border-[var(--color-app-border)] bg-white sticky top-0 z-10">
            {/* Left: Model Selector */}
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-zinc-50 border border-transparent hover:border-zinc-200 transition-colors cursor-pointer group">
                        <span className="font-medium text-sm text-[var(--color-app-text)]">Agent 1.0 Lite</span>
                        <ChevronDown size={14} className="text-zinc-400 group-hover:text-zinc-600 transition-colors" />
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
            <div className="flex items-center gap-4">
                <button className="text-zinc-400 hover:text-zinc-600 transition-colors">
                    <Bell size={18} />
                </button>
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-200 to-orange-100 border border-black/5"></div>
            </div>
        </header>
    )
}
