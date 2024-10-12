import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"
const FooterComponent = () => {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h4>Dream</h4>
                            <Link to="/home">home</Link>
                            <Link to="/menu">menu</Link>
                            <Link to="/about">Tentang Kami</Link>
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

export default FooterComponent;