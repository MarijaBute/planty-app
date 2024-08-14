import './contact.css';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6"

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-wrapper">
                <h2 className='contact-heading'>GET IN TOUCH</h2>
                <p className='contact-paragraph'>Feel free to connect with us during our business hours, Monday to Friday from 9 am to 5 pm. We aim to respond to all messages within 48 hours or sooner. If your inquiry is for an existing order, please include the order reference in your message.</p>
                <p className='contact-paragraph'>Please be aware that we don't operate on weekends or evenings, but rest assured, we'll get back to you on the next business day.</p>
                <div className="contact-cards">
                    <div className="contact-card">
                        <div className="contact-icon"><MdEmail color='#96ca80' size={30}/></div>
                        <div><h2>Email Us</h2></div>
                        <div><p>planty@gmail.com</p></div>
                        <div><p style={{marginTop: "0"}}>email@gmail.com</p></div>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon"><FaPhone color='#96ca80' size={30}/></div>
                        <div><h2>Call Now</h2></div>
                        <div><p>+1 800 123 456 789</p></div>
                        <div><p style={{marginTop: "0"}}>+1 800 123 789 456</p></div>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon"><FaHouseChimney color='#96ca80' size={30}/></div>
                        <div><h2>Address</h2></div>
                        <div><p>Ohrid City Square, St Clement of Ohrid, Ohrid 6000</p></div>
                    </div>
                </div>

                <div>
                    <h2 className='contact-heading'>CONTACT US</h2>
                </div>

                <div className="contact-form-wrapper">
                            <div className='contact-form'>
                                <div className='contact-form-row'>
                                <input placeholder='Your Name' required="true" type="text" name='text'></input>
                                <input placeholder='Your Email' required="true" type="email" name='email'></input>
                                </div>
                                <div className='contact-form-row'>
                                <input placeholder='Your Phone' required="true" type="phone" name='phone'></input>
                                <input placeholder='Subject' required="true" type="subject" name='subject'></input>
                                </div>
                                <div className='contact-form-row'>
                                <input className='contact-form-message' placeholder='Message' required="true" type="text" name='text'></input>
                                </div>
                                <button className='contact-submit-button'>Submit Now</button>
                            </div>
                        </div>
                </div>
        <div className='contact-section-map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.9969916051086!2d20.796893175863968!3d41.11275677133595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350dd671039bf69%3A0x19ff11d8518cb!2sOhrid%20City%20Square!5e0!3m2!1sen!2smk!4v1723636699039!5m2!1sen!2smk" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
    );
}