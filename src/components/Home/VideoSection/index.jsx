import { VideoWrapper } from "./styles";
import { Row, Col } from "react-bootstrap";
import { ReactComponent as PlayButton } from "../../../assets/svg/PlayButton.svg";

const VideoSection = () => {
    return (
        <VideoWrapper>
            <div className="container">
                <div className="section">
                    <Row>
                        <Col style={{ paddingTop: 50 }}>
                            <span className="title">
                                Easy to Use Cloud Budget Management Software
                            </span>
                            <Row>
                                <Col md={9}>
                                    <p className="left-text">
                                        Our software is made so you can access and manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. Read below to find out more.
                                    </p>
                                </Col>
                            </Row>
                            <div>
                                <a className="learn-more" href="/">Learn More</a>
                            </div>
                        </Col>
                        <Col>
                            <div className="video">
                                <PlayButton className="play-button" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </VideoWrapper>
    );
};

export default VideoSection;