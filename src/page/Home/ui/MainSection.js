import { FaLocationDot } from "react-icons/fa6";
import "../css/mainsection.css";

function MainSection() {
    return (
        <>
            <section className="main">
                <div className="background"></div>
                <div className="content">
                    <h1 className="title">Camping Go</h1>
                    <p className="description">
                        Camping is not just a journey,
                        <br />
                        it is a journey to build deeper connections with nature.
                    </p>
                    <div className="current-location">
                        <i className="location-icon">
                            <FaLocationDot />
                        </i>
                        <span>Current Location</span>
                    </div>
                    <div className="scroll-indicator bouncy">
                        <p>↓ Scroll down to explore more ↓</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MainSection;
