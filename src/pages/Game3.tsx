import { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game3() {

    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "Game3/TengoFeMano.loader.js",
        dataUrl: "Game3/TengoFeMano.data.br",
        frameworkUrl: "Game3/TengoFeMano.framework.js.br",
        codeUrl: "Game3/TengoFeMano.wasm.br",
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
                    <h1 className="centered-title">Game 3</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />
                </div>
            </div>
        </>
    );
}

export default Game3;
