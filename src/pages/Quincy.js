import { Link } from 'react-router-dom';
import '../css/Bleach.css';
import QuincyImage from '../assets/quincy.png';

const Quincy = () => {
  return (
    <div className="page-container quincy-page">
      <div className="quincy-grid">

        <div className="quincy-left">
          <h1 className="race-title">Quincy</h1>
          <p className="race-subtitle">滅却師</p>

          <div className="race-text">
            <p>
              São humanos com alta sensibilidade espiritual que caçam Hollows
              utilizando armas formadas por partículas espirituais.
            </p>

            <h2>Características</h2>
            <p>
              Os Quincy manipulam partículas espirituais do ambiente para criar
              arcos e flechas de energia. Diferente dos Shinigami, eles
              eliminam Hollows em vez de purificá-los.
            </p>

            <h2>Organização</h2>
            <p>
              A ordem Quincy é estruturada em clãs, sendo o mais notório o de
              Yhwach, que lidera o exército Wandenreich.
            </p>
          </div>

          <div className="quincy-buttons">
            <Link to="/hollow" className="quincy-button">Próxima Raça: Hollow →</Link>
            <Link to="/" className="quincy-button">← Voltar ao Início</Link>
          </div>
        </div>

        <div className="quincy-right">
          <img src={QuincyImage} alt="Quincy" className="quincy-image" />
        </div>
      </div>
    </div>
  );
};

export default Quincy;
