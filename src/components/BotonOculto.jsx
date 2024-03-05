import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcHome } from "react-icons/fc";

function BotonOculto() {
  const [mostrarEtiqueta, setMostrarEtiqueta] = useState(false);

  return (
    <Link to='/ArmonizacionContable'
      onMouseOver={() => setMostrarEtiqueta(true)}
      onMouseOut={() => setMostrarEtiqueta(false)}
      className='btnHome'
    >
      {mostrarEtiqueta ? 'Regresar a Armonizacion' : ''}
      <FcHome />
    </Link>
  );
}

export default BotonOculto;