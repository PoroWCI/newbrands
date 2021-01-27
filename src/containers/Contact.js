import Header from '../components/header'
import Content from '../components/contactContainer'
import Footer from '../components/footer'

function Contact() {
  return (
    <div>
      <Header />
      <Content />
      <Footer isHome={false} />
    </div>
  );
}

export default Contact;
