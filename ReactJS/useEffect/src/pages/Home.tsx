import { useEffect, useState } from "react";
import { Styles } from "./Styles";

export function Home() {
  const [isLightMode, setIsLightMode] = useState(false);
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    }
  }, [isLightMode]);
  return (
    <Styles>
      <h1>useEffect!</h1>
      <button onClick={() => setIsLightMode(!isLightMode)}>Trocar modo</button>
    </Styles>
  );
}
