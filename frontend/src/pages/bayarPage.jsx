import NavComponent from "../components/NavComponent";
import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap";
import { useState } from "react";
import FooterComponent from "../components/FooterComponent";


const bayarPage = () => {
    const [activeKey, setActiveKey] = useState('transfer');
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedKey) => {
        setActiveKey(selectedKey);
    };

    const renderContent = () => {
        if (activeKey === "transfer") {
            return (
                <Card className="metode">
                    <img src="../src/assets/bankbri.png" alt="" />
                    <h6>Bank Bri</h6>
                    <h5>147258369</h5>
                    <p>a.n dreams Indonesia</p>
                </Card>
            );
        } else if (activeKey === "Bni") {
            return (
                <Card className="metode">
                    <img src="../src/assets/bankbni.png" alt="" />
                    <h6>Bank Bni</h6>
                    <h5>147258369</h5>
                    <p>a.n dreams Indonesia</p>
                </Card>
            );
        } else if (activeKey === "Bca") {
            return (
                <Card>
                    <img src="../src/assets/bankbca1.png" alt="" />
                    <h6>Bank bca</h6>
                    <h5>147258369</h5>
                    <p>a.n dreams Indonesia</p>
                </Card>
            );

        }
    }


    return (
        <>
            <div className="bayar">
                <NavComponent />
                <Container>
                    <Row>
                        <Col lg={8}>
                            <h5 className="mt-5">Pilih metode pembayaran</h5>
                            <Nav variant="pills" activeKey={activeKey} onSelect={handleSelect}>
                                <Nav.Item>
                                    <Nav.Link eventKey="transfer">BRI</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Bni">BNI</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Bca">BCA</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>

                    </Row>

                    <Row>
                        <Col lg={8}>
                            {activeKey === "transfer" && renderContent()}
                            {activeKey === "Bni" && renderContent()}
                            {activeKey === "Bca" && renderContent()}
                        </Col>
                        
                    </Row>
                </Container>
                <FooterComponent/>
            </div>
        </>
    );
}

export default bayarPage;