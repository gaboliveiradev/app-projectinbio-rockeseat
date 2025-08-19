import { cn } from "@/lib/utils";

export default function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input {...props} className={cn(`
            w-full p-3 bg-[#0F0F10] text-white placeholder:text-[#827D7F] rounded-xl 
            border border-transparent hover:border-[#323234] hover:text-[#CDCBCC] active:border-[#97979B]
        `)} />
    )
}