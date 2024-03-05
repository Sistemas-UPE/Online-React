import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ImagenZoom} from './Imagen'
import {Container,Col,Row} from 'react-bootstrap';


function GridImagenes({title,lista}) {
    return (
        <Container>
            <Row>
                <div className="text-center">
                    <h1>{title}</h1>
                </div>
                <Col className='divmenu'>
                    {
                        lista.map(item=>{
                            const {u1,u2} = item
                            return(
                                <ImagenZoom key={u2} u1={u1} u2={u2}/>
                            )
                        })
                    }
                </Col>
            </Row>
        </Container>
    );
}
export default GridImagenes;