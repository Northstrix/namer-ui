"use client";

interface MultiColoredTextProps {
  inscription: string;
  fontSize: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  quaternaryColor: string;
  quinaryColor: string;
  separatorRotation: string;
}

const MultiColoredText: React.FC<MultiColoredTextProps> = ({
  inscription,
  fontSize,
  primaryColor,
  secondaryColor,
  tertiaryColor,
  quaternaryColor,
  quinaryColor,
  separatorRotation,
}) => {
  return (
    <div>
      <div className="w-full">
        <div className="container">
          <h1
            className={`text relative inline-block cursor-pointer leading-[1] m-0 font-bold text-center w-ful`}
            style={{
              fontSize: `${fontSize}`,
              color: 'var(--foreground)',
              letterSpacing: '-.01em',
            }}
          >
            <div className="split-parent">
              <div className="split-child">
                <div className="multi-color-text">{inscription}</div>
              </div>
            </div>
          </h1>
        </div>
      </div>
      
      <style jsx>{`
        .multi-color-text {
          font-weight: 700;
          background: linear-gradient(${separatorRotation}, 
            ${primaryColor} 19%, 
            transparent 19%, transparent 20%, 
            ${secondaryColor} 20%, ${secondaryColor} 39%,
            transparent 39%, transparent 40%, 
            ${tertiaryColor} 40%, ${tertiaryColor} 59%,
            transparent 59%, transparent 60%, 
            ${quaternaryColor} 60%, ${quaternaryColor} 79%,
            transparent 79%, transparent 80%, 
            ${quinaryColor} 80%);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default MultiColoredText;