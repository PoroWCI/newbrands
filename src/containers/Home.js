import Header from '../components/header'
import Optimize from '../components/Home/firstSection'
import Services from '../components/Home/secondSection'
import Simplify from '../components/Home/thirdSection'
import Prices from '../components/Home/fourthSection'
import Faq from '../components/Home/fifthSection'
import Maker from '../components/Home/sixthSection'
import LogoList from '../components/Home/seventhSection'
import Footer from '../components/footer'

function Home() {
  return (
    <div>
      <Header page={"Home"} />
      <Optimize />
      <Services />
      <Simplify />
      <Prices />
      <Faq />
      <Maker />
      <LogoList />
      <Footer />
    </div>
  );
}

export default Home;
