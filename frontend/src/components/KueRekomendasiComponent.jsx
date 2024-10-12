import { Container, Row, Col, Card } from "react-bootstrap";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";


const KueRekomendasi = () => {
    const [KueRekomendasi,setKueRekomendasi] = useState ([]);
    const getKueRekomendasi = async() => {
        try {
            const hasilkue = await axios.get("http://127.0.0.1:5000/api/produk");
            setKueRekomendasi(hasilkue.data.cake);
            console.log(hasilkue.data.cake);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
getKueRekomendasi();
    },[]);
    return (
        <>
            <div className="mt-5">
                <Container>
                    <h5>Rekomendasi yang kamu suka</h5>
                    <Row className="mt-3">
                        { 
                            KueRekomendasi.filter
                            (
                            data =>data.isRecommendation
                            ).map((data, index) =>(
                            <Col lg={3} key={index}>
                                <Card >
                                    <Card.Img variant="top" src={`http://127.0.0.1:5000/images/${data.gambar}`} />
                                    <Card.Body>
                                        <Row>
                                            <Col lg={12}>
                                                <Card.Title>{data.namaProduk}</Card.Title>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={12}>
                                                <Card.Text>
                                                    Mulai dari <span style={{ color: 'red' }}>{data.harga}</span>
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            ))
                        }

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default KueRekomendasi;