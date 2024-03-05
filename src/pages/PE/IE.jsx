import React, { useEffect } from 'react';
import { Imagen } from '../../components/Imagen'

import {Container,Col,Row,Accordion} from 'react-bootstrap';

const IE = () => {
  useEffect(() => {document.title = 'UPE | Ingenieria IE';}, []);

  return (
    
    <section className='gob2'>
      <Imagen u2='/img/base/pe/ie.jpg'/>
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
                    <li class="list-group-item">Introducción a la Ingeniería en Energía</li>
                    <li class="list-group-item">Programación</li>
                    <li class="list-group-item">Transformaciones Químicas con Laboratorio</li>
                    <li class="list-group-item">Mecánica con Laboratorio</li>
                    <li class="list-group-item">Cálculo Diferencial</li>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <ul class="list-group">
                    <li class="list-group-item list-group-item-dark">Segundo Cuatrimestre</li>
                    <li class="list-group-item">Inglés II</li>
                    <li class="list-group-item">Inteligencia Emocional.</li>
                    <li class="list-group-item">Seminrario de Ingeniería en Energía Termica.</li>
                    <li class="list-group-item">Laboratorio de Simulación y Diseño por Computadora</li>
                    <li class="list-group-item">Termodinamica con Laboratorio</li>
                    <li class="list-group-item">Optica</li>
                    <li class="list-group-item">Cálculo Integral</li>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <ul class="list-group">
                    <li class="list-group-item list-group-item-dark">Tercer Cuatrimestre</li>
                    <li class="list-group-item">Inglés III</li>
                    <li class="list-group-item">Desarrollo Interpersonal</li>
                    <li class="list-group-item"> Seminrario de Ingeniería en Energía Eólica</li>
                    <li class="list-group-item">Mecánica de Fluidos con Laboratorio</li>
                    <li class="list-group-item">Transferencia de Calor y Masa</li>
                    <li class="list-group-item">Algebra Lineal</li>
                    <li class="list-group-item">Cálculo de Varias Variables</li>
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
                      <li class="list-group-item">Seminrario de Ingeniería en Energía del Hidrogeno</li>
                      <li class="list-group-item">Fisica Moderna</li>
                      <li class="list-group-item">Energía del Hidrogeno con Laboratorio</li>
                      <li class="list-group-item">Ecuaciones Diferenciales</li>
                      <li class="list-group-item list-group-item-danger">Estancia I </li>
                    </ul>
                  </div>
                  <div class="col-lg-4">
                    <ul class="list-group">
                      <li class="list-group-item list-group-item-dark">Quinto Cuatrimestre</li>
                      <li class="list-group-item">Inglés V</li>
                      <li class="list-group-item">Habilidades Organizacionales</li>
                      <li class="list-group-item">Seminrario de Ingeniería en Energía Fotovoltaica</li>
                      <li class="list-group-item">Estado Sólido</li>
                      <li class="list-group-item">Electricidad y Magnetismo con Laboratorio</li>
                      <li class="list-group-item">Sistemas Fotovoltaicos con Laboratorio</li>
                      <li class="list-group-item">Ecuaciones Diferenciales Parciales</li>
                    </ul>
                  </div>
                  <div class="col-lg-4">
                    <ul class="list-group">
                      <li class="list-group-item list-group-item-dark">Sexto Cuatrimestre</li>
                      <li class="list-group-item">Inglés VI</li>
                      <li class="list-group-item">Ética Profesional</li>
                      <li class="list-group-item">Seminrario de Ingeniería en Energía de Biomasa</li>
                      <li class="list-group-item">Electroquímica</li>
                      <li class="list-group-item">Máquinas Eléctricas</li>
                      <li class="list-group-item">Biomasa con Laboratorio</li>
                      <li class="list-group-item">Celdas de Combustible</li>
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
                      <li class="list-group-item">Regional I</li>
                      <li class="list-group-item">Contabilidad Empresarial</li>
                      <li class="list-group-item">Metrología e Instrumentación</li>
                      <li class="list-group-item">Fisica Nucclear con Laboratorio</li>
                      <li class="list-group-item">Ingeniería Ambiental</li>
                      <li class="list-group-item list-group-item-info">Estancia II </li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
                    <ul class="list-group">
                      <li class="list-group-item text-center list-group-item-dark">Octavo Cuatrimestre
                      </li>
                      <li class="list-group-item">Inglés VIII</li>
                      <li class="list-group-item">Regional II</li>
                      <li class="list-group-item">Ahorro y uso Eficiente de Energía</li>
                      <li class="list-group-item">Seguridad Industrial</li>
                      <li class="list-group-item">Energia Hidraulica con Laboratorio</li>
                      <li class="list-group-item">Ingeniería Energética</li>
                      <li class="list-group-item">Almacenamiento de Energia Solar</li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
                    <ul class="list-group">
                      <li class="list-group-item text-center list-group-item-dark">Noveno Cuatrimestre
                      </li>
                      <li class="list-group-item">Inglés IX</li>
                      <li class="list-group-item">Regional III</li>
                      <li class="list-group-item">Gestión de Proyecto</li>
                      <li class="list-group-item">Innovación Tecnológica</li>
                      <li class="list-group-item">Innovación a la Administración</li>
                      <li class="list-group-item">Introducción a la Arquitectura Bioclimática</li>
                      <li class="list-group-item">Etica en los Negocios</li>
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

export default IE
