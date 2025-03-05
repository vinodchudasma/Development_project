import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from "react";

const Addstudent = () => {
    const [studentData, setStudentData] = useState({
        surname: "",
        studentName: "",
        fatherName: "",
        studentContact: "",
        whatsappNo: "",
        parentContact: "",
        address: "",
        dob: "",
        qualification: "",
        referenceName: "",
        course: "",
        courseDuration: "",
        dailyTime: "",
        courseContents: "",
        totalFees: "",
        startDate: "",
        endDate: "",
        jobResponsibility: "",
        installmentDetails: "",
        faculty: "",
        batch: "",
        runningTopic: "",
        extraNotes: "",
        receptionNotes: ""
    });

    const handleChange = (e) => {
        setStudentData({ ...studentData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        let students = JSON.parse(localStorage.getItem("students")) || [];
        students.push(studentData);
        localStorage.setItem("students", JSON.stringify(students));
        alert("Student Data Saved Successfully!");
    };

    return (
        <Container fluid className="p-4">
            <Row className='align-items-center p-2 bg-warning rounded mx-0'>
                <Col lg={6} sm={6}><h3>Add Student</h3></Col>
                <Col lg={6} sm={6} className='text-end'><Link to='/dashboard'>Home</Link>/Addmission</Col>
            </Row>
            <hr />
            <div className="add_student p-4 border">
                <h3 className="text-center mb-5">New Admission</h3>
                <Form>
                    <Row>
                        <Col lg={4}><Form.Group><Form.Label>Surname</Form.Label><Form.Control type="text" name="surname" onChange={handleChange} /></Form.Group></Col>
                        <Col lg={4}><Form.Group><Form.Label>Student Name</Form.Label><Form.Control type="text" name="studentName" onChange={handleChange} /></Form.Group></Col>
                        <Col lg={4}><Form.Group><Form.Label>Father Name</Form.Label><Form.Control type="text" name="fatherName" onChange={handleChange} /></Form.Group></Col>
                    </Row>
                    <Row>
                        <Col lg={4}><Form.Group><Form.Label>Student Contact</Form.Label><Form.Control type="text" name="studentContact" onChange={handleChange} /></Form.Group></Col>
                        <Col lg={4}><Form.Group><Form.Label>WhatsApp No.</Form.Label><Form.Control type="text" name="whatsappNo" onChange={handleChange} /></Form.Group></Col>
                        <Col lg={4}><Form.Group><Form.Label>Parent Contact</Form.Label><Form.Control type="text" name="parentContact" onChange={handleChange} /></Form.Group></Col>
                    </Row>
                    <Row>
                        <Col lg={4}><Form.Group><Form.Label>Address</Form.Label><FloatingLabel controlId="floatingTextarea" label="Full Address"><Form.Control as="textarea" name="address" onChange={handleChange} /></FloatingLabel></Form.Group></Col>
                        <Col lg={4}><Form.Group><Form.Label>DOB</Form.Label><Form.Control type="date" name="dob" onChange={handleChange} /></Form.Group></Col>
                        <Col lg={4}><Form.Group><Form.Label>Qualification</Form.Label><Form.Control type="text" name="qualification" onChange={handleChange} /></Form.Group></Col>
                    </Row>
                    <Row>
                        <Col lg={4}><Form.Group><Form.Label>Reference Name</Form.Label><Form.Control type="text" name="referenceName" onChange={handleChange} /></Form.Group></Col>
                        <Col lg={4}><Form.Group><Form.Label>Select Course</Form.Label><Form.Select name="course" onChange={handleChange}><option> Select Course</option><option value="Frontend Development">Frontend Development</option><option value="Backend Development">Backend Development</option><option value="Fullstack Development">Fullstack Development</option></Form.Select></Form.Group></Col>
                        <Col lg={4}><Form.Group><Form.Label>Course Duration</Form.Label><Form.Control type="text" name="courseDuration" onChange={handleChange} /></Form.Group></Col>
                    </Row>
                    <Row>
                        <Col lg={12}><Form.Group><Form.Label>Course Contents</Form.Label><FloatingLabel controlId="floatingTextarea" label="Course Contents"><Form.Control as="textarea" name="courseContents" onChange={handleChange} /></FloatingLabel></Form.Group></Col>
                    </Row>
                    <Row>
                        <Col lg={3}><Form.Group><Form.Label>Total Fees</Form.Label><Form.Control type="text" name="totalFees" onChange={handleChange} /></Form.Group></Col>
                        <Col lg={3}><Form.Group><Form.Label>Start Date</Form.Label><Form.Control type="date" name="startDate" onChange={handleChange} /></Form.Group></Col>
                        <Col lg={3}><Form.Group><Form.Label>End Date</Form.Label><Form.Control type="date" name="endDate" onChange={handleChange} /></Form.Group></Col>
                    </Row>
                    <Row>
                        <Col lg={4}><Form.Group><Form.Label>Faculty</Form.Label><Form.Select name="faculty" onChange={handleChange}><option value="">Select Faculty</option><option value="mr.x">mr.x</option></Form.Select></Form.Group></Col>
                        <Col lg={4}><Form.Group><Form.Label>Batch</Form.Label><Form.Select name="batch" onChange={handleChange}><option value="">Select Batch</option><option value="8:00 To 10:00">8:00 To 10:00</option></Form.Select></Form.Group></Col>
                        <Col lg={4}><Form.Group><Form.Label>Running Topic</Form.Label><Form.Control type="text" name="runningTopic" onChange={handleChange} /></Form.Group></Col>
                    </Row>
                    <Row>
                        <Col lg={4}><Form.Group><Form.Label>Extra Notes</Form.Label><FloatingLabel controlId="floatingTextarea" label="Extra Notes"><Form.Control as="textarea" name="extraNotes" onChange={handleChange} /></FloatingLabel></Form.Group></Col>
                    </Row>
                    <Row>
                        <Col lg={2} className="m-auto"><button className="border py-2 px-4 login_bg rounded" onClick={handleSubmit}>Submit</button></Col>
                    </Row>
                </Form>
            </div>
        </Container>
    );
};
export default Addstudent;
