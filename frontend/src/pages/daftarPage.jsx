import NavComponent from "../components/NavComponent";
import { Container, Row, Col, Form, Button, } from "react-bootstrap"
import { Link } from "react-router-dom"
import FooterComponent from "../components/FooterComponent";
const daftarPage = () => {
    return (
        <>
            <div className="daftar">
                <NavComponent />

                <Container>
                    <Row>
                        <Col >
                            <div className="title">
                                <h2>Buat akun untuk mulai <br /> pengalaman travellingmu!</h2>
                                <p>Buat akun untuk mulai memesan tiket</p>

                            </div>
                            <Form action="/masuk">
                                <Row>
                                    <Col lg={6}>
                                        <Form.Label>Nama lengkap</Form.Label>
                                        <Form.Control Type="text" placeholder="Masukkan nama lengkap" required></Form.Control>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Label>Nomor telepon</Form.Label>
                                        <Form.Control Type="text" placeholder="Masukkan nomor Telepon" required></Form.Control>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={6}>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control Type="email" placeholder="Masukkan Email" required></Form.Control>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Label>Buat Password</Form.Label>
                                        <Form.Control Type="password" placeholder="Masukkan Password" required></Form.Control>
                                    </Col>
                                </Row>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-5 mt-3">
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={`Saya sudah mengisi data dengan benar`}
                                        />

                                    </div>
                                ))}
                                <Button type="submit" className="btn-utama w-100">Buat akun</Button>

                            </Form>

                            <p className="punya-akun">sudah punya akun? <Link to="/masuk">masuk</Link></p>
                        </Col>
                    </Row>
                </Container>
                
            </div>
            <FooterComponent />
        </>
    );
}

export default daftarPage;