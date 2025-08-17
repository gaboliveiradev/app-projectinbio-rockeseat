import { cn } from "@/lib/utils";

export default function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            {...props}
            className={cn(`
                w-full p-3 bg-secondary text-white placeholder:text-stone-200 rounded-xl 
                border border-transparent hover:border-secondary hover:text-stone-200 active:border-border-primary`,
                props.className
            )}
        />
    )
}