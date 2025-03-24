import { Col, Container, Row } from "react-bootstrap";
import { HiMiniShoppingBag, HiChartBar, HiUserGroup, HiMiniUserGroup, HiUser, HiClock, HiMiniClock, HiMiniBriefcase } from "react-icons/hi2";
import { BsFillPersonPlusFill, BsArrowRightShort } from "react-icons/bs";
import { IoIosPie } from "react-icons/io";
import { Link } from "react-router-dom";

const Dashbord = () => {
    return (
        <>
            <Container fluid className="p-3 ">
                <Row className="p-2 mx-0 bg-warning rounded">
                    <Col >
                        <div className="d-flex align-items-center justify-content-between">
                            <h3>Dashbord</h3>
                            <div>
                                <Link to='/dashbord'>Home</Link>/Dashbord
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr />
                <h1 className="text-center text-dark    "> OUR FACTS AND FIGURES</h1>
                <p className="text-center bg_color" >Interested in building web applications and want to become a skilled web developer? Our Web Development Course is a perfect choice as it gives students a comprehensive understanding of web development technologies such as HTML, CSS, JavaScript, and PHP. With limited batch sizes, highly qualified teachers, Personalised attention, and job-oriented training, our students are well-equipped to secure jobs with top industry players. Join us now and take your first step towards a successful career in web development.</p>
                <Row className="p-3">
                    <Col lg={3} md={6}>
                        <div className="bg-info  text-white rounded mb-lg-0 mb-3 icon_hover ">
                            <div className="d-flex  justify-content-between p-3">
                                <div>
                                    <h3>1 Lac +</h3>
                                    <p>Student Placed</p>
                                </div>
                                <div className="hvr">
                                    <div className="hvr">
                                        <BsFillPersonPlusFill className="card_icon opacity-25"></BsFillPersonPlusFill>
                                    </div>
                                </div>
                            </div>
                            <div className="trans text-center rounded-bottom">
                                <a href="$">Moreinfo</a><BsArrowRightShort className="fs-3"></BsArrowRightShort>

                            </div>
                        </div>
                    </Col>

                    <Col lg={3} md={6}>
                        <div className="bg-success text-white rounded mb-lg-0 mb-3 icon_hover  ">
                            <div className="d-flex  justify-content-between p-3">
                                <div>
                                    <h3>3000+</h3>
                                    <p>Companies TieUp</p>
                                </div>
                                <div className="hvr">
                                    <HiChartBar className="card_icon opacity-25"></HiChartBar>
                                </div>
                            </div>
                            <div className="trans text-center rounded-bottom">
                                <a href="$">Moreinfo</a><BsArrowRightShort className="fs-3"></BsArrowRightShort>
                            </div>

                        </div>
                    </Col>

                    <Col lg={3} md={6}>
                        <div className="bg-warning text-white  rounded mb-lg-0 mb-3 icon_hover ">
                            <div className="d-flex  justify-content-between p-3">
                                <div>
                                    <h3>19+</h3>
                                    <p>Offices in India</p>
                                </div>
                                <div className="hvr">
                                    <BsFillPersonPlusFill className="card_icon opacity-25"></BsFillPersonPlusFill>
                                </div>
                            </div>
                            <div className="trans text-center rounded-bottom">
                                <a href="$">Moreinfo</a><BsArrowRightShort className="fs-3"></BsArrowRightShort>

                            </div>
                        </div>

                    </Col>
                    <Col lg={3} md={6}>
                        <div className="bg-danger text-white rounded mb-lg-0 mb-3 icon_hover   ">
                            <div className="d-flex  justify-content-between p-3">
                                <div>
                                    <h3>50+</h3>
                                    <p>Industry Courses</p>
                                </div>
                                <div className="hvr">
                                    <IoIosPie className="card_icon opacity-25"></IoIosPie>
                                </div>
                            </div>
                            <div className="trans text-center rounded-bottom">
                                <a href="$">Moreinfo</a><BsArrowRightShort className="fs-3"></BsArrowRightShort>

                            </div>
                        </div>


                    </Col>

                </Row>
                <h1 className="text-center text-dark gradient_text"> KEY HIGHLIGHTS</h1>
                <Row className="p-3">
                    <Col lg={3} md={6}>
                        <div className="bg-info text-white text-center rounded mb-lg-0 mb-3 icon_hover ">
                            <div>
                                <h3><HiMiniUserGroup className="card_icon opacity-25"> </HiMiniUserGroup  ></h3>
                                <p className="pb-4">Limited Students Batch</p>
                            </div>
                            
                        </div>
                    </Col>

                    <Col lg={3} md={6}>
                        <div className="bg-warning text-white text-center rounded mb-lg-0 mb-3 icon_hover  ">
                        <div>
                                <h3><HiUser className="card_icon opacity-25" >  </HiUser> </h3>
                                <h6 className="pb-4">Personalised Attention</h6>
                            </div>
                            

                        </div>
                    </Col>

                    <Col lg={3} md={6}>
                        <div className="bg-info text-center  rounded mb-lg-0 mb-3 icon_hover ">
                        <div>
                                <h3><HiMiniUserGroup className="card_icon opacity-25"> </HiMiniUserGroup  ></h3>
                                <h6 className="pb-4">Highly Qualified Teachers</h6>
                            </div>
                            
                        </div>

                    </Col>
                    <Col lg={3} md={6}>
                        <div className="bg-warning text-white text-center rounded mb-lg-0 mb-3 icon_hover   ">
                        <div>
                                <h3><HiClock className="card_icon opacity-25" > </HiClock></h3>
                                <h6 className="pb-4">Flexible Batch Timings</h6>
                            </div>
                            
                        </div>


                    </Col>

                </Row>
                <Row className="p-3">
                    <Col lg={3} md={6}>
                        <div className=" bg-warning text-white text-center rounded mb-lg-0 mb-3 icon_hover ">
                            <div>
                                <h3><HiMiniUserGroup className="card_icon opacity-25"> </HiMiniUserGroup  ></h3>
                                <p className="pb-4">Interactive Learning</p>
                            </div>
                            
                        </div>
                    </Col>

                    <Col lg={3} md={6}>
                        <div className=" bg-info text-white text-center rounded mb-lg-0 mb-3 icon_hover  ">
                        <div>
                                <h3><HiMiniClock className="card_icon opacity-25" />  </h3>
                                <p className="pb-4">Live Projects</p>
                            </div>
                           

                        </div>
                    </Col>

                    <Col lg={3} md={6}>
                        <div className="bg-warning  text-center  rounded mb-lg-0 mb-3 icon_hover ">
                        <div>
                                <h3><HiMiniBriefcase className="card_icon opacity-25" /></h3>
                                <p className="pb-4">Career Support</p>
                            </div>
                            
                        </div>

                    </Col>
                    <Col lg={3} md={6}>
                        <div className="bg-info text-white text-center rounded mb-lg-0 mb-3 icon_hover   ">
                        <div>
                                <h3><HiMiniBriefcase className="card_icon opacity-25" /></h3>
                                <p className="pb-4">Job Oriented Training</p>
                            </div>
                           
                        </div>


                    </Col>

                </Row>
            </Container>
        </>
    )
}
export default Dashbord;