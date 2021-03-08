import Header from '../components/Header/header'
import ProgressBar from '../components/Project/progressBar'
import ProductList from '../components/Project/productsList'
import SidePricing from '../components/Project/sidePricing'
import FilesComponent from '../components/Project/filesList'
import Footer from '../components/Footer/footer'

function ProjectPage(props) {
  return (
    <div>
      <Header />
      <ProgressBar />
      <SidePricing />
      <ProductList />
      <FilesComponent />
      <Footer />
    </div>
  );
}

export default ProjectPage;
