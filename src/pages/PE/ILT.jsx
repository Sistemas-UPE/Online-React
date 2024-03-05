import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Imagen } from '../../components/Imagen'
import {Container,Col,Row,Tab,Tabs,Accordion} from 'react-bootstrap';



const ILT = () => {
  useEffect(() => {document.title = 'UPE | Ingenieria ILT';}, []);
  return (
    <section className='gob2'>
      <Imagen u2='/img/base/pe/ilt.jpg'/>
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
        <Tabs defaultActiveKey="home" id="justify-tab-example"  variant='underline'  justify >
          <Tab tabClassName='tapBos'  eventKey="home"  title= {<><i class="fa-solid fa-bullseye"></i>  Objetivo</>}>
              <h2 className='gob4' >O B J E T I V O</h2>
              <p>
              Formar profesionales que sean capaces de diagnosticar, planear, diseñar y optimizar soluciones integrales de
              ingeniería a las problemáticas de los sistemas logísticos y de transporte de las organizaciones.
              </p>
          </Tab>
          <Tab tabClassName='tapBos' eventKey="mision"  title={<><i class="fa-solid fa-eye-low-vision"></i> Misión y Visión</>}>
          <h2 className='gob4' >M I S I Ó N</h2>
              <p>
                Somos una universidad que forma líderes en Logística y Transporte mediante el
                diseño, innovación, administración y operación, realizando funciones gerenciales y
                de dirección en empresas de transporte, con alto nivel competitivo nacional e
                internacional con, capacidades, conocimientos y habilidades científicas y
                tecnológicas, con valores universales y calidad humana.
              </p>
              <h2 className='gob4' >V I S I Ó N</h2>
              <p>
                Ser un Programa Educativo de Ingeniería líder en el sector logístico y de transporte,
                en particular en el sector energético, a nivel global, generando egresados altamente
                competitivos con valores universales capaces de detectar y resolver problemas,
                considerado como agente de opinión y transformación en el desarrollo económico
                sustentable; participando, además, en la investigación y transferencia de tecnología.
              </p>
          </Tab>
          <Tab tabClassName='tapBos' eventKey="atributos"  title={<><i class="fa-solid fa-list-check"></i> Atributos del Egresado</>}>
            <h2 className='gob4' >A T R I B U T O S</h2>
                <p>Se describen a continuación los atributos, específicos (AEj) y generales (AGj), que debe tener todo
                egresado del Programa Educativo de la Ingeniería en Logística y Transporte (ILT), al concluir los diez
                cuatrimestres de su mapa curricular.</p>

                <ul class="list-group list-group-flush text-start">
                  <li class="list-group-item">
                    <p><i class="fa-solid fa-circle-chevron-right"></i> Elegir proveedores mediante el análisis de las
                      diferentes propuestas, para
                      asegurar las mejores condiciones de compra.</p>
                  </li>
                  <li class="list-group-item">
                    <i class="fa-solid fa-circle-chevron-right"></i> Seleccionar especificaciones de calidad de los bienes y
                    servicios
                    suministrados mediante el desarrollo de proveeduría.
                  </li>
                  <li class="list-group-item">
                    <i class="fa-solid fa-circle-chevron-right"></i> Planear la producción de acuerdo a la capacidad de la
                    planta para cumplir
                    con la demanda y gestionar las actividades logísticas
                  </li>
                  <li class="list-group-item">
                    <i class="fa-solid fa-circle-chevron-right"></i> Programar la rotación de inventarios mediante el empleo
                    de técnicas y
                    modelos matemáticos, para asegurar el flujo de capital.
                  </li>
                  <li class="list-group-item">
                    <i class="fa-solid fa-circle-chevron-right"></i> Optimizar los programas de distribución y
                    transportación de bienes
                    mediante su revisión y actualización continua.
                  </li>
                </ul>
                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <i class="fa-solid fa-file-export"></i>
                  Accede a la documentación
                </button>
          </Tab>
          <Tab tabClassName='tapBos' eventKey="educacion"  title={<><i class="fa-solid fa-graduation-cap"></i>  Objetivos Educacionales</>}>
              <h2 className='gob4'>O B J E T I V O S E D U C A C I O N A L E S</h2>
              <p>Se describen a continuación los atributos, específicos (AEj) y generales (AGj), que debe tener todo
              egresado del Programa Educativo de la Ingeniería en Logística y Transporte (ILT), al concluir los diez
              cuatrimestres de su mapa curricular.</p>

              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item">
                  <p><i class="fa-solid fa-circle-chevron-right"></i> Elegir proveedores mediante el análisis de las
                    diferentes propuestas, para
                    asegurar las mejores condiciones de compra.</p>
                </li>
                <li class="list-group-item">
                  <i class="fa-solid fa-circle-chevron-right"></i> Seleccionar especificaciones de calidad de los bienes y
                  servicios
                  suministrados mediante el desarrollo de proveeduría.
                </li>
                <li class="list-group-item">
                  <i class="fa-solid fa-circle-chevron-right"></i> Planear la producción de acuerdo a la capacidad de la
                  planta para cumplir
                  con la demanda y gestionar las actividades logísticas
                </li>
                <li class="list-group-item">
                  <i class="fa-solid fa-circle-chevron-right"></i> Programar la rotación de inventarios mediante el empleo
                  de técnicas y
                  modelos matemáticos, para asegurar el flujo de capital.
                </li>
                <li class="list-group-item">
                  <i class="fa-solid fa-circle-chevron-right"></i> Optimizar los programas de distribución y
                  transportación de bienes
                  mediante su revisión y actualización continua.
                </li>
              </ul>

              <button type="button" class="btn btnGob" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="fa-solid fa-file-export"></i>
                Accede a la documentación
              </button>
          </Tab>
        </Tabs>
      </Container>
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
                    <li class="list-group-item">Fundamentos de la cadena de suministros</li>
                    <li class="list-group-item">Administración y principios de economía</li>
                    <li class="list-group-item">Algebra lineal</li>
                    <li class="list-group-item">Calidad en la cadena de suministro</li>
                    <li class="list-group-item">Probabilidad y estadística</li>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <ul class="list-group">
                    <li class="list-group-item list-group-item-dark">Segundo Cuatrimestre</li>
                    <li class="list-group-item">Inglés II</li>
                    <li class="list-group-item">Inteligencia Emocional.</li>
                    <li class="list-group-item">Lo quística del abastecimiento</li>
                    <li class="list-group-item">Cálculo diferencial e integral</li>
                    <li class="list-group-item">Química energética y ambiental</li>
                    <li class="list-group-item">Control estadístico de la calidad</li>
                    <li class="list-group-item">lógica de programación</li>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <ul class="list-group">
                    <li class="list-group-item list-group-item-dark">Tercer Cuatrimestre</li>
                    <li class="list-group-item">Inglés III</li>
                    <li class="list-group-item">Desarrollo Interpersonal</li>
                    <li class="list-group-item">TI aplicadas a los pronósticos en la cadena de suministro</li>
                    <li class="list-group-item">TI aplicadas a la planeación y control de inventarios</li>
                    <li class="list-group-item">Temas selectos de física</li>
                    <li class="list-group-item">Introducción a la operación del transporte</li>
                    <li class="list-group-item">simulación de procesos logísticos</li>
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
                      <li class="list-group-item">Logística de la producción</li>
                      <li class="list-group-item">Métodos cuantitativos para optimización</li>
                      <li class="list-group-item">Sistemas de transportación ferroviario y carretero</li>
                      <li class="list-group-item">TI aplicadas al transporte</li>
                      <li class="list-group-item list-group-item-danger">Estancia I </li>
                    </ul>
                  </div>
                  <div class="col-lg-4">
                    <ul class="list-group">
                      <li class="list-group-item list-group-item-dark">Quinto Cuatrimestre</li>
                      <li class="list-group-item">Inglés V</li>
                      <li class="list-group-item">Habilidades Organizacionales</li>
                      <li class="list-group-item">Centro de distribución y almacenes</li>
                      <li class="list-group-item">Investigación de operaciones logísticas</li>
                      <li class="list-group-item">Sistema de transportación aéreo y marítimo</li>
                      <li class="list-group-item">Tecnicas de selección y renovación vehicular</li>
                      <li class="list-group-item">Mercadotecnia</li>
                    </ul>
                  </div>
                  <div class="col-lg-4">
                    <ul class="list-group">
                      <li class="list-group-item list-group-item-dark">Sexto Cuatrimestre</li>
                      <li class="list-group-item">Inglés VI</li>
                      <li class="list-group-item">Ética Profesional</li>
                      <li class="list-group-item">Planeación estratégica</li>
                      <li class="list-group-item">Economía del transporte</li>
                      <li class="list-group-item">Administración del mantenimiento</li>
                      <li class="list-group-item">Transporte y sistemas de distribución</li>
                      <li class="list-group-item">Administración de personal</li>
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
                      <li class="list-group-item">Comercio internacional</li>
                      <li class="list-group-item">sistemas de costeo en operaciones logísticas</li>
                      <li class="list-group-item">ingeniería de tránsito</li>
                      <li class="list-group-item">Logística y transporte sustentables</li>
                      <li class="list-group-item">Metodología de la investigación</li>
                      <li class="list-group-item list-group-item-info">Estancia II </li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
                    <ul class="list-group">
                      <li class="list-group-item text-center list-group-item-dark">Octavo Cuatrimestre
                      </li>
                      <li class="list-group-item">Inglés VIII</li>
                      <li class="list-group-item">Logística, tráfico y aduanas</li>
                      <li class="list-group-item">Operación de frutas y terminales</li>
                      <li class="list-group-item">Ingeniería económica</li>
                      <li class="list-group-item">Legislación y derechos del transporte</li>
                      <li class="list-group-item">Estudios de ingeniería del transporte</li>
                      <li class="list-group-item">Operación de almacénes de refacciones</li>
                    </ul>
                  </div>
                  <div class="col-lg-3">
                    <ul class="list-group">
                      <li class="list-group-item text-center list-group-item-dark">Noveno Cuatrimestre
                      </li>
                      <li class="list-group-item">Inglés IX</li>
                      <li class="list-group-item">Distribución física internacional</li>
                      <li class="list-group-item">Gestión y dirección de empresas</li>
                      <li class="list-group-item">Formulación y evaluación de proyectos</li>
                      <li class="list-group-item">Modelos de transporte y logística</li>
                      <li class="list-group-item">Transporte urbano</li>
                      <li class="list-group-item">Seminario de análisis de casos y decisiones</li>
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
      <center><Container>
        <Row className='btnGob' >
          <Col>
            <i class="fa-solid fa-graduation-cap fa-3x"></i>
            <h5 >Proceso de Evaluación de AE</h5>
          </Col>
          <Col>
            <i class="fa-solid fa-helmet-safety fa-3x"></i>
            <h5 >Proceso de Evaluación de OE</h5>
          </Col>
          <Col>
            <i class="fa-solid fa-map-location-dot fa-3x"></i>
            <h5 >Plan de Desarrollo del Programa</h5>
          </Col>
          <Col>
            <i class="fa-solid fa-book-atlas fa-3x"></i>
            <h5 >Información de Biblioteca</h5>
          </Col>
        </Row>
      </Container></center>
    </section>
  )
}

export default ILT