import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PortfolioItem from '../components/PortfolioItem'

const Portfolio = () => {
    return(
     <div>
         <Navbar/>
         <div className="portfolio container">
             <PortfolioItem/>
             <PortfolioItem/>
             <PortfolioItem/>
             <PortfolioItem/>
             <PortfolioItem/>
             <PortfolioItem/>
             <PortfolioItem/>
         </div>
         <Footer/>
     </div>   
    )
}
export default Portfolio;