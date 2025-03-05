import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

const Addcourse = () => {
    return (
        <>
            <Container fluid  className="p-3">
                <div className="d-flex align-items-center justify-content-between mb-4  ">
                    <h3>Add Course</h3>
                    <div>
                        <Link to='/dashbord'>Home</Link>/Add User
                    </div>
                </div>
                <hr className="" />
                <div className=" d-flex align-items-center justify-content-center">
                    <div className="login_box">
                        <div className="user_heading">
                            <h1>Add Course</h1>
                        </div>
                        <Form.Group className="mb-3 p-4" controlId="formGroupEmail">

                            <Form.Select aria-label="Default select example">
                                <option> select Reference</option>
                                <option value="1">Faculty</option>
                                <option value="2">Owner</option>
                                <option value="3">Land Load</option>
                            </Form.Select>

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
export default Addcourse;