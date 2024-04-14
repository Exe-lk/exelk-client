import './product-profile.scss'

export default function ProductProfile({Title,Description}){

    return(
        <>
            <div className={'container'}>
                <div className={'row pt-5 pb-5'}>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 mt-5'}>
                        <a href={'/#section2'} className={'mt-5 mb-5 product_profile_button_color'}><p><i className="bi bi-arrow-left"></i> Products</p></a>
                        <h1 className={'display-3 product_profile_heading_color'}>{Title}</h1>
                        <p className={'lead mt-5 mb-5 product_profile_description_color'}>{Description}</p>
                        {/*<a href={''} className={'mt-5 product_profile_button_color product_profile_button_border p-2'}>Read More</a>*/}
                    </div>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mt-5'}>

                    </div>
                    <div className={'row text-light pb-5 pt-5'}>
                        <div className={'col-12 col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 border border-primary text-center p-3'}>
                            <h4>Exelk Point Of Sales System</h4>
                            <span className="badge rounded-pill bg-success">Available</span>
                        </div>
                        <div className={'col-12 col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 border border-primary text-center p-3'}>
                            <h4>Exelk Inventory Management System</h4>
                            <span className="badge rounded-pill bg-success">Available</span>
                        </div>
                        <div className={'col-12 col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 border border-primary text-center p-3'}>
                            <h4>Exelk Cashbook</h4>
                            <span className="badge rounded-pill bg-success">Available</span>
                        </div>
                        <div className={'col-12 col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 border border-primary text-center p-3'}>
                            <h4>Exelk Reservation Management System</h4>
                            <span className="badge rounded-pill bg-warning text-dark">Pending</span>
                        </div>
                        <div className={'col-12 col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 border border-primary text-center p-3'}>
                            <h4>Exelk Customer Management System</h4>
                            <span className="badge rounded-pill bg-warning text-dark">Pending</span>
                        </div>
                        <div className={'col-12 col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 border border-primary text-center p-3'}>
                            <h4>Exelk E-Finance</h4>
                            <span className="badge rounded-pill bg-warning text-dark">Pending</span>
                        </div>
                        <div className={'col-12 col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 border border-primary text-center p-3'}>
                            <h4>Exelk Supply Chain Management System (SCM)</h4>
                            <span className="badge rounded-pill bg-warning text-dark">Pending</span>
                        </div>
                        <div className={'col-12 col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 border border-primary text-center p-3'}>
                            <h4>Exelk Human Resource Management System (HRM)</h4>
                            <span className="badge rounded-pill bg-warning text-dark">Pending</span>
                        </div>
                        <div className={'col-12 col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 border border-primary text-center p-3'}>
                            <h4>Exelk Payroll Management System</h4>
                            <span className="badge rounded-pill bg-warning text-dark">Pending</span>
                        </div>
                        <div className={'col-12 col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 border border-primary text-center p-3'}>
                            <h4>Exelk Procedure Management System</h4>
                            <span className="badge rounded-pill bg-warning text-dark">Pending</span>
                        </div>
                        <div className={'col-12 col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 border border-primary text-center p-3'}>
                            <h4>Exelk Product Development and Lifecycle System</h4>
                            <span className="badge rounded-pill bg-warning text-dark">Pending</span>
                        </div>
                        <div className={'col-12 col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 border border-primary text-center p-3'}>
                            <h4>Exelk Delivery Management System</h4>
                            <span className="badge rounded-pill bg-warning text-dark">Pending</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}