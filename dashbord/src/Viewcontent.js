import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";


const Viewcontent = () => {
  return (
    <>
      <Container fluid className="p-md-4 p-1">
        <Row className='align-items-center p-2 bg-warning mx-0 rounded  '>
          <Col lg={6} sm={6} className=''>
            <h3>Viewcontent</h3>
          </Col>

          <Col lg={6} sm={6} className='text-end'>
            <Link to='/dashbord'>Home</Link>/Viewcontent
          </Col>
        </Row>
        <hr />

        <div className="view_user overflow-y-scroll">

          <table className="table table-striped text-center  ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">UserName</th>
                <th scope="col">Content</th>
                <th scope="col">Fees</th>
                <th scope="col">Duration</th>

                <th scope="col" colSpan={2}>Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>@Vinod Chudasma </td>
                <td>ReactJs</td>
                <td>55000</td>
                <td>8 Month</td>

                <td ><AiOutlineDelete className="text-danger mx-3"></AiOutlineDelete><FiEdit className="text-info mx-3"></FiEdit> </td>
                

              </tr>

            </tbody>
          </table>
        </div>

      </Container>
    </>
  )
}

export default Viewcontent
