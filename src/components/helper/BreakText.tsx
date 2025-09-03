// Interface for Props
interface Props {
    text: string;
    breakAfter?: number;
}

// Break Text
export default function BreakText({ text, breakAfter = 3 }: Props) {
    const words = text.split(" ");
    return (
        <>
            {words.slice(0, breakAfter).join(" ")} <br />
            {words.slice(breakAfter).join(" ")}
        </>
    );
}
