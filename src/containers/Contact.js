import Header from '../components/header'
import Content from '../components/contactContainer'
import Footer from '../components/footer'

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
