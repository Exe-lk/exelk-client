
import "./productCard.scss"

export default function ProductCard(props){
    return(
        <>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 col-xxl-3">

                <div className="product_card_wrapper shadow-sm p3 mb-5 rounded-3 mx-4">
                    <a href={props.hreflink}>
                    <div className="product_card_head p-3">
                        <h5 className="text-center">{props.header}</h5>
                    </div>
                    <div className="product_card_body p-2 ">
                        <img className="img-fluid" src={props.imgsrc} width="540px" height="540px"/>

                    </div>
                    <div className="product_card_footer p-2">
                        <h6 className="text-center mt-2">{props.body}</h6>
                        <h5>{props.footer}</h5>
                    </div>
                    </a>
                </div>

            </div>
        </>
    )
}