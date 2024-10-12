import { Container, Row, Col, Card, CardBody } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";


const TestimoniComponent = () => {
    const [TestimoniCompnent, setTestimoniComponent] = useState([]);
    const getTestimoniComponent = async () => {
        try {
            const respon = await axios.get("http://127.0.0.1:5000/api/testimoni");
            setTestimoniComponent(respon.data.testimonial);
            console.log(respon.data.testimonial);
        } catch (error) {

        }
    }
    useEffect(() => {
        getTestimoniComponent();
    }, []);

    return (
        <>
            <div className="testimoni">
                <Container>
                    <Row>
                        <Col>
                            <h5>Apa kata mereka tentang kami</h5>
                        </Col>
                    </Row>
                            <Row>
                    {
                        TestimoniCompnent.map((data, index) => (
                                <Col lg={4}  key= {index}>
                                    <Card>
                                        <Row>
                                            <Col md={6}>
                                                <img src={`http://127.0.0.1:5000/images/${data.image}`} className="img-fluid rounded-start" alt="..." />
                                            </Col>
                                            <Col md={6}>
                                                <CardBody>
                                                    <p className="card-text">{data.content}</p>
                                                    <Card.Title >{data.status}</Card.Title>
                                                    <Card.Text>{data.fullname}</Card.Text>
                                                </CardBody>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                        ))
                    }
                            </Row>
                </Container>
            </div>
        </>
    );
}

export default TestimoniComponent;