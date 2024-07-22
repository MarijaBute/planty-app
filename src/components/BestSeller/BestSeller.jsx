import './bestseller.css';
import OrchidImg from '../../assets/plants/orchid.png';
import PeaceLily from '../../assets/plants/peace-lily.png';
import Aglaonema from '../../assets/plants/aglaonema.png';
import Monstera from '../../assets/plants/monstera.png';

export default function BestSeller() {
    return (
    <>
        <div className="bestseller-section">
            <div className="bestseller-wrapper">
                <h2 className="bestseller-heading">
                    Bestseller Items
                </h2>
                <div className="bestseller-items">
                    <div className="bestseller-item">
                        <img src={OrchidImg} alt="" />
                    </div>

                    <div className="bestseller-item">
                    <img src={PeaceLily} alt="" />
                    </div>

                    <div className="bestseller-item">
                    <img src={Aglaonema} alt="" />
                    </div>

                    <div className="bestseller-item">
                    <img src={Monstera} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}