import { cn } from "@/lib/utils";

// Interface for Props
interface Props {
    text: string;
    breakAfter?: number;
    className?: string;
}

// Break Text
export default function BreakText({ text, breakAfter = 3, className }: Props) {
    const words = text.split(" ");
    return (
        <>
            {words.slice(0, breakAfter).join(" ")} <br className={cn(className)} />
            {words.slice(breakAfter).join(" ")}
        </>
    );
}
