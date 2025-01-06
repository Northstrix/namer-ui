"use client"
import { NextPage } from "next";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <footer>
      <div className="mt-20 border-t py-8 h-full flex items-center text-center justify-center  bg-homecards">
        <div>
        <div className="footer">
        <span className={`footer-text animate__animated`}>
          Made by <a id="linkanimation" href="https://github.com/Northstrix" target="_blank" rel="noopener noreferrer">Maxim Bortnikov</a> using <a id="linkanimation" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a> and <a id="linkanimation" href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer">Perplexity</a>
        </span>
      </div>

      <style jsx>{`
        .text {
          font-weight: bold;
        }
        .split-parent {
          overflow: hidden;
          position: relative;
          z-index: 10;
        }
        .split-child {
          display: inline-block;
          transform: translateY(100%);
          opacity: 0;
          transition: transform 0.9s ease, opacity 0.9s ease;
        }
        .text-emerged .split-child {
          transform: translateY(0);
          opacity: 1;
        }
        .footer {

          z-index: 400;

          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--foreground);
          transition: background-color 3s ease;
        }
        .footer-text {
          font-size: 16px;
          letter-spacing: -.0035em;
          text-align: center; /* Center text within its container */
          flex-grow: 1; /* Allow text to grow and take available space */
        }
        #linkanimation {
          text-decoration: none;
          color: var(--foreground);
          position: relative;
        }
        #linkanimation::before {
          position: absolute;
          content: "";
          width: 100%;
          height: 1px;
          background-color: var(--footer-underscore-color);
          transform: scale(1,1);
          transition: background-color .5s ease-in-out;
          bottom: 0px;
        }
        #linkanimation:hover::before {
          animation: link ease 1s 1 300ms;
          transform-origin: right;
        }
        @keyframes link {
          50% { transform: scaleX(0); }
          50.1% { transform: translateX(-100%) scaleX(-0.01); }
          100% { transform: translateX(-100%) scaleX(-1); }
        }
      `}</style>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
