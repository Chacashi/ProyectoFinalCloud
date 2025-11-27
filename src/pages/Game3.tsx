import { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game3() {

    const { unityProvider, unload} = useUnityContext({
        loaderUrl: "Game3/AnimeTrivia.loader.js",
        dataUrl: "Game3/AnimeTrivia.data.br",
        frameworkUrl: "Game3/AnimeTrivia.framework.js.br",
        codeUrl: "Game3/AnimeTrivia.wasm.br",
    });

 
   useEffect(() => {
        
        return () => {
            
            unload().catch((e) => {
                console.warn("Unity no estaba listo para descargarse o ya se cerró:", e);
            });
            
            console.log("Orden de descarga enviada a Unity.");
        };
    }, [unload]); 
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
