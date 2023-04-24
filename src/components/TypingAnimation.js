import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = ({ typingData, extraClassName }) => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: typingData
        ? typingData
        : [
          "We build software using <strong>AI</strong>.",
          "We turn ideas into <strong>reality</strong>.",
          "<strong>Program</strong> your life.",
        ], // Strings to display
      typeSpeed: 77,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, [typingData]); // Add typingData to the dependency array

  return (
    <span
      className={`${extraClassName} typing-subtitle`}
      id="subtitle"
      ref={el}
    ></span>
  );
};

export default TypingAnimation;
