import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineUser, AiOutlineUnlock } from "react-icons/ai";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Adduser = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    useEffect(() => {
        if (location.state) {
            setUsername(location.state.username);
            setPassword(location.state.password);
            setEditIndex(location.state.index);
        }
    }, [location.state]);
    const handleSaveUser = () => {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        if (!username || !password) {
            alert("Username and Password are required!");
            return;
        }

        if (editIndex !== null) {
            users[editIndex] = { username, password };
        } else {
            users.push({ username, password });
        }

        localStorage.setItem("users", JSON.stringify(users));
        navigate("/viewuser");
    };

    return (
        <Container fluid className="p-3">
            <Row className='align-items-center p-2 bg-warning mx-0 rounded '>
                <Col lg={6} sm={6}>
                    <h3>{editIndex !== null ? "Edit User" : "Add User"}</h3>
                </Col>
                <Col lg={6} sm={6} className='text-end'>
                    <Link to='/dashbord'>Home</Link>/{editIndex !== null ? "Edit User" : "Add User"}
                </Col>
            </Row>
            <hr />
            <div className=" d-flex align-items-center justify-content-center">
                <div className="login_box">
                    <div className="user_heading">
                        <h1>{editIndex !== null ? "Edit User" : "New User"}</h1>
                    </div>
                    <InputGroup className="mb-3">
                        <InputGroup.Text><AiOutlineUser /></InputGroup.Text>
                        <Form.Control
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text><AiOutlineUnlock /></InputGroup.Text>
                        <Form.Control
                            placeholder="Password"
                            type="text"  
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </InputGroup>
                    <div className="text-center">
                        <button className="login_btn" onClick={handleSaveUser}>
                            {editIndex !== null ? "Update User" : "Add User"}
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Adduser;
