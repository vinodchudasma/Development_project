import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineUser, AiOutlineUnlock, AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import login from './img/login2.svg';
import { Link } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const togglePassword = () => {
        setShow(!show);
    };

    const handleLogin = () => {
        if (username === "1234" && password === "1234") {
            setIsLoggedIn(true);
            navigate("/header");
        } else {
            setError("Invalid username or password!");
        }
    };

    return (
        <Container fluid className="p-4">
            <Row>
                <Col lg={6} md={6}>
                    <h3>Viewcontent</h3>
                </Col>
                <Col lg={6} md={6} className='text-end'>
                    <Link to='/dashboard'>AdminLTE3</Link> / Login page
                </Col>
            </Row>
            <hr />
            <Row className="align-items-center mt-5 border rounded border-2 p-3">
                
                <Col lg={6} className="d-lg-block d-none">
                    <div>
                        <img src={login} alt="" className="img-fluid" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div>
                        <h5 className="text-danger text-center">*Username , password, Forgate Password Working  Processing*</h5>
                        <h6 className="text-danger text-center">* Current Site login ID is :- 1234 *</h6>
                        <h6 className="text-danger text-center">* Current Site password is :-1234 *   </h6>
                        <h3 className="mb-5 loginpage p-3 text-white rounded text-center">Login Page</h3>
                        {error && <p className="text-danger text-center">{error}</p>}

                        <label className="mb-2 fw-bold">User Name</label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text><AiOutlineUser /></InputGroup.Text>
                            <Form.Control
                                placeholder="Enter Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </InputGroup>

                        <label className="mb-2 fw-bold">Password</label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text><AiOutlineUnlock /></InputGroup.Text>
                            <Form.Control
                                placeholder="Enter Password"
                                type={show ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <InputGroup.Text onClick={togglePassword}>
                                {show ? <AiTwotoneEyeInvisible /> : <AiFillEye />}
                            </InputGroup.Text>
                        </InputGroup>

                        <a href="#">Forgot Password?</a>
                        <div className="text-center mt-3">
                            <button className="login_btn" onClick={handleLogin}>Login</button>
                        </div>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
