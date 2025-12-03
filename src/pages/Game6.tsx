function Game6(){
    return(
          <>
            <div className="centered-container"> {/* React ya conoce esta clase por App.tsx */}
                <div className="centered-content">
                    <h1 className="centered-title">Game 6</h1>
                    
                    <iframe
                        src="/Game6/index.html"
                        title="Game 6"
                        className="centered-unity" // React también conoce esta
                        style={{ border: "none" }} 
                    ></iframe>
                    <div className="game-description">
        <h2>Descripción</h2>
        <p>
          El Gran Chef es un juego que promueve la cultura gastronomica.
        </p>

        <h2>Instrucciones</h2>
        
          <li>Usa el mouse para arrastar los ingrendientes y obtener nuevos.</li> 
      </div>
                  
                </div>
            </div>
        </>
    );
}

export default Game6;