import React, { useEffect } from 'react';
import logo from '../components/media/LifeGold.png';
import fundoCentral from '../components/media/FundoSubtitulo.png';
import porqueGeralPC from '../components/media/PorqueGeralPC.png';
import porqueGeralMobile from '../components/media/PorqueGeralMobile.png';
import '../components/styles.css';
import TelaContato from '../components/TelaContato/TelaContato';

function Sobre() {
    return (
        <div className="Sobre">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={fundoCentral} className="App-logo" alt="logo" />
            <div className='texto'>
                <p>Descubra o porquê nos escolher para projetar a sua piscina</p>
            </div>
            <img src={porqueGeralPC} className="PorqueGeralPC" alt="logo"/>
            <img src={porqueGeralMobile} className="PorqueGeralMobile" alt="logo"/>
              <div className='texto-menor'>
                <p>Fundada por Tiago Augusto, profissional com mais de 20 anos de experiência na área de construção e venda de piscinas, a LifeGold já produziu e vendeu mais de 300 piscinas. Acompanhamos você do início ao fim da construção, para que você possa ter profissionais qualificados e certificados na área, sempre à disposição para tornar seu sonho realidade</p>
              </div>
            </header>
            <div className ="App">

            </div>
            <TelaContato/>
        </div>
        
    );
}

export default Sobre;