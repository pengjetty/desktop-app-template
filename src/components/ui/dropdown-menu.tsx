import * as React from "react"
import { cn } from "@/lib/utils"

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = React.useState(false)

    return (
        <div className="relative inline-block text-left" onMouseLeave={() => setOpen(false)}>
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
                "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                align === "start" ? "left-0" : align === "end" ? "right-0" : "left-1/2 -translate-x-1/2",
                "mt-2 top-full",
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
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
