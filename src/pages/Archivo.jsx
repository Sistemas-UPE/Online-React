import React, { useEffect } from 'react';
import {Pestanas} from '../components/Pestanas';
import archivo from '../json/archivo.json';
import {Container} from 'react-bootstrap';

const Home = () => {
    useEffect(() => {document.title = 'UPE | ARCHIVO';}, []);
    return (
    <center><Container>
      <div>
        <h1>SISTEMA DE ARCHIVO UPE</h1>
        <Pestanas data={archivo}/>
      </div>
      <br/>
      <br/>
    </Container></center>
    )
}
export default Home