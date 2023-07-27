import React, { Children } from "react";
import { useState } from "react";
function Box({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="open-close-box">
      <div className="header" onClick={handleToggle}>
        {title}
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </div>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
}

export default Box;
