import React, { useState } from 'react';
import './Catalogo.css';

function Catalogo() {
  const [selectedPiscina, setSelectedPiscina] = useState(null);

  const piscinas = [
    { id: 1, image: require('../media/piscina1.jpeg'), details: 'Desfrute do conforto e da elegância de nossa piscina de design exclusivo. Com sua água cristalina e ambiente tranquilo, nossa piscina proporciona momentos relaxantes e divertidos para toda a família. Construída com materiais de alta qualidade e tecnologia de ponta, nossa piscina combina beleza e durabilidade. Aproveite o verão com estilo em nossa piscina!' },
    { id: 2, image: require('../media/piscina2.jpeg'), details: 'Detalhes da Piscina 2' },
    { id: 3, image: require('../media/piscina3.jpeg'), details: 'Detalhes da Piscina 3' },
    { id: 4, image: require('../media/piscina4.jpeg'), details: 'Desfrute do conforto e da elegância de nossa piscina de design exclusivo. Com sua água cristalina e ambiente tranquilo, nossa piscina proporciona momentos relaxantes e divertidos para toda a família. Construída com materiais de alta qualidade e tecnologia de ponta, nossa piscina combina beleza e durabilidade. Aproveite o verão com estilo em nossa piscina!' },
    { id: 5, image: require('../media/piscina5.jpeg'), details: 'Detalhes da Piscina 2' },
    { id: 6, image: require('../media/piscina6.jpeg'), details: 'Detalhes da Piscina 3' },
    { id: 7, image: require('../media/piscina7.jpeg'), details: 'Desfrute do conforto e da elegância de nossa piscina de design exclusivo. Com sua água cristalina e ambiente tranquilo, nossa piscina proporciona momentos relaxantes e divertidos para toda a família. Construída com materiais de alta qualidade e tecnologia de ponta, nossa piscina combina beleza e durabilidade. Aproveite o verão com estilo em nossa piscina!' },
    { id: 8, image: require('../media/piscina8.jpeg'), details: 'Detalhes da Piscina 2' },
    { id: 9, image: require('../media/piscina9.jpeg'), details: 'Detalhes da Piscina 3' },
    { id: 10, image: require('../media/piscina10.jpeg'), details: 'Desfrute do conforto e da elegância de nossa piscina de design exclusivo. Com sua água cristalina e ambiente tranquilo, nossa piscina proporciona momentos relaxantes e divertidos para toda a família. Construída com materiais de alta qualidade e tecnologia de ponta, nossa piscina combina beleza e durabilidade. Aproveite o verão com estilo em nossa piscina!' },
    { id: 11, image: require('../media/piscina11.jpeg'), details: 'Detalhes da Piscina 2' },
  ];

  const openDetails = (piscina) => {
    setSelectedPiscina(piscina);
  };

  const closeDetails = () => {
    setSelectedPiscina(null);
  };

  return (
    <div className="catalogo">
      <div className="piscina-grid">
        {piscinas.map((piscina) => (
          <div key={piscina.id} className="piscina-item" onClick={() => openDetails(piscina)}>
            <img src={piscina.image} alt={`Piscina ${piscina.id}`} />
            <div className="overlay">
              <p>Ver detalhes</p>
            </div>
          </div>
        ))}
      </div>
      {selectedPiscina && (
        <div className="details-modal">
          <div className="details-content">

            <div className='espaco-text'>
              <div className="details-text">{selectedPiscina.details}</div>
              <div className='espaco-botao'>
                <button className="botao-fechar-piscina" onClick={closeDetails}>FECHAR</button>
              </div>
            </div>

            <div className='espaco-img'>
              <img src={selectedPiscina.image} alt={`Piscina ${selectedPiscina.id}`} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalogo;
