import "./contactusCard.scss"

export default function ContactUs(){

    return(
        <>
            <div className="contactus_card_wrapper shadow-lg rounded-4 p-3 mb-5">
                <div className="contactus_card_content p-2">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="contactus_card_header py-2 ">
                                <h5 className="contactus_card_header_txt">Leave here a message to contact you.</h5>
                            </div>
                            <div className="contactus_card_body py-2 ">
                                <form>
                                    <input className="form-control rounded-5 mb-3 form_hover" placeholder="Enter your name here ( ex: Mr Jhon Wick)"/>
                                    <input className="form-control rounded-5 my-3 form_hover" placeholder="Enter your occupation ( ex: Founder & CEO of abcd)"/>
                                    <input className="form-control rounded-5 my-3 form_hover" placeholder="Enter your email address ( ex: jhonwick@exe.lk)"/>
                                    <textarea className="form-control rounded-4 my-3 form_hover" rows="10" placeholder="Enter your message here..."/>
                                    <input className="form-control rounded-5 btn btn-primary form_hover" type="submit" value="Send your message"/>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <img className="img-fluid mt-5" src="/Images/contactus/contactus.png"/>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )

}