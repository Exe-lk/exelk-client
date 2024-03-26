
export default function ServiceProfile({Title,Description,Title2,Description2,ImgSrc2,Title3,Description3,ImgSrc3,Title4,Description4,ImgSrc4,Title5,Description5,ImgSrc5}){

    return(
        <>
            <div className={'container'}>
                <div className={'row vh-100'}>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mt-5'}>
                        <i className="bi bi-arrow-left"></i>
                        <a href={'/#section2'} className={'mt-5 mb-5'}><p>Services</p></a>
                        <h1 className={'display-3'}>{Title}</h1>
                        <p className={'lead mt-5 mb-5'}>{Description}</p>
                        <a href={''} className={'mt-5'}><h6>Read More</h6></a>
                    </div>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'}>

                    </div>
                </div>
                <div id={''} className={'row vh-100'}>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'}>
                        <img className={'img-fluid'} src={ImgSrc2} width={'400px'} height={'400px'}/>
                    </div>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'}>
                        <h1 className={'display-6'}>{Title2}</h1>
                        <h6 className={'lead mt-5'}>{Description2}</h6>
                    </div>
                </div>
                <div className={'row vh-100'}>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 d-lg-none d-block '}>
                        <img className={'img-fluid'} src={ImgSrc3} width={'400px'} height={'400px'}/>
                    </div>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'}>
                        <h1 className={'display-6'}>{Title3}</h1>
                        <h6 className={'lead mt-5'}>{Description3}</h6>
                    </div>
                    <div className={'col-lg-6 col-xl-6 col-xxl-6 d-none d-md-block'}>
                        <img className={'img-fluid'} src={ImgSrc3} width={'400px'} height={'400px'}/>
                    </div>
                </div>
                <div className={'row vh-100'}>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'}>
                        <img className={'img-fluid'} src={ImgSrc4} width={'400px'} height={'400px'}/>
                    </div>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'}>
                        <h1 className={'display-6'}>{Title4}</h1>
                        <h6 className={'lead mt-5'}>{Description4}</h6>
                    </div>
                </div>
                <div className={'row vh-100'}>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 d-lg-none d-block '}>
                        <img className={'img-fluid'} src={ImgSrc5} width={'400px'} height={'400px'}/>
                    </div>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'}>
                        <h1 className={'display-6'}>{Title5}</h1>
                        <h6 className={'lead mt-5'}>{Description5}</h6>
                    </div>
                    <div className={'col-lg-6 col-xl-6 col-xxl-6 d-none d-md-block'}>
                        <img className={'img-fluid'} src={ImgSrc5} width={'400px'} height={'400px'}/>
                    </div>
                </div>
            </div>
        </>
    )
}