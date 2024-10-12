import NavComponent from "../components/NavComponent";
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
const konfirmasiPage = () => {
    return (
        <>

            <div className="konfirmasi">
                <NavComponent />
                <Container>
                    <Row>
                        <Col lg={8}>
                            <h5 className="mt-5 mb-3">Detail data pemesanan kue dreams</h5>
                            <Card>
                                <Row>
                                    <Col lg={6}>
                                    <p>nama kue</p>
                                    <h5>chesse cake</h5>
                                    </Col>
                                    <Col lg={6}>
                                    <p>nama pemesan</p>
                                    <h5>Budi</h5>
                                    </Col>
                                </Row>

                                <p>Pilihan Pembayaran</p>
                                <img src="../src/assets/bankbri.png" alt="" />

                                <Row>
                                    <Col lg={12}>
                                        <p>Waktu pengambilan</p>
                                        <h5>11.00</h5>
                                    </Col>
                                </Row>
                                <hr />
                                <Row className="mt-3">
                                    <Col lg={6}>
                                        <h6>Transfer Bank : Bank Bri <b>147258369</b> </h6>
                                    </Col>
                                    <Col lg={6}>
                                        <h6 className="text-secondary">Total pembayaran : <b className="text-dark"> IDR 205.000</b></h6>
                                    </Col>
                                </Row>
                                <hr />

                                <Row className="mt-3">
                                    <Col lg={6}>
                                        <h6>Transfer Bank : Bank Bri <b>147258369</b> </h6>
                                    </Col>
                                    <Col lg={6}>
                                        <h6 className="text-secondary">Total pembayaran : <b className="text-dark"> IDR 205.000</b></h6>
                                    </Col>
                                </Row>
                            </Card>

                            <div className="opsi mt-3">
                                <Button href="/profil" variant="btn btn-utama">LIhat pesanan</Button>
                            </div>

                        </Col>
                    </Row>
                </Container>
                <FooterComponent />
            </div>
        </>
    );
}

export default konfirmasiPage;