"use client";

import MetamorphicLoader from '@/app/the-actual-components/metamorphic-loader/MetamorphicLoader';

export default function MetamorphicLoaderDemo() {
  return (
    <div className="p-10 w-full flex flex-wrap items-center justify-center gap-6 box-border overflow-hidden">
      <MetamorphicLoader size={260} />
      <MetamorphicLoader size={124} color="#156ef6" lighteningStep={16} />
      <MetamorphicLoader size={216} color="#6cc606" />
      <MetamorphicLoader size={124} color="#ffa300" lighteningStep={14} />
      <MetamorphicLoader size={300} color="#019a41" lighteningStep={50} />
    </div>
  );
}