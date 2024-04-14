import 'bootstrap-icons/font/bootstrap-icons.css'; // For Bootstrap Icons
import "./footer.scss"

export default function Footer(){
    return(
        <div className={'footer_wrapper_background'}>
            <div className="footer container-fluid pt-5">
                <div className="container footer_content mt-5">
                    <div className="row mt-5 pt-5">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 text-light pt-5">
                            <h3 >Who we are</h3>
                            <h5 className="mt-3 text-light">We Are A Sri Lankan Digital Transformation Consultancy And Software Development Company named Exe.lk (Pvt) Ltd That Provides Cutting Edge Engineering Solutions</h5>
                            <br/>
                            <div className={'row mt-3'}>
                                <div className={'col'}>
                                    <a className={'text-decoration-none text-white'} href={'https://www.facebook.com/slexelk'} title={'exelk facebook link'}><i className="bi bi-facebook h1"></i></a>
                                </div>
                                <div className={'col'}>
                                    <a className={'text-decoration-none text-white'} href={''} title={'exelk instagram link'}><i className="bi bi-instagram h1"></i></a>
                                </div>
                                <div className={'col'}>
                                    <a className={'text-decoration-none text-white'} href={''} title={'exelk x twitter link'}><i className="bi bi-x h1"></i></a>
                                </div>
                                <div className={'col'}>
                                    <a className={'text-decoration-none text-white'} href={''} title={'exelk tiktok link'}><i className="bi bi-tiktok h1"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">

                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 text-light mt-3">
                            <h3>Contact Us</h3>
                            <h5 className={'text-light'}>+94 76 71 25 330</h5>
                            <h5 className={'text-light'}>hello@exe.lk</h5>
                            <br/>
                            <h3>Address</h3>
                            <h5 className={'text-light'}>Exe.lk (Pvt) Ltd,<br/> No 289/9A, <br/> 5th Lane,<br/> Kulasiri Kumarage st,<br/> Katuwana rd,<br/> Homagama (10200),<br/> Sri Lanka</h5>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="row text-center text-light">
                            <h5 >© 2021 - 2024 Exe.lk <br/>
                                All Rights Reserved</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}