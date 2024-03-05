import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Col,Row} from 'react-bootstrap';
import Targeta from './Targeta'

import React from 'react'

function Menu({data}) {
    return (
        <Container>
            <Row>
                <Col className='divmenu'>

                {
                    data.map(item=>{
                        const {status,url,title,conten,more} = item
                        return (<Targeta status={status} url = {url} title={title} conten={conten} more={more} />)
                    })
                }
                
                </Col>
            </Row>
        </Container>
    );
}
export default Menu;