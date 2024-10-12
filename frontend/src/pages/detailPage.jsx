
import { Container, Row, Col, Button } from "react-bootstrap";
import NavComponent from "../components/NavComponent";
import FooterComponent from "../components/FooterComponent";
import KueRekomendasi from "../components/KueRekomendasiComponent";

const detailPage = () => {
    return (
        <>

            <NavComponent />
            <div className="detail">
                <div className="hero">
                    <Container>
                        <h2>DETAIL</h2>
                        <Row>

                            <Col lg={4}>
                                <div className="deskripsi-hero">
                                    <img src="../src/assets/img-cake-mufin.png" className="img-thumbnail" alt="..."></img>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="deskripsi-hero">
                                    <h1>Cake Mufin</h1>
                                    <h5>Harga : 220.000</h5>

                                </div>
                                <div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                </div>

                                <Row>
                                    <Col lg={6}>
                                        <div>
                                            <input type="number" />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div>
                                            <Button variant="outline-dark">Tambah Keranjang</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Col >

                        </Row>

                    </Container>


                </div>
                <KueRekomendasi />
                <FooterComponent />
            </div>

        </>
    )
}

export default detailPage;