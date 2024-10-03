import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './assets/css/Curriculum.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="curriculo-container">
      <Image />
      <h2>Higor Ruan de Souza</h2>
      <div className="input-group">
        <Linkedin />
      </div>
      <div className="input-group">
        <GitHub />
      </div>
      <div className="input-group">
        <Email />
      </div>
      <div className="input-group">
        <Link to="/skills" className="skills-button">
          Habilidades
        </Link>
      </div>
    </div>
  );
};

const Image = () => {
  return (
    <img
      src="./assets/Face_user.jpg"
      alt="Imagem do usuário"
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '40%',
        objectFit: 'cover',  // Garante que a imagem preencha a área sem distorções
        marginBottom: '10px',
      }}
    />
  );
};

const Linkedin = () => {
  return (
    <a
      href="https://www.linkedin.com/in/higor-ruan-009698265/"
      className="linkendin"
      style={{
        display: 'inline-block',
        padding: '10px',
        width: '95%',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
    >
      Linkedin
    </a>
  );
};

const TellMe = () => {
  return (
    <a
      href="https://wa.me/5543984351294"
      className="TellMe"
      style={{
        display: 'inline-block',
        padding: '10px',
        width: '95%',
        backgroundColor: '#006400',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
    >
      Fale comigo!
    </a>
  );
};

const GitHub = () => {
  return (
    <a
      href="https://github.com/Higoruan"
      className="linkendin"
      style={{
        display: 'inline-block',
        padding: '10px',
        width: '95%',
        backgroundColor: 'orange',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
    >
      GitHub
    </a>
  );
};

const Email = () => {
  return (
    <a
      href="mailto:higorruann0510@gmail.com?subject=Quero%20saber%20mais%20sobre%20seu%20trabalho&body=Escreva%20sua%20mensagem%20aqui..."
      className="Email"
      style={{
        display: 'inline-block',
        padding: '10px',
        width: '95%',
        backgroundColor: 'green',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
    >
      E-MAIL
    </a>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="curriculo-container">
      <Image />
      <h2>Higor Ruan de Souza</h2>
      <h3 className="skills" style={{ marginBottom: '20px', fontSize: '24px' }}>Habilidades</h3>
      <ul className="skills-list">
        <li className="skill-item">TypeScript</li>
        <li className="skill-item">React</li>
        <li className="skill-item">Node.js</li>
        <li className="skill-item">JavaScript</li>
        <li className="skill-item">PHP</li>
        <li className="skill-item">MySQL</li>
      </ul>
      <div className="input-group" style={{ marginTop: '20px' }}>
        <TellMe />
      </div>
      <div className="input-group" style={{ marginTop: '20px' }}>
        <Link to="/">
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default App;