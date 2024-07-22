import './home.css'
import HeroImg from './hero-img.png'
import { ReactTyped } from "react-typed";
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import Benefits from '../Benefits/Benefits'
import BestSeller from '../BestSeller/BestSeller'

export default function Home() {
    return (
        <>
       
        <div className="site-home">
            <div className="socials">
            <p>SOCIALS    -----</p>
            <SlSocialFacebook />
            <SlSocialInstagram />
            <SlSocialLinkedin />
            </div>
            <div className="home-text-section">
                <div className="home-heading">
                <h2 className='planty-heading'>
                <ReactTyped strings={["PLANTY."]} typeSpeed={200} backSpeed={50} loop />
                    </h2>
                </div>
                <div className="home-paragraph">
                    <p>Grow a greener future, one houseplant at a time.</p>
                </div>


                <a href="#" className="">
<button className="button-85" role="button">SHOP NOW</button>
                
                </a>
            </div>

            
            
        </div>
        <Benefits />
        <BestSeller />
        </>
    )
}