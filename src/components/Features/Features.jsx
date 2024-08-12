import './features.css';
import FeaturesImg from './features-img.png';
import { useEffect, useRef, useState } from 'react';

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      },
      {
        threshold: 0.3, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={`feature-section ${isVisible ? 'visible' : ''}`}>
      <div className="features features-left">
        <div className="feature-item">
          <div className="feature-number">1</div>
          <div className="feature-text">
            <h3>Free Delivery</h3>
            <p>Get your plants delivered right to your doorstep, free of charge.</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-number">2</div>
          <div className="feature-text">
            <h3>Wide Variety</h3>
            <p>Explore a diverse selection of houseplants, from succulents to ferns.</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-number">3</div>
          <div className="feature-text">
            <h3>Landscaping</h3>
            <p>Transform your space with our professional landscaping services.</p>
          </div>
        </div>
      </div>

      <div className="image-container">
        <img src={FeaturesImg} alt="Plants" />
      </div>

      <div className="features features-right">
        <div className="feature-item">
          <div className="feature-number">4</div>
          <div className="feature-text">
            <h3>Big Offers</h3>
            <p>Take advantage of our special discounts and seasonal offers.</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-number">5</div>
          <div className="feature-text">
            <h3>100% Secure Payment</h3>
            <p>Shop with confidence using our secure payment gateway.</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-number">6</div>
          <div className="feature-text">
            <h3>Quality Guarantee</h3>
            <p>Enjoy high-quality plants with our satisfaction guarantee.</p>
          </div>
        </div>
      </div>
    </div>
  );
}