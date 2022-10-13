import Navbar from "../Navbar";
import { BannerWrapper, HeroButton } from "./styles";
import { Row, Col } from "react-bootstrap";

const Banner = () => {
    return (
        <BannerWrapper>
            <div className="overlay">
                <div className="container">
                    <Navbar />
                    <div>
                        <Row>
                            <Col></Col>
                            <Col sm={5} className="hero-wrapper">
                                <span className="title">CLOUDBUDGET</span>
                                <Row style={{ marginTop: 39 }}>
                                    <Col style={{ display: 'contents' }}>
                                        <span className="title-text">
                                            Cloud budget management for everyone. Only €69.95 a Month After a 7 Day Trial of Up to €4.99
                                        </span>
                                    </Col>
                                </Row>
                                <HeroButton className="btn btn-light">SIGN UP</HeroButton>
                            </Col>
                            <Col></Col>
                        </Row>
                    </div>
                </div>
            </div>
        </BannerWrapper >
    );
};

export default Banner;