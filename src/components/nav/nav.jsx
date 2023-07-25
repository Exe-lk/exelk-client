// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";


import "./nav.scss"
export default function TopNavigation(){
    return(
        <>
            <nav className="navbar navbar-expand-sm bg-white  navbar-light pb-0 pt-3 sticky-top">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul id="navbar-nav" className="navbar-nav ">
                            <li className="nav-item active">
                                <a id="home" className="nav-link mb-1" href="/">Home</a>
                            </li>
                            <li id="services" className="nav-item">
                                <a className="nav-link" href="#section2">Our Services</a>
                            </li>
                            <li id="products" className="nav-item">
                                <a className="nav-link mb-1" href="#section3">Our Products</a>
                            </li>
                            <li id="career" className="nav-item">
                                <a className="nav-link mb-1" href="#section4">Career</a>
                            </li>
                            <li id="solutions" className="nav-item ">
                                <a className="nav-link mb-1" href="#section1">About Us</a>
                            </li>
                            <li id="partners" className="nav-item">
                                <a className="nav-link mb-1" href="#section5">Contact us</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}