import Footer from "../../components/footer"
import Header from "../../components/header"
import company from "../../assets/company/company.png"

const Company = () => {
    return (
        <>
        <Header />

        <main>
            <div className="container">
                <div className="row">
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
        </main>

        <Footer />
        </>
    )
}

export default Company