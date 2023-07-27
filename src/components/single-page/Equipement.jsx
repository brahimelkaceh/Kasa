import { useState } from "react";
function Equipement({ equipement }) {
  console.log(equipement);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="open-close-box">
      <div className="header" onClick={handleToggle}>
        Equipements
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </div>
      {isOpen && (
        <div className="content">
          {equipement.map((equip, i) => (
            <li key={i}>{equip}</li>
          ))}
        </div>
      )}
    </div>
  );
}

export default Equipement;
