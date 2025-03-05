import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { useEffect, useState } from "react";

const Viewuser = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, []);

    const handleDelete = (index) => {
        let updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
    };

    const handleEdit = (index) => {
        navigate("/adduser", { state: { ...users[index], index } });
    };

    return (
        <Container fluid className="p-4">
            <Row className='align-items-center mb-2 bg-warning mx-0 rounded p-2 '>
                <Col lg={6} md={6}><h3>View Users</h3></Col>
                <Col lg={6} md={6} className='text-end'>
                    <Link to='/dashbord'>Home</Link>/View Users
                </Col>
            </Row>
            <hr />
            <div className="view_user overflow-y-scroll">
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Password</th> 
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? users.map((user, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.username}</td>
                                <td>{user.password}</td> 
                                <td>
                                    <AiOutlineDelete 
                                        className="text-danger mx-3 cursor-pointer"
                                        onClick={() => handleDelete(index)}
                                    />
                                    <FiEdit 
                                        className="text-info mx-3 cursor-pointer"
                                        onClick={() => handleEdit(index)}
                                    />
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="4">No Users Found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default Viewuser;
