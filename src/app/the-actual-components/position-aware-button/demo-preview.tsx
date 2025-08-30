import PositionAwareButton from '@/app/the-actual-components/position-aware-button/PositionAwareButton';

export default function ChronicleButtonPreview() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <PositionAwareButton
        fontWeight="700"
        fontSize="1.4rem"
      >
        Hover Me
      </PositionAwareButton>
    </div>
  );
}
