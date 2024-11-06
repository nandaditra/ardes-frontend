import { BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "../pages/login"
import SignUp from "../pages/signup"
import Home from "../pages/home"

const Routers = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers