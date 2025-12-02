import { useEffect,Fragment,useState,useCallback } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game4() {
    const [time, setTime] = useState(""); 
    const [candy, setCandys] = useState("");
    const [life, setLife] = useState("");
    const { unityProvider, unload, sendMessage,addEventListener,removeEventListener } = useUnityContext({
        loaderUrl: "Game4/HouseLand.loader.js",
        dataUrl: "Game4/HouseLand.data.br",
        frameworkUrl: "Game4/HouseLand.framework.js.br",
        codeUrl: "Game4/HouseLand.wasm.br",
        streamingAssetsUrl: "Game4/StreamingAssets",
    });

     const handleSetTime = useCallback((newTime:any) => {
        setTime(newTime);
      }, []);
    
      const handleSetCandys = useCallback((newCandy:any) => {
        setCandys(newCandy);
      }, []);

      const handleSetLife = useCallback((newLife:any) => {
        setLife(newLife);
      }, []);

    useEffect(() => {
        addEventListener("SetTime", handleSetTime);
        addEventListener("SetCandys", handleSetCandys);
        addEventListener("SetLife", handleSetLife);

        return () => {
        removeEventListener("SetTime", handleSetTime);
        removeEventListener("SetCandys", handleSetCandys);
        removeEventListener("SetLife", handleSetLife);
        };
    }, [addEventListener, removeEventListener, handleSetTime,handleSetCandys,handleSetLife]);

    useEffect(() => {
        return () => {
            unload().catch((e) => {
                console.warn("Unity no estaba listo para descargarse o ya se cerró:", e);
            });
            
            console.log("Orden de descarga enviada a Unity.");
        };
    }, [unload]); 

    function OnPause(){

        sendMessage("UiManager", "OnClickPause")
    }
    function OnSettings(){

        sendMessage("UiManager", "OnClickSettings")
    }
    function OnDoubt(){

        sendMessage("UiManager", "OnClickDoubt")
    }
    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">Game 4</h1>
                    <h2>{time}</h2>
                    <h2>{candy}</h2>
                    <h2>{life}</h2>
                     <Fragment>
                    <Unity unityProvider={unityProvider} className="centered-unity" />
                    <p></p>
                     <button onClick={OnPause}>Pausa</button>
                     <button onClick={OnSettings}>Opciones</button>
                     <button onClick={OnDoubt}>Ayuda</button>
                     <div className="game-description">
        <h2>Descripción</h2>
        <p>
          En este juego deberás escoger la opción correcta sobre la pregunta mostrada.
        </p>

        <h2>Instrucciones</h2>
        <ul>
          <li>Clikea uno de los botones dependiendo de la opción</li>
        </ul>
      </div>
                     </Fragment>
                </div>
            </div>
        </>
    );

}

export default Game4;