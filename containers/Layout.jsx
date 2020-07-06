import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = (props) =>{
    return(
        <>
        <Navbar/>
        <>
            {React.children}
        </>
        <Footer/>
        </>      
    )
}

export default Layout;