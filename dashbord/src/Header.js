import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineSearch, AiOutlineDashboard, AiOutlineUserAdd } from "react-icons/ai";
import Dashbord from './Dashbord';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import { BsBookmarks } from "react-icons/bs";
import { BiBookAdd, BiLogOut } from "react-icons/bi";
import { PiStudentDuotone } from "react-icons/pi";
import Login from './Login';
import Adduser from './Adduser';
import Viewuser from './Viewuser';
import Addstudent from './Addstudent';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Addcourse from './Addcourse';
import Addcontent from './Addcontent';
import Viewcontent from './Viewcontent';
import Viewstudent from './Viewstudent';
import Viewcourse from './Viewcourse';




const Header = () => {
  // ==================================sidebar  collapes===========================================

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [show, setShow] = useState(false);
  // ==================================sidebar  off canvas fo md device===========================================
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [width, setwidth] = useState('290px');
  let [clicks, setclick] = useState(true);
  let handlewidth = () => {
    setclick(true);
    if (clicks) {
      setwidth('73px')
      setclick(false)
    }
    else {
      setwidth('250px')

    }
  }
  return (
    <>

      <div className=" d-flex ">

        <Offcanvas className='width' show={show} onHide={handleClose}>
          <Offcanvas.Header className='pt-1' closeButton>
            <Offcanvas.Title>
              <div className="task p-0 ">
                <div className="logo d-flex  align-items-center">
                  <img src={require('./img/AdminLTELogo.webp')} width={33} alt="" className='img_border rounded-pill' />
                  <h5 className='mb-0 ms-3'>AdminLTE3</h5>
                </div>

              </div>

            </Offcanvas.Title>


          </Offcanvas.Header>
          <div className='scroll'>


            <div className='task'>
              <div className=" d-flex  align-items-center">
                <img src={require('./img/alex.jpg')} width={33} alt="" className='rounded-pill img_border' />
                <h6 className='mb-0 ms-3'>Vinod Chudasma</h6>
              </div>
              <hr className='text-primary' />
            </div>

            <ul className='mx-2 '>
              <li className=''>
                <InputGroup className={`${(clicks) ? 'd-block' : 'd-none'}`}>
                  <div className="d-flex  rounded ">
                    <Form.Control id="inlineFormInputGroup" placeholder="Username" className='input' />
                    <InputGroup.Text><AiOutlineSearch className='color'></AiOutlineSearch> </InputGroup.Text>
                  </div>
                </InputGroup>
              </li>
              {/* <li className=' dash rounded  py-2 '>
                <Link className=' ps-3 bar' onClick={() => setOpen(!open)}>  <AiOutlineDashboard
                  aria-controls="example-collapse-text"
                  aria-expanded={open} className='fs-5 mb-1 me-3'></AiOutlineDashboard>Dashbord1111111</Link>
              </li> */}
              <Collapse in={open} >
                <div>
                  <div id="example-collapse-text" className='w-100py-2 peta_menu rounded py-2'>
                    <Link to='dashbord' className=' ps-4 bar '><AiOutlineDashboard className='fs-5 mb-1 me-3'></AiOutlineDashboard>Dashbord</Link>
                  </div>
                  {/* <div id="example-collapse-text" className='w-100py-2 peta_menu rounded py-2'>
                    <Link to='dashbord' className=' ps-4 bar '><AiOutlineDashboard className='fs-5 mb-1 me-3'></AiOutlineDashboard>Dashbord</Link>
                  </div> */}
                </div>
              </Collapse>


              <li className=' dash rounded  py-2 '>
                <Link className=' ps-3 bar ' onClick={() => setOpen1(!open1)}>  <AiOutlineUserAdd
                  aria-controls="example-collapse-text"
                  aria-expanded={open1} className='fs-5 mb-1 me-3'></AiOutlineUserAdd>Manage User
                </Link>
              </li>
              <Collapse in={open1} >
                <div>
                  <div id="example-collapse-text" className='w-100 mb-2 py-2 peta_menu rounded'>
                    <Link to='adduser' className=' ps-4 bar'><AiOutlineUserAdd className='fs-5 mb-1 me-3'></AiOutlineUserAdd>Add User</Link>
                  </div>
                  <div id="example-collapse-text" className='w-100 py-2 peta_menu rounded'>
                    <Link to='viewuser' className=' ps-4 bar'><AiOutlineUserAdd className='fs-5 mb-1 me-3'></AiOutlineUserAdd>View User</Link>
                  </div>
                </div>
              </Collapse>


              <li className=' dash rounded  py-2 '>
                <Link className=' ps-3 bar ' onClick={() => setOpen2(!open2)}>  <BsBookmarks
                  aria-controls="example-collapse-text"
                  aria-expanded={open2} className='fs-5 mb-1 me-3'></BsBookmarks>Manage Course
                </Link>
              </li>
              <Collapse in={open2} >
                <div>
                  <div id="example-collapse-text" className='w-100 mb-2 py-2 peta_menu rounded'>
                    <Link to='addcourse' className=' ps-4 bar'><AiOutlineUserAdd className='fs-5 mb-1 me-3'></AiOutlineUserAdd>Add Course </Link>
                  </div>
                  <div id="example-collapse-text" className='w-100 py-2 peta_menu rounded'>
                    <Link to='' className=' ps-4 bar'><AiOutlineUserAdd className='fs-5 mb-1 me-3'></AiOutlineUserAdd>View Course</Link>
                  </div>
                </div>
              </Collapse>


              <li className=' dash rounded  py-2 '>
                <Link className=' ps-3 bar ' onClick={() => setOpen3(!open3)}>  <BiBookAdd
                  aria-controls="example-collapse-text"
                  aria-expanded={open3} className='fs-5 mb-1 me-3'></BiBookAdd>Course Contents
                </Link>
              </li>
              <Collapse in={open3} >
                <div className=''>
                  <div id="example-collapse-text" className='w-100 mb-2 py-2 peta_menu rounded'>
                    <Link to='addcontent' className=' ps-4 bar'><BiBookAdd className='fs-5 mb-1 me-3'></BiBookAdd>Add Contents </Link>
                  </div>
                  <div id="example-collapse-text" className='w-100 py-2 peta_menu rounded'>
                    <Link to='viewcontent' className=' ps-4 bar'><BiBookAdd className='fs-5 mb-1 me-3'></BiBookAdd>View Contents</Link>
                  </div>
                </div>
              </Collapse>


              <li className=' dash rounded  py-2 '>
                <Link className=' ps-3 bar ' onClick={() => setOpen4(!open4)}>  <PiStudentDuotone
                  aria-controls="example-collapse-text"
                  aria-expanded={open4} className='fs-5 mb-1 me-3'></PiStudentDuotone>Admissions
                </Link>
              </li>
              <Collapse in={open4} >
                <div className=''>
                  <div id="example-collapse-text" className='w-100 mb-2 py-2 peta_menu rounded'>
                    <Link to='addstudent' className=' ps-4 bar'><PiStudentDuotone className='fs-5 mb-1 me-3'></PiStudentDuotone>Add Students </Link>
                  </div>
                  <div id="example-collapse-text" className='w-100 peta_menu  py-2 rounded'>
                    <Link to='viewstudent' className=' ps-4 bar'><PiStudentDuotone className='fs-5 mb-1 me-3'></PiStudentDuotone>View Students</Link>
                  </div>
                </div>
              </Collapse>

            </ul>
          </div>

        </Offcanvas>
        <div className="left d-md-block d-none border-end border-warning border-2" style={{ width: width }}>
          <div className="task ">
            <div className="logo d-flex  align-items-center">
              <img src={require('./img/AdminLTELogo.webp')} width={33} alt="" className='img_border rounded-pill' />
              <h5 className='mb-0 ms-3'>AdminLTE3</h5>
            </div>
            <hr className='text-primary' />
          </div>
          <div className='scroll'>
            <div className='task'>
              <div className=" d-flex  align-items-center">
                <img src={require('./img/alex.jpg')} width={33} alt="" className='rounded-pill img_border' />
                <h6 className='mb-0 ms-3'>vinod Chudasma</h6>
              </div>
              <hr className='text-primary' />
            </div>

            <ul className='mx-2 '>
              <li className=''>
                <InputGroup className={`${(clicks) ? 'd-block' : 'd-none'}`}>
                  <div className="d-flex  rounded pb-3">
                    <Form.Control id="inlineFormInputGroup" placeholder="Username" className='input' />
                    <InputGroup.Text><AiOutlineSearch className='color'></AiOutlineSearch> </InputGroup.Text>
                  </div>
                </InputGroup>
              </li>
              <li className=' dash rounded  py-2 '>
                <Link className=' ps-3 bar' onClick={() => setOpen(!open)}>  <AiOutlineDashboard
                  aria-controls="example-collapse-text"
                  aria-expanded={open} className='fs-5 mb-1 me-3'></AiOutlineDashboard>Dashbord</Link>
              </li>
              <Collapse in={open} >
                <div>
                  <div id="example-collapse-text" className='w-100py-2 peta_menu rounded py-2'>
                    <Link to='dashbord' className=' ps-4 bar '><AiOutlineDashboard className='fs-5 mb-1 me-3'></AiOutlineDashboard>Dashbord</Link>
                  </div>
                </div>
              </Collapse>


              <li className=' dash rounded  py-2 '>
                <Link className=' ps-3 bar ' onClick={() => setOpen1(!open1)}>  <AiOutlineUserAdd
                  aria-controls="example-collapse-text"
                  aria-expanded={open1} className='fs-5 mb-1 me-3'></AiOutlineUserAdd>Manage User
                </Link>
              </li>
              <Collapse in={open1} >
                <div>
                  <div id="example-collapse-text" className='w-100 mb-2 py-2 peta_menu rounded'>
                    <Link to='adduser' className=' ps-4 bar'><AiOutlineUserAdd className='fs-5 mb-1 me-3'></AiOutlineUserAdd>Add User</Link>
                  </div>
                  <div id="example-collapse-text" className='w-100 py-2 peta_menu rounded'>
                    <Link to='viewuser' className=' ps-4 bar'><AiOutlineUserAdd className='fs-5 mb-1 me-3'></AiOutlineUserAdd>View User</Link>
                  </div>
                </div>
              </Collapse>


              <li className=' dash rounded  py-2 '>
                <Link className=' ps-3 bar ' onClick={() => setOpen2(!open2)}>  <BsBookmarks
                  aria-controls="example-collapse-text"
                  aria-expanded={open2} className='fs-5 mb-1 me-3'></BsBookmarks>Manage Course
                </Link>
              </li>
              <Collapse in={open2} >
                <div>
                  <div id="example-collapse-text" className='w-100 mb-2 py-2 peta_menu rounded'>
                    <Link to='addcourse' className=' ps-4 bar'><AiOutlineUserAdd className='fs-5 mb-1 me-3'></AiOutlineUserAdd>Add Course </Link>
                  </div>
                  <div id="example-collapse-text" className='w-100 py-2 peta_menu rounded'>
                    <Link to='viewcourse' className=' ps-4 bar'><AiOutlineUserAdd className='fs-5 mb-1 me-3'></AiOutlineUserAdd>View Course</Link>
                  </div>
                </div>
              </Collapse>


              <li className=' dash rounded  py-2 '>
                <Link className=' ps-3 bar ' onClick={() => setOpen3(!open3)}>  <BiBookAdd
                  aria-controls="example-collapse-text"
                  aria-expanded={open3} className='fs-5 mb-1 me-3'></BiBookAdd>Course Contents
                </Link>
              </li>
              <Collapse in={open3} >
                <div className=''>
                  <div id="example-collapse-text" className='w-100 mb-2 py-2 peta_menu rounded'>
                    <Link to='addcontent' className=' ps-4 bar'><BiBookAdd className='fs-5 mb-1 me-3'></BiBookAdd>Add Contents </Link>
                  </div>
                  <div id="example-collapse-text" className='w-100 py-2 peta_menu rounded'>
                    <Link to='viewcontent' className=' ps-4 bar'><BiBookAdd className='fs-5 mb-1 me-3'></BiBookAdd>View Contents</Link>
                  </div>
                </div>
              </Collapse>


              <li className=' dash rounded  py-2 '>
                <Link className=' ps-3 bar ' onClick={() => setOpen4(!open4)}>  <PiStudentDuotone
                  aria-controls="example-collapse-text"
                  aria-expanded={open4} className='fs-5 mb-1 me-3'></PiStudentDuotone>Admissions
                </Link>
              </li>
              <Collapse in={open4} >
                <div className=''>
                  <div id="example-collapse-text" className='w-100 mb-2 py-2 peta_menu rounded'>
                    <Link to='addstudent' className=' ps-4 bar'><PiStudentDuotone className='fs-5 mb-1 me-3'></PiStudentDuotone>Add Students </Link>
                  </div>
                  <div id="example-collapse-text" className='w-100 peta_menu  py-2 rounded'>
                    <Link to='viewstudent' className=' ps-4 bar'><PiStudentDuotone className='fs-5 mb-1 me-3'></PiStudentDuotone>View Students</Link>
                  </div>
                </div>
              </Collapse>

            </ul>
          </div>
        </div>
        <div style={{ width: `100%` }}>

          <Navbar expand="lg" className={` align-items-start w-100   `}>

            <Container fluid className='shadow pb-3 height '>
              <FaBarsStaggered className='cursor-pointer bar d-md-block d-none' onClick={() => { handlewidth() }}  ></FaBarsStaggered>
              <FaBarsStaggered className='cursor-pointer bar d-md-none d-block' onClick={handleShow}  ></FaBarsStaggered>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my- my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="#action1" className='mx-2 bar'>Home</Nav.Link>
                  <Nav.Link href="#action2" className='bar mx-2'>Contact</Nav.Link>

                </Nav>
                <div className="icon_size">
                  <Link to='login'>
                    <BiLogOut className='mx-2 icon_size'></BiLogOut>

                  </Link>

                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          


          <Routes>
            <Route path='dashbord' element={<Dashbord />} />
            <Route path='adduser' element={<Adduser />} />
            <Route path='viewuser' element={<Viewuser />} />
            {/* <Route path='login' element={<Login />} /> */}
            <Route path='addstudent' element={<Addstudent />} />
            <Route path='addcourse' element={<Addcourse />} />
            <Route path='addcontent' element={<Addcontent />} />
            <Route path='viewcontent' element={<Viewcontent />} />
            <Route path='viewstudent' element={<Viewstudent />} />
            <Route path='viewcourse' element={<Viewcourse />} />
          </Routes>
        </div>

      </div>








    </>
  )
}
export default Header;