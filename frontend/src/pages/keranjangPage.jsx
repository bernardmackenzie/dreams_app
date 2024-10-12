import FooterComponent from "../components/FooterComponent";
import NavComponent from "../components/NavComponent";
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Table from 'react-bootstrap/Table';


const keranjangPage = () => {
    return (
        <>

            <div className="search">
                <NavComponent />
                <Container>
                    <div className="hasil">
                        <h3 className="mb-3">Keranjang belanja</h3>
                        <br />
                        <br />
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Gambar</th>
                                    <th>Produk</th>
                                    <th>Harga</th>
                                    <th>Jumlah</th>
                                    <th>Subtotal</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><img src="../src/assets/img-cake-mufin.png" width="150vh" className="img-thumbnail" alt="..."></img></td>
                                    <td>Cake Mufin</td>
                                    <td>220k</td>
                                    <td>1</td>
                                    <td>220k</td>
                                    <td><Button>Hapus</Button></td>
                                    
                                </tr>
                               
                            </tbody>
                        </Table>

                       

                        <Row className="card-pilihan mb-5">
                            <Col>

                                <Row className="text-end">

                                    <Col lg={2} className="text-center">
                                        <br />
                                        <h5>Total  Rp 220.000</h5>
                                    </Col>

                                    <Col lang={10} >
                                        <div className="opsi mt-3">
                                            <Button href="/info" variant="btn btn-utama">Lanjut pemesanan</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                    </div>


                </Container>
                <FooterComponent />
            </div>

        </>
    );
}

export default keranjangPage;