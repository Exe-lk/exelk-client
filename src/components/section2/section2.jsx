
import "./section2.scss"
import ServiceCard from "@/components/section2/serviceCard/serviceCard";

export default function Section2(){
    return(


            <div id="section2" class="section2 container-fluid">
                <div class="container sec2_content">
                    <h2 className="mb-4 display-6">Our Services</h2>
                    <div className="row">
                        <ServiceCard header="Research & Development" body="Fueling Innovation: Empowering Your R&D with Our Expert Software Services!" hreflink="pages/services/research&development"/>
                        <ServiceCard header="AI & Machine Learning" body="Unleash the Power of AI & Machine Learning: Elevate Your Business with Our Expertise!" hreflink="pages/services/ai&machinelearning"/>
                        <ServiceCard header="AR, VR and MR" body="Step into a New Reality: Experience the Future with AR, VR, and MR Solutions!" hreflink="pages/services/arvrmr"/>
                        <ServiceCard header="Web, Mobile & Pc Application" body="Seamless Digital Experiences: Elevate Your Reach with Expert Web, Mobile, and PC Applications!" hreflink="pages/services/softwareapplications"/>
                        <ServiceCard header="Robotics & IOT" body="Transforming Industries: Embrace the Future with Robotics & IoT Solutions!" hreflink="pages/services/robotics&iot"/>
                        <ServiceCard header="Network & Security" body="Fortify Your Foundation: Safeguard Your Business with Network & Security Expertise!" hreflink="pages/services/networkandsecurity"/>
                        <ServiceCard header="Blockchain Development" body="Unlocking Digital Trust: Explore Possibilities with Blockchain Development!" hreflink="pages/services/blockchain"/>
                        <ServiceCard header="Product Conceptualization" body="From Idea to Reality: Shape Your Vision with Expert Product Conceptualization!" hreflink="pages/services/productconceptualization"/>
                    </div>
                </div>
            </div>

    )
}