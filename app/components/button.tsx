import { cn } from "@/lib/utils";
import React from "react"

export default function Button({
    children,
    variant = 'primary',
    ...props
}: {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button {...props} className={cn("p-3 text-white rounded-xl font-bold whitespace-nowrap hover:opacity-95 disabled:opacity-70",
            variant === 'primary' && 'bg-primary',
            variant === 'secondary' && 'bg-secondary',
            variant === 'ghost' && 'border-border-primary',
            props.className
        )}>
            {children}
        </button>
    )
}