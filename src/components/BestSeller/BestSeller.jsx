import './bestseller.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaArrowRight } from "react-icons/fa6";
import OrchidImg from '../../assets/plants/orchid.png';
import PeaceLily from '../../assets/plants/peace-lily.png';
import Aglaonema from '../../assets/plants/aglaonema.png';
import Monstera from '../../assets/plants/monstera.png';
import SnakePlant from '../../assets/plants/snake-plant.png';

export default function BestSeller() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    }

    return (
        <div className="bestseller-section">
            <div className="bestseller-wrapper">
                <h2 className="bestseller-heading">Bestseller Items</h2>
                <Slider {...settings} className="bestseller-slider">
                    <div className="item-wrap">
                        <div className="bestseller-item">
                            <img src={OrchidImg} alt="Orchid" />
                            <button className="bestseller-cart-btn">Add to Cart <FaArrowRight /></button>
                        </div>
                        <h3>Orchid</h3>
                        <p>$15</p>
                    </div>

                    <div className="item-wrap">
                        <div className="bestseller-item">
                            <img src={PeaceLily} alt="Peace Lily" />
                            <button className="bestseller-cart-btn">Add to Cart <FaArrowRight /></button>
                        </div>
                        <h3>Peace Lily</h3>
                        <p>$19</p>
                    </div>

                    <div className="item-wrap">
                        <div className="bestseller-item">
                            <img src={Aglaonema} alt="Aglaonema" />
                            <button className="bestseller-cart-btn">Add to Cart <FaArrowRight /></button>
                        </div>
                        <h3>Aglaonema</h3>
                        <p>$17</p>
                    </div>

                    <div className="item-wrap">
                        <div className="bestseller-item">
                            <img src={Monstera} alt="Monstera" />
                            <button className="bestseller-cart-btn">Add to Cart <FaArrowRight /></button>
                        </div>
                        <h3>Monstera</h3>
                        <p>$22</p>
                    </div>

                    <div className="item-wrap">
                        <div className="bestseller-item">
                            <img src={SnakePlant} alt="Snake Plant" />
                            <button className="bestseller-cart-btn">Add to Cart <FaArrowRight /></button>
                        </div>
                        <h3>Snake Plant</h3>
                        <p>$10</p>
                    </div>
                </Slider>
                <div className="view-all-button">
                    <button>View All <FaArrowRight /> </button>
                </div>
            </div>
        </div>
    );
}