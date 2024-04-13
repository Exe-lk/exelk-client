
import "./section1.scss"

export default function Section1(){
    return(

        <div id="section1" className="section1 container-fluid mb-5">

            <div className="sec1_content mt-5 pt-5 pb-5">
                <h2 className="mt-3 display-7 text-center">Who We Are</h2>
                <p className="mt-3 mx-5 fs-6 text lead text-light text-center">Welcome to Exe.lk (Pvt) Ltd, where we turn ideas into reality! With innovation at our core, our skilled team crafts cutting-edge solutions that empower businesses and individuals alike. From web applications to mobile solutions, our tailored approach ensures we not only meet but exceed expectations. Whether you are an aspiring entrepreneur or a visionary enterprise, we are here to transform your concepts into tangible success. Embrace this journey of innovation with us, and together, let&aposs create something extraordinary. Welcome to Exe.lk (Pvt) Ltd, where your ideas take flight – making the impossible possible!</p>
                <div className="sec1_content_footer">
                    <h5 className="mt-5 text-center"><a className={'text-decoration-none'} href="/about-us">Read More</a></h5>
                </div>
            </div>
            <div className={'technologies pt-5 pb-5'}>
                <h2 className={'display-7 text-center mb-5'}>We are experts in</h2>
                <div className={'technology_brand_logos'}>
                    <div className={'technology_brand_logos_slide'}>
                        <img src="/Images/sec1/expertise/gcp.png" className="img-fluid" alt="..." />
                        <img src="/Images/sec1/expertise/aws.png" className="img-fluid" alt="..." />
                        <img src="/Images/sec1/expertise/azure.png" className="img-fluid" alt="..." />
                        <img src="/Images/sec1/expertise/next.svg" className="img-fluid" alt="..." />
                        <img src="/Images/sec1/expertise/angular.png" className="img-fluid" alt="..." />
                        <img src="/Images/sec1/expertise/asp.netcore.png" className="img-fluid" alt="..." />
                        <img src="/Images/sec1/expertise/springboot.png" className="img-fluid" alt="..." />
                        <img src="/Images/sec1/expertise/nestjs.png" className="img-fluid" alt="..." />
                        <img src="/Images/sec1/expertise/android-studio.png" className="img-fluid" alt="..." />
                        <img src="/Images/sec1/expertise/flutter.png" className="img-fluid" alt="..." />
                        <img src="/Images/sec1/expertise/tensorflow.png" className="img-fluid" alt="..." />
                        <img src="/Images/sec1/expertise/pytorch.png" className="img-fluid" alt="..." />
                        <img src="/Images/sec1/expertise/gpt-4.webp" className="img-fluid" alt="..." />
                        <img src="/Images/sec1/expertise/azure-devops.png" className="img-fluid" alt="..." />
                        <img src="/Images/sec1/expertise/google-analytics.png" className="img-fluid" alt="..." />
                        <img src="/Images/sec1/expertise/shopify.webp" className="img-fluid" alt="..." />
                        <img src="/Images/sec1/expertise/wordpress.png" className="img-fluid" alt="..." />
                        <img src="/Images/sec1/expertise/wix.webp" className="img-fluid" alt="..." />
                    </div>

                </div>
            </div>

        </div>

    )

}