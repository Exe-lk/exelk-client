import React from "react";
import ServiceProfile from "@/components/service-profile/service-profile";
import Footer from "@/components/footer/footer";

const ArVrMr = () => {
    return(
        <div>
            <ServiceProfile Title={'AR VR & MR'} Description={'\n' +
                'Dive into new realities with Exe.lk. Our Augmented Reality (AR), Virtual Reality (VR), and Mixed Reality (MR) solutions open doors to immersive experiences, transforming how you connect with customers and innovate in your space. Step into a world where your imagination is the only limit. Welcome to the future, made real today.'} Title2={'Immersive Marketing'} Description2={'Elevate your brand with AR, VR, and MR, creating unforgettable customer engagements that drive interest and loyalty.'} Title3={'Training & Education'} Description3={'Transform learning and development with interactive experiences that enhance understanding and retention in ways traditional methods cannot match.'} Title4={'Virtual Showrooms'} Description4={'Step into our virtual spaces to showcase products and designs, offering a hands-on feel without physical boundaries.'} Title5={'Interactive Events'} Description5={'Bring your events to life with virtual participation options, expanding your audience and making every moment more engaging and inclusive.'} ImgSrc2={'/Images/services/arvrmr/2.png'} ImgSrc3={'/Images/services/arvrmr/3.jpg'} ImgSrc4={'/Images/services/arvrmr/4.jpg'} ImgSrc5={'/Images/services/arvrmr/5.jpeg'} />
            <Footer/>
        </div>
    )
}

export default ArVrMr