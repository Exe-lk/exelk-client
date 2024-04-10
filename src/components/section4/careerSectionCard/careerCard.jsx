
import "./careerCard.scss"

export default function CareerCard(){

    return(
        <>
            <div className="career_card_wrapper shadow-lg rounded-4 p-3 mb-5 bg-dark">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="career_card_content p-3">
                            <div className="career_card_header py-2 mx-3">
                                <h3 className="text-light">We are Hiring</h3>
                            </div>
                            <div className="career_card_body py-3 mx-3">
                                <h6 className="text-light">Learn about our culture and how we have grown up</h6>
                                <a href="/careers"><h5 className="mt-5">Careers</h5></a>
                                <br/>
                                <a href="/careers/positions"><h5 className="">See available positions</h5></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="">
                            {/* eslint-disable-next-line react/jsx-no-undef */}
                            <img className="img-fluid" src="/Images/career/career.gif" alt="img"/>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )

}