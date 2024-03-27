
import "./footer.scss"

export default function Footer(){
    return(
        <>
            <div className="footer container-fluid mt-3 pt-5">
                <div className="container footer_content mt-5">
                    <div className="row mt-5 pt-5">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 text-dark mt-3">
                            <h3 >Who we are</h3>
                            <h5 className="mt-3">We Are A Sri Lankan Digital Transformation Consultancy And Software Development Company named Exe.lk (Pvt) Ltd That Provides Cutting Edge Engineering Solutions</h5>

                        </div>
                        <div className="col-2">

                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 text-dark mt-3">
                            <h3>Contact Us</h3>
                            <h5>+94 76 71 25 330</h5>
                            <h5>hello@exe.lk</h5>
                            <br/>
                            <h3>Address</h3>
                            <h5>Exe.lk (Pvt) Ltd,<br/> No 289/9A, <br/> 5th Lane,<br/> Kulasiri Kumarage st,<br/> Katuwana rd,<br/> Homagama (10200),<br/> Sri Lanka</h5>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="row text-center">
                            <h5 >© 2024 Exe.lk <br/>
                                All Rights Reserved</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}