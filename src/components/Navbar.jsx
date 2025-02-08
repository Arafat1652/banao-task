import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoSearch } from 'react-icons/io5';
import "../index.css"
import { CiCompass1, CiStar } from 'react-icons/ci';
import { IoMdStar } from 'react-icons/io';
import { FaBell, FaBookmark, FaShoppingCart } from 'react-icons/fa';


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#"><img src="/public/logo.png" alt="" srcset="" /></Navbar.Brand>
        <Form className="d-flex ms-0 ms-lg-3">
            <Form.Control
              type="search"
              placeholder="SEARCH HEAR"
              className="rounded-end-0 bg-gray"
              aria-label="Search"
            />
            <Button variant="" className='bg-custom  rounded-0 rounded-end-3'><IoSearch className='text-white' /></Button>
          </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex flex-column flex-lg-row justify-content-between align-items-center gap-lg-4 gap-4"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
          <div style={{marginLeft:'100px'}} className='d-flex ms-0 ms-lg-5 justify-content-center align-items-center'>
            <div style={{padding:'3px'}} className='rounded-circle bg-custom fill'>

          <CiCompass1 size={20} className='text-white '/>
            </div>
            <NavDropdown title="Explore" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <div style={{padding:'3px'}} className='rounded-circle bg-custom fill'>

          <IoMdStar size={20} className='text-white '/>
            </div>
            <NavDropdown title="Hobbies" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          <div className='d-flex gap-4'>
          <FaBookmark size={25} className='' style={{color:'#8064A2'}} />
          <FaBell size={25} className='' style={{color:'#8064A2'}}/>
          <FaShoppingCart size={25} className='' style={{color:'#8064A2'}}/>
          </div>
          <Button variant="" className='px-4' style={{border:'1px solid #8064A2', color: '#8064A2'}}>Sign In</Button>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;