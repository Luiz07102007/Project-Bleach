import { Link } from 'react-router-dom';
import '../css/Bleach.css';
import ShinigamiImage from '../assets/shinigami.png';


const Shinigami = () => {
  return (
    <div className="page-container bleach-page" >
      <div className="bleach-grid">

        <div className="bleach-left">
          <h1 className="race-title">Shinigami</h1>
          <p className="race-subtitle">死神</p>

          <div className="race-text">
            <p>Shinigamis são seres espirituais que protegem as almas humanas de Hollows e guiam as almas dos falecidos para a Soul Society.</p>

            <h2>Características</h2>
            <p>Os shinigamis possuem poderes espirituais chamados Reiryoku, que podem ser canalizados através de suas Zanpakutō.</p>

            <h2>Organização</h2>
            <p>A sociedade das almas é organizada em 13 divisões, cada uma com suas responsabilidades específicas.</p>
          </div>

          <div className="navigation-buttons">
            <Link to="/quincy" className="nav-button">Próxima Raça: Quincy →</Link>
            <Link to="/" className="nav-button">← Voltar ao Início</Link>
          </div>
        </div>


        <div className="bleach-right">
          <img src={ShinigamiImage} alt="Byakuya" className="bleach-image" />
        </div>
      </div>
    </div>
  );
};

export default Shinigami;
