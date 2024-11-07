import { BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "../pages/login"
import SignUp from "../pages/signup"
import Home from "../pages/home"
import Contact from "../pages/contact"

const Routers = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers