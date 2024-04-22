import React from 'react';
import './Header.css';
import logo from '../../assets/oil-lamp.png';
import iconWhatsapp from '../../assets/whatsapp.png';
import iconInstagram from '../../assets/instagram.png';

const Header = () => {

    function openMenu() {
        const btnMobile = document.querySelector('#btn-mobile');
        const menuOpen = document.querySelector('#nav-list');

        btnMobile.classList.toggle('active');
        menuOpen.classList.toggle('active');
    }

    return (

        <div className='header'>
            <div className="navbar">
                <div className="nav-logo">
                    <a href="#">
                        <h2>Candeeiro</h2>
                        <img src={logo} alt="" />
                        <h2>Astrológico</h2>
                    </a>
                </div>

                <nav className="nav-menu">
                    <ul className="nav-list" id="nav-list">
                        <li><a href="#"><span class="material-symbols-outlined">home</span>Início</a></li>
                        <li>
                            <a href="#about"><span class="material-symbols-outlined">account_circle</span>Sobre</a>
                        </li>
                        <li className='dropdown'>
                            <a href="#projects"><span class="material-symbols-outlined">folder</span>Serviços<span class="material-symbols-outlined">expand_more</span></a>
                            <ul className="dropdown-menu">
                                    <li><a href="#">Mapa Natal</a></li>
                                    <li><a href="#">Retorno Solar</a></li>
                                    <li><a href="#">Retorno Saturno</a></li>
                                    <li><a href="#">Progressões</a></li>
                                    <li><a href="#">Trânsitos</a></li>
                            </ul>
                        </li>
                        <li><a href="#contact"><span class="material-symbols-outlined">phone_in_talk</span>Contato</a></li>
                    </ul>
                </nav>

                <div className="socials-media">
                    <a href="#" target="_blank"><img src={iconWhatsapp} alt="" /></a>
                    <a href="#" target="_blank"><img src={iconInstagram} alt="" /></a>
                </div>

                <buttont type='submit' className="btn-mobile" id='btn-mobile' onClick={openMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </buttont>
            </div>
        </div>
    )
}

export default Header;