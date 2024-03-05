import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Col,Row} from 'react-bootstrap';
import {Item} from './ItemMenu'
import React from 'react'

function Menu({dataJs}) {
    return (
        <Container fluid>
            <Row>
                <Col className='divmenu'>
                    {
                         dataJs.map(item=>{
                            const {u1,u2,u3} = item
                            return (<Item key={u3} u1={u1} u2={u2} u3={u3}/>)
                        })
                }
                </Col>
            </Row>
        </Container>
    );
}
export default Menu;