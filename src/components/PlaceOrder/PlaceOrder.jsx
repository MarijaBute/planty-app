import './placeorder.css';
import OrderImg from './order-img.jpg';

export default function PlaceOrder() {
    return (
        <>
        <div className="place-order">
            <h2 className='order-heading'>How to place your order?</h2>
            <div className="place-order-wrapper">
                <div className="order-left-section">
                    <img src={OrderImg} alt="" className='order-img' />
                </div>

                <div className="order-right-section">
                    
                    <div className="order-item">
                    <div className="order-number">1</div>
                        <div className="order-text">
                            <h3>Choose Product</h3>
                            <p>Select the perfect plant for your space.</p>
                        </div>
                    </div>

                    <div className="order-item">
                    <div className="order-number">2</div>
                        <div className="order-text">
                            <h3>Place an Order</h3>
                            <p>Add to cart and complete your purchase.</p>
                        </div>
                    </div>

                    <div className="order-item">
                    <div className="order-number">3</div>
                        <div className="order-text">
                            <h3>Receive Your Order</h3>
                            <p>Enjoy your new plant delivered to your door.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        </>
    )
}