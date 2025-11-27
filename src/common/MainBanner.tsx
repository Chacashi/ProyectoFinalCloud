import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';
import banner4 from '../assets/images/banner4.jpg';
import banner5 from '../assets/images/banner5.jpg';
import banner6 from '../assets/images/banner6.jpg';
function MainBanner() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>

            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={banner1} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Dota 2 Memory</h1>
                        <p></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner2} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Bowling Brainrot </h1>
                        <p></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner3} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Anime Trivia</h1>
                        <p></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner4} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>HouseLand</h1>
                        <p></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner5} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Mateo Sobre Ruedas</h1>
                        <p></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner6} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h1>El Gran Chef</h1>
                        <p></p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default MainBanner