
import Optimize from './Home/firstSection'
import Services from './Home/secondSection'
import Simplify from './Home/thirdSection'
import Prices from './Home/fourthSection'
import Faq from './Home/fifthSection'
import Maker from './Home/sixthSection'
import LogoList from './Home/seventhSection'

function HomeContainer() {

  return (
    <div>
        <Optimize />
        <Services />
        <Simplify />
        <Prices />
        <Faq />
        <Maker />
        <LogoList />
    </div>
  );
}

export default HomeContainer;
