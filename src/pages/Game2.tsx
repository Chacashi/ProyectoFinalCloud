import { Fragment, useEffect,useCallback,useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game2(){
     
 const [turno, setTurno] = useState(""); 
 const [ganador, setGanador] = useState(""); 
       const { unityProvider, unload,sendMessage,addEventListener,removeEventListener} = useUnityContext({
        loaderUrl: "Game2/BowlingBrainrot.loader.js",
        dataUrl: "Game2/BowlingBrainrot.data.br",
        frameworkUrl: "Game2/BowlingBrainrot.framework.js.br",
        codeUrl: "Game2/BowlingBrainrot.wasm.br",
    });

    const handleSetTurno = useCallback((newTurn:any) => {
    setTurno(newTurn);
  }, []);

  const handleSetGanador = useCallback((newGanador:any) => {
    setGanador(newGanador);
    setTurno("");
  }, []);

  useEffect(() => {
    addEventListener("SetTurno", handleSetTurno);
    addEventListener("SetGanador", handleSetGanador);

    return () => {
      removeEventListener("SetTurno", handleSetTurno);
      removeEventListener("SetGanador", handleSetGanador);
    };
  }, [addEventListener, removeEventListener, handleSetTurno,handleSetGanador]);
    
     useEffect(() => {
            
            return () => {
               
                unload().catch((e) => {
                    console.warn("Unity no estaba listo para descargarse o ya se cerró:", e);
                });
                
                console.log("Orden de descarga enviada a Unity.");
            };
        }, [unload]); 

        function LaunchBall(){
            sendMessage("Sphere", "LaunchBall");
        }

        function ResetGame(){
            sendMessage("Scenes", "LoadScene", "Menu")
            setTurno("")
            setGanador("")
        }


    return(
          <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">Game 2</h1>
                    <h2 style={{ color: ganador !== "" ? "gold" : "white" }}>
                        {ganador !== "" 
                            ? `${ganador}` 
                            : `${turno}`
                        }
                    </h2>
                    <Fragment>
                    <Unity unityProvider={unityProvider} className="centered-unity" />
                    <p></p>
                    <button onClick={LaunchBall}>Lanzar Bola</button>
                    <button onClick={ResetGame}>Reiniciar Juego</button>
                     <div className="game-description">
        <h2>Descripción</h2>
        <p>
          En este juego deberás lanzar la bola y derribar todos los Tung Tung Sahur. El jugador con
          el mayor puntaje gana.
        </p>

        <h2>Instrucciones</h2>
        <ul>
          <li>Con A y D posiciona la bola y clikea el boton para lanzar</li>
        </ul>
      </div>
                    </Fragment>
                </div>
            </div>
        </>
    );
    
}

export default Game2;