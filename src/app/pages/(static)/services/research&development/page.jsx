import React from "react";
import ServiceProfile from "@/components/service-profile/service-profile";
import Footer from "@/components/footer/footer";

const ResearchAndDevelopment = () => {
    return(
        <div>
            <ServiceProfile Title={'Research And Development'} Description={'At Exe.lk, our Research and Development team pioneers innovative software solutions. Focused on emerging technologies, we\'re dedicated to creating cutting-edge, user-friendly products. Explore the future with us, where relentless innovation meets practicality, ensuring Exe.lk leads in technological advancements. Join our journey of discovery and excellence.'} Title2={'Emerging Technologies'} Description2={'We delve into the latest technologies, identifying future trends to keep our solutions ahead of the curve.'} Title3={'Algorithm Development'} Description3={'Our experts craft sophisticated algorithms to solve complex problems, enhancing efficiency and performance.'} Title4={'Product Engineering'} Description4={'From concept to launch, we focus on developing robust, scalable software products that exceed user expectations.'} Title5={'Continuous Improvement'} Description5={'We\'re committed to evolving our products and processes, ensuring that [Your Company Name] remains a leader in technological advancements.'} ImgSrc2={'/Images/services/r&d/2.jpeg'} ImgSrc3={'/Images/services/r&d/3.jpeg'} ImgSrc4={'/Images/services/r&d/4.jpeg'} ImgSrc5={'/Images/services/r&d/5.jpeg'} />
            <Footer/>
        </div>
    )
}

export default ResearchAndDevelopment