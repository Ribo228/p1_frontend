import Header from './Header' 
import Footer from './Footer'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import ProductDetails from '../pages/ProductDetails'

const Router = () =>{
    const Layout =() =>{
        return (
            <>
            <Header />
            <Outlet />
            <Footer />
            </>
        )
    }
    const BrowserRoutes =() => {
        return (
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} /> 
                    <Route path ="/about" element={<About />} />
                    <Route path= "/product/" element={<ProductDetails/>} />
                    <Route path= "/product/:id" element={<ProductDetails/>} />
                </Route>
            </Routes>
          </BrowserRouter>

        )
    }
    return (
        <BrowserRoutes />
    )
}

export default Router