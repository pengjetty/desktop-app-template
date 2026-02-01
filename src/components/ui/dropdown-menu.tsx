import * as React from "react"
import { cn } from "@/lib/utils"

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = React.useState(false)
    const timeoutRef = React.useRef<NodeJS.Timeout>(null)

    const handleEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        setOpen(true)
    }

    const handleLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOpen(false)
        }, 150) // 150ms "hover tunnel" grace period
    }

    return (
        <div
            className="relative inline-block text-left"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    // @ts-ignore
                    return React.cloneElement(child, { open, setOpen })
                }
                return child
            })}
        </div>
    )
}

const DropdownMenuTrigger = ({ children, open, setOpen }: any) => {
    return (
        <div onClick={() => setOpen(!open)} className="cursor-pointer">
            {children}
        </div>
    )
}

const DropdownMenuContent = ({ align = "center", className, children, open }: any) => {
    if (!open) return null

    return (
        <div
            className={cn(
                "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in zoom-in-95 duration-200",
                align === "start" ? "left-0" : align === "end" ? "right-0" : "left-1/2 -translate-x-1/2",
                "mt-2 top-full",
                // Safety bridge pseudo-element
                "before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:content-['']",
                className
            )}
        >
            {children}
        </div>
    )
}

const DropdownMenuItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        inset?: boolean
    }
>(({ className, inset, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            inset && "pl-8",
            className
        )}
        {...props}
    />
))
DropdownMenuItem.displayName = "DropdownMenuItem"

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
}
