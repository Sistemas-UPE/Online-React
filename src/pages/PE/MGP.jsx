import React, { useEffect } from 'react';
import { Imagen } from '../../components/Imagen'
import {Container,Col,Row,Tab,Tabs,Accordion} from 'react-bootstrap';

const MGP = () => {
  useEffect(() => {document.title = 'UPE | Maestria MGP';}, []);

  
  return (
    
    <section className='gob2'>
      <Imagen u2='/img/base/pe/mgp.jpg'/>
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
    </section>
  )
}

export default MGP
