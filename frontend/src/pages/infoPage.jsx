import FooterComponent from "../components/FooterComponent";
import NavComponent from "../components/NavComponent";
import { Container, Row, Col, Form, Card, Button, Nav,  } from "react-bootstrap";
import { useState } from "react";



const infoPage = () => {

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
            <div className="info">
                <NavComponent />
                <div className="detail-info">
                    <Container>
                        <Row>
                            <Col lg={8}>
                                <Form action="/bayar">
                                    <div className="title">
                                        <h5>Detail Pemesanan</h5>
                                        <p>Detail ini akan digunakan memastikan Pemesanan</p>
                                    </div>

                                    <Row>

                                        <Col lg={4}>
                                            <div className="deskripsi-hero">
                                                <img src="../src/assets/img-cake-mufin.png" className="img-thumbnail" alt="..."></img>
                                            </div>
                                        </Col>
                                        <Col lg={8}>
                                            <div className="deskripsi-hero">
                                                <h1>Cake Mufin</h1>
                                                <h5>Jumlah Kue : 5</h5>
                                                <h5>SubTotal : 220.000</h5>

                                            </div>



                                        </Col >

                                    </Row>


                                    <Button href="/profil" variant="btn btn-utama">LIhat pesanan</Button>
                                    
                                </Form>
                                <p className="text-secondary mt-3">*Pastikan data sudah terisi dengan benar sebelum melanjutkan.</p>
                            </Col>
                            <Col lg={4}>
                                <Card className="rincian">
                                    <Row>
                                        <Col lg={6}>
                                            <p>Nama Pemesanan</p>
                                            <h5>Budi</h5>
                                        </Col>
                                        <Col lg={6}>
                                            <p>Nomor Telepon</p>
                                            <h5>0986778766</h5>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <p>Email</p>
                                            <h5>Budi@gmail.com</h5>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <p>Alamat Pengiriman</p>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control type="text" placeholder="masukkan alamat" />
                                        </Form.Group>
                                        
                                    </Form>
                                    <p>Pilih Pembayaran</p>
                                    <Form.Select aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">Transfer Bank</option>
                                        <option value="2">Langsung</option>
                                    </Form.Select>

                                    <hr />
                                    <Row className="mt-3">
                                        <Col lg={6}>
                                            <h5 className="text-secondary">Total pembayaran</h5>
                                        </Col>
                                        <Col lg={6}>
                                            <h5>IDR 210.000</h5>
                                        </Col>
                                    </Row>
                                </Card>
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
                            </Col>
                            
                        </Row>
                    </Container>
                </div>
                <FooterComponent />
            </div>
        </>
    );
}

export default infoPage;