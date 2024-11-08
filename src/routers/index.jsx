import { BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "../pages/login"
import SignUp from "../pages/signup"
import Home from "../pages/home"
import Contact from "../pages/contact"
import ForgotPassword from "../pages/forgot-password"
import Company from "../pages/company"
import Portofolio from "../pages/portofolio"
import Author from "../pages/author"

const Routers = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Company />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portofolio" element={<Portofolio />} />
                <Route path="/author" element={<Author />}/>
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers