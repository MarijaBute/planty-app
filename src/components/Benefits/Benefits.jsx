import React, { useEffect, useRef } from 'react';
import './benefits.css';
import FreeShipping from '../../assets/benefits/shipping.png';
import Guarantee from '../../assets/benefits/money-guarantee.png';
import Returns from '../../assets/benefits/return.png';

export default function Benefits() {
    const benefitsRef = useRef([]);
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, { threshold: 0.5 });

        benefitsRef.current.forEach(benefit => {
            if (benefit) {
                observer.observe(benefit);
            }
        });

        return () => {
            benefitsRef.current.forEach(benefit => {
                if (benefit) {
                    observer.unobserve(benefit);
                }
            });
        };
    }, []);

    return (
        <div className='shop-benefits'>
            <div className="benefit" ref={el => benefitsRef.current[0] = el}>
                <div className="img-wrapper">
                    <img src={FreeShipping} alt="Free Shipping" className='benefits-img' />
                </div>
                <h3 className='benefits-heading'>Free delivery</h3>
                <p className='benefits-paragraph'>Free delivery on full-priced items</p>
            </div>

            <div className="benefit" ref={el => benefitsRef.current[1] = el}>
                <div className="img-wrapper">
                    <img src={Guarantee} alt="Money Guarantee" className='benefits-img' />
                </div>
                <h3 className='benefits-heading'>30 days money guarantee</h3>
                <p className='benefits-paragraph'>Take a 30-day trial run. If you don't love it, we'll give your money back</p>
            </div>

            <div className="benefit" ref={el => benefitsRef.current[2] = el}>
                <div className="img-wrapper">
                    <img src={Returns} alt="Returns" className='benefits-img' />
                </div>
                <h3 className='benefits-heading'>Free returns</h3>
                <p className='benefits-paragraph'>Free 30-day returns and exchanges on all orders.</p>
            </div>
        </div>
    );
}