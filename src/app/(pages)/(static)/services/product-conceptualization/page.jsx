import React from "react";
import ServiceProfile from "@/components/service-profile/service-profile";
import Footer from "@/components/footer/footer";

const ProductConceptualization = () => {
    return(
        <div>
            <ServiceProfile Title={'Product Conseptualization'} Description={'Embark on a journey of innovation with Exe.lk\'s Product Conceptualization services. We transform your ideas into tangible products, guiding you through the creative process from conception to realization. Our user-friendly approach ensures that your vision is brought to life seamlessly, shaping the future of your business.'} Title2={'Idea Exploration'} Description2={' We help you explore and refine your ideas, ensuring they align with your business goals and resonate with your target audience.'} Title3={'Market Research'} Description3={'Our team conducts comprehensive market research to identify trends, competition, and opportunities, guiding your product development strategy.'} Title4={'Prototyping & Testing'} Description4={'From initial prototypes to user testing, we iterate and refine your product concept to ensure it meets user needs and expectations.'} Title5={'Design & Branding'} Description5={'Our experts bring your concept to life with compelling design and branding, ensuring your product stands out in the market and resonates with customers.'} ImgSrc2={'/Images/services/product-conceptualization/2.jpg'} ImgSrc3={'/Images/services/product-conceptualization/3.jpg'} ImgSrc4={'/Images/services/product-conceptualization/4.jpg'} ImgSrc5={'/Images/services/product-conceptualization/5.jpg'} />
            <Footer/>
        </div>
    )
}

export default ProductConceptualization