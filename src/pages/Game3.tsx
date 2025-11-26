import { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game3() {

    const { unityProvider, unload} = useUnityContext({
        loaderUrl: "Game3/TengoFeMano.loader.js",
        dataUrl: "Game3/TengoFeMano.data.br",
        frameworkUrl: "Game3/TengoFeMano.framework.js.br",
        codeUrl: "Game3/TengoFeMano.wasm.br",
    });

 
   useEffect(() => {
        // La función de limpieza
        return () => {
            // QUITAMOS 'async' de la línea de arriba y 'await' de aquí abajo.
            // Simplemente llamamos a unload() y manejamos el error si ocurre.
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
