import { Link } from 'react-router-dom';
import '../css/Bleach.css';    
import HollowImage from '../assets/hollow.png';

const Hollow = () => {
  return (
    <div className="page-container hollow-page">
      <div className="hollow-grid">

        <div className="hollow-left">
          <h1 className="race-title">Hollow</h1>
          <p className="race-subtitle">虚</p>

          <div className="race-text">
            <p>
              Hollows são espíritos corrompidos que perderam seus corações,
              tornando-se criaturas perigosas que caçam outras almas para se
              alimentar.
            </p>

            <h2>Características</h2>
            <p>
              Eles possuem uma máscara branca e um buraco no peito, símbolo do
              vazio em seus corações. São conhecidos por sua força brutal e
              sede de energia espiritual.
            </p>

            <h2>Hierarquia</h2>
            <p>
              A sociedade Hollow é dividida em classes, incluindo Menos Grande,
              Adjuchas e Vasto Lorde, sendo este último o mais poderoso.
            </p>
          </div>

          <div className="navigation-buttons">
            <Link to="/fullbringer" className="hollow-button">
              Próxima Raça: Fullbringer →
            </Link>
            <Link to="/" className="hollow-button">
              ← Voltar ao Início
            </Link>
          </div>
        </div>

        <div className="hollow-right">
          <img src={HollowImage} alt="Hollow" className="hollow-image" />
        </div>
      </div>
    </div>
  );
};

export default Hollow;
