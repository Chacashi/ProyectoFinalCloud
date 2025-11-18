

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game4(){
     const navigate = useNavigate();

       const { unityProvider, unload} = useUnityContext({
        loaderUrl: "Game4/HouseLand.loader.js",
        dataUrl: "Game4/HouseLand.data.br",
        frameworkUrl: "Game4/HouseLand.framework.js.br",
        codeUrl: "Game4/HouseLand.wasm.br",
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
                    <h1 className="centered-title">Game 4</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />
                </div>
            </div>
        </>
    );
    
}

export default Game4;