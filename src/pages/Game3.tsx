import { Fragment, useEffect,useCallback,useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game3() {
    const [respuesta, setAnswer] = useState(""); 
    const [puntaje, setPuntaje] = useState("");
    const { unityProvider, unload, sendMessage,addEventListener,removeEventListener} = useUnityContext({
        loaderUrl: "Game3/AnimeTrivia.loader.js",
        dataUrl: "Game3/AnimeTrivia.data.br",
        frameworkUrl: "Game3/AnimeTrivia.framework.js.br",
        codeUrl: "Game3/AnimeTrivia.wasm.br",
    });

    const handleSetAnswer = useCallback((newAnswer:any) => {
    setAnswer(newAnswer);
  }, []);

  const handleSetPuntaje = useCallback((newPuntaje:any) => {
    setPuntaje(newPuntaje);
    setAnswer("");
  }, []);


    useEffect(() => {
    addEventListener("SetAnswer", handleSetAnswer);
    addEventListener("SetPuntaje", handleSetPuntaje);

    return () => {
      removeEventListener("SetAnswer", handleSetAnswer);
      removeEventListener("SetPuntaje", handleSetPuntaje);
    };
  }, [addEventListener, removeEventListener, handleSetAnswer,handleSetPuntaje]);

 
   useEffect(() => {
        
        return () => {
            
            unload().catch((e) => {
                console.warn("Unity no estaba listo para descargarse o ya se cerró:", e);
            });
            
            console.log("Orden de descarga enviada a Unity.");
        };
    }, [unload]); 

    function ChooseAlternative(){

        sendMessage("ButtonA", "CheckID")
    }
    function ChooseAlternativeB(){
        sendMessage("ButtonB", "CheckID")
    }
    return(
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">Game 3</h1>
                    <h2 style={{ color: puntaje !== "" ? "gold" : "white" }}>
                        {puntaje !== "" 
                            ? `Puntaje: ${puntaje}` 
                            : `${respuesta}`
                        }
                    </h2>
                    <Fragment>
                    <Unity unityProvider={unityProvider} className="centered-unity" />
                    <p></p>
                     <button onClick={ChooseAlternative}>Opcion A</button>
                     <button onClick={ChooseAlternativeB}>Opcion B</button>
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

export default Game3;
