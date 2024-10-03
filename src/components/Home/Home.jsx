import './home.css'
import HeroImg from './hero-img.png'
import SaleBanner from '../SaleBanner/SaleBanner'
import BestSeller from '../BestSeller/BestSeller'
import OurJourney from '../OurJourney/OurJourney';
import Features from '../Features/Features';
import PlaceOrder from '../PlaceOrder/PlaceOrder';

export default function Home() {
    return (
        <>
       
        <div className="site-home">
        <img src={HeroImg} alt="hero image" className='hero-image' />
            <div className="home-wrapper">

            <div className="home-text-section">
                <div className="home-heading">
                <h2 className='planty-heading'>
                PLANTY.
                    </h2>
                </div>
                <div className="home-paragraph">
                    <p>Grow a greener future, one houseplant at a time.</p>
                </div>


                <a href="#" className="">
<button className="shop-button" role="button">SHOP NOW</button>
                
                </a>
            </div>
            </div>

            <img src={HeroImg} alt="hero image" className='hero-image-bottom' />

        </div>
        <SaleBanner />
        <OurJourney />
        <BestSeller />
        <Features />
        <PlaceOrder />
        </>
    )
}