import Footer from "../../components/footer"
import Header from "../../components/header"

const Author = () => {
    return (
      <>
    
        <Header />
        
        <main>
          <div className="container">
          <div className="col-12">
            <div className="card mb-4 ">
              <div className="row g-0">
                <div className="col-md-4 my-5">
                  <img src="img/contoh.png" className="img-fluid rounded-start " alt="..." />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h4 className="card-title text-center">Profil</h4>
                    <div className="row border border-1">
                      <div className="col-6">
                        <div className=" row ">
                           <label className="col-sm-4 col-form-label"><b>Nama</b></label>
                            <div className="col-sm-8 mt-0">
                               <p>: Albert Ensterin</p>
                            </div>
                        </div>
   
                      <div className=" row">
                          <label className="col-sm-4 col-form-label"><b>Domisili</b></label>
                          <div className="col-sm-8 mt-0 mb-0">
                            <p> : California8</p>
                          </div>
                       </div>
  
                       <div className=" row">
                          <label className="col-sm-4 col-form-label"><b>Gender</b></label>
                          <div className="col-sm-8 mt-0">
                            <p>: Pria</p>
                          </div>
                       </div>
  
                       <div className=" row">
                          <label className="col-sm-4 col-form-label"><b>Email</b></label>
                          <div className="col-sm-8 mt-0">
                            <p>: Nanda Aditya Putra</p>
                          </div>
                       </div>
                       </div>

                       <div className="col-6">
                        <div className=" row ">
                          <label className="col-sm-6 col-form-label"><b>Nomor Telepon</b></label>
                           <div className="col-sm-6 mt-0">
                              <p>:082329212758</p>
                           </div>
                       </div>
  
                     <div className=" row">
                         <label className="col-sm-6 col-form-label"><b>No Whatsapp</b></label>
                         <div className="col-sm-6 mt-0 mb-0">
                           <p> : 082329212758</p>
                         </div>
                      </div>
 
                      <div className=" row">
                         <label className="col-sm-6 col-form-label"><b>Gender</b></label>
                         <div className="col-sm-6 mt-0">
                           <p>: @albertZxd</p>
                         </div>
                      </div>
 
                      <div className=" row">
                         <label className="col-sm-6 col-form-label"><b>Otoritas</b></label>
                         <div className="col-sm-6 mt-0">
                           <p>: Arsitek</p>
                         </div>
                      </div>
                          {/* <ul>
                            <li><b>Nomor Telepon : </b>082329212758</li>
                            <li><b>No Whatsapp :</b> 082329212758</li>
                            <li><b>Instagram : </b>@albertZxd</li>
                            <li><b>Otoritas : </b>Arsitek</li>
                          </ul> */}
                      </div>
                    </div>
                  
                    <div className="row border border-1 mt-2">

                      <h4 className="text-center">Portofolio</h4>
                      <div className="col-sm-4">
                        <img src="img/porto1.png" className="card-img-top" alt="..." />
                      </div>
                      <div className="col-sm-4">
                        <img src="img/porto1.png" className="card-img-top" alt="..." />
                      </div>
                      <div className="col-sm-4">
                        <img src="img/porto1.png" className="card-img-top" alt="..." />
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </main>

        <Footer />
        </>
    )
}

export default Author