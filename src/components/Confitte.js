import React, { useRef, useEffect } from "react";
import confetti from "canvas-confetti";

function Confitte({ winner }) {
  const cRef = useRef(null);

  useEffect(() => {
    if (winner && winner !== "It's a tie" && cRef && cRef.current) {
      cRef.current = confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [winner]);

  return <div ref={cRef}></div>;
}

export default Confitte;
