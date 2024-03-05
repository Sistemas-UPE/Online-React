import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {document.title = 'UPE | Sobre nosotros';}, []);
  return (
    <>
    
      <section className="d-flex flex-column justify-content-center align-items-center pt-5  text-center w-50 m-auto" id="intro">
      <h1 className="p-3 fs-1 border-top border-3">¿Quiénes <span ClassName="text-enfasis"> somos? </span>
      </h1>
      <img src="img/base/logoBN.png" width="50%" data-aos="zoom-in" />
      <p className="p-3  fs-4">
        <span className="text-enfasis">Universidad </span>Politécnica de la Energía
      </p>
    </section>
    <section class="w-100">
    <div class="row w-75 mx-auto" id="servicios-fila-1">
      <div class="col-lg-6 col-md-12 col-sm-12" data-aos="fade-right">
        <p class="text-enfasis"> <strong>Misión</strong></p>
        <p class="texto-justificado">
          Formar profesionistas con alto nivel competitivo nacional e internacional que respondan a las necesidades de
          capital humano del sector energético con competencias, capacidades, conocimientos y habilidades científicas,
          tecnológicas e innovadoras, con valores universales y calidad humana que potencialicen la productividad y el
          desarrollo con responsabilidad social y ambiental .
        </p>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12" data-aos="fade-left">
      <p class="text-enfasis"><strong>Visión</strong></p>
      <p class="texto-justificado">
          Ser una universidad referente en el sector energético a nivel global, por la calidad de sus servicios,
          sistemas de gestión y programas educativos que generan egresados altamente competitivos con valores
          universales; considerada como agente de opinión y transformación en el desarrollo económico sustentable del
          estado y el país, participe en la investigación y transferencia de tecnología.
        </p>
      </div>
    </div>
  </section>
  <br></br>

  <section class="page-section" id="about">
      <div class="container">
        <br/>
          <div class="text-center">
              <h2 className='gob2'><strong>ANTECEDENTES</strong></h2>
              <br/>
          </div>
          <ul class="timeline">
              <li>
                  <div class="timeline-image"><img class="rounded-circle img-fluid" src="img/base/qs/01.jpg" /></div>
                  <div class="timeline-panel" data-aos="fade-up-right">
                      <div class="timeline-heading">
                          <h4>2014</h4>
                          <h4 class="subheading">Creación de la UPE</h4>
                      </div>
                      <div class="timeline-body">
                          <p class="text-muted">La Universidad Politécnica de la Energía es una institución pública
                              del Subsistema de Universidades Tecnológicas y Politecnicas creada en diciembre de 2014
                              en Tula de Allende, Hidalgo</p>
                      </div>
                  </div>
              </li>
              <li class="timeline-inverted">
                  <div class="timeline-image"><img class="rounded-circle img-fluid" src="img/base/qs/02.jpg"
                          alt="..." /></div>
                  <div class="timeline-panel" data-aos="fade-up-left">
                      <div class="timeline-heading">
                          <h4>Oferta Educativa</h4>
                          <h4 class="subheading">Es la única institución</h4>
                      </div>
                      <div class="timeline-body">
                          <p class="text-muted">Pública en Hidalgo que ofrece carreras enfocadas el área de los
                              hidrocarburos y la diversas energias. Única institución pública en México que a la fecha
                              oferta la Ing. en Seguridad para la industria Energética.</p>
                      </div>
                  </div>
              </li>
              <li >
                  <div class="timeline-image"><img class="rounded-circle img-fluid" src="img/base/qs/03.jpg"
                          alt="..." /></div>
                  <div class="timeline-panel" data-aos="fade-up-right">
                      <div class="timeline-heading">
                          <h4>Modelo Educativo</h4>
                          <h4 class="subheading">Por Competencias.</h4>
                      </div>
                      <div class="timeline-body">
                          <p class="text-muted"> 50% teoría y 50% Práctica. <br/>
                              Dos estancias y una estadía en el sector productivo: Primera estancia en el Cuarto
                              Cuatri., la Segunda Estancia en el Septimo Cuatri. Y la Estadía en Decimo Cuatri.
                          </p>
                      </div>
                  </div>
              </li>
              <li class="timeline-inverted">
                  <div class="timeline-image"><img class="rounded-circle img-fluid" src="img/base/qs/04.jpg"
                          alt="..." /></div>
                  <div class="timeline-panel" data-aos="fade-up-left">
                      <div class="timeline-heading">
                          <h4>Movilidad Estudiantil</h4>
                          <h4 class="subheading">Estudiantes han obtenido</h4>
                      </div>
                      <div class="timeline-body">
                          <p class="text-muted">becas del programa Proyecta 100 mil para estancias de un mes para
                              realizar estudios intensivos de inglés en alguna institución certificadora de dicho
                              idioma.</p>
                      </div>
                  </div>
              </li>              
              <li >
                  <div class="timeline-image"><img class="rounded-circle img-fluid" src="img/base/qs/05.jpg"
                          alt="..." /></div>
                  <div class="timeline-panel" data-aos="fade-up-right">
                      <div class="timeline-heading">
                          <h4>Certificaciones</h4>
                          <h4 class="subheading">Para la titulación se requiere</h4>
                      </div>
                      <div class="timeline-body">
                          <p class="text-muted">la certificación internacional TOEFEL, para garantizar el dominio del
                              idioma inglés de los estudiantes, lo cal los hace más competitivos a nivel
                              internacional. En el caso de Ing. Petrolera se requiere la certificación Rig Pass para
                              la titulación.</p>
                      </div>
                  </div>
              </li>
              <li class="timeline-inverted">
                  <div class="timeline-image ">
                      <h4>
                          Se parte
                          <br />
                          de nuestra
                          <br />
                          Historia!
                      </h4>
                  </div>
              </li>
          </ul>
      </div>
  </section>
  <br></br>

    </>
  )
}

export default About
