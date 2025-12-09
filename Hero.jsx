import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Web Developer";
  const typingSpeed = 100; // milliseconds per character
  const cursorRef = useRef(null);

  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;

    if (!isTypingComplete) {
      typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTypingComplete(true);
        }
      }, typingSpeed);
    }

    return () => clearInterval(typingInterval);
  }, [isTypingComplete]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorBlinkInterval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = cursorRef.current.style.opacity === '0' ? '1' : '0';
      }
    }, 500);

    return () => clearInterval(cursorBlinkInterval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hello, I'm <span className="highlight">Umar Farooq</span></h1>
          <div className="typing-container">
            <p className="typing-text">
              {displayText}
              <span className="cursor" ref={cursorRef}>|</span>
            </p>
          </div>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">View My Work</a>
            <a href="#contact" className="btn secondary-btn">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
