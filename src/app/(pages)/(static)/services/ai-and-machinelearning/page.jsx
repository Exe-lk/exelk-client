import React from "react";
import ServiceProfile from "@/components/service-profile/service-profile";
// Import the Head component
import Head from 'next/head';

const AiAndMachineLearning = () => {
    return(
        <div>
            <Head>
                <title>Ai and Machine Learning | Exe.lk</title>
                <meta name={'description'} content={''}/>
            </Head>
            <ServiceProfile Title={'AI and Machine Learning'} Description={'At Exe.lk, we harness the power of AI & Machine Learning to transform businesses. Our solutions unlock insights, automate processes, and deliver personalized experiences. Dive into a world where innovation drives growth, empowering your business to stay ahead in a rapidly evolving digital landscape. Welcome to the future, today.'} Title2={'Predictive Analytics'} Description2={'We turn data into foresight, helping businesses anticipate market trends and customer needs to stay two steps ahead.'} Title3={'Automation Solutions'} Description3={' Simplify complex processes with our intelligent automation, boosting efficiency and freeing up your team to focus on innovation.'} Title4={'Personalized Experiences'} Description4={'Our technology tailors customer interactions to individual preferences, enhancing satisfaction and loyalty with every interaction.'} Title5={'Data Insights'} Description5={'Unlock the hidden value in your data, making informed decisions that drive growth and operational excellence.'} ImgSrc2={'/Images/services/ai&ml/2.jpg'} ImgSrc3={'/Images/services/ai&ml/3.png'} ImgSrc4={'/Images/services/ai&ml/4.jpg'} ImgSrc5={'/Images/services/ai&ml/5.jpg'} />
        </div>
    )
}

export default AiAndMachineLearning