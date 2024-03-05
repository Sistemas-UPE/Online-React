import React, { useEffect } from 'react';
import menuHome from '../json/AC/menuHome.json';
import infPresupuestaria from '../json/AC/infPresupuestaria.json';
import infLDFinanciera from '../json/AC/infLDFinanciera.json';
import infContable from '../json/AC/infContable.json';
import infProgramatica from '../json/AC/infProgramatica.json';
import transparencia from '../json/AC/transparencia.json';
import inventarios from '../json/AC/inventarios.json';
import pid from '../json/AC/pid.json';
import cuentaPublica from '../json/AC/cuentaPublica.json';
import formatoUnico from '../json/AC/formatoUnico.json';
import normas from '../json/AC/normas.json';
import Menu from '../components/GridMenu';
import {Pestanas} from '../components/Pestanas';
import BotonOculto from '../components/BotonOculto';
import {Container} from 'react-bootstrap';

const Home = () => {
  
  useEffect(() => {document.title = 'UPE | Armonización Contable';}, []);
  return (
  <center><Container>
    <div>
      <h1>ARMONIZACIÓN CONTABLE</h1>
      <Menu dataJs= {menuHome}/>
    </div>
  </Container></center>
  )
}

export const InfContable = () => {
  return (
    <div>
      <center><Container>
      <BotonOculto />
      <h5>INFORMACIÓN CONTABLE</h5>
      <Pestanas data={infContable}/>
      <br/>
      </Container></center>
    </div>
  )
}
export const InfPresupuestaria = () => {
  return (
    <div>
      <center><Container>
      <BotonOculto />
      <h5>INFORMACIÓN PRESUPUESTARIA</h5>
      <Pestanas data={infPresupuestaria}/>
      <br/>
      </Container></center>
    </div>
  )
}
export const InfProgramatica = () => {
  return (
    <div>
      <center><Container>
      <BotonOculto />
      <h5>INFORMACIÓN PROGRAMÁTICA</h5>
      <Pestanas data={infProgramatica}/>
      <br/>
      </Container></center>
    </div>
  )
}
export const InfLDFinanciera = () => {
  return (
    <div>
      <center><Container>
      <BotonOculto />
      <h5>INFORMACIÓN LEY DE DISCIPLINA FINANCIERA</h5>
      <Pestanas data={infLDFinanciera}/>
      <br/>
      </Container></center>

    </div>
  )
}
export const Inventarios = () => {
  return (
    <div>
      <center><Container>
      <BotonOculto />
      <h5>INVENTARIO DE BIENES</h5>
      <Pestanas data={inventarios}/>
      <br/>
      </Container></center>

    </div>
  )
}
export const CuentaPublica = () => {
  return (
    <div>
      <center><Container>
      <BotonOculto />
      <h5>CUENTA PÚBLICA</h5>
      <Pestanas data={cuentaPublica}/>
      <br/>
      </Container></center>

    </div>
  )
}
export const Normas = () => {
  return (
    <div>
      <center><Container>
        <BotonOculto />
        <h5>NORMAS (Título Quinto LGCG)</h5>
        <Pestanas data={normas}/>
        <br/>
      </Container></center>

    </div>
  )
}
export const FromatoUnico = () => {
  return (
    <div>
      <center><Container>
        <BotonOculto />
        <h5>Formato Único (Financiero)</h5>
        <Pestanas data={formatoUnico}/>
        <br/>
      </Container></center>

    </div>
  )
}
export const PID = () => {
  return (
    <div>
      <center><Container>
        <BotonOculto />
        <h5>Programa Institucional de Desarrollo</h5>
        <Pestanas data={pid}/>
        <br/>
      </Container></center>

    </div>
  )
}
export const Transparencia = () => {
  return (
    <div>
      <center><Container>
      <BotonOculto />
      <h5>RESULTADOS DE CUMPLIMIENTO</h5>
      <Pestanas data={transparencia}/>
      <br/>
      </Container></center>

    </div>
  )
}

export default Home