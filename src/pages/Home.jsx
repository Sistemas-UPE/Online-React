import React from 'react'
import BanerAvisos from '../components/BanerAvisos'
import Grid from '../components/GridImagenes'
import { Imagen } from '../components/Imagen'
import menu from '../json/menuHome.json'
import social from '../json/avisosHome.json'
const Home = () => {

  return (
    <section>
      <BanerAvisos/>
      <Grid title="COMUNICACIÓN SOCIAL"  lista={social}/>
      <Imagen u1='https://renoes.sep.gob.mx' u2='/img/body/09/a_7.jpeg'/>
      <Grid title="MENÚ"  lista={menu}/>
      <center><Imagen u2='/img/body/09/denuncia.jpg'/></center>
    </section>
  )
}

export default Home