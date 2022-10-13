import { FooterWrapper } from "./styles";
import { Row, Col } from "react-bootstrap";
import { ReactComponent as Facebook } from "../../../assets/svg/feather-facebook.svg";
import { ReactComponent as LinkedIn } from "../../../assets/svg/feather-linkedin.svg";
import { ReactComponent as Twitter } from "../../../assets/svg/feather-twitter.svg";

const Footer = () => {
    return (
        <FooterWrapper>
            <div className="container">
                <Row>
                    <Col style={{ display: 'flex' }}>
                        <div style={{ width: 400 }}>
                            <span className="title">Address</span>
                            <Row style={{ marginTop: 30 }}>
                                <Col xs={4}>
                                    <span className="content">
                                        Pipang Ltd, Griva Digeni,
                                        81-83 Jacovides Tower, 1st Floor
                                        1090 Picosia USA
                                    </span>
                                </Col>
                            </Row>
                        </div>
                        <div style={{ width: 400 }}>
                            <span className="title">Services</span>
                            <div className="content" style={{ display: 'flex', flexDirection: 'column', marginTop: 30 }}>
                                <div>Overview</div>
                                <div>Features</div>
                                <div>Technology</div>
                                <div>Terms & Conditions</div>
                                <div>Privacy</div>
                            </div>
                        </div>
                        <div style={{ width: 400 }}>
                            <span className="title">Get In Touch</span>
                            <div className="content" style={{ display: 'flex', flexDirection: 'column', marginTop: 30 }}>
                                <div>info@cloudbudget.com</div>
                                <div>+1 844-721-7120</div>
                                <div className="logo-bar">
                                    <Facebook height={14} width={14} className="svg" />
                                    <LinkedIn height={14} width={14} className="svg" />
                                    <Twitter height={14} width={14} className="svg" />
                                </div>
                            </div>
                        </div>
                        <div style={{ width: 400, display: 'flex', flexDirection: 'column' }}>
                            <span className="title" style={{ textAlign: 'left' }}>We Support</span>
                            <img src="/images/payments.png" alt="payment methods" height={31} width={216} style={{ marginTop: 30 }} />
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginTop: 100 }}>
                    <Col>
                        <span className="content">Copyright 2018 CloudBudget</span>
                    </Col>
                </Row>
            </div>
        </FooterWrapper>
    );
};

export default Footer;