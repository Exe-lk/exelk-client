import ProductCard from "@/components/section3/productCard/productCard";

import "./section3.scss"

export default function Section3(){
    return(
        <div id="section3" className="section3 conainer-fluid section3 bg-black">
            <div className={'container-fluid section3_background'}>
                <div className="container pt-5">
                    <h2 id="section3_head" className="section3Head text-center display-6 pt-5">Our Products</h2>
                    <div className="row pt-5 pb-5">
                        <ProductCard header="E - Business" body="Revolutionize Your Business: Embrace the Power of E-Business Solutions!" hreflink="/products/e-business" imgsrc="/Images/collectiongif/3dbusiness.webp" title={'exelk E-Business Products'}/>
                        <ProductCard header="New Innovations" body="Unveiling the Future: Introducing Our Latest Breakthrough in Software Innovation!" hreflink="/products/new-innovations" imgsrc="/Images/collectiongif/innovation.png" title={'exelk New Innovative Products'}/>
                        <ProductCard header="Entertaintment" body="Immerse Yourself in Endless Entertainment: Discover Our Cutting-Edge Software Solutions!" hreflink="/products/entertaintment" imgsrc="/Images/collectiongif/entertaintment.png" title={'exelk entertaintment Products'}/>
                        <ProductCard header="Smart World" body="Welcome to a Smarter World: Explore Our Next-Gen Software for a Connected Future!" hreflink="/products/smart-world" imgsrc="/Images/collectiongif/smart.png" title={'exelk Smart World Products'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}