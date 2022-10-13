import { DownloadWrapper } from "./styles";
import { Row, Col } from "react-bootstrap";
import { ReactComponent as PlayStore } from "../../../assets/svg/playstore.svg";
import { ReactComponent as AppStore } from "../../../assets/svg/windows.svg";
import { ReactComponent as Windows } from "../../../assets/svg/appstore.svg";
import ImageWrapper from "./ImageWrapper";

const DownloadSec = () => {
    return (
        <DownloadWrapper>
            <div className="container">
                <Row>
                    <div style={{ display: 'flex' }}>
                        <Col xs={4}>
                            <span className="title">Stay focused on saving money</span>
                            <div className="content">
                                It is important to stay focused on saving money in any way you can. We help you monitor your spending habits so you can easily spot and cut any unnecessary expenses. Simply join today to get started!
                            </div>
                            <div className="store-bar">
                                <PlayStore height={32} width={32} />
                                <AppStore height={32} width={32} />
                                <Windows height={32} width={32} />
                            </div>
                        </Col>
                        <Col style={{ width: 500 }}>
                            <ImageWrapper />
                        </Col>
                    </div>
                </Row>
            </div>
        </DownloadWrapper>
    );
};

export default DownloadSec;