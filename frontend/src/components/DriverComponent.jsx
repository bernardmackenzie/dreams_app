import { Container, Row, Col } from "react-bootstrap";

const DriverComponent = () => {
    return (
        <>
            <div className="driver">
                <Container>
                    <Row>
                        <Col>
                            <h5>Driver terpercaya</h5>
                            <p>Pengantaran kue kami dengan driver terpercaya.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src="../src/assets/img-drivver.png" alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default DriverComponent;