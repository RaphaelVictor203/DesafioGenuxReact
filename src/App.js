import React from 'react';
import './App.css';
import MenuTop from './components/MenuTop';
import Painel from './components/Painel';
import Secoes from './components/Secoes';
import ContPreco from './components/ContPreco';
import Features from './components/Features';
import ContText from './components/ContText';
import ExternalLinks from './components/ExternalLinks';

function App() {
  return (
    <div style={{margin: 0, padding: 0}}>
      <MenuTop />
      <div className="cont-site">
        <Painel />
        <div style={{display: "flex", flexDirection: "row", width: "98%", height: "100%", marginTop: "2vmin"}}>
          <Secoes />
          <div style={{display: "flex", flexDirection: "column", height: "100%", width: "90%", marginLeft: "3vmin"}}>
            <div style={{display: "flex", flexDirection: "row", height: "90%", width: "100%", marginBottom: "2vmin"}}>
                <ContPreco />
                <Features />
            </div>
            <div style={{display: "flex", flexDirection: "row", height: "auto", width: "100%"}}>
                <ContText />
                <ExternalLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/
