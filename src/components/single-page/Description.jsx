import { useState } from "react";
function Description({ description }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="open-close-box">
      <div className="header" onClick={handleToggle}>
        Description
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </div>
      {isOpen && <div className="content">{description}</div>}
    </div>
  );
}

export default Description;
