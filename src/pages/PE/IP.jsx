import React, { useEffect } from 'react';
import { Imagen } from '../../components/Imagen'
import {Container,Col,Row,Accordion} from 'react-bootstrap';


const IP = () => {
  useEffect(() => {document.title = 'UPE | Ingenieria IP';}, []);

  return (
    
    <section className='gob2'>
      <Imagen u2='/img/base/pe/ip.jpg'/>
      <center><Container >
        <Row>
          <Col>
            <i class="fa-solid fa-award fa-5x"></i>
            <h4 >Certificación</h4>
            <p></p>
          </Col>
          <Col>
            <i class="fa-solid fa-handshake fa-5x"></i>
            <h4>Convenio</h4>
            <p></p>
          </Col>
          <Col>
            <i class="fa-solid fa-map-location-dot fa-5x"></i>
            <h4>Movilidad</h4>
            <p></p>
          </Col>
        </Row>
      </Container></center>
      <Container >
          <h2>CICLOS DE FORMACIÓN</h2>

          <Accordion defaultActiveKey="0" >
          <Accordion.Item  eventKey="0">
            <Accordion.Header className='tapBos'>Primer Ciclo de Formación</Accordion.Header>
            <Accordion.Body>
              <Container>
              <div class="row">
                <div class="col-lg-4">
                  <ul class="list-group">
                    <li class="list-group-item list-group-item-dark">Primer Cuatrimestre</li>
                    <li class="list-group-item">Inglés I</li>
                    <li class="list-group-item">Valores del Ser</li>
                    <li class="list-group-item">Cálculo diferencial</li>
                    <li class="list-group-item">introducción a la física</li>
                    <li class="list-group-item">introducción a la ingeniería petrolera</li>
                    <li class="list-group-item">geología de exploración</li>
                    <li class="list-group-item">seguridad en instalaciones petroleras</li>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <ul class="list-group">
                    <li class="list-group-item list-group-item-dark">Segundo Cuatrimestre</li>
                    <li class="list-group-item">Inglés II</li>
                    <li class="list-group-item">Inteligencia Emocional.</li>
                    <li class="list-group-item">Álgebra lineal</li>
                    <li class="list-group-item">Cálculo vectorial</li>
                    <li class="list-group-item">Química general</li>
                    <li class="list-group-item">Geología de exploración</li>
                    <li class="list-group-item">Metodología de la investigación</li>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <ul class="list-group">
                    <li class="list-group-item list-group-item-dark">Tercer Cuatrimestre</li>
                    <li class="list-group-item">Inglés III</li>
                    <li class="list-group-item">Desarrollo Interpersonal</li>
                    <li class="list-group-item">Ecuaciones diferenciales</li>
                    <li class="list-group-item">Dinámica</li>
                    <li class="list-group-item">Registros Geofísicos</li>
                    <li class="list-group-item">Introducción a yacimientos</li>
                    <li class="list-group-item">Optativa</li>
                  </ul>
                </div>
              </div>
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Segundo Ciclo de Formación</Accordion.Header>
            <Accordion.Body>
              <Container>
                <div class="row">
                  <div class="col-lg-4">
                    <ul class="list-group">
                      <li class="list-group-item list-group-item-dark">Cuarto Cuatrimestre</li>
                      <li class="list-group-item">Inglés IV</li>
                      <li class="list-group-item">Habilidades del Pensamiento</li>
                      <li class="list-group-item">Termodinámica</li>
                      <li class="list-group-item">Electricidad y magnetismo</li>
                      <li class="list-group-item">Caracterización estadística de yacimientos</li>
                      <li class="list-group-item">Introducción a la perforación</li>
                      <li class="list-group-item list-group-item-danger">Estancia I </li>
                    </ul>
                  </div>
                  <div class="col-lg-4">
                    <ul class="list-group">
                      <li class="list-group-item list-group-item-dark">Quinto Cuatrimestre</li>
                      <li class="list-group-item">Inglés V</li>
                      <li class="list-group-item">Habilidades Organizacionales</li>
                      <li class="list-group-item">Mecánica de fluidos</li>
                      <li class="list-group-item">Métodos numéricos</li>
                      <li class="list-group-item">Caracterización dinámica de yacimientos</li>
                      <li class="list-group-item">Ingeniería de perforación de pozos</li>
                      <li class="list-group-item">Fluido de perforación</li>
                    </ul>
                  </div>
                  <div class="col-lg-4">
                    <ul class="list-group">
                      <li class="list-group-item list-group-item-dark">Sexto Cuatrimestre</li>
                      <li class="list-group-item">Inglés VI</li>
                      <li class="list-group-item">Ética Profesional</li>
                      <li class="list-group-item">Probabilidad y estadística</li>
                      <li class="list-group-item">Terminación y mantenimiento de pozos</li>
                      <li class="list-group-item">Propiedades de los fluidos petroleros</li>
                      <li class="list-group-item">Programación</li>
                      <li class="list-group-item">Optativa</li>
                    </ul>
                  </div>
                </div>
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Tercer Ciclo Formación</Accordion.Header>
            <Accordion.Body>
              <Container>
                <div class="row">
                  <div class="col-lg-3">
                    <ul class="list-group">
                      <li class="list-group-item text-center list-group-item-dark">Séptimo
                        Cuatrimestre</li>
                      <li class="list-group-item">Inglés VII</li>
                      <li class="list-group-item">Flujo multifásico en tuberías</li>
                      <li class="list-group-item">Recuperación secundaria y mejorada</li>
                      <li class="list-group-item">Sistema de bombeo y compresión</li>
                      <li class="list-group-item">Estimulación de pozos</li>
                      <li class="list-group-item">Ingeniería de producción</li>
                      <li class="list-group-item list-group-item-info">Estancia II </li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
                    <ul class="list-group">
                      <li class="list-group-item text-center list-group-item-dark">Octavo Cuatrimestre
                      </li>
                      <li class="list-group-item">Inglés VIII</li>
                      <li class="list-group-item">Software de ingeniería petrolera</li>
                      <li class="list-group-item">Sistemas artificiales de producción </li>
                      <li class="list-group-item">Dasurty manejo de la producción</li>
                      <li class="list-group-item">Introducción a la economía energética</li>
                      <li class="list-group-item">Normatividad de la introducción petrolera</li>
                      <li class="list-group-item">Automatización y control</li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
                    <ul class="list-group">
                      <li class="list-group-item text-center list-group-item-dark">Noveno Cuatrimestre
                      </li>
                      <li class="list-group-item">Inglés IX</li>
                      <li class="list-group-item">Planeación y evaluación de proyectos</li>
                      <li class="list-group-item">Administración integral de yacimientos</li>
                      <li class="list-group-item">Perforación y terminación en aguas profundas</li>
                      <li class="list-group-item">Simulación de yacimientos</li>
                      <li class="list-group-item">Comercialización petrolera</li>
                      <li class="list-group-item">Optativa</li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
                    <ul class="list-group text-center">
                      <li class="list-group-item list-group-item-dark">Décimo Cuatrimestre</li>
                      <li class="list-group-item list-group-item-warning">E</li>
                      <li class="list-group-item list-group-item-warning">S</li>
                      <li class="list-group-item list-group-item-warning">T</li>
                      <li class="list-group-item list-group-item-warning">A</li>
                      <li class="list-group-item list-group-item-warning">D</li>
                      <li class="list-group-item list-group-item-warning">Í</li>
                      <li class="list-group-item list-group-item-warning">A</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <button type="button" class="btn btnGob" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa-solid fa-file-export"></i>  Accede a la documentación
                  </button>
                </div>
              </Container>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  )
}

export default IP
