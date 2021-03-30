import Header from '../components/Header/header'
import SliderAbout from '../components/About/slider'
import Intro from '../components/About/intro'
import Support from '../components/Home/seventhSection'
import PageContent from '../components/About/pageContent'
import Footer from '../components/Footer/footer'

function About() {
    return (
        <div>
            <Header />
            <Intro />
            <SliderAbout />
            <PageContent />
            <Support />
            <Footer footer="full" />
        </div>
    );
}

export default About;
