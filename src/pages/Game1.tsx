import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game1() {
  const navigate = useNavigate();

  const {unityProvider, unload } = useUnityContext({
    loaderUrl: "Game1/Dota Cards Web.loader.js",
    dataUrl: "Game1/Dota Cards Web.data.br",
    frameworkUrl: "Game1/Dota Cards Web.framework.js.br",
    codeUrl: "Game1/Dota Cards Web.wasm.br",
  });

  useEffect(() => {
    return () => {
      unload();
    };
  }, []);

  return (
    <div className="centered-container">
      <div className="centered-content">
        <h1 className="centered-title">Game 1</h1>
        <Unity unityProvider={unityProvider} className="centered-unity" />
      </div>
    </div>
  );
}

export default Game1;
