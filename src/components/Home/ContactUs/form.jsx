import { Row, Col } from "react-bootstrap";
import { Button, FormWrapper } from "./styles";

const Form = () => {
    return (
        <FormWrapper>
            <Row>
                <Col>
                    <input class="form-control form-control-lg input" type="text" placeholder="First Name" />
                </Col>
                <Col>
                    <input class="form-control form-control-lg input" type="text" placeholder="Last Name" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <input class="form-control form-control-lg input" type="text" placeholder="Phone Number" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <select class="form-select form-select-lg mb-3 input" aria-label=".form-select-lg example">
                        <option selected disabled>Select Service</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button>SUBMIT NOW</Button>
                </Col>
            </Row>
        </FormWrapper>
    );
};

export default Form;