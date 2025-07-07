// Interface for Props
interface Props {
    text: string;
    color?: string;
}

// Navbar Items
export default function NavbarItems({ text, color }: Props) {
    return (
        <div className="group flex flex-col gap-0.5 items-center cursor-pointer p-0">
            {/* Text */}
            <p
                className={`text-sm font-medium ${color ? color : "text-zinc-100"
                    } group-hover:text-white transition-colors duration-100`}
            >
                {text}
            </p>

            {/* Animated underline */}
            <div className="w-full h-[2px] relative overflow-hidden rounded-full bg-transparent">
                <span className="block h-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
        </div>
    );
}
