import ProductCard from "@/components/section3/productCard/productCard";

import "./section3.scss"

export default function Section3(){
    return(
        <div id="section3" className="section3 conainer-fluid section3">
            <div className="container pt-2">
                <h2 id="section3_head" className="section3Head text-center mb-4 mt-4 display-6">Our Products</h2>
                <div className="row">
                    <ProductCard header="E - Business" body="Revolutionize Your Business: Embrace the Power of E-Business Solutions!" hreflink="pages/products/ebusiness" imgsrc="/Images/collectiongif/3dbusiness.webp"/>
                    <ProductCard header="New Innovations" body="Unveiling the Future: Introducing Our Latest Breakthrough in Software Innovation!" hreflink="pages/products/new-innovations" imgsrc="/Images/collectiongif/innovation.png"/>
                    <ProductCard header="Entertaintment" body="Immerse Yourself in Endless Entertainment: Discover Our Cutting-Edge Software Solutions!" hreflink="pages/products/entertaintment" imgsrc="/Images/collectiongif/entertaintment.png"/>
                    <ProductCard header="Smart World" body="Welcome to a Smarter World: Explore Our Next-Gen Software for a Connected Future!" hreflink="pages/products/smart-world" imgsrc="/Images/collectiongif/smart.png"/>
                </div>
            </div>
        </div>
    )
}