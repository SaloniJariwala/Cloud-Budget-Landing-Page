import { FeatureWrapper } from "./styles";
import { Row, Col } from "react-bootstrap";

const features = [
    {
        title: "Supports All Currencies and Cards",
        content: "We support all popular currencies and is fully customizable to add",
        img_url: "/images/bg_1.png",
        link: "/"
    },
    {
        title: "Manage your expenses on the go",
        content: "You can access your account from anywhere in the world on any device",
        img_url: "/images/bg_2.png",
        link: "/"
    },
    {
        title: "Cloud Budget Management Software",
        content: "Our software is made so you can access and manage your budget",
        img_url: "/images/bg_3.png",
        link: "/"
    }
];

const Features = () => {
    return (
        <FeatureWrapper>
            <div className="container">
                <span className="title">Features</span>
                <div className="feature-card">
                    {
                        features.map((item) => (
                            <div className="feature-bg" style={{ backgroundImage: `url(${item.img_url})`, backgroundSize: "100%" }}>
                                <div className="info">
                                    <Row>
                                        <Col></Col>
                                        <Col md={10} className="info-content">
                                            <span className="info-title">{item.title}</span>
                                            <p className="info-text">{item.content}</p>
                                            <div className="read-more">
                                                <a href={item.link} style={{ color: '#ED4C5C', textDecoration: 'none' }}>Read More</a>
                                            </div>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </FeatureWrapper >
    );
};

export default Features;