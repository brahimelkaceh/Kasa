import "./style.css";
import { useState } from "react";
import Box from "./Box";
function Index() {
  const [isOpen, setIsOpen] = useState({
    box1: true,
    box2: false,
    box3: false,
    box4: false,
  });

  const handleToggleBox = (boxName) => {
    setIsOpen((prevOpen) => ({
      ...prevOpen,
      [boxName]: !prevOpen[boxName],
    }));
  };
  return (
    <div className="container boxes-container">
      <Box
        title="Fiabilité"
        isOpen={isOpen.box1}
        onToggle={() => handleToggleBox("box1")}
      >
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </Box>
      <Box
        title="Respect"
        isOpen={isOpen.box2}
        onToggle={() => handleToggleBox("box2")}
      >
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </Box>
      <Box
        title="Service"
        isOpen={isOpen.box3}
        onToggle={() => handleToggleBox("box3")}
      >
        <p>
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </p>
      </Box>
      <Box
        title="Sécurité"
        isOpen={isOpen.box4}
        onToggle={() => handleToggleBox("box4")}
      >
        <p>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      </Box>
    </div>
  );
}

export default Index;
