import Header from '../components/Header/header'
import Optimize from '../components/Home/firstSection'
import Services from '../components/Home/secondSection'
import Simplify from '../components/Home/thirdSection'
import Prices from '../components/Home/fourthSection'
import Faq from '../components/Home/fifthSection'
import Maker from '../components/Home/sixthSection'
import LogoList from '../components/Home/seventhSection'
import Footer from '../components/Footer/footer'
import Partners from '../components/Home/Partners/partners'

function Home() {
  return (
    <div>
      <Header page={"Home"} />
      <Optimize />
      <Partners />
      <Services />
      <Simplify />
      <Prices />
      <Faq />
      <Maker />
      <LogoList />
      <Footer footer="full" />
    </div>
  );
}

export default Home;
