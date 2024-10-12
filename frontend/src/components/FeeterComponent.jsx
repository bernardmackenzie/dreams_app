import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom"
const FeeterComponent = () => {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h3>Dream</h3>
                            
                            
                        </Col>
                        <Col lg={6}>
                            <h6> &copy; Toko Kue Terbaik 2024 Dream  </h6>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default FeeterComponent;