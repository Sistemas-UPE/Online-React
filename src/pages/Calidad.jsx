import React, { useEffect } from 'react';
import { Imagen } from '../components/Imagen'
import {Tabs,Tab,Container, Button} from 'react-bootstrap';

const Home = () => {
  useEffect(() => {document.title = 'UPE | Sistema de Gestión para la Calidad UPE';}, []);
  return (
    <span className='tabUpe'>
        <Imagen u2='/img/body/12/12_23.png'/>
        <Container>
            <br/>
            <br/>
            <br/>
            <Tabs defaultActiveKey="mv" id="uncontrolled-tab-example" className="mb-2" >
                <Tab eventKey="mv" title="Misión y Visión">
                    <div className='subTitle'>Misión:</div><p>Formar profesionistas con alto nivel competitivo nacional e internacional que respondan a las necesidades de capital humano del sector energético con competencias, capacidades, conocimientos y habilidades científicas, tecnológicas e innovadores, con valores universales y calidad humana que potencialicen la productividad y el desarrollo con responsabilidad social y ambiental. </p>
                    <div className='subTitle'>Visión:</div><p>Ser una universidad referente en el sector energético a nivel global, por la calidad de sus servicios, sistemas de gestión y programas educativos que generan egresados altamente competitivos con valores universales; considerada como agente de opinión y transformación en el desarrollo económico, sustentable del estado y el país, partícipe en la investigación y transferencia de la tecnología.</p>
                </Tab>
                <Tab eventKey="Politica" title="Politica de calidad">
                        <p>En la UPE, formamos profesionistas en Ingeniería en Logística y Transporte, Petrolera, Energía y Seguridad para la Industria Energética, cumpliendo con los requisitos de las partes interesadas y respetando las disposiciones legales y reglamentarias aplicables a cada uno de nuestros procesos; estamos comprometidos con la calidad de nuestros programas educativos y con la mejora continua de nuestro sistema de gestión de la calidad, creado bajo la norma ISO 9001:2015.</p>
                </Tab>
                <Tab eventKey="Objetivo" title="Objetivos de calidad">
                        <div className='subTitle'>Optimizar la planeación estratégica para lograr la conformidad del servicio</div>
                        <ol>
                            <li>Cumplimiento de proyectos del Programa Operativo Anual</li>
                            <li>Cumplimiento del Programa Anual de Adquisiciones </li>
                        </ol>
                        <div className='subTitle'>Incrementar la cobertura institucional</div>
                        <ol>
                            <li>Cobertura institucional</li>
                        </ol>
                        <div className='subTitle'>Incrementar la permanencia y egreso de los estudiante</div>
                        <ol>
                            <li>Porcentaje de permanencia de estudiantes por ciclo escolar</li>
                            <li>Porcentaje de alumnos con beca</li>
                            <li>Tasa de egreso</li>
                            <li>Porcentaje de alumnos titulados por generación</li>
                        </ol>
                        <div className='subTitle'>Consolidar la Formación Académica Integral por competencias centrada en el estudiante, que contribuya a incrementar su desempeño académico.</div>
                        <ol>
                            <li>Aprovechamiento académico cuatrimestral</li>
                            <li>Tasa de reprobación</li>
                            <li>Porcentaje de cumplimiento de planeación didáctica</li>
                            <li>Porcentaje de alumnos que realizan Estancias</li>
                            <li>Porcentaje de alumnos que realizan Estadías</li>
                        </ol>
                        <div className='subTitle'>Impulsar la vinculación institucional para apoyar la formación práctica de los estudiantes, el emprendimiento y la inserción laboral de los egresados</div>
                        <ol>
                            <li>Número de nuevas organizaciones vinculadas</li>
                        </ol>
                        <div className='subTitle'>Promover la superación del personal académico y administrativo para la mejora del desempeño</div>
                        <ol>
                            <li>Porcentaje de personal docente capacitado</li>
                            <li>Porcentaje de personal administrativo capacitado</li>
                            <li>Porcentaje de retención de plantilla laboral</li>
                        </ol>
                        <div className='subTitle'>Promover la mejora continua para asegurar la satisfacción de todas las partes interesadas en los servicios educativos institucionales</div>
                        <ol>
                            <li>Porcentaje de cumplimiento del Programa de Mantenimiento</li>
                            <li>Porcentaje de satisfacción con los servicios informáticos</li>
                            <li>Grado de satisfacción con las tutorías</li>
                            <li>Grado de satisfacción con las asesoría</li>
                            <li>Porcentaje de aspirantes inscritos</li>
                            <li>Satisfacción con el proceso de ingreso</li>
                            <li>Evaluación Docente</li>
                            <li>Porcentaje de retención de plantilla laboral</li>
                        </ol>
                </Tab>
                <Tab eventKey="Valores" title="Valores Institucionales">
                <div className='subTitle'>Cooperación. </div><p>Desempeñar sus funciones en trabajo colaborativo aportando lo mejor de sus capacidades, habilidades y experiencia uniendo esfuerzos con sus compañeros de trabajo para el logro de la misión, visión y metas institucionales;</p>
                <div className='subTitle'> Entorno Cultural y Ecológico.</div><p> Participar y promover entre la comunidad de la UPE, actividades que generen una cultura de respeto, defensa y preservación del medio ambiente social y cultural;</p>
                <div className='subTitle'>Equidad de Género.</div><p> Promover entre la comunidad universitaria la no violencia y la no discriminación, contribuyendo a que mujeres y hombres tengan el mismo respeto, reconocimiento, goce o ejercicio de los derechos y beneficios sociales de la educación superior;</p>
                <div className='subTitle'>Igualdad y no Discriminación.</div><p> Propiciar la igualdad, equidad y acciones afirmativas en todas las actividades que se desarrollen en la UPE y se promueva la igualdad sin distinción de condición social, género, color de piel, estado civil, religión, discapacidad, preferencia sexual o cualquier otra situación similar;</p>
                <div className='subTitle'>Interés Público.</div><p>Implementar actividades, proyectos o programas para satisfacer las necesidades de la comunidad universitaria y no perseguir beneficios individuales;</p>
                <div className='subTitle'>Liderazgo.</div><p> Proyectar y mantener una actitud proactiva y positiva a sus compañeros, motivando la aplicación de los principios, valores y reglas de integridad que rigen a la UPE, fomentando su aplicación, cumplimiento y la observancia del Código de Conducta;</p>
                <div className='subTitle'>Respeto.</div><p> Brindar un trato con amabilidad y cortesía a los usuarios de los servicios que se ofertan en la UPE, reconociendo que todas las personas tenemos la misma dignidad de personas humanas; y</p>
                <div className='subTitle'>Respeto de los Derechos Humanos.</div><p> Respetar, promover, conocer y aplicar los derechos humanos, fomentar la igualdad, la no discriminación y la equidad de género entre la comunidad universitaria de la UPE.</p>
                </Tab>
                <Tab eventKey="Procedimientos" title="Procedimientos">
                <Button href="https://drive.google.com/drive/folders/11YDtgjSyYjaS2wwcOW-wsXw2UrOKuxrT"  variant="outline-success">Acceso directo a los Procedimientos</Button>
                </Tab>
            </Tabs>
        </Container>
        <br/>
        <br/>
        <br/>

    </span>
  );
}

export default Home
