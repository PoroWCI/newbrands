import { useTranslation } from "react-i18next";
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2%;
    h1 {
        font-size: 2rem;
    }
    h3 {
        margin-top: 5rem;
        color: #333333;
        font-size: 1.5rem;
    }
    p{
        font-size: 0.9rem;
    }
`

const SideMenu = styled.div`
    max-width: 15vw;
    margin-right: 5rem;
    h2 {
        font-size: 1.6rem;
    }
    ul{
        padding: 0;
        margin: 50px 0;
    }
    .active, li:hover{
        transition: 0.2s;
        color: #000;
        border-left: 3px solid #00798C;
        font-weight: bolder;
        padding-left: 1.5rem;
        cursor: pointer;
    }
    ul li{
        transition: 0.2s;
        border-left: 3px solid transparent;
        padding: 10px 0;
        margin: 10px 0;
        font-size: 0.85rem;
        color: grey;
        list-style: none;
    }
`

function LegalsContainer() {
    const { t, i18n } = useTranslation('common');
    return (
        <Container>
            <SideMenu>
                <h2>Ressources légales</h2>
                <ul>
                    <li className="active">Mentions légales</li>
                    <li>Conditions Générales d’Utilisation</li>
                    <li>Politique de Confidentialité et RGPD</li>
                    <li>Conditions Particulières et Générales de Service</li>
                    <li>Chartes Cookies</li>
                </ul>
                <span style={styles.footer}>© Copyright 2017-2021, NewBrands, SAS et ses partenaires</span>
            </SideMenu>
            <div style={styles.content}>
                <span>Dernière mise à jour le 9 juillet 2020 /</span><a>Archived versions</a>
                <h1>Mention légale</h1>
                <span>Version 2.1 -  4ème révision</span><span>· Effective September 30, 2020</span>
                <h3>Using our service</h3>
                <p>You must follow any policis made available to you within the Services.</p>
                <p>At NewBrands, accessible from www.newbrands.fr, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by NewBrands and how we use it.</p>
                <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
                <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in NewBrands. This policy is not applicable to any information collected offline or via channels other than this website. </p>
                <p>You can use our services in a variety of ways to manage your privacy. For example, you can sign up for a Google Account if you want to create and manage content like emails and photos, or see more relevant search results. And you can use many Google services when you’re signed out or without creating an account at all, like searching on Google or watching YouTube videos. You can also choose to browse the web privately using Chrome in Incognito mode. And across our services, you can adjust your privacy settings to control what we collect and how your information is used.</p>
                <p>To help explain things as clearly as possible, we’ve added examples, explanatory videos, and definitions for key terms. And if you have any questions about this Privacy Policy, you can contact us.</p>
                <h3>Consent</h3>
                <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms. For our Terms and Conditions, please visit “Conditions Particuliere d’Utilisation”</p>
                <h3>Information we collect</h3>
                <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                <br /><br />
                When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
                <h3>How we use your information</h3>
                <p>We use the information we collect in various ways, including to:</p>
                <ul>
                    <li>Provide, operate, and maintain our webste</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Improve, personalize, and expand our webste</li>
                    <li>Develop new products, services, features, and functionality</li>
                    <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes</li>
                    <li>Send you emails</li>
                    <li>Find and prevent fraud</li>
                </ul>
                <span>If you have questions, you can contact NewBrands and our data protection office. And you can contact your local data protection authority if you have concerns regarding your rights under local law.</span>
            </div>
        </Container>
    );
}

const styles = {
    content: {
        maxWidth: "65vw"
    },
    footer: {
        fontSize: "0.7rem"
    }

}

export default LegalsContainer;