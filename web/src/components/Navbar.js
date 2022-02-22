

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  Container  from 'react-bootstrap/Container';
import {FaGithub} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaRegPaperPlane} from 'react-icons/fa'
function NavBar (){
     const navBarStyle = {
          backgroundColor:"#f6bd60", text:"#000000", fontFamily:"Gochi Hand, cursive", fontSize:"1.5em"
     }
     const nameStyle = {
          fontSize:"xxx-large",
          color:"#6a994e"
     }
     return (
          <div style={{marginBottom:"20px"}}>
               <Navbar collapseOnSelect style={navBarStyle} expand="lg">
                    <Container>
                         <Navbar.Brand href="#home" style={nameStyle} >Lily Li   :-)</Navbar.Brand>
                         
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                                   <Nav.Link href="#home">Home</Nav.Link>
                                   <Nav.Link href="#experience">Experience</Nav.Link>
                                   <NavDropdown title="More" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Blog      <FaRegPaperPlane/ ></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="https://github.com/JiangyanLiNEU?tab=repositories" target="_blank">Github   <FaGithub></FaGithub> </NavDropdown.Item>
                                        <NavDropdown.Item href="https://www.linkedin.com/in/lilylics/" target="_blank">Linkedin    <FaLinkedinIn/></NavDropdown.Item>
                                   </NavDropdown>
                              </Nav>
                              <Nav>
                                   <Nav.Link href="https://www.instagram.com/lily_o3_/" target="_blank"><FaInstagram/></Nav.Link>
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     )
};

export default NavBar;