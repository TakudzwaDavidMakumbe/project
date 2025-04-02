import React, { useEffect, useState } from "react";
import "./MessageMeButton.css"; // Import styles for animations and effects

const MessageMeButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 100); // Show animations after scrolling 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`message-me-container ${isVisible ? "visible" : ""}`}>
      <a
        href="https://wa.me/yourphonenumber" // Replace 'yourphonenumber' with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="message-me-button"
      >
        Message Me
      </a>
    </div>
  );
};

export default MessageMeButton;