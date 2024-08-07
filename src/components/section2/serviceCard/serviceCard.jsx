
import "./serviceCard.scss"

export default function ServiceCard(props){

    return(
        <>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 col-xxl-3">
                <div className="service_card_wrapper shadow p-3 mb-5 bg-dark">
                    <a href={props.hreflink} title={props.title}>
                    <div className="service_card_head">
                        <h5>{props.header}</h5>
                    </div>
                    <div className="service_card_body text-light">
                        <h6>{props.body}</h6>
                    </div>
                    <div className="service_card_footer">
                        <h5>See More</h5>
                    </div>
                    </a>
                </div>
            </div>
        </>
    )
}