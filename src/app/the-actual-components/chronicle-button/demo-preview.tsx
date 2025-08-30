import ChronicleButton from '@/app/the-actual-components/chronicle-button/ChronicleButton'

export default function ChronicleButtonPreview() {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-[#fff]">
            <ChronicleButton
                text="Hover Me"
                customBackground="hsl(var(--background))"
                customForeground="hsl(var(--foreground))" 
                hoverColor="#00a0d8"
                hoverForeground="#fff"
                fontSize="1.1em"
                fontFamily="Verdana, Geneva, sans-serif"
                padding="1.3em 2em"
            />
        </div>
    )
}
