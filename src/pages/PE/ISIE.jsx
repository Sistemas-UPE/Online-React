import React, { useEffect } from 'react';
import { Imagen } from '../../components/Imagen'
import {Container,Col,Row,Accordion} from 'react-bootstrap';


const ISIE = () => {
  useEffect(() => {document.title = 'UPE | Ingenieria ISIE';}, []);

  return (
    
    <section className='gob2'>
      <Imagen  u2='/img/base/pe/isie.jpg'/>
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
                    <li class="list-group-item">Álgebra lineal</li>
                    <li class="list-group-item">Química básica</li>
                    <li class="list-group-item">Introducción a la protección ambiental</li>
                    <li class="list-group-item">Fundamentos de ingeniería Industrial</li>
                    <li class="list-group-item">Análisis y clasificación de riesgos</li>
                    <li class="list-group-item">Expresión oral y escrita I</li>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <ul class="list-group">
                    <li class="list-group-item list-group-item-dark">Segundo Cuatrimestre</li>
                    <li class="list-group-item">Inglés II</li>
                    <li class="list-group-item">Valores del Ser</li>
                    <li class="list-group-item">Funciones matemáticas</li>
                    <li class="list-group-item">Física</li>
                    <li class="list-group-item">Interpretación de planos y diagrama</li>
                    <li class="list-group-item">Seguridad e higiene en el trabajo</li>
                    <li class="list-group-item">Capacitación en seguridad</li>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <ul class="list-group">
                    <li class="list-group-item list-group-item-dark">Tercer Cuatrimestre</li>
                    <li class="list-group-item">Inglés III</li>
                    <li class="list-group-item">Inteligencia Emocional.</li>
                    <li class="list-group-item">Cálculo diferencial</li>
                    <li class="list-group-item">Termodinamica</li>
                    <li class="list-group-item">Electricidad y magnetismo</li>
                    <li class="list-group-item">Seguridad en procesos industriales</li>
                    <li class="list-group-item">Introducción y control de procesos industriales</li>
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
                    <li class="list-group-item">Desarrollo Interpersonal</li>
                      <li class="list-group-item">Cálculo integral</li>
                      <li class="list-group-item">Principios de prevención ambiental</li>
                      <li class="list-group-item">Plan de respuesta emergencias</li>
                      <li class="list-group-item">Gestión de seguridad industrial</li>
                      <li class="list-group-item list-group-item-danger">Estancia I </li>
                    </ul>
                  </div>
                  <div class="col-lg-4">
                    <ul class="list-group">
                      <li class="list-group-item list-group-item-dark">Quinto Cuatrimestre</li>
                      <li class="list-group-item">Inglés V</li>
                      <li class="list-group-item">Habilidades del Pensamiento</li>
                      <li class="list-group-item">Matemáticas para ingeniería I</li>
                      <li class="list-group-item">Estructura de probabilidad de los materiales</li>
                      <li class="list-group-item">Salud y seguridad en el trabajo</li>
                      <li class="list-group-item">Accidental laboral</li>
                      <li class="list-group-item">Probabilidad y estadística</li>
                    </ul>
                  </div>
                  <div class="col-lg-4">
                    <ul class="list-group">
                      <li class="list-group-item list-group-item-dark">Sexto Cuatrimestre</li>
                      <li class="list-group-item">Inglés VI</li>
                      <li class="list-group-item">Habilidades Organizacionales</li>
                      <li class="list-group-item">Matemáticas para ingeniería II</li>
                      <li class="list-group-item">Física para ingeniería</li>
                      <li class="list-group-item">Herramientas de calidad en seguridad</li>
                      <li class="list-group-item">Técnicas de control en seguridad y salud en el trabajo </li>
                      <li class="list-group-item">Estándares de salud ocupacional</li>
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
                      <li class="list-group-item">Ética Profesional</li>
                      <li class="list-group-item">Fundamentos de química analítica</li>
                      <li class="list-group-item">Residuos industriales</li>
                      <li class="list-group-item">Riesgo ambiental</li>
                      <li class="list-group-item">Biodegradación de contaminantes</li>
                      <li class="list-group-item list-group-item-info">Estancia II </li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
                    <ul class="list-group">
                      <li class="list-group-item text-center list-group-item-dark">Octavo Cuatrimestre
                      </li>
                      <li class="list-group-item">Inglés VIII</li>
                      <li class="list-group-item">Interpretación de diagnósticos ambientales</li>
                      <li class="list-group-item">Química de procesos industriales</li>
                      <li class="list-group-item">Residuos y sustancias peligrosas</li>
                      <li class="list-group-item">Manejo de Enfluentes industriales</li>
                      <li class="list-group-item">Buenas prácticas ambientales</li>
                      <li class="list-group-item">Entornos ambientales en la industria</li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
                    <ul class="list-group">
                      <li class="list-group-item text-center list-group-item-dark">Noveno Cuatrimestre
                      </li>
                      <li class="list-group-item">Inglés IX</li>
                      <li class="list-group-item">Procedimientos de seguridad</li>
                      <li class="list-group-item">Auditorías efectivas de seguridad</li>
                      <li class="list-group-item">Sistemas de Mitigación</li>
                      <li class="list-group-item">Sistemas de seguridad salud ocupacional y protección ambiental</li>
                      <li class="list-group-item">Expresión oral y escrita II</li>
                      <li class="list-group-item">Control y prevención ambiental en la industria</li>
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

export default ISIE
