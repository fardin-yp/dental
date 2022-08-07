import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import First from "./containers/first"
import Second from "./containers/second"
import Third from "./containers/third"

const Home = () => {
    return (
        <div className="layout">
            <Navbar />
               <First />
               <div className="contact">
               <p>برای کسب اطلاعات بیشتر در خصوص خدمات کلینیک سامان با ما تماس بگیرید.</p>
                   <a>تماس با ما</a>            
                </div>
                <Second />
                <Third />
            <Footer />
        </div>
    )
}

export default Home
