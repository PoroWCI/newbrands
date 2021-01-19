import {useTranslation} from "react-i18next";
import attachment from '../assets/img/attachment.svg';

function ContactContainer() {
    const {t, i18n} = useTranslation('common');
    return (
        <div id="contact" className="contentContainer margedContainer rowAlign">
            <div className="left-column-contact">
            <h1>{t('contact.title')}</h1>
            <p>{t('contact.subtitle')}</p>
            <form>
                <label htmlFor="name">{t('contact.nameInputLabel')}</label>
                <input type="text" placeholder="John Doe" id="name" />
                <label htmlFor="mail">{t('contact.mailInputLabel')}</label>
                <input type="mail" placeholder="johndoe@gmail.com" id="mail" />
                <label htmlFor="message">{t('contact.messageInputLabel')}</label>
                <textarea placeholder={t('contact.messageInput')} id="message" />
                <div className="sendContainer">
                    <button className="btn blueBtn rounded">{t('contact.sendBtn')}</button>
                    <label>{t('contact.policy')}<a href="#">{t('contact.policyLink')}</a></label>
                    <span className="attachment" ><img src={attachment} alt="logo" /> {t('contact.file')}</span>
                </div>
            </form>
            </div>
            <div>
                <h2>{t('contact.sidePanel.headOffice')}</h2>
                <p>10 Place Vendôme, 75001 Paris, France</p>
                <br />
                <h2>{t('contact.sidePanel.contactUs')}</h2>
                <p>+33 01 32 66 62 61</p>
                <p>hello@newbrands.fr</p>
            </div>
        </div>
    );
}

export default ContactContainer;