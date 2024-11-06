import logo from "../../assets/login/logologin.png"
import Footer from "../../components/footer"
import Header from "../../components/header"

const Login = () => {
    return (
        <>
        <Header />

        <div className="container mx-6">
          <div className="row">
            <div className="col-12 col-sm-6 my-4">
                <h2 className="text-center">Temukan Arsitek </h2>
                <h2 className="text-center">Desainer Terbaik Anda</h2>
                <img src={logo}alt="logologin.png" className="w-100"/>
            </div>
          
            <div className="col-12 col-sm-6 mt-5">
                <div>
                    <h2 className="text-center">Login</h2>
                </div>

                <form className="container shadow p-3 mx-1 my-4 bg-body rounded-3">
                <div className="my-4 mx-3">
                    <div className="mb-3">
                        <label className="form-label">Username atau email</label>
                        <input type="email" className="form-control border border-info" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control border border-info" id="exampleInputPassword1" />
                    </div>
                
                    <div className="mt-3">
                        <div className="text-start float-start">
                            <input type="checkbox" className="form-check-input border border-info" id="exampleCheck1" />
                            <label className="form-check-label ">Ingat Saya</label>
                        </div>

                        <div className="text-end">
                            <p>Lupa Sandi?</p>
                        </div>
                        
                    </div>
                        
                    <div className="mt-5">
                        <div className="text-start float-start">
                            <p>Belum Punya Akun?<a href="register.html"><b>Register</b></a></p>
                        </div>

                        <div className="text-end">     
                            <button type="submit" className="btn btn-info text-white">masuk</button>
                        </div>
                    </div>
                            
                    </div>
                    </form>
                </div>
            
            </div>
        </div>

        <Footer />
        </>
    )
}

export default Login