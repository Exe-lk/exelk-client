import Image from 'next/image'
import "./service-profile.scss"

export default function ServiceProfile({Title,Description,Title2,Description2,ImgSrc2,Title3,Description3,ImgSrc3,Title4,Description4,ImgSrc4,Title5,Description5,ImgSrc5}){

    return(
        <>
            <div className={'container'}>
                <div className={'row vh-100 mt-5'}>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 mt-5'}>
                        <a href={'/#section2'} className={'mt-5 mb-5 service_profile_button_color'}><p><i className="bi bi-arrow-left"></i> Services</p></a>
                        <h1 className={'display-3 service_profile_heading_color'}>{Title}</h1>
                        <p className={'lead mt-5 mb-5 service_profile_description_color'}>{Description}</p>
                        <a href={''} className={'mt-5 service_profile_button_color service_profile_button_border p-2'}>Read More</a>
                    </div>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mt-5'}>

                    </div>
                </div>
                <div id={''} className={'row vh-100'}>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'}>
                        <img className={'img-fluid'} src={ImgSrc2} width={'450px'} height={'450px'}/>
                    </div>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'}>
                        <h1 className={'display-6 service_profile_heading_color'}>{Title2}</h1>
                        <h6 className={'lead mt-5 service_profile_description_color'}>{Description2}</h6>
                    </div>
                </div>
                <div className={'row vh-100'}>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 d-lg-none d-block '}>
                        <img className={'img-fluid'} src={ImgSrc3} width={'450px'} height={'450px'}/>
                    </div>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'}>
                        <h1 className={'display-6 service_profile_heading_color'}>{Title3}</h1>
                        <h6 className={'lead mt-5 service_profile_description_color'}>{Description3}</h6>
                    </div>
                    <div className={'col-lg-6 col-xl-6 col-xxl-6 d-none d-md-block'}>
                        <img className={'img-fluid float-end'} src={ImgSrc3} width={'500px'} height={'500px'}/>
                    </div>
                </div>
                <div className={'row vh-100'}>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'}>
                        <img className={'img-fluid'} src={ImgSrc4} width={'450px'} height={'450px'}/>
                    </div>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'}>
                        <h1 className={'display-6 service_profile_heading_color'}>{Title4}</h1>
                        <h6 className={'lead mt-5 service_profile_description_color'}>{Description4}</h6>
                    </div>
                </div>
                <div className={'row vh-100'}>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 d-lg-none d-block '}>
                        <img className={'img-fluid'} src={ImgSrc5} width={'450px'} height={'450px'}/>
                    </div>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'}>
                        <h1 className={'display-6 service_profile_heading_color'}>{Title5}</h1>
                        <h6 className={'lead mt-5 service_profile_description_color'}>{Description5}</h6>
                    </div>
                    <div className={'col-lg-6 col-xl-6 col-xxl-6 d-none d-md-block'}>
                        <img className={'img-fluid float-end'} src={ImgSrc5} width={'450px'} height={'450px'}/>
                    </div>
                </div>
            </div>
        </>
    )
}