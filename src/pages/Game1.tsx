import { useEffect, Fragment, useCallback, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game1() {
  
  const [time, setTime] = useState("00:00"); 

  const { unityProvider, sendMessage, addEventListener, removeEventListener,unload } = useUnityContext({
    loaderUrl: "Game1/Dota Cards Web.loader.js",
    dataUrl: "Game1/Dota Cards Web.data.br",
    frameworkUrl: "Game1/Dota Cards Web.framework.js.br",
    codeUrl: "Game1/Dota Cards Web.wasm.br",
  });

  const handleSetScore = useCallback((newTime:any) => {
    setTime(newTime);
  }, []);

  useEffect(() => {
    addEventListener("SetTime", handleSetScore);
    return () => {
      removeEventListener("SetTime", handleSetScore);
    };
  }, [addEventListener, removeEventListener, handleSetScore]);

  useEffect(() => {
        
        return () => {
           
            unload().catch((e) => {
                console.warn("Unity no estaba listo para descargarse o ya se cerró:", e);
            });
            
            console.log("Orden de descarga enviada a Unity.");
        };
    }, [unload]); 
  function ResetGame() {
    sendMessage("GameManager", "Reset");
  }

  return (
    <div className="centered-container">
      <div className="centered-content">
        <h1 className="centered-title">Game 1</h1>
        <h2>Tiempo: {time}</h2>
        <Fragment>
          <Unity unityProvider={unityProvider} className="centered-unity" />
          <p></p>
          <button onClick={ResetGame}>Reset Game</button>
        </Fragment>
      </div>
    </div>
  );
}

export default Game1;