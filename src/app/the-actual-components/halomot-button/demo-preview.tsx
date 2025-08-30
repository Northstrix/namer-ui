"use client";

import HalomotButton from "./HalomotButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function HalomotButtonPreview() {

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <HalomotButton
          inscription="GitHub"
          icon={<FontAwesomeIcon icon={faGithub} size="lg" />}
          gradient="linear-gradient(135deg, #a123f4, #603dec)"
          borderWidth="3px"
          outerBorderRadius="8px"
          innerBorderRadius="5.4px"
          href="https://github.com/Northstrix"
          textColor="#16151a"
          hoverTextColor="#fff"
          padding="1rem 2.4rem"
          backgroundColor="#eee"
        />
      </div>
    </div>
  );
}
