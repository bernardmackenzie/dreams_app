import NavComponent from "../components/NavComponent";
import { Container, Row, Col, Modal, Card, Button, Form, Nav } from "react-bootstrap";
import FooterComponent from "../components/FooterComponent";
// import maskapai from "../assets/ic-lionair.png"
import { useState } from "react";
const profilPage = () => {
    // modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // riwayat transaksi
    const [activeKey, setActiveKey] = useState('transfer');
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedKey) => {
        setActiveKey(selectedKey);
    };

    const renderContent = () => {
        if (activeKey === 'lunas') {
            return (
                <Card className="riwayat">
                    <Row>
                        <Col lg={6}>
                        <p>Nama Pemesan</p>
                        <h5>Budi</h5>
                        </Col>
                        <Col lg={6}>
                        <p>Nama Kue</p>
                        <h5>Cheese cake</h5>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col lg={6}>
                        <p>Tanggal Pengambilan Kue</p>
                        <h5>Senin,  15 agustus 2024</h5>
                        </Col>
                        <Col lg={6}>
                        <p>Total Pembayaran</p>
                        <h5>IDR 205.000</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                        <p> waktu pengambilan kue</p>
                        <h5>11.00</h5>
                        </Col>
                        <Col lg={6}>
                        <p>Status</p>
                        <h6 className="lunas">Belum bayar</h6>
                        </Col>
                    </Row>
                </Card>
            );
        }   else if (activeKey === 'selesai') {
            return (
                <Card className="riwayat">
                <Row>
                    <Col lg={6}>
                    <p>Nama Pemesan</p>
                    <h5>Budi</h5>
                    </Col>
                    <Col lg={6}>
                    <p>Nama Kue</p>
                    <h5>Cheese cake</h5>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col lg={6}>
                    <p>Tanggal Pengambilan Kue</p>
                    <h5>Senin,  15 agustus 2024</h5>
                    </Col>
                    <Col lg={6}>
                    <p>Total Pembayaran</p>
                    <h5>IDR 205.000</h5>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                    <p> waktu pengambilan kue</p>
                    <h5>11.00</h5>
                    </Col>
                    <Col lg={6}>
                    <p>Status</p>
                    <h6 className="selesai">Sudah Bayar</h6>
                    </Col>
                </Row>
            </Card>
            );
        }
        
    }
    
    




    return (
        <>
            <div className="profil">
                <NavComponent />
                <Container>
                    <h5 className="mt-5 mb-3">Informasi profil</h5>
                    <Card className="info">

                        <Row>
                            <Col lg={6}>
                                <p>Nama Lengkap</p>
                                <h5>Budi</h5>
                                <p>Nomor Telepon</p>
                                <h5>08123239819328</h5>
                                <p>Email</p>
                                <h5>Budi@gmail.com</h5>
                            </Col>
                            <Col lg={6} className="opsi">
                                <Button variant="btn btn-info text-light" onClick={handleShow}>  Edit info </Button>
                                <Button variant="btn btn-outline-danger" onCLICK={handleShow}>Keluar akun</Button>
                            </Col>

                        </Row>



                    </Card>

                    <Row className="transaksi">
                        <Col>
                            <h5>Riwayat transaksi</h5>

                            <Nav variant="pills" activeKey={activeKey} onSelect={handleSelect}>
                                <Nav.Item>
                                    <Nav.Link eventKey="lunas">pemesanan Tersedia</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="selesai">Selesai</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg ={6}>
                            {activeKey === "lunas" && renderContent()}
                            {activeKey === "selesai" && renderContent()}
                        </Col>
                    </Row>
                </Container>
                <FooterComponent />
            </div>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan nama lengkap" name="nama"></Form.Control>
                        <Form.Label>Nomor Telepon</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan nomor lengkap" name="Telepon"></Form.Control>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Masukkan gmail " name="email"></Form.Control>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Tutup
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Simpan
                    </Button>
                </Modal.Footer>
            </Modal>


        </>
    );
}

export default profilPage;