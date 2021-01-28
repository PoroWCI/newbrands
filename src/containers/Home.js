import Header from '../components/header'
import Content from '../components/homeContainer'
import Footer from '../components/footer'

function Home() {
  return (
    <div>
      <Header page={"Home"} />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
