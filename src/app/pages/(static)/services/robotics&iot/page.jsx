import React from "react";
import ServiceProfile from "@/components/service-profile/service-profile";
import Footer from "@/components/footer/footer";

const RoboticsAndIot = () => {
    return(
        <div>
            <ServiceProfile Title={'Robotics And Iot'} Description={'\n' +
                'At Exe.lk, we\'re weaving the future with Robotics and IoT, crafting smart, interconnected solutions that revolutionize how you live and work. Our creations bring efficiency, intelligence, and innovation right to your fingertips, making every interaction smoother and more intuitive. Step into a smarter world with Exe.lk, where technology empowers your every day.'} Title2={'Smart Home Solutions'} Description2={'Elevate your living experience with our IoT devices, turning your home into a haven of convenience and comfort through automation and smart technology.'} Title3={'Industrial Automation'} Description3={'Revolutionize your operations with our robotics solutions, designed to enhance efficiency, safety, and productivity in the workplace.'} Title4={'Wearable Tech'} Description4={'Stay connected and healthy with our cutting-edge wearable IoT technologies, blending style with functionality to keep you ahead.'} Title5={'Environmental Monitoring'} Description5={'Our IoT solutions extend to environmental monitoring, ensuring sustainability by tracking and managing resources smarter and more efficiently.'} ImgSrc2={''} ImgSrc3={''} ImgSrc4={''} />
            <Footer/>
        </div>
    )
}

export default RoboticsAndIot