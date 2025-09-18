import { Link } from 'react-router-dom';
import '../css/Bleach.css';   // CSS em tons de laranja
import FullbringerImage from '../assets/fullbringer.png'; 

const Fullbringer = () => {
  return (
    <div className="page-container fullbringer-page">
      <div className="fullbringer-grid">
      
        <div className="fullbringer-left">
          <h1 className="race-title">Fullbringer</h1>
          <p className="race-subtitle">人形使い</p>

          <div className="race-text">
            <p>
              Humanos com habilidades especiais capazes de manipular a “alma” de objetos para criar poderes únicos.
            </p>

            <h2>Características</h2>
            <p>
              Cada Fullbringer possui um objeto especial ligado a sua vida que pode ser transformado em arma ou habilidade ofensiva/defensiva. 
            </p>

            <h2>Organização</h2>
            <p>
              Geralmente não possuem uma ordem estruturada, mas alguns se unem para enfrentar ameaças espirituais ou rivalidades entre si.
            </p>
          </div>

          <div className="navigation-buttons">
            <Link to="/" className="fullbringer-button">
              ← Voltar ao Início
            </Link>
          </div>
        </div>

        <div className="fullbringer-right">
          <img src={FullbringerImage} alt="Fullbringer" className="fullbringer-image" />
        </div>
      </div>
    </div>
  );
};
export default Fullbringer;
