import { Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineUser, AiOutlineUnlock, AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import login from './img/login2.svg'
import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
    // ===========for view password======================start======
    let [show, setshow] = useState(false)
    let Password = () => {
        (!show) ? setshow(true) : setshow(false)
    }
    // ===========for view password======================End======


    return (
        <>
            <Container fluid className="p-4">
                <Row>
                    <Col lg={6} md={6}>
                        <h3>Viewcontent</h3>

                    </Col>
                    <Col lg={6} md={6} className='text-end '>
                        <Link to='/dashbord'>Home</Link>/Viewcourse
                    </Col>
                </Row>
                <hr />
                <Row className="align-items-center mt-5 border rounded border-2 p-3">
                    <Col lg={6} className="d-lg-block d-none" >
                        <div className="">
                            <img src={login} alt="" className="img-fluid" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="">
                            <h3 className="mb-5 loginpage p-3 text-white rounded text-center">Login Page</h3>
                            <label className="mb-2 fw-bold">User Name</label>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><AiOutlineUser></AiOutlineUser> </InputGroup.Text>
                                <Form.Control
                                    placeholder="Enter Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <label className="mb-2 fw-bold">Password</label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><AiOutlineUnlock></AiOutlineUnlock> </InputGroup.Text>
                                <Form.Control
                                    placeholder=" EnterPassword"
                                    aria-label="Username"
                                    type={`${(show) ? 'text' : 'password'}`}
                                    aria-describedby="basic-addon1"
                                />
                                <InputGroup.Text onClick={Password} id="basic-addon1">{show ? <AiTwotoneEyeInvisible /> : <AiFillEye />} </InputGroup.Text>
                            </InputGroup>
                            <a href="$">Forgot Password ?</a>
                            <div className="text-center">
                                <button className="login_btn">Login</button>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    )
}
export default Login;