import MetamorphicLoader from '@/app/the-actual-components/metamorphic-loader/MetamorphicLoader'

export default function MetamorphicLoaderPreview() {
  return (
    <div className="w-full h-screen bg-[#fff] flex items-center justify-center">
      {/* Outer wrapper with full screen and white background */}
      <div className="flex items-center justify-center">
        {/* Inner wrapper to isolate background and centering */}
        <MetamorphicLoader size={136} color="#00a7fa" lighteningStep={19} />
      </div>
    </div>
  )
}
