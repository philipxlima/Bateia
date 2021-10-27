import React, {useState, useEffect } from 'react';
import './styles/nav.css'; 

function Nav(props) {
    
    const [scrolled, setScrolled ] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return function() {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav className={`nav${scrolled ? " nav--scrolled" : ''}`}>
            <div className="nav--left">
                <img className="logo" onClick={() => {window.location.href=""}}src="images/bateia.png" alt="bateia logo"/>
                <ul className="nav__list">
                {/* without valid hrefs on anchor tags, react wants buttons. That's why these links had to be buttons */}
                    <li  className="nav__item"><button className="nav__link_home"onClick={() => {window.location.href=""}}>Home</button></li>
                    <li className="nav__item"><button className="nav__link" onClick={() => {window.location.href="https://bateiaagencia.wixsite.com/avatar2"}}>Store</button></li>
                    <li className="nav__item"><button className="nav__link"onClick={() => {window.location.href=""}}>Filmes</button></li>
                    <li className="nav__item"><button className="nav__link"onClick={() => {window.location.href=""}}>Novos & Popular</button></li>
                    <li className="nav__item"><button className="nav__link"onClick={() => {window.location.href=""}}>Minha Lista</button></li>
                    </ul>
                <span className="nav__browse">
                    <button className="nav__link--browse nav__link--selected">Browse</button>
                    <i className="fas fa-sort-down icon--down"></i>
                    <ul className="nav__list--hamburger">
                        <i className="fas fa-sort-up icon--up"></i>
                    <li  className="nav__item"><button className="nav__link_home"onClick={() => {window.location.href=""}}>Home</button></li>
                    <li className="nav__item"><button className="nav__link" onClick={() => {window.location.href="https://bateiaagencia.wixsite.com/avatar2"}}>Store</button></li>
                    <li className="nav__item"><button className="nav__link"onClick={() => {window.location.href=""}}>Filmes</button></li>
                    <li className="nav__item"><button className="nav__link"onClick={() => {window.location.href=""}}>Novos & Popular</button></li>
                    <li className="nav__item"><button className="nav__link"onClick={() => {window.location.href=""}}>Minha Lista</button></li>
                    </ul>
                </span>
            </div>
            <div className="nav--right">
                <ul className="nav__list--right">
                    <li className="nav__item"><i className="fas fa-search"></i></li>
                    <li className="nav__item"><span>KIDS</span></li>                        
                    <li className="nav__item"><i className="fas fa-gift"></i></li>
                    <li className="nav__item"><i className="fas fa-bell"></i></li>
                    <li className="nav__item">
                        <div className="user">
                            <img className="user__profile" src="images/user2.png" alt="user icon"/>
                            <i className="fas fa-sort-down"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;