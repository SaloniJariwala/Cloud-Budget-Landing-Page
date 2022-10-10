import Navbar from "../Navbar";
import { BannerWrapper } from "../styles";

const Banner = () => {
    return (
        <BannerWrapper>
            <div className="overlay">
                <div className="container">
                    <Navbar />
                </div>
            </div>
        </BannerWrapper>
    );
};

export default Banner;