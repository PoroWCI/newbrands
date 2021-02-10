import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import classes from '../assets/footer.module.css'
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation("common");
    return (
        <footer>
            <div className={classes.contactVersion}>
            <span>© Copyright 2017-2021, NewBrands, SAS et ses partenaires / Siège Social: NEWBRANDS, 10 Place Vendôme, 75001 Paris. 
                / № SIRET: 829 419 100 000 21 / № APE: 6201 Z / R.C.S: PARIS / № TVA: FR 23 829419100</span>
            <a href="/legals"> {t("footer.legals")}</a>
            </div>
            <ul>
                <li><a href="https://www.facebook.com/newbrandsfr-109483937526114"><FaFacebookF color="#343A40" size="1rem" /></a></li>
                <li><a href="https://www.instagram.com/newbrandsfr/"><AiFillInstagram color="#343A40" size="1.2rem" /></a></li>
                <li><a href="https://www.linkedin.com/company/newbrandsfr/"><FaLinkedinIn color="#343A40" size="1.2rem" /></a></li>
            </ul>
        </footer>
    );
}

export default Footer;
