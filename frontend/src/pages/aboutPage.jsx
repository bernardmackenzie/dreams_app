import { Container, Row, Col, Button } from "react-bootstrap";
import NavComponent from "../components/NavComponent";
import FooterComponent from "../components/FooterComponent";


const aboutComponent = () => {
    return (
        <>

            <NavComponent />
            <div className="about">
                <div className="hero-about">

                    <Container>
                        <Row>
                            <Col lg={6}>
                                <div className="about-hero">
                                    <h1>Kami membantu anda untuk mempercayai kue kami.</h1>
                                    <Button variant="outline-dark">Pesan Sekarang</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>




                <div className="indo-sejarah">
                    <Container>
                        <Row className="mt-3">
                            <Col lg={12} >
                                <br />
                                <br />
                                <h5>Toko kue kami, "Dream," memiliki visi dan misi yang mendalam untuk menciptakan pengalaman
                                    manis yang tak terlupakan bagi pelanggan kami.</h5>
                                <br />
                                <br />


                            </Col>
                            <Col lg={6}>
                                <img src="../src/assets/img-about-sejarah.png" alt="" />
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row>
                            <Col>
                                <Container>
                                    <Row>
                                        <Col lg={1}>
                                            <img src="../src/assets/ic-visi.png" alt="" className="ic-visi" />
                                        </Col>


                                    </Row>
                                </Container>


                                <Container>
                                    <Row>
                                        <Col>
                                            <Col lg={6}>
                                                <h1>Visi kami</h1>
                                            </Col>

                                            <Col lg={12}>
                                                <h6>Menjadi destinasi utama untuk kelezatan kue yang berkualitas tinggi dan menjadi bagian
                                                    tak terpisahkan dari momen-momen istimewa pelanggan kami.</h6>
                                            </Col>


                                        </Col>
                                    </Row>
                                </Container>


                                <Container>
                                    <Row>
                                        <Col lg={1}>
                                            <img src="../src/assets/ic-visi.png" alt="" className="ic-misi" />
                                        </Col>
                                    </Row>

                                    <Col lg={6}>
                                        <h1>Misi kami</h1>
                                    </Col>


                                    <Col lg={12}>
                                        <h5>1. Kualitas Tak Terkalahkan </h5>
                                        <h6>  Menyajikan kue-kue dengan bahan berkualitas tinggidan proses pembuatan yang teliti untuk memberikan rasa yang luar biasa setiap saat. </h6>
                                        <h5>2. Kreativitas dan Inovasi </h5>
                                        <h6> Menciptakan kue-kue yang tidak hanya lezat tetapi juga inovatif,menggabungkan sentuhan modern dengan kekayaan tradisional.</h6>
                                        <h5>3. Pelayanan Pelanggan Prima </h5>
                                        <h6> Memberikan pengalaman pelanggan yang ramah, responsif,dan memuaskan, menjadikan setiap kunjungan ke Dreamsebagai pengalaman yang menyenangkan.</h6>
                                    </Col>



                                </Container>
                            </Col>

                            <Col lg={6}>
                                <img src="../src/assets/img-about-visimisi.png" alt="" className="ic-visimisi" />
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row>
                            <Col>
                                <Col lg={12}>
                                    <img src="../src/assets/img-about-cta.png" alt="" className="cta" />
                                </Col>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <FooterComponent />
            </div>
        </>
    );
}

export default aboutComponent;  