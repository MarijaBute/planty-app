import './ourjourney.css';
import JourneyImg from './journey-big-img.jpeg';
import JourneySmallImg from './journey-small-img.jpeg';
import { FaArrowRight } from "react-icons/fa6";

export default function OurJourney() {
    return (
        <>
        <div className="our-journey">
            <div className="journey-wrapper">
                <div className="journey-left-section">
                    <div className="journey-image-wrapper">
                        <img src={JourneyImg} alt="Img" className='journey-img'/>
                        <div className='journey-small-image'>
                            <img src={JourneySmallImg} alt="" className='journey-small-img'/>
                        </div>
                    </div>
                    
                </div>

                <div className="journey-right-section">
                    <h2 className='journey-heading'>Our Journey <span style={{color: '#96ca80'}}>.</span></h2>
                    <p className='journey-paragraph'>Our journey began with a deep-rooted love for plants. From nurturing our own green haven, we discovered a passion for sharing the joy of plant ownership. Today, we're dedicated to bringing the beauty of nature into your home through our curated selection of stunning plants. Join us as we continue to grow our plant family and inspire yours.</p>
                    <div className='journey-btn'>
                    <button>Read More <FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}