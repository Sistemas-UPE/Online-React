import React, {useEffect} from 'react'
import Targetas from '../components/GridTargetas'
import {Pestanas} from '../components/Pestanas'
import dataV from '../json/vacantes.json'
import dataI from '../json/indicadores.json'
import dataC from '../json/cero.json'
import {Container, Button} from 'react-bootstrap';
import {Imagen} from '../components/Imagen';


export const Vacantes = () => {
    useEffect(() => {document.title = 'UPE | VACANTES';}, []);
  return (
    <div>
        <h1>Vacantes UPE</h1>
        <Targetas data={dataV} />
    </div>
  )
}
export const Indicadores = () => {
    useEffect(() => {document.title = 'UPE | INDICADORES TÁCTICOS';}, []);
  return (
    <div className='divCompleto'>
        <center><Container>
            <h1>Indicadores Tácticos</h1>
            <Pestanas data={dataI} />
      </Container></center>

    </div>
  )
}
export const Contraloria = () => {
    useEffect(() => {document.title = 'UPE | CONTRALORIA SOCIAL';}, []);
  return (
    <div className='divCompleto'>
        <center><Container>
        <h1>Contraloría Social del Programa Fortalecimiento a la Excelencia Educativa</h1>
        <h5 className='text-enfasis '>"ESTE PROGRAMA ES PÚBLICO AJENO A CUALQUIER PARTIDO POLÍTICO. QUEDA PROHIBIDO EL USO PARA FINES DISTINTOS A LOS ESTABLECIDOS EN EL PROGRAMA. QUIEN HAGA USO INDEBIDO DE LOS RECURSOS DE ESTE PROGRAMA DEBERÁ SER DENUNCIADO Y SANCIONADO CON LA LEY APLICABLE Y ANTE LA AUTORIDAD COMPETENTE"</h5>
        <Button href="https://drive.google.com/drive/folders/1tycqjYaPoTemVRNo2V7X1YRedC9U-M7G?usp=sharing"  variant="outline-success">Acceso directo a la información</Button>
        </Container></center>
    </div>
  )
}
export const Cero = () => {
    useEffect(() => {document.title = 'UPE | CERO TOLERANCIA';}, []);
  return (
    <div>
        <center><Container>
            <h1>CERO TOLERANCIA</h1>
            <Pestanas data={dataC} />
            <p className='text-enfasis'>CONSEJER@S UPE</p>
            <div className='divmenu'>
                <Imagen u2="http://upenergia.edu.mx/img/consejerosCeroTol/consejeroAlondra.jpeg"/>
                <Imagen u2="http://upenergia.edu.mx/img/consejerosCeroTol/consejeroGabriel.jpeg"/>
            </div>
      </Container></center>

    </div>
  )
}
