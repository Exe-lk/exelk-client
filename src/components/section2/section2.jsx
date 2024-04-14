
import "./section2.scss"
import ServiceCard from "@/components/section2/serviceCard/serviceCard";

export default function Section2(){
    return(


            <div id="section2" className="container-fluid bg-black">
                <div className="container sec2_content pt-5">
                    <h2 className=" mb-4 display-6 pt-5">Our Services</h2>
                    <div className="row pt-5">
                        <ServiceCard header="Research & Development" body="Fueling Innovation: Empowering Your R&D with Our Expert Software Services!" hreflink="services/research-and-development" title={'exelk Research and Development Service'}/>
                        <ServiceCard header="AI & Machine Learning" body="Unleash the Power of AI & Machine Learning: Elevate Your Business with Our Expertise!" hreflink="services/ai-and-machinelearning" title={'exelk AI And Machine Learning Service'}/>
                        <ServiceCard header="AR, VR and MR" body="Step into a New Reality: Experience the Future with AR, VR, and MR Solutions!" hreflink="services/ar-vr-mr" title={'exelk AR VR And MR Service'}/>
                        <ServiceCard header="Web, Mobile & Pc Application" body="Seamless Digital Experiences: Elevate Your Reach with Expert Web, Mobile, and PC Applications!" hreflink="services/software-applications" title={'exelk Web, Mobile And PC Application Development Service'}/>
                        <ServiceCard header="Robotics & IOT" body="Transforming Industries: Embrace the Future with Robotics & IoT Solutions!" hreflink="services/robotics-and-iot" title={'exelk Robotics and IoT Service'}/>
                        <ServiceCard header="Network & Security" body="Fortify Your Foundation: Safeguard Your Business with Network & Security Expertise!" hreflink="services/network-and-security" title={'exelk Network And Security Service'}/>
                        <ServiceCard header="Blockchain Development" body="Unlocking Digital Trust: Explore Possibilities with Blockchain Development!" hreflink="services/blockchain-development" title={'exelk BlockChain Development Service'}/>
                        <ServiceCard header="Product Conceptualization" body="From Idea to Reality: Shape Your Vision with Expert Product Conceptualization!" hreflink="services/product-conceptualization" title={'exelk Product Conceptualization Service'}/>
                    </div>
                </div>
            </div>

    )
}