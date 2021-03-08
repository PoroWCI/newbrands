import Header from '../components/Header/header'
import Content from '../components/Contact/contactContainer'
import Footer from '../components/Footer/footer'

function Contact() {
  const isHome = "contact";
  
  return (
    <div>
      <Header page={"Contact"} />
      <Content />
      <Footer isHome={isHome} />
    </div>
  );
}

export default Contact;
