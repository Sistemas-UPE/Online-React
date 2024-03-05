import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Nav, Navbar, NavDropdown} from 'react-bootstrap';
import NavVinculacion from './navMenu/NavVinculacion';
import { Link,NavLink } from 'react-router-dom';


export function NavGob() {
    return (
      <Navbar expand="lg" className="navbar-gobA">
        <Container>
          <Navbar.Brand href="http://www.hidalgo.gob.mx/"><img alt="gob.mx" src="https://cdn.hidalgo.gob.mx/transicion/hidalgo.gob.mx.png" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end navbar-gobA">
            <Nav className="navbar-gobA">
              <Nav.Link className="navbar-gobA" href="http://ruts.hidalgo.gob.mx/"><strong>Trámites y Servicios</strong></Nav.Link>
              <Nav.Link className="navbar-gobA" href="http://gobierno.hidalgo.gob.mx/">Gobierno</Nav.Link>
              <Nav.Link className="navbar-gobA" href="http://estado.hidalgo.gob.mx/" >Estado</Nav.Link>
              <Nav.Link className="navbar-gobA" href="http://www.hidalgo.gob.mx/buzon">Buzón Ciudadano</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  export function NavUpe() {
    return (
      <Navbar expand="lg" className="navbar-gobB" >
        <Container>
          <Navbar.Brand href="/">
            <img src="/img/base/nav.png" alt='HOME' height="65" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/About/"><strong>¿Quiénes somos?</strong></Nav.Link>
              <NavDropdown title="Oferta Educativa">
                  <NavDropdown.Item as={Link} to="/PE/IE/"><i class="fa fa-graduation-cap"></i> | Ingeniería en Energía</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/PE/IP/"><i class="fa fa-graduation-cap"></i> | Ingeniería Petrolera</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/PE/ILT/"><i class="fa fa-graduation-cap"></i> | Ingeniería en Logística y Transporte</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/PE/ISIE/"><i class="fa fa-graduation-cap"></i> | Ingeniería en Seguridad para la Industria Energética</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/PE/MGP/"><i class=" fa fa-user-graduate"></i> | Maestría en Gestión del Petróleo</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Servicios">
                  <NavDropdown.Item href="PDF/GUIA_TITULOELECTRONICO.pdf"><i class="fa fa-briefcase" aria-hidden="true"></i> | Tramite de Titulación</NavDropdown.Item>
                  <NavDropdown.Item href="http://www.upenergia.edu.mx/SIAUPE/login.aspx"><i class="fa fa-sitemap" aria-hidden="true"></i> | SIAA-UPE</NavDropdown.Item>
                  <NavDropdown.Item href="#"><i class="fa fa-clipboard" aria-hidden="true"></i> | Revalidación</NavDropdown.Item>
              </NavDropdown>
              <NavVinculacion />
              <NavDropdown title="Marco Legal">
                  <NavDropdown.Item href="PDF/decretoCreacion_2014.pdf"><i class="fa fa-clipboard" aria-hidden="true"></i> | Decreto de creación 2014</NavDropdown.Item>
                  <NavDropdown.Item href="PDF/decretoCreacion_2016.pdf"><i class="fa fa-clipboard" aria-hidden="true"></i> | Decreto de creación 2016</NavDropdown.Item>
                  <NavDropdown.Item href="PDF/codigoEtica.pdf"><i class="fa fa-clipboard" aria-hidden="true"></i> | Código de ética</NavDropdown.Item>
                  <NavDropdown.Item href="cepci.html"><i class="fa fa-clipboard" aria-hidden="true"></i> | CEyPCI de la UPE</NavDropdown.Item>
                  <NavDropdown.Item href="PDF/LineamientosDeAlumnos.pdf"><i class="fa fa-clipboard" aria-hidden="true"></i> | Lineamientos para alumnos</NavDropdown.Item>
                  <NavDropdown.Item href="Transparencia/48RDTL/transparencia.html"><i class="fa fa-clipboard" aria-hidden="true"></i> | Transparencia</NavDropdown.Item>
                  <NavDropdown.Item href="PDF/Pronunciamiento_UPE.pdf"><i class="fa fa-clipboard" aria-hidden="true"></i> | Pronunciamiento "Cero Tolerancia" a conductas de acoso sexual</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="http://estado.hidalgo.gob.mx/" >Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }