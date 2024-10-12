import NavComponent from "../components/NavComponent";
import { Container, Row, Col, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom";
import PromoComponent from "../components/PromoComponent";
import FooterComponent from "../components/FooterComponent";


const menuPage = () => {
    return (
        <>
            <div className="menu">
                <div className="hero-menu">
                    <NavComponent />
                    <Container>
                        <Row>
                            <Col lg={5}>
                                <div className="deskripsi-hero">
                                    <h1>Kami rekomendasikan menu kue terbaik.</h1>
                                    <Button variant="outline-dark">Pesan Sekarang</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>



                <div className="makanan-kue">
                    <Container>
                        <h2>Menu terbaik kami</h2>
                        <Row className="mt-3">
                            <Col lg={3}>
                                <Card >
                                    <Card.Img variant="top" src="../src/assets/img-cake-blackforest.png" />
                                    <Card.Body>
                                        <Row>
                                            <Col lg={12}>
                                                <Card.Title>Cake blackforest</Card.Title>
                                            </Col>
                                        </Row>
                                        <Row>
                                        <Col lg={12}>
                                            <Card.Title className="cost py-3">Rp. 210.000</Card.Title>
                                                <Link to="/detail"> 
                                                    <Button variant="primary">Beli Sekarang</Button>
                                                </Link>
                                            </Col>
                                        </Row>

                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={3}>
                                <Card >
                                    <Card.Img variant="top" src="../src/assets/img-choco-cupcake.png" />
                                    <Card.Body>
                                        <Row>
                                            <Col lg={12}>
                                                <Card.Title>Choco cupcake</Card.Title>
                                            </Col>
                                            </Row>
                                            <Row>
                                        <Col lg={12}>
                                            <Card.Title className="cost py-3">Rp. 20.000</Card.Title>
                                                <Link to="/detail"> 
                                                    <Button variant="primary">Beli Sekarang</Button>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={3}>
                                <Card >
                                    <Card.Img variant="top" src="../src/assets/img-cheese-cake.png" />
                                    <Card.Body>
                                        <Row>
                                            <Col lg={12}>
                                                <Card.Title>Cheese cake</Card.Title>
                                            </Col>
                                        </Row>
                                        <Row>
                                        <Col lg={12}>
                                            <Card.Title className="cost py-3">Rp. 210.000</Card.Title>
                                                <Link to="/detail"> 
                                                    <Button variant="primary">Beli Sekarang</Button>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={3}>
                                <Card >
                                    <Card.Img variant="top" src="../src/assets/img-tiramisu-cake.png" />
                                    <Card.Body>
                                        <Row>
                                            <Col lg={12}>
                                                <Card.Title>Tiramisu cake</Card.Title>
                                            </Col>
                                            </Row>
                                            <Row>
                                        <Col lg={12}>
                                            <Card.Title className="cost py-3">Rp. 250.000</Card.Title>
                                                <Link to="/detail"> 
                                                    <Button variant="primary">Beli Sekarang</Button>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <div className="makanan-cake">
                    <Container>
                        <Row className="mt-3">
                            <Col lg={3}>
                                <Card >
                                    <Card.Img variant="top" src="../src/assets/img-cake-gluten.png" />
                                    <Card.Body>
                                        <Row>
                                            <Col lg={12}>
                                                <Card.Title>Cake gluten</Card.Title>
                                            </Col>
                                        </Row>
                                        <Row>
                                        <Col lg={12}>
                                            <Card.Title className="cost py-3">Rp. 25.000</Card.Title>
                                                <Link to="/detail"> 
                                                    <Button variant="primary">Detail</Button>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={3}>
                                <Card >
                                    <Card.Img variant="top" src="../src/assets/img-cake-mufin.png" />
                                    <Card.Body>
                                        <Row>
                                            <Col lg={6}>
                                                <Card.Title>Cake <br /> mufin</Card.Title>
                                            </Col>
                                            <Col lg={6}>
                                                <Card.Text>Harga </Card.Text>
                                                {/* <Card.Title className="cost">IDR 220K</Card.Title> */}
                                                <Link to="/keranjang"> IDR 220K</Link>
                                            </Col>

                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={3}>
                                <Card >
                                    <Card.Img variant="top" src="../src/assets/img-cake-quilling.png" />
                                    <Card.Body>
                                        <Row>
                                            <Col lg={6}>
                                                <Card.Title>Cake <br /> quilling</Card.Title>
                                            </Col>
                                            <Col lg={6}>
                                                <Card.Text>Harga </Card.Text>
                                                {/* <Card.Title className="cost">IDR 300K</Card.Title> */}
                                                <Link to="/keranjang"> IDR 300K</Link>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={3}>
                                <Card >
                                    <Card.Img variant="top" src="../src/assets/img-chocolate-cupcake.png" />
                                    <Card.Body>
                                        <Row>
                                            <Col lg={6}>
                                                <Card.Title>Chocolate cupcake</Card.Title>
                                            </Col>
                                            <Col lg={6}>
                                                <Card.Text>Harga </Card.Text>
                                                {/* <Card.Title className="cost">IDR 25K</Card.Title> */}
                                                <Link to="/keranjang"> IDR 25K</Link>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <PromoComponent/>
                <FooterComponent/>
                
            </div>
        </>
        
    );
}

export default menuPage;