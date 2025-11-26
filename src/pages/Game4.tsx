

import { useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game4(){
     

       const { unityProvider, sendMessage} = useUnityContext({
        loaderUrl: "Game4/HouseLand.loader.js",
        dataUrl: "Game4/HouseLand.data.br",
        frameworkUrl: "Game4/HouseLand.framework.js.br",
        codeUrl: "Game4/HouseLand.wasm.br",
    });

    useEffect(() => {
            return () => {
                // 1. Silenciar el player de Unity antes de enviarle la instrucción de cierre
                // Esto silencia la salida de audio del <canvas> de Unity.
                
    
                console.log("Saliendo del juego, enviando QuitGame a Unity...");
                try {
                    sendMessage("WebCommunication", "DestroyGame");
                } catch (e) {
                    console.warn("No se pudo enviar QuitGame (Unity quizá ya cerró)");
                }
            };
        }, [sendMessage]);


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