import './footer.css';
import { FaFacebookF, FaInstagram, FaTiktok, FaPinterestP } from "react-icons/fa";


export default function Footer() {
    return(
        <>
        <footer className="site-footer">
            <div className="footer-wrapper">
                <div className="footer-row">
                    <h2 className="footer-logo">PLANTY.</h2>
                    <span className="font-bold">Shop</span>
                    <ul className='footer-links'>
                        <li>All houseplants</li>
                        <li>Baby plants</li>
                        <li>Flowers</li>
                        <li>Trees</li>
                    </ul>
                </div>
                <div className="footer-row">
                    <span className="font-bold">Customer Service</span>
                    <ul className='footer-links'>
                        <li>Frequently asked questions</li>
                        <li>Contact</li>
                        <li>Payments</li>
                        <li>Transport and delivery</li>
                        <li>Guarantee</li>
                        <li>Return policy</li>
                    </ul>
                </div>
                <div className="footer-row">
                    <span className="font-bold">About PLANTY</span>
                    <ul className='footer-links'>
                        <li>Giftcards</li>
                        <li>About us</li>
                        <li>Sustainability</li>
                        <li>B2B</li>
                        <li>Collaborations</li>
                        <li>Press</li>
                        <li>Job opportunities</li>
                    </ul>
                </div>
                <div className="footer-row">
                    <span className="font-bold">Socials</span>
                    <ul className='social-links'>
                        <li><FaFacebookF /></li>
                        <li><FaInstagram /></li>
                        <li><FaTiktok /></li>
                        <li><FaPinterestP /></li>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    )
}