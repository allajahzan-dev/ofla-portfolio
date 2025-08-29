import { cn } from "@/lib/utils";

// Interface for Props
interface Props {
    className?: string;
}

// Bullet point
export default function BulletPoint({ className }: Props) {
    return <span className={cn("text-xl text-zinc-600 sm:text-2xl", className)}>⊹</span>;
}
