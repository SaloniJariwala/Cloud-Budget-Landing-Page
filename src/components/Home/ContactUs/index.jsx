import { Col, Row } from "react-bootstrap";
import Form from "./form";
import { ContactWrapper } from "./styles";

const ContactUs = () => {
    return (
        <ContactWrapper>
            <div className="container">
                <Row>
                    <Col md={4} style={{ display: 'flex', flexDirection: 'column' }}>
                        <span className="title">Contact Us</span>
                        <span className="content">
                            Questions or concerns? Just fill out the form below and our support team will get back to you within 24 hours
                        </span>
                    </Col>
                    <Col>
                        <Form />
                    </Col>
                </Row>
            </div>
        </ContactWrapper>
    );
};

export default ContactUs;