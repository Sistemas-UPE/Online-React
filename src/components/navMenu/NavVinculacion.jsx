import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, NavDropdown,Container,Col,Row} from 'react-bootstrap';

function MenuHeadersExample() {
  return (
    <NavDropdown title="Vinculación" data-bs-theme="light" align={{ lg: 'end' }} >
      <Container className='eventsNav'>
      <Row>
          <Col >
            <Dropdown.Header><h6><i class="fa fa-person-digging"></i> ESTANCIAS</h6></Dropdown.Header>
            <Dropdown.Item  href="./vinculacion/estancia.html#procedimiento"><i class="fa fa-angle-right" aria-hidden="true"></i> Procedimiento</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/estancia.html#vincular"><i class="fa fa-angle-right" aria-hidden="true"></i> ¿Cómo vincular a una empresa?</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/estancia.html#responsabilidades"><i class="fa fa-angle-right" aria-hidden="true"></i> Responsabilidades</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/estancia.html#documentosFormatos"><i class="fa fa-angle-right" aria-hidden="true"></i> Documentos y formatos</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/estancia.html#empresas"><i class="fa fa-angle-right" aria-hidden="true"></i> Empresas</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/estancia.html#contacto"><i class="fa fa-angle-right" aria-hidden="true"></i> Contacto</Dropdown.Item >
          </Col>
          <Col >
            <Dropdown.Header><h6><i class="fa-solid fa-business-time"></i> ESTADÍAS</h6></Dropdown.Header>
            <Dropdown.Item  href="./vinculacion/estadia.html#procedimiento"><i class="fa fa-angle-right" aria-hidden="true"></i> Procedimiento</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/estadia.html#vincular"><i class="fa fa-angle-right" aria-hidden="true"></i> ¿Cómo vincular a una empresa?</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/estadia.html#responsabilidades"><i class="fa fa-angle-right" aria-hidden="true"></i> Responsabilidades</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/estadia.html#documentosFormatos"><i class="fa fa-angle-right" aria-hidden="true"></i> Documentos y formatos</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/estadia.html#empresas"><i class="fa fa-angle-right" aria-hidden="true"></i> Empresas</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/estadia.html#contacto"><i class="fa fa-angle-right" aria-hidden="true"></i> Contacto</Dropdown.Item >
          </Col>
        
          <Col >
            <Dropdown.Header><h6><i class="fa-brands fa-gg-circle"></i> FORMACIÓN DUAL Y EN ALTERNANCIA</h6></Dropdown.Header>
            <Dropdown.Item  href="./vinculacion/formaciondual.html#procedimiento"><i class="fa fa-angle-right" aria-hidden="true"></i> Procedimiento</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/formaciondual.html#vincular"><i class="fa fa-angle-right" aria-hidden="true"></i> ¿Cómo vincular a una empresa?</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/formaciondual.html#responsabilidades"><i class="fa fa-angle-right" aria-hidden="true"></i> Responsabilidades</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/formaciondual.html#documentosFormatos"><i class="fa fa-angle-right" aria-hidden="true"></i> Documentos y formatos</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/formaciondual.html#contacto"><i class="fa fa-angle-right" aria-hidden="true"></i> Contacto</Dropdown.Item >
          </Col>
        
          <Col>
            <Dropdown.Header><h6><i class="fa-solid fa-user-graduate"></i> EGRESAD@S</h6></Dropdown.Header>
            <Dropdown.Item  href="./vinculacion/egresados.html#procedimiento"><i class="fa fa-angle-right" aria-hidden="true"></i> Procedimiento</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/egresados.html#empresas"><i class="fa fa-angle-right" aria-hidden="true"></i> Empresas</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/egresados.html#CasosExito"><i class="fa fa-angle-right" aria-hidden="true"></i> Casos de éxito</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/egresados.html#upeTips"><i class="fa fa-angle-right" aria-hidden="true"></i> UPE tips</Dropdown.Item >
          </Col>
        
          <Col>
            <Dropdown.Header><h6><i class="fa-brands fa-usb"></i> SERVICIOS TECNOLÓGICOS</h6></Dropdown.Header>
            <Dropdown.Item  href="./vinculacion/serviciostecnologicos.html#definicion"><i class="fa fa-angle-right" aria-hidden="true"></i> Centro de Protección de Invenciones y Marcas (CePIM)</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/serviciostecnologicos.html#educacion-continua"><i class="fa fa-angle-right" aria-hidden="true"></i> Educación Continua</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/serviciostecnologicos.html#Consultoria"><i class="fa fa-angle-right" aria-hidden="true"></i> Consultoría</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/serviciostecnologicos.html#Certificaciones-CONOCER"><i class="fa fa-angle-right" aria-hidden="true"></i> Entidad de Certificación y Evaluación (Certificaciones CONOCER)</Dropdown.Item >
            <Dropdown.Item  href="./vinculacion/serviciostecnologicos.html#contacto"><i class="fa fa-angle-right" aria-hidden="true"></i> Contacto</Dropdown.Item >
          </Col>
        </Row>
      </Container>
    </NavDropdown>
  );
}

export default MenuHeadersExample;