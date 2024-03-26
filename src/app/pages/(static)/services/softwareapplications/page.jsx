import React from "react";
import ServiceProfile from "@/components/service-profile/service-profile";
import Footer from "@/components/footer/footer";

const WebMobileDesktop = () => {
    return(
        <div>
            <ServiceProfile Title={'Web Mobile & Desktop'} Description={'\n' +
                'At Exe.lk, we craft seamless Web, Mobile, and Desktop applications tailored to your business needs. Our solutions bridge the gap between you and your customers, ensuring a smooth, engaging digital experience across all platforms. Embark on a journey of innovation with us, where your vision comes to life effortlessly.'} Title2={'Web Development'} Description2={'Unlock the potential of the internet with bespoke websites designed for unparalleled user engagement and seamless functionality.'} Title3={'Mobile Apps'} Description3={'Keep your business at your customers\' fingertips with intuitive, responsive mobile applications that offer convenience and connectivity on the go.'} Title4={'Desktop Software'} Description4={'Experience robust, reliable desktop applications tailored for efficiency, enhancing your daily operations and productivity.'} Title5={'Cross-Platform Solutions'} Description5={' Embrace the flexibility of cross-platform development, ensuring your applications deliver a consistent, high-quality experience, no matter the device.'} ImgSrc2={'/Images/services/softwareapplications/2.jpg'} ImgSrc3={'/Images/services/softwareapplications/3.png'} ImgSrc4={'/Images/services/softwareapplications/4.jpg'} ImgSrc5={'/Images/services/softwareapplications/5.png'}/>
            <Footer/>
        </div>
    )
}

export default WebMobileDesktop