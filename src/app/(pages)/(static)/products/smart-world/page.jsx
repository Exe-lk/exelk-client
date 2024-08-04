import React from "react";
import './page.scss'

const SmartWorld = () => {
    return(
        <>
            <div className={'container'}>
                <div className={'row pt-5 pb-5'}>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 mt-5'}>
                        <a href={'/#section2'} className={'mt-5 mb-5 product_profile_button_color'}><p><i className="bi bi-arrow-left"></i> Products</p></a>
                        <h1 className={'display-3 product_profile_heading_color'}>Smart World</h1>
                        <p className={'lead mt-5 mb-5 product_profile_description_color'}></p>
                        {/*<a href={''} className={'mt-5 product_profile_button_color product_profile_button_border p-2'}>Read More</a>*/}
                    </div>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mt-5'}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SmartWorld