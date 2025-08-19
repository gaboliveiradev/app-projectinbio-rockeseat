import { cn } from "@/lib/utils";

export default function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            {...props}
            className={cn(`
                w-full p-3 bg-[#0F0F10] text-white placeholder:text-[#827D7F] rounded-xl 
                border border-transparent hover:border-[#323234] hover:text-[#CDCBCC] active:border-[#97979B]`,
                props.className
            )}
        />
    )
}