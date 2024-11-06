import Footer from "../../components/footer"
import Header from "../../components/header"
import gb1 from "../../assets/carousel/gb1.png"
import gb2 from "../../assets/carousel/gb2.png"
import gb3 from "../../assets/carousel/gb3.png"

const Home = () => {
    return (
        <>
        <Header />
        
        <main>
        <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide pt-2" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={gb1} className="d-block w-80" alt="gb1.png" />
                    </div>
                    <div className="carousel-item">
                        <img src={gb2} className="d-block w-80" alt="gb2.png" />
                    </div>
                    <div className="carousel-item">
                        <img src={gb3} className="d-block w-80" alt="gb3.png" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
         </div>

          <h2 className="mt-4 mb-4"><div className="spinner-grow text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>List Arsitek & Designer</h2>
          
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

export default Home