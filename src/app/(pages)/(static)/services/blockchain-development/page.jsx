import React from "react";
import ServiceProfile from "@/components/service-profile/service-profile";
import Footer from "@/components/footer/footer";

const BlockchainDevelopment = () => {
    return(
        <div>
            <ServiceProfile Title={'Blockchain Development'} Description={'At Exe.lk, we pave the way to secure, decentralized solutions with our Blockchain Development expertise. From cryptocurrency platforms to supply chain management, we harness blockchain-development\'s power to drive innovation and transparency in your business operations. Join us in shaping the future of trust and reliability in digital ecosystems.'} Title2={'Cryptocurrency Solutions'} Description2={'Explore secure and efficient cryptocurrency platforms tailored to your business needs, revolutionizing financial transactions with transparency and reliability.'} Title3={'Supply Chain Management'} Description3={' Streamline your supply chain processes with blockchain-development-based solutions, ensuring traceability, authenticity, and efficiency from source to destination.'} Title4={'Smart Contracts'} Description4={'Embrace automation and trust in your business agreements with our smart contract development services, simplifying and securing transactions across industries.'} Title5={'Decentralized Applications (DApps)'} Description5={'Elevate your digital offerings with decentralized applications powered by blockchain-development, providing enhanced security, privacy, and user control.'} ImgSrc2={'/Images/services/blockchain-development/2.jpg'} ImgSrc3={'/Images/services/blockchain-development/3.png'} ImgSrc4={'/Images/services/blockchain-development/4.png'} ImgSrc5={'/Images/services/blockchain-development/5.jpg'} />
            <Footer/>
        </div>
    )
}

export default BlockchainDevelopment