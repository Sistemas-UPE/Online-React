import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UPE_BLANCO from '/img/base/UPE_BLANCO.png'
import {Container,Col,Row} from 'react-bootstrap';

function footerUpe() {
  return (
        <footer>
        <Container>
            <Row>
                <Col>
                    <img src="https://cdn.hidalgo.gob.mx/logo_hgo_2019.png" alt='' width={180} />
                </Col>
                <Col >
                    <img src={UPE_BLANCO} width="210" alt=''/>
                </Col>
                <Col>
                    <strong>Contacto</strong><br/> Carr. Cruz Azul-Bomintzha km 3.1, Col. Ignacio Zaragoza, Tula de Allende, Hgo., C. P. 42820 <br/>01 (558) 942 7407
                        <center>
                            <a className='redes' href="https://www.facebook.com/up.delaenergia"><i className="fab fa-facebook-square"></i></a>
                            <a>          </a>
                            <a className='redes' href="https://twitter.com/up_energia"><i className="fab fa-twitter-square"></i></a>
                        </center>
                </Col>
            </Row>
        </Container>
        </footer>
    );
}
export default footerUpe;
