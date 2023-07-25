
import ContactUs from "@/components/section5/contactusSectionCard/contactusCard";

import "./section5.scss"

export default function Section5(){
    return(
        <>
            <div id="section5" className="conainer-fluid section5">
                <div className="container">
                    <h2 className="section5Head text-center mb-4 mt-4">Contact Us</h2>
                    <ContactUs/>
                </div>
            </div>
        </>
    )
}