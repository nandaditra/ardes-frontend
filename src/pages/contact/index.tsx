import Footer from "../../components/footer"
import Header from "../../components/header"
import contact from "../../assets/contact/lihatKontak.png"

const Contact = () => {
    return (
        <>
        <Header />

        <main>
        <div className="container">
            <div className="row mt-4 px-2 py-5">
                <div className="col-12 col-md-6 mt-1">

                  <form className="border p-5 rounded-3  shadow p-3 mb-4 bg-body">
                    <h4 className="text-center py-1">Masukkan Kontak</h4>

                    <div className="mb-3 row mt-5">
                        <label className="col-sm-4 col-form-label">Nomor Telepon</label>
                        <div className="col-sm-8">
                          <input type="text" className="form-control border border-info" id="nomorTelepon" />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label className="col-sm-4 col-form-label">Nomor Whatsapp</label>
                        <div className="col-sm-8">
                          <input type="text" className="form-control border border-info" id="noWA" />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label className="col-sm-4 col-form-label">Link Akun Instagram</label>
                        <div className="col-sm-8">
                          <input type="text" className="form-control border border-info" id="linkIG" />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label className="col-sm-4 col-form-label">Email</label>
                        <div className="col-sm-8">
                          <input type="email" className="form-control border border-info" id="email" />
                        </div>
                    </div>

                    <div className="mt-5 text-end">
                        <button type="submit" className="btn btn-info text-white">Submit</button>
                    </div>
                    
                  </form>
                   
                </div>

                <div className="col-12 col-md-4">
                    <img className="w-100 text-center" src={contact} alt="lihatKontak.png" />
                </div>
              </div>
        </div>
       
      </main>

        <Footer />
        </>
    )
}

export default Contact