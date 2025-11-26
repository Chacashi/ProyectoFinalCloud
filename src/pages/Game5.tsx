
function Game5(){
    return(
          <>
            <div className="centered-container"> {/* React ya conoce esta clase por App.tsx */}
                <div className="centered-content">
                    <h1 className="centered-title">Game 5</h1>
                    
                    <iframe
                        src="/Game5/index.html"
                        title="Game 5"
                        className="centered-unity" // React también conoce esta
                        style={{ border: "none" }} 
                    ></iframe>
                  
                </div>
            </div>
        </>
    );
}

export default Game5;