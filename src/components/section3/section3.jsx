import ProductCard from "@/components/section3/productCard/productCard";

import "./section3.scss"

export default function Section3(){
    return(
        <div id="section3" className="conainer-fluid section3">
            <div className="container">
                <h2 id="section3_head" className="section3Head text-center mb-4 mt-4">Our Products</h2>
                <div className="row">
                    <ProductCard header="E - Business" body="Revolutionize Your Business: Embrace the Power of E-Business Solutions!" hreflink="/Ebusiness" imgsrc="/Images/collectiongif/3dbusiness.webp"/>
                    <ProductCard header="New Innovations" body="Unveiling the Future: Introducing Our Latest Breakthrough in Software Innovation!" hreflink="/NewInnovations" imgsrc="/Images/collectiongif/innovation.png"/>
                    <ProductCard header="Entertaintment" body="Immerse Yourself in Endless Entertainment: Discover Our Cutting-Edge Software Solutions!" hreflink="/Entertaintment" imgsrc="/Images/collectiongif/entertaintment.png"/>
                    <ProductCard header="Smart World" body="Welcome to a Smarter World: Explore Our Next-Gen Software for a Connected Future!" hreflink="/SmartWorld" imgsrc="/Images/collectiongif/smart.png"/>
                </div>
            </div>
        </div>
    )
}