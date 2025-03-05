import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { useEffect, useState } from 'react';

const Viewstudent = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
        setStudents(storedStudents);
    }, []);

    const deleteStudent = (index) => {
        const updatedStudents = students.filter((_, i) => i !== index);
        setStudents(updatedStudents);
        localStorage.setItem('students', JSON.stringify(updatedStudents));
    };

    return (
        <>
            <Container  className="p-md-4 p-1 ">
                <Row className='align-items-center p-2 bg-warning mx-0 rounded '>
                    <Col lg={6} sm={6}>
                        <h3>View Students</h3>
                    </Col>
                    <Col lg={6} sm={6} className='text-end'>
                        <Link to='/dashbord'>Home</Link> / View Student
                    </Col>
                </Row>
                <hr />

                <div className="view_user overflow-auto" style={{ maxWidth: "100%", overflowX: "auto" }}>
                    <table className="table table-striped text-center" >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Surname</th>
                                <th>Student Name</th>
                                <th>Father Name</th>
                                <th>Student Contact</th>
                                <th>WhatsApp No.</th>
                                <th>Parent Contact</th>
                                <th>Address</th>
                                <th>DOB</th>
                                <th>Qualification</th>
                                <th>Reference Name</th>
                                <th>Course</th>
                                <th>Course Duration</th>
                                <th>Daily Time</th>
                                <th>Course Contents</th>
                                <th>Total Fees</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Job Responsibility</th>
                                <th>Installment Details</th>
                                <th>Faculty</th>
                                <th>Batch</th>
                                <th>Running Topic</th>
                                <th>Extra Notes</th>
                                <th>Reception Notes</th>
                                <th colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{student.surname}</td>
                                    <td>{student.studentName}</td>
                                    <td>{student.fatherName}</td>
                                    <td>{student.studentContact}</td>
                                    <td>{student.whatsappNo}</td>
                                    <td>{student.parentContact}</td>
                                    <td>{student.address}</td>
                                    <td>{student.dob}</td>
                                    <td>{student.qualification}</td>
                                    <td>{student.referenceName}</td>
                                    <td>{student.course}</td>
                                    <td>{student.courseDuration}</td>
                                    <td>{student.dailyTime}</td>
                                    <td>{student.courseContents}</td>
                                    <td>{student.totalFees}</td>
                                    <td>{student.startDate}</td>
                                    <td>{student.endDate}</td>
                                    <td>{student.jobResponsibility}</td>
                                    <td>{student.installmentDetails}</td>
                                    <td>{student.faculty}</td>
                                    <td>{student.batch}</td>
                                    <td>{student.runningTopic}</td>
                                    <td>{student.extraNotes}</td>
                                    <td>{student.receptionNotes}</td>
                                    <td>
                                        <AiOutlineDelete className="text-danger mx-3" onClick={() => deleteStudent(index)} />
                                        <FiEdit className="text-info mx-3" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Container>
        </>
    );
};

export default Viewstudent;