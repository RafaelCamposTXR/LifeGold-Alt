import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TelaContato.css';
import img from '../media/fundoTelaContato.png';
import logo from '../media/LifeGoldlogo.png';

function TelaContato() {
  const location = useLocation();
  return(
    <div className= "contato" >

      <div className= "espaco-contatos">
        <div className='a'>
          <div className='titulo-contato'>ENTRE EM CONTATO</div>
          <div className='texto-normal'>@lifegoldpiscinas</div>
          <div className='texto-normal'>(34) 3612-5203  /  (34) 99803-2462</div>
          <div className='texto-normal'>lifegoldpiscinas@gmail.com</div>
        </div>
        <div className='a'>
          <div className='titulo-contato'>ENDEREÇO</div>
          <div className='texto-normal'>Avenida senador Montandon, 60 - Centro</div>
        </div>
        <div className='a'></div>
      </div>
      
      <img src={logo} className="logo"/>
      
      <img src={img} className="fundo"/>
    
    </div>
  );
}

export default TelaContato;