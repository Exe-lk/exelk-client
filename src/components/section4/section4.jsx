
import "./section4.scss"
import CareerCard from "@/components/section4/careerSectionCard/careerCard";

export default function Section4(){
    return(
        <>
            <div id="section4" className="conainer-fluid section4">
                <div className="container">
                    <h2 className="section4Head text-center mb-4 mt-4">Career</h2>
                    <CareerCard/>
                </div>
            </div>
        </>
    )
}