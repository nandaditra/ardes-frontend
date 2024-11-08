import Footer from "../../components/footer"
import Header from "../../components/header"
import gb1 from "../../assets/carousel/gb1.png"
import gb2 from "../../assets/carousel/gb2.png"
import gb3 from "../../assets/carousel/gb3.png"
import producer from "../../assets/producer/man-3803551_1280.jpg"

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

          <div className="row gx-5">
             <div className="col-6 col-sm-3 mb-4">
               <img src={producer} className="w-100" alt="producers"/>
               <div className="p-3">
                  <h4 className="mb-0">Nanda Aditya Putra</h4>
                  <p className="mb-0">Arsitek</p>
                  <span>⭐⭐⭐⭐⭐</span>
               </div>
             </div>
             <div className="col-6 col-sm-3 mb-4">
               <img src={producer} className="w-100" alt="producers"/>
               <div className="p-3">
                  <h4 className="mb-0">Nanda Aditya Putra</h4>
                  <p className="mb-0">Arsitek</p>
                  <span>⭐⭐⭐⭐⭐</span>
               </div>
             </div>
             <div className="col-6 col-sm-3 mb-4">
               <img src={producer} className="w-100" alt="producers"/>
               <div className="p-3">
                  <h4 className="mb-0">Nanda Aditya Putra</h4>
                  <p className="mb-0">Arsitek</p>
                  <span>⭐⭐⭐⭐⭐</span>
               </div>
             </div>
             <div className="col-6 col-sm-3 mb-4">
               <img src={producer} className="w-100" alt="producers"/>
               <div className="p-3">
                  <h4 className="mb-0">Nanda Aditya Putra</h4>
                  <p className="mb-0">Arsitek</p>
                  <span>⭐⭐⭐⭐⭐</span>
               </div>
             </div>
             <div className="col-6 col-sm-3 mb-4">
               <img src={producer} className="w-100" alt="producers"/>
               <div className="p-3">
                  <h4 className="mb-0">Nanda Aditya Putra</h4>
                  <p className="mb-0">Arsitek</p>
                  <span>⭐⭐⭐⭐⭐</span>
               </div>
             </div>
             <div className="col-6 col-sm-3 mb-4">
               <img src={producer} className="w-100" alt="producers"/>
               <div className="p-3">
                  <h4 className="mb-0">Nanda Aditya Putra</h4>
                  <p className="mb-0">Arsitek</p>
                  <span>⭐⭐⭐⭐⭐</span>
               </div>
             </div>
             <div className="col-6 col-sm-3 mb-4">
               <img src={producer} className="w-100" alt="producers"/>
               <div className="p-3">
                  <h4 className="mb-0">Nanda Aditya Putra</h4>
                  <p className="mb-0">Arsitek</p>
                  <span>⭐⭐⭐⭐⭐</span>
               </div>
             </div>
             <div className="col-6 col-sm-3 mb-4">
               <img src={producer} className="w-100" alt="producers"/>
               <div className="p-3">
                  <h4 className="mb-0">Nanda Aditya Putra</h4>
                  <p className="mb-0">Arsitek</p>
                  <span>⭐⭐⭐⭐⭐</span>
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