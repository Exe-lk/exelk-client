
export default function ServiceProfile({Title,Description,Title2,Description2,ImgSrc2,Title3,Description3,ImgSrc3,Title4,Description4,ImgSrc4,Title5,Description5,ImgSrc5}){

    return(
        <>
            <div className={'container'}>
                <div className={'row vh-100'}>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'}>
                        <a href={'/#section2'}><p>Services</p></a>
                        <h1 className={'display-3'}>{Title}</h1>
                        <p className={''}>{Description}</p>
                        <a href={''}><h6>Read More</h6></a>
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
                        <h6 className={''}>{Description2}</h6>
                    </div>
                </div>
                <div className={'row vh-100'}>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 d-lg-none d-block '}>
                        <img className={'img-fluid'} src={ImgSrc3} width={'400px'} height={'400px'}/>
                    </div>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'}>
                        <h1 className={'display-6'}>{Title3}</h1>
                        <h6 className={''}>{Description3}</h6>
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
                        <h6 className={''}>{Description4}</h6>
                    </div>
                </div>
                <div className={'row vh-100'}>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 d-lg-none d-block '}>
                        <img className={'img-fluid'} src={ImgSrc5} width={'400px'} height={'400px'}/>
                    </div>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'}>
                        <h1 className={'display-6'}>{Title5}</h1>
                        <h6 className={''}>{Description5}</h6>
                    </div>
                    <div className={'col-lg-6 col-xl-6 col-xxl-6 d-none d-md-block'}>
                        <img className={'img-fluid'} src={ImgSrc5} width={'400px'} height={'400px'}/>
                    </div>
                </div>
            </div>
        </>
    )
}