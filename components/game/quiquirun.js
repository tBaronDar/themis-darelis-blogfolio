import { useState, useEffect } from "react";

import classes from "./quiquirun.module.css";

function Quiquirun() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className={classes.widget}>
      <h2>Follow the link to play or download the game from itch.io</h2>
      <p>
        Important! The game is not optimized for mobile phones and tablets. Use
        Google chrome and toggle controls to play on mobile.
      </p>
      {isClient && (
        <iframe
          frameborder="0"
          src="https://itch.io/embed/2761298"
          width="552"
          height="167"
        >
          <a href="https://thedar1.itch.io/quiqui-run">Quiqui Run by theDar1</a>
        </iframe>
      )}
      <h2>Use WASD or the arrow keys to move and jump.</h2>
    </div>
  );
}

export default Quiquirun;
