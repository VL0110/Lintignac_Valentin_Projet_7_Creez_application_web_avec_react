import { useState, useEffect } from "react";

// Hook : Ce crochet renvoi la largeur et la hauteur de la page

export function useWindowSize() {
  function getSize() {
    return {
      width:  window.innerWidth,
      height:  window.innerHeight 
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

 // Un tableau vide garantit que l'effet n'est exécuté que lors du montage et du démontage

  return windowSize;
}

