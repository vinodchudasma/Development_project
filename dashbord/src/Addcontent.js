import { Container,Row,Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

const Addcontent = () => {
    return (
        <>
            <Container >
                <Row className='align-items-center p-2 bg-warning mx-0 rounded  '>
                    <Col lg={6} sm={6} className=''>
                        <h3>Viewcontent</h3>
                    </Col>

                    <Col lg={6} sm={6} className='text-end'>
                        <Link to='/dashbord'>Home</Link>/AddContent
                    </Col>
                </Row>
                <hr />
                <div className=" d-flex align-items-center justify-content-center">
                    <div className="content_box">
                        <div className="user_heading">
                            <h1>Choice Your Course</h1>
                        </div>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label className="fw-bold">Select Course</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option> select Course</option>
                                <option value="1">Diploma</option>
                                <option value="2">BE</option>
                                <option value="3">BCAS</option>
                            </Form.Select>

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label className="fw-bold">Content</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label className="fw-bold">Fees</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label className="fw-bold">Duration</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <div className="text-center">
                            <button className="login_btn">Add Course</button>

                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Addcontent