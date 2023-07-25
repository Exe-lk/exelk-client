
import "./section1.scss"

export default function Section1(){
    return(

        <div id="section1" className="section1 container-fluid mb-5">

            <div className="sec1_animation">

                <div className="container-fluid sec1_animation_eliment1_wrapper">
                    <div className="sec1_animation_eliment1">
                        <img className="img-fluid" src="./Images/sec1/sec2_animation/Rectangle 7.svg" alt="vector" />
                    </div>
                </div>

                <div className="container-fluid sec1_animation_eliment2_wrapper">
                    <div className="sec1_animation_eliment2">
                        <img src="./Images/sec1/sec2_animation/X.svg" alt="vector" />
                    </div>
                </div>


            </div>
            <div className="sec1_content mt-5">
                <h2 className="mt-3">Who We Are</h2>
                <p className="mt-3 mx-5 fs-6 text">Welcome to Exe.lk (Pvt) Ltd, where we turn ideas into reality! With innovation at our core, our skilled team crafts cutting-edge solutions that empower businesses and individuals alike. From web applications to mobile solutions, our tailored approach ensures we not only meet but exceed expectations. Whether you're an aspiring entrepreneur or a visionary enterprise, we're here to transform your concepts into tangible success. Embrace this journey of innovation with us, and together, let's create something extraordinary. Welcome to Exe.lk (Pvt) Ltd, where your ideas take flight – making the impossible possible!</p>
                <div className="sec1_content_footer">
                    <h5 className="mt-5 text-center"><a href="/AboutMore">Read More</a></h5>
                </div>

            </div>
        </div>

        )

}