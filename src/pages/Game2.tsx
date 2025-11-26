//import { useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game2(){
     

       const { unityProvider} = useUnityContext({
        loaderUrl: "Game2/BrainrotBowling.loader.js",
        dataUrl: "Game2/BrainrotBowling.data.br",
        frameworkUrl: "Game2/BrainrotBowling.framework.js.br",
        codeUrl: "Game2/BrainrotBowling.wasm.br",
    });

    


    return(
          <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">Game 2</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />
                </div>
            </div>
        </>
    );
    
}

export default Game2;