import { MessageSquare, History, Settings, HelpCircle, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from '@/components/ui/tooltip'

interface IconSidebarProps {
    activePage: string
    onNavigate: (page: string) => void
}

export function IconSidebar({ activePage, onNavigate }: IconSidebarProps) {
    return (
        <TooltipProvider>
            <aside className="w-[52px] bg-[#ebebeb] border-r border-black/5 flex flex-col transition-all duration-300">
                {/* Top Section */}
                <div className="flex-1 flex flex-col items-center py-3 gap-1">
                    <NavIcon
                        icon={MessageSquare}
                        label="New Chat"
                        isActive={activePage === 'chat'}
                        onClick={() => onNavigate('chat')}
                    />
                    <NavIcon
                        icon={History}
                        label="History"
                        isActive={activePage === 'history'}
                        onClick={() => onNavigate('history')}
                    />
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col items-center py-3 gap-1 border-t border-border">
                    <NavIcon
                        icon={Settings}
                        label="Settings"
                        isActive={activePage === 'settings'}
                        onClick={() => onNavigate('settings')}
                    />
                    <NavIcon icon={HelpCircle} label="Help" onClick={() => { }} />
                    <NavIcon icon={User} label="Profile" onClick={() => { }} />
                </div>
            </aside>
        </TooltipProvider>
    )
}

function NavIcon({
    icon: Icon,
    label,
    isActive,
    onClick
}: {
    icon: React.ElementType
    label: string
    isActive?: boolean
    onClick: () => void
}) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <button
                    onClick={onClick}
                    className={cn(
                        'w-9 h-9 flex items-center justify-center rounded-lg transition-colors',
                        isActive
                            ? 'bg-primary/10 text-primary'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    )}
                >
                    <Icon className="w-5 h-5" />
                </button>
            </TooltipTrigger>
            <TooltipContent side="right">{label}</TooltipContent>
        </Tooltip>
    )
}
