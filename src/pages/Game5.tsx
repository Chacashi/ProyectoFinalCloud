import { useEffect,Fragment,useState,useCallback } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game5() {
    const [time, setTime] = useState("");
    const { unityProvider, unload,sendMessage,addEventListener,removeEventListener} = useUnityContext({
        loaderUrl: "Game5/MateoSobreRuedas.loader.js",
        dataUrl: "Game5/MateoSobreRuedas.data.br",
        frameworkUrl: "Game5/MateoSobreRuedas.framework.js.br",
        codeUrl: "Game5/MateoSobreRuedas.wasm.br",
    });

    const handleSetTime = useCallback((newTime:any) => {
        setTime(newTime);
      }, []);

     useEffect(() => {
        addEventListener("SetTime", handleSetTime);

        return () => {
        removeEventListener("SetTime", handleSetTime);
        };
    }, [addEventListener, removeEventListener, handleSetTime]);


    useEffect(() => {
        return () => {
  
            unload().catch((e) => {
                console.warn("Unity no estaba listo para descargarse o ya se cerró:", e);
            });
            
            console.log("Orden de descarga enviada a Unity.");
        };
    }, [unload]); 

    function OnOptions(){
       sendMessage("UIManager","OptionsPanel") 
    }
    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">Game 5</h1>
                    <h2>{time}</h2>
                     <Fragment>
                    <Unity unityProvider={unityProvider} className="centered-unity" />
                    <p></p>
                     <button onClick={OnOptions}>Opciones</button>
                     </Fragment>
                </div>
            </div>
        </>
    );

}

export default Game5;