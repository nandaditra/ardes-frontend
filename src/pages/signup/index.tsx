import logo from "../../assets/login/logologin.png"
import Footer from "../../components/footer"
import Header from "../../components/header"

const SignUp = () => {

    return (
        <>

        <Header />
        
        <div className="container px-6">
          <div className="row mt-2 mx-auto">
                <div className="col-12 col-sm-6 my-5">
                    <h2 className="text-center">Temukan Arsitek </h2>
                    <h2 className="text-center">Desainer Terbaik Anda</h2>
                    <img src={logo} alt="logologin.png" className="w-100" />
                </div>
          
                <div className="col-12 col-sm-6 mt-5">
                    <div>
                        <h2 className="text-center">Register</h2>
                    </div>

            <form className="g-3 shadow p-4 mt-4 bg-body rounded-3">
               <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Nama Depan</label>
                  <input type="text" className="form-control  border border-info" id="namaDepan" placeholder="Nama Depan" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Nama Belakang</label>
                  <input type="text" className="form-control  border border-info" id="namaBelakang"placeholder="Nama Belakang" />
                </div>
                <div className="col-md-8">
                  <label className="form-label">Domisili</label>
                  <input type="text" className="form-control  border border-info" id="domisili" placeholder="Ex Batang" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Gender</label>
                  <select id="inputState" className="form-select  border border-info">
                    <option value="pria">Pria</option>
                    <option value="wanita">Wanita</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control  border border-info" id="email" placeholder="xxx@gmail.com" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control  border border-info" id="password"placeholder="Ex Putxxxx" />
                </div>

                <fieldset className="col-md-5 mb-1 mt-3">
                  <p>Daftar Sebagai :</p>
                  <div className="col-sm-12">
                    <div className="form-check">
                      <input className="form-check-input border border-info" type="radio" name="gridRadios" id="gridRadios1" value="Pengguna" />
                      <label className="form-check-label">
                        Pengguna
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input border border-info" type="radio" name="gridRadios" id="gridRadios2" value="Arsitek" />
                      <label className="form-check-label">
                        Arsitek
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input border border-info" type="radio" name="gridRadios" id="gridRadios3" value="Desain Interior" />
                      <label className="form-check-label">
                        Desain Interior
                      </label>
                    </div>
                  </div>
                </fieldset>

                <div className="col-md-7">
                  <label className="form-label">Foto Profil</label>
                  <input type="file" className="form-control  border border-info" id="foto" />
                </div>

                       
                <div className="mt-5">
                    <div className="text-start float-start">
                        <p>Sudah Punya Akun?<a href="index.html"><b>Login</b></a></p>
                    </div>

                    <div className="text-end">     
                        <button type="submit" className="btn btn-info text-white">Daftar</button>
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

export default SignUp