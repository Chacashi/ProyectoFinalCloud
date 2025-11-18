import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game3(){
     const navigate = useNavigate();

       const { unityProvider, unload } = useUnityContext({
        loaderUrl: "Game3/AnimeTrivia.loader.js",
        dataUrl: "Game3/AnimeTrivia.data.br",
        frameworkUrl: "Game3/AnimeTrivia.framework.js.br",
        codeUrl: "Game3/AnimeTrivia.wasm.br",
    });


  useEffect(() => {
    return () => {
      unload();
    };
  }, []);

    return(
          <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">Game 3</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />
                </div>
            </div>
        </>
    );
    
}

export default Game3;