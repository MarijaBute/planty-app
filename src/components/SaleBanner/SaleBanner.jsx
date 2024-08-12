import './salebanner.css';
import BannerImg from './banner-big-image.jpg';
import BannerSnakeImg from './banner-img-snake.jpeg';
import { FaArrowRight } from "react-icons/fa6";

export default function SaleBanner() {
    return(
        <>
        <div className="sale-banner">
            <div className="banner-wrapper">
                <div className="banner-left-section">
                    <h2 className='banner-heading'>Perfect plants on sale for your <span className='interiors'>interiors</span>.</h2>
                    <p className='banner-paragraph'>Discover a curated selection of stunning plants on sale to elevate your interior space. Our discounted greenery is perfect for adding a touch of nature to any room. From low-maintenance succulents to air-purifying ferns, we have something for everyone. Transform your home into a tranquil oasis while enjoying incredible savings.</p>
                    <div className="banner-button">
                        <button>Shop all <FaArrowRight /></button>
                    </div>
                   
                </div>

                <div className="banner-right-section">
                    <div className="banner-image-wrapper">
                    <img src={BannerImg} alt="" className='banner-img'/>
                    <div className="small-image">
                        <img src={BannerSnakeImg} alt="" className='small-img'/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}