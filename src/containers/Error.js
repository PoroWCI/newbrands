import Header from '../components/Header/header'
import Content from '../components/ErrorPage/error'
import Footer from '../components/Footer/footer'

function Error () {
    return (
        <div>
            <Header />
            <Content />
            <Footer footer="full" />
        </div>
    )
}

export default Error