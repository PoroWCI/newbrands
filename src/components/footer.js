import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'

function Footer() {
    return (
        <footer>
            <div>
            <span>© Copyright 2017-2021, NewBrands, SAS et ses partenaires / Siège Social: NEWBRANDS, 10 Place Vendôme, 75001 Paris. 
                / № SIRET: 829 419 100 000 21 / № APE: 6201 Z / R.C.S: PARIS / № TVA: FR 23 829419100</span>
            <a href="#">Mentions légales</a>
            </div>
            <ul>
                <li><a><AiOutlineTwitter color="#343A40" size="1.2rem" /></a></li>
                <li><a><FaFacebookF color="#343A40" size="1rem" /></a></li>
                <li><a><AiFillInstagram color="#343A40" size="1.2rem" /></a></li>
                <li><a><FaLinkedinIn color="#343A40" size="1.2rem" /></a></li>
            </ul>
        </footer>
    );
}

export default Footer;
