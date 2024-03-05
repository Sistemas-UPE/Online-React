import slider from '../json/sliderHome.json'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel,Container,Row,Col} from 'react-bootstrap';
import  {Imagen} from './Imagen';

function BanerAvisos() {
  return (
    <div className='slider'>
        <Container>
            <Row>
                <Col>
                <Carousel>
                {
                    slider.map(item=>{
                        const {k,u1,u2} = item;
                        return(<Carousel.Item key={k}><Imagen u1={u1} u2={u2}/></Carousel.Item>);
                    })
                }
                </Carousel>
                </Col>
            </Row>
        </Container>
        

    </div>
  );
}

export default BanerAvisos;