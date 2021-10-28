import React, { useState, useEffect } from 'react';
import axios from '../axios';
import './styles/banner.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import {handleError} from './Row';

function Banner(props) {

    const [movie, setMovie] = useState([]);
    const [movies, setMovies] = useState([]);
    const [description, setDescription] = useState([]);
    const [moreInfo, setMoreInfo] = useState(false);    
    const [trailerPath, setTrailerPath] = useState('');
    const [trailerPaths, setTrailerPaths] = useState('');

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchUrl)
            const random = Math.floor(Math.random() * request.data.results.length);
            const selection = request.data.results[random];
            setMovie(selection)
            return request;
        }
        fetchData();
    }, [props.fetchUrl])

    function truncate(str, n) {
        if (str?.length > n) {
            return `${str?.substring(0, n - 1)}...`;
        } else {
            return str
        }
    };
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchUrl)
            const random = Math.floor(Math.random() * request.data.results.length);
            const selection = request.data.results[random];
            setMovies(selection)
            return request;
        }
        fetchData();
    }, [props.fetchUrl])

    function truncate(str, n) {
        if (str?.length > n) {
            return `${str?.substring(0, n - 1)}...`;
        } else {
            return str
        }
    }


    const handleClick = (movie) => {
        if (trailerPath === '') {
            movieTrailer(movie?.name || movie?.title || movie?.original_name || movie?.original_title).then((response) => {
                const path = response.split('?v=')[1];
                setTrailerPath(path);
                document.querySelector('body').style.overflow = 'hidden';
            }).catch((error) => {
                handleError();
                console.log(error);
            })
        } else {
            setTrailerPath('');
            document.querySelector('body').style.overflow = 'auto';
        }
    }

    const handleClicks = (movies) => {
        if (trailerPaths === '') {
            movieTrailer("Avatar").then((response) => {
                const path = response.split('?v=')[1];
                setTrailerPaths(path);
                document.querySelector('body').style.overflow = 'hidden';
            }).catch((error) => {
                handleError();
                console.log(error);
            })
        } else {
            setTrailerPaths('');
            document.querySelector('body').style.overflow = 'auto';
        }
    }

    const opts = {
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          modestbranding: 1,
          controls: 0,
        },
    };
    let description1 = "The Way of Water mais uma vez seguirá Jake Sully de Sam Worthington, doze anos após explorar Pandora e juntar-se aos Na'vi. Desde então, ele criou uma família com Neytiri, retratada por Zoe Saldana, e se estabeleceu dentro dos clãs do novo mundo. Claro, a paz não pode durar muito tempo. Principalmente quando a organização militar do filme original volta para “terminar o que começou”.";
    if(description.length > 200) {
        description1 = description1.substring(0, 200) + '...';
    };
    let description2 = "Apesar de não ter mais os movimentos da perna, o ex-fuzileiro naval Jake Sully ainda sente que pode ser um guerreiro. Sua intuição começa a se tornar realidade quando ele viaja anos-luz até a estação espacial montada no Planeta Pandora. Habitado por grandes seres azuis, os Na´vi, o local tem uma atmosfera fatal para qualquer terrestre. Por isso, oficiais criaram o programa Avatar, em que um corpo biológico, híbrido de humano e Na´vi, pode ser comandado a distância.";
    if(description.length > 200) {
        description1 = description1.substring(0, 200) + '...';
    }
    
    const messages = ["/jlQJDD0L5ZojjlS0KYnApdO0n19.jpg" , "/AmHOQ7rpHwiaUMRjKXztnauSJb7.jpg", "/rlAVpKuupkcsZ2fYLRME5uXlV9a.jpg", "/9aOHPhg7ezyOoXQiMyg5lUD0OBA.jpg" , "/1I6aiIYhfCufLaoAw1Qr9bMFj15.jpg" , "/8Q8KEIrgNsFC0SctYJOeFh1uS7d.jpg", "/2YLOjUiczXEgVZFDSIeH3iWB3Ub.jpg" , "/brYHUMl6o2VxJfyH9MWPziGzoQW.jpg" , "/ruziOM4OlILvyrOdChvvFqy4Ggw.jpg"]
    const random1 = messages[Math.floor(Math.random() * messages.length)];
    

    return (
        <header className="banner" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${random1}")`,
            backgroundSize: '100%',
            backgroundPosition: 'auto'
        }}>
            <div className="banner__content">
            <div className= "featured--vertical">
                <div className="featured--horizontal">
                <h1 className="banner__title">{"Avatar 2"}</h1>
                <h4 className={`banner__overview${moreInfo ? ' banner__overview--expanded' : ''}`}>{moreInfo ? description1 : truncate(description1, 200)}<i className={`banner__moreInfo fas fa-chevron-${moreInfo ? 'left' : 'right'}`} onClick={() => !moreInfo ? setMoreInfo(true) : setMoreInfo(false)}></i></h4>
                <div className="banner__buttons">
                <button className="banner__button banner__button--play"onClick={() => handleClicks(movies)}><i className="banner__button--icon fas fa-play"></i><span>Assista ao primeiro</span></button>
                    <button className="banner__button banner__button--more" onClick={() => handleClick(movie)}><i className="banner__button--icon far fa-question-circle"></i><span>Trailer Oficial</span></button>
            </div>
            </div>
            </div>
            </div>
            <div className="banner__gradient"></div>
        {trailerPath && <div className="info__overlay" onClick={() => handleClick(null)}>
                                <div className="info__overlay--contentBox" onClick={(e) => e.stopPropagation()}>
                                    <span onClick={() => handleClick(null)} className="info__overlay--btnClose fa-stack fa-2x">
                                        <i className="fas fa-circle fa-stack-2x icon-black"></i>
                                        <i className="fas fa-times fa-stack-1x icon-white"></i>
                                    </span>
                                    <div className="info__overlay--videoBox">
                                        <YouTube className="info__overlay--youtube" videoId={"MknKGdvuYKo"} opts={opts} />
                                        <div className="info__overlay--iconBox">
                                            {*/<button className="info__button info__button--play"><i className="fas fa-play"></i><span>Play</span></button>*/}
                                            {*/<span className="fa-stack fa-2x info__icons">
                                                <i className="fas fa-circle fa-stack-2x icon-black-opacity"></i>
                                                <i className="fas fa-plus fa-stack-1x icon-white"></i>
                                            </span>*/}
                                            <span className="fa-stack fa-2x info__icon">
                                                <i className="fas fa-circle fa-stack-2x icon-black-opacity"></i>
                                                <i className="far fa-thumbs-up fa-stack-1x icon-white"></i>
                                            </span>
                                            <span className="fa-stack fa-2x info__icon">
                                                <i className="fas fa-circle fa-stack-2x icon-black-opacity"></i>
                                                <i className="far fa-thumbs-down fa-stack-1x icon-white"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="info__overlay--text">
                                    <h1>Avatar 2: O Caminho da Água</h1>
                                        <h2>Avatar 2: The Way Of Water</h2>
                                        <p>{description1}</p>
                                    </div>
                                </div>
                            </div>
            }
             {trailerPaths && <div className="info__overlay" onClick={() => handleClicks(null)}>
                                <div className="info__overlay--contentBox" onClick={(e) => e.stopPropagation()}>
                                    <span onClick={() => handleClicks(null)} className="info__overlay--btnClose fa-stack fa-2x">
                                        <i className="fas fa-circle fa-stack-2x icon-black"></i>
                                        <i className="fas fa-times fa-stack-1x icon-white"></i>
                                    </span>
                                    <div className="info__overlay--videoBox">
                                        <YouTube className="info__overlay--youtube" videoId={"0sxkgQB8yHE"} opts={opts} />
                                        <div className="info__overlay--iconBoxs">
                                            {*/<button className="info__button info__button--play"><i className="fas fa-play"></i><span>Play</span></button>*/}
                                            {*/<span className="fa-stack fa-2x info__icons">
                                                <i className="fas fa-circle fa-stack-2x icon-black-opacity"></i>
                                                <i className="fas fa-plus fa-stack-1x icon-white"></i>
                                            </span>*/}
                                            <span className="fa-stack fa-2x info__icon">
                                                <i className="fas fa-circle fa-stack-2x icon-black-opacity"></i>
                                                <i className="far fa-thumbs-up fa-stack-1x icon-white"></i>
                                            </span>
                                            <span className="fa-stack fa-2x info__icon">
                                                <i className="fas fa-circle fa-stack-2x icon-black-opacity"></i>
                                                <i className="far fa-thumbs-down fa-stack-1x icon-white"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="info__overlay--texts">
                                    <h1>Avatar</h1>
                                        <h2>Avatar (2009)</h2>
                                        <h4>Ação, Aventura, Fantasia, Ficção científica</h4>
                                        <p>{description2}</p>
                                    </div>
                                </div>
                            </div>
            }
        </header>
    )
}

export default Banner;
