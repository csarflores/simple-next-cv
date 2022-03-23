import Navbar from "../components/Navbar"
import Footer from "./Footer"

const Layout = ({children}) => {
    return (
        <>
            <div className="bg-light">
                <Navbar />
                <main className="container py-4">
                    {children}
                </main>
                <Footer /> 
            </div>          
        </>
    )
}

export default Layout;