
import "./section2.scss"
import ServiceCard from "@/components/section2/serviceCard/serviceCard";

export default function Section2(){
    return(


            <div id="section2" class="section2 container-fluid">
                <div class="container sec2_content">
                    <h2 className="mb-4">Our Services</h2>
                    <div className="row">
                        <ServiceCard header="Research & Development" body="Fueling Innovation: Empowering Your R&D with Our Expert Software Services!" hreflink="/services/Research&Development"/>
                        <ServiceCard header="AI & Machine Learning" body="Unleash the Power of AI & Machine Learning: Elevate Your Business with Our Expertise!" hreflink="/services/Ai&MachineLearning"/>
                        <ServiceCard header="AR, VR and MR" body="Step into a New Reality: Experience the Future with AR, VR, and MR Solutions!" hreflink="/services/ArVrMr"/>
                        <ServiceCard header="Web, Mobile & Pc Application" body="Seamless Digital Experiences: Elevate Your Reach with Expert Web, Mobile, and PC Applications!" hreflink="/services/BlockchainDevelopment"/>
                        <ServiceCard header="Robotics & IOT" body="Transforming Industries: Embrace the Future with Robotics & IoT Solutions!" hreflink="/services/Robotics&Iot"/>
                        <ServiceCard header="Network & Security" body="Fortify Your Foundation: Safeguard Your Business with Network & Security Expertise!" hreflink="/services/Network&Security"/>
                        <ServiceCard header="Blockchain Development" body="Unlocking Digital Trust: Explore Possibilities with Blockchain Development!" hreflink="/services/BlockchainDevelopment"/>
                        <ServiceCard header="Product Conceptualization" body="From Idea to Reality: Shape Your Vision with Expert Product Conceptualization!" hreflink="/services/ProductConceptualization"/>
                    </div>
                </div>
            </div>

    )
}