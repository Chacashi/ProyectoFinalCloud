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
                  
                </div>
            </div>
        </>
    );
}

export default Game6;