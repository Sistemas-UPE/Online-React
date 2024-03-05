import {HashRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ArmCon from './pages/ArmonizacionContable';
import {PID,FromatoUnico,Normas,CuentaPublica,Inventarios,InfContable,InfPresupuestaria,InfLDFinanciera,InfProgramatica,Transparencia} from './pages/ArmonizacionContable';
import IE from './pages/PE/IE';
import IP from './pages/PE/IP';
import ILT from './pages/PE/ILT';
import ISIE from './pages/PE/ISIE';
import MGP from './pages/PE/MGP';
import Archivo from './pages/Archivo';
import { NavGob, NavUpe } from './components/Nav';
import Calidad from './pages/Calidad';
import {Vacantes,Indicadores,Cero,Contraloria} from './pages/Informativos';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';

function router() {

  return (
    <>
    <HashRouter>
      <NavGob />
      <NavUpe />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About/' element={<About/>}/>
        <Route path='/PE/IE/' element={<IE/>}/>
        <Route path='/PE/ILT/' element={<ILT/>}/>
        <Route path='/PE/IP/' element={<IP/>}/>
        <Route path='/PE/ISIE/' element={<ISIE/>}/>
        <Route path='/PE/MGP/' element={<MGP/>}/>
        <Route path='/ArmonizacionContable/'  element={<ArmCon/>}/>
        <Route path='/AC/InformacionContable/'  element={<InfContable/>}/>
        <Route path='/AC/InformacionPresupuestaria/'  element={<InfPresupuestaria/>}/>
        <Route path='/AC/InformacionProgramatica/'  element={<InfProgramatica/>}/>
        <Route path='/AC/InformacionLeyDFinansiera/'  element={<InfLDFinanciera/>}/>
        <Route path='/AC/Inventarios/'  element={<Inventarios/>}/>
        <Route path='/AC/CuentaPublica/'  element={<CuentaPublica/>}/>
        <Route path='/AC/Normas/'  element={<Normas/>}/>
        <Route path='/AC/FormatoUnico/'  element={<FromatoUnico/>}/>
        <Route path='/AC/OtrasObligaciones/'  element={<PID/>}/>
        <Route path='/AC/Transparencia/'  element={<Transparencia/>}/>
        <Route path='/Archivo/'  element={<Archivo/>}/>
        <Route path='/Calidad/'  element={<Calidad/>}/>
        <Route path='/Vacantes/'  element={<Vacantes/>}/>
        <Route path='/ContraloriaSocial/'  element={<Contraloria/>}/>
        <Route path='/CeroTolerancia/'  element={<Cero/>}/>
        <Route path='/Indicadores/'  element={<Indicadores/>}/>
        <Route path='/Vinculacion/'  element={<Vacantes/>}/>
      </Routes>
      <Footer />
      <Helmet>
        <title>
          {({
            '/': 'UPE | Bienvenidos',
          }[window.location.pathname])}
        </title>
      </Helmet>
    </HashRouter>     
    </>
  )
}

export default router
