
import "./section4.scss"
import CareerCard from "@/components/section4/careerSectionCard/careerCard";

export default function Section4(){
    return(
        <>
            <div id="section4" className="conainer-fluid bg-black pt-4">
                <div className="container pt-4 pb-5">
                    <h2 className="section4Head text-center pb-4 pt-4 display-6">Careers</h2>
                    <CareerCard/>
                </div>
            </div>
        </>
    )
}