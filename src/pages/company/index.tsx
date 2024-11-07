import Footer from "../../components/footer"
import Header from "../../components/header"
import company from "../../assets/company/company.png"
import data1 from "../../assets/company/man-8578832_1280.jpg"
import data2 from "../../assets/company/portrait-4568762_1280.jpg"
import data3 from "../../assets/company/woman-8643445_1280.png"
import carousel1 from "../../assets/company/rossa.png"
import carousel2 from "../../assets/company/della.png"
import carousel3 from "../../assets/company/albert.png"

const Company = () => {
    return (
        <>
        <Header />

        <main>
            <div className="container">
                <div className="row my-5">
                    <div className="col-12 col-sm-6"  data-aos="fade-right">
                       <img src={company} alt="company" className="w-100" />
                    </div>
                    <div className="col-12 col-sm-6">
                       <div className="py-5" data-aos="fade-left">
                          <h4 className="h1 text-xl">Temukan Arsitek dan Designer Professional dengan pelayanan kualitas terbaik</h4>
                          <p>Solusi yang tepat jika anda membutuhkan arsitek dan designer untuk rumah anda tanpa lama dan tentunya sudah teruji dengan layak</p>
                       </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <h1 className="h1 text-center my-3">Alasan Mengapa Memilih Layanan Kami</h1>
                <div className="row my-5 gx-4">
                    <div className="col-12 col-sm-4 shadow-sm mb-5 bg-body rounded">
                       <img src={data1} className="w-100 rounded"/>
                       <div className="p-2 text-center">
                           <h3 className="h4">Professional</h3>
                           <p>Arsitek dan Designer kami telah bekerja dan berpengalaman selama 5 tahun terhadap bidang digeluti dan ditekuni</p>
                       </div>
                    </div>
                    <div className="col-12 col-sm-4 shadow-sm mb-5 bg-body rounded">
                        <img src={data2} className="w-100 rounded"/>
                        <div className="p-2 text-center ">
                            <h3 className="h4">Terpercaya</h3>
                            <p>Para klien telah percaya pada hasil kerja arsitek dan designer dan mereka puas dengan hasil yang diberikan</p>
                       </div>
                    </div>
                    <div className="col-12 col-sm-4 shadow-sm mb-5 bg-body rounded">
                        <img src={data3} className="w-100 rounded"/>
                        <div className="p-2 text-center ">
                            <h3 className="h4">Berkualitas</h3>
                            <p>Arsitek dan Designer yang kami sangat berkualitas dan telah menghasilkan karya-karya yang telah digunakan oleh beberapa perusahaan besar</p>
                       </div>
                    </div>
                </div>
            </div>

            <div className="container mb-5">
              <h1 className="h1 text-center mb-5">Testimoni</h1>
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={carousel1} className="d-block w-25 rounded-circle mx-auto " alt="..." />
                      <div className="text-center my-2 w-50 mx-auto">
                         <h3>Maria</h3>
                         <p>Saya puas dengan hasil desain pekerjaan dari para arsitektur dan tentunya sesuai dengan yang saya inginkan dan hasilnya sangat memuaskan sekali. Tentunya sesuai sekali dengan keuntungan menggunakan layanan ardes.com</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                       <img src={carousel2} className="d-block w-25 rounded-circle mx-auto " alt="..." />
                       <div className="text-center my-2  w-50 mx-auto">
                          <h3>Rossa</h3>
                          <p>Desain dan arsitektur rumah yang dibuat sangat detail dan pekerja ramah tamah dalam menjelaskan mengenai desain yang dibuat sehingga saya mudah paham meskipun saya orang awam</p>
                       </div>
                    </div>
                    <div className="carousel-item">
                      <img src={carousel3} className="d-block w-25 rounded-circle mx-auto " alt="..." />
                      <div className="text-center my-2  w-50 mx-auto">
                           <h3>Albert</h3>
                           <p>Sebagai orang yang ingin membangun rumah, saya tidak perlu pusing-pusing memikirkan desain untuk rumah saya karena disini terdapat macam jenis desain yang bisa saya pilih dan bisa request langsung</p>
                      </div>
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
            </div>
        </main>

        <Footer />
        </>
    )
}

export default Company