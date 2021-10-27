import React from 'react';
import Row from './components/Row';
import Banner from './components/Banner';
import Nav from './components/Nav'
import requests from './requests';
import './components/styles/App.css';

function App() {

  return (
    <div className="App">
      <Nav />
            <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <div className="rows">
        {/* <Row id="1" title="Popular on Netflix" fetchUrl={requests.fetchNetflixOriginals}/> */}
        <Row id="1" title="Recomendado pela Bateia" fetchUrl={requests.fetchTrending}/>
        <Row id="2" title="Em Alta" fetchUrl={requests.fetchTopRated}/>
        <Row id="3" title="Ação" fetchUrl={requests.fetchActionMovies}/>
        <Row id="4" title="Comédia" fetchUrl={requests.fetchComedyMovies}/>
        <Row id="5" title="Terror" fetchUrl={requests.fetchHorrorMovies}/>
        <Row id="6" title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
        <Row id="7" title="Animações" fetchUrl={requests.fetchDocumentaries}/>
      </div>
      <div className="copyright">
      <a href="" className="copyright__link">bateia <span>&copy; 2021</span></a>
      </div>
    </div>
  );
}

export default App;
