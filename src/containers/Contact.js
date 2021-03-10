import Header from '../components/Header/header'
import Content from '../components/Contact/contactContainer'
import Footer from '../components/Footer/footer'

function Contact() {  
  return (
    <div>
      <Header page={"Contact"} />
      <Content />
      <Footer footer="full" />
    </div>
  );
}

export default Contact;
