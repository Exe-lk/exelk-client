
import ContactUs from "@/components/section5/contactusSectionCard/contactusCard";

import "./section5.scss"

export default function Section5(){
    return(
        <div className={'section5 bg-black'}>
            <div id="section5" className="section5 conainer-fluid">
                <div className="container pt-5 pb-5">
                    <h2 className="section5Head text-center display-6 pb-5">Contact Us</h2>
                    <ContactUs/>
                </div>
            </div>
        </div>
    )
}