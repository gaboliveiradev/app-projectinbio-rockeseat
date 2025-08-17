import { cn } from "@/lib/utils";

export default function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input {...props} className={cn(`
            w-full p-3 bg-secondary text-white placeholder:text-stone-200 rounded-xl 
            border border-transparent hover:border-secondary hover:text-stone-200 active:border-primary
        `)} />
    )
}