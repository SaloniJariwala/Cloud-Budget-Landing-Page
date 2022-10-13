import { TechWrapper } from "./styles";
import { Row, Col } from "react-bootstrap";

const tech = [
    {
        number: "01",
        imgUrl: "/images/cloud.png",
        title: "Cloud Storage",
        content: "Access your account from anywhere in the world on any device"
    },
    {
        number: "02",
        imgUrl: "/images/secure.png",
        title: "Secure",
        content: "All your information is stored on secure cloud servers"
    },
    {
        number: "03",
        imgUrl: "/images/pdf.png",
        title: "PDF Download",
        content: "Download any of your reports in PDF format"
    },
    {
        number: "04",
        imgUrl: "/images/csv.png",
        title: "CSV Download",
        content: "All your information is stored on secure cloud servers"
    }
]

const Technology = () => {
    return (
        <TechWrapper>
            <div className="container">
                <span className="title">Technology</span>
                <div className="tech-bar">
                    {
                        tech.map((item) => (
                            <div style={{ width: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <div className="logo-wrapper">
                                    <span className="number">
                                        {item.number}
                                    </span>
                                    <img src={item.imgUrl} className="logo" />
                                </div>
                                <span className="title-text">{item.title}</span>
                                <div className="content">
                                    <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Col xs={8}>
                                            <div align="center" style={{ position: 'relative', bottom: '35px' }}>{item.content}</div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </TechWrapper >
    );
};

export default Technology;