import RefinedChronicleButton from "@/app/the-actual-components/refined-chronicle-button/RefinedChronicleButton";
import { LampDesk } from "lucide-react";

export default function RefinedChronicleButtonPreview() {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-[#fff]">
            <RefinedChronicleButton
                backgroundColor="#0a0a0a"
                textColor="#fff"
                hoverTextColor="#0a0a0a"
                borderColor="#999"
                borderVisible
                hoverBorderVisible
                hoverBorderColor="#00a7fa"
                hoverBackgroundColor="#00a7fa"
                borderWidth={1}
                borderRadius={8}
            >
                <LampDesk /> RFND
            </RefinedChronicleButton>
        </div>
    )
}
