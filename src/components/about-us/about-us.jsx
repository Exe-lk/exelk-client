import './about-us.scss'

export default function AboutUs() {

    return (
        <div className={''}>
            <div className={'container-fluid aboutus_hero_img_wrapper'}>
                <div className={'row'}>
                    <img className={'img-fluid'} src={'/Images/about-us/hero/exelk-team-garden.jpg'}
                         alt={'Team Exelk'}/>
                </div>
            </div>
            <div className={'container-fluid aboutus_hero_txt_wrapper'}>
                <div className={'container mt-5'}>
                    <div className={'row'}>
                        <a href={'/'} className={'aboutus_back_button_color'}><p><i
                            className="bi bi-arrow-left"></i> back</p></a>
                        <h1 className={'aboutus_hero_txt_color'}>Who We Are</h1>
                    </div>
                </div>
            </div>
            <div className={'container'}>
                <div className={'row pb-5 pt-5'}>
                    <h2 className={'aboutus_txt_color text-center mb-5'}>Our Directors</h2>
                    <div className={'col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mb-3'}>
                        <img className={'img-fluid'} src={'/Images/about-us/directors/exelk-directors-group.jpg'}
                             alt={''}/>
                    </div>
                    <div className={'col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8'}>
                        <div className={'row text-light'}>
                            <div className={'col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 text-center'}>
                                <div className={'col-12'}>
                                    <img className={'img-fluid rounded-circle'}
                                         src={'/Images/about-us/directors/exelk-director-geethan.jpg'}
                                         alt={'Exe.lk Founder & CEO : Aluth Baduge Geethan Imal'} width={'150px'}
                                         height={'auto'}/>
                                </div>
                                <div className={'col-12 '}>
                                    <p className={'mt-2'}>A B Geethan Imal <br/> BSc (Hons) Software Engineering <br/> University of
                                        Plymouth, UK<br/><b className={'aboutus_director_title_color'}>Founder & CEO</b>
                                    </p>
                                </div>
                            </div>
                            <div className={'col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 text-center'}>
                                <div className={'col-12'}>
                                    <img className={'img-fluid rounded-circle'}
                                         src={'/Images/about-us/directors/exelk-director-shehan.jpg'}
                                         alt={'Exe.lk Co-Founder & COO : Shehan Chamika Gunawardena'} width={'150px'}
                                         height={'auto'}/>
                                </div>
                                <div className={'col-12'}>
                                    <p className={'mt-2'}>G Shehan Chamika <br/> BSc (Hons) Software Engineering <br/> University of
                                        Plymouth, UK<br/><b className={'aboutus_director_title_color'}>CO-Founder &
                                            COO</b></p>
                                </div>
                            </div>
                            <div className={'col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 text-center'}>
                                <div className={'col-12 '}>
                                    <img className={'img-fluid rounded-circle'}
                                         src={'/Images/about-us/directors/exelk-director-kasun.jpg'}
                                         alt={'Exe.lk Director & CTO : Kasun Kalhara Rajapaksha'} width={'150px'}
                                         height={'auto'}/>
                                </div>
                                <div className={'col-12'}>
                                    <p className={'mt-2'}>R Kasun Kalhara <br/> BSc (Hons) Software Engineering <br/> University of
                                        Plymouth, UK<br/><b className={'aboutus_director_title_color'}>Director &
                                            CTO</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'row pb-5 pt-5'}>
                    <h2 className={'aboutus_txt_color text-center mb-5'}>Our Team</h2>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 d-lg-none d-block mb-3'}>
                        <div className={'col-12'}>
                            <img className={'img-fluid'} src={'/Images/about-us/team/exelk-team-girls.jpg'} alt={''}/>
                        </div>
                        <div className={'col-12'}>
                            <img className={'img-fluid'} src={'/Images/about-us/team/exelk-team-02.jpg'} alt={''}/>
                        </div>
                        <div className={'col-12'}>
                            <img className={'img-fluid'} src={'/Images/about-us/team/exelk-team-03.jpg'} alt={''}/>
                        </div>
                        <div className={'col-12'}>
                            <img className={'img-fluid'} src={'/Images/about-us/team/exelk-team-01.jpg'} alt={''}/>
                        </div>
                    </div>
                    <div className={'col-12 col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8'}>
                        <div className={'row text-light'}>
                            <div className={'col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 text-center'}>
                                <div className={'col-12'}>
                                    <img className={'img-fluid rounded-circle'}
                                         src={'/Images/about-us/team/exelk-vindya.jpg'}
                                         alt={'Exe.lk Finance & HR Manager : Vindya Hathurusinghe'} width={'150px'}
                                         height={'auto'}/>
                                </div>
                                <div className={'col-12'}>
                                    <p className={'mt-2'}>Vindya Hathurusinghe <br/> BSc (Hons) Software Engineering <br/> University of
                                        Plymouth, UK<br/><b className={'aboutus_team_name_title_color'}>Finance & HR Manager</b>
                                    </p>
                                </div>
                            </div>
                            <div className={'col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 text-center'}>
                                <div className={'col-12'}>
                                    <img className={'img-fluid rounded-circle'}
                                         src={'/Images/about-us/team/exelk-jayani.jpg'}
                                         alt={'Exe.lk Co-Founder & COO : Shehan Chamika Gunawardena'} width={'150px'}
                                         height={'auto'}/>
                                </div>
                                <div className={'col-12'}>
                                    <p className={'mt-2'}>S. Jayani Chamika <br/> BSc (Hons) Software Engineering <br/> University of
                                        Plymouth, UK<br/><b className={'aboutus_team_name_title_color'}>Software Engineer</b></p>
                                </div>
                            </div>
                            <div className={'col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 text-center'}>
                                <div className={'col-12 '}>
                                    <img className={'img-fluid rounded-circle'}
                                         src={'/Images/about-us/team/exelk-bhagya.jpg'}
                                         alt={'Exe.lk UI UX Engineer : Bhagya Amarasignhe'} width={'150px'}
                                         height={'auto'}/>
                                </div>
                                <div className={'col-12'}>
                                    <p className={'mt-2'}>Bhagya Amarasinghe <br/> BSc (Hons) Software Engineering <br/> University of
                                        Plymouth, UK<br/><b className={'aboutus_team_name_title_color'}>UI UX Engineer</b></p>
                                </div>
                            </div>
                            <div className={'col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 text-center'}>
                                <div className={'col-12 '}>
                                    <img className={'img-fluid rounded-circle'}
                                         src={'/Images/about-us/team/exelk-achintha.jpg'}
                                         alt={'Exe.lk Software Developer : Isuru Achintha'} width={'150px'}
                                         height={'auto'}/>
                                </div>
                                <div className={'col-12'}>
                                    <p className={'mt-2'}>Isuru Achintha <br/> BSc (Hons) Software Engineering <br/> University of
                                        Plymouth, UK<br/><b className={'aboutus_team_name_title_color'}>Software Developer</b></p>
                                </div>
                            </div>
                            <div className={'col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 text-center'}>
                                <div className={'col-12 '}>
                                    <img className={'img-fluid rounded-circle'}
                                         src={'/Images/about-us/team/exelk-nisal.jpg'}
                                         alt={'Exe.lk Software Developer : Nisal Wijethunge'} width={'150px'}
                                         height={'auto'}/>
                                </div>
                                <div className={'col-12'}>
                                    <p className={'mt-2'}>Nisal Wijethunge <br/> BSc (Hons) Software Engineering <br/> University of
                                        Plymouth, UK<br/><b className={'aboutus_team_name_title_color'}>Software Developer</b></p>
                                </div>
                            </div>
                            <div className={'col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 text-center'}>
                                <div className={'col-12 '}>
                                    <img className={'img-fluid rounded-circle'}
                                         src={'/Images/about-us/team/exelk-hasanga.jpg'}
                                         alt={'Exe.lk QA Engineer : Hasanga Ekanayaka'} width={'150px'}
                                         height={'auto'}/>
                                </div>
                                <div className={'col-12'}>
                                    <p className={'mt-2'}>Hasanga Ekanayaka <br/> BSc (Hons) Software Engineering <br/> University of
                                        Plymouth, UK<br/><b className={'aboutus_team_name_title_color'}>QA Engineer</b></p>
                                </div>
                            </div>
                            <div className={'col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 text-center'}>
                                <div className={'col-12 '}>
                                    <img className={'img-fluid rounded-circle'}
                                         src={'/Images/about-us/team/exelk-pahani.jpg'}
                                         alt={'Exe.lk QA Engineer : Pahani Bihanga'} width={'150px'}
                                         height={'auto'}/>
                                </div>
                                <div className={'col-12'}>
                                    <p className={'mt-2'}>Pahani Bihanga <br/> BSc (Hons) Software Engineering <br/> University of
                                        Plymouth, UK<br/><b className={'aboutus_team_name_title_color'}>QA Engineer</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-lg-4 col-xl-4 col-xxl-4 d-none d-md-block'}>
                        <div className={'col-12'}>
                            <img className={'img-fluid'} src={'/Images/about-us/team/exelk-team-girls.jpg'} alt={''}/>
                        </div>
                        <div className={'col-12'}>
                            <img className={'img-fluid'} src={'/Images/about-us/team/exelk-team-02.jpg'} alt={''}/>
                        </div>
                        <div className={'col-12'}>
                            <img className={'img-fluid'} src={'/Images/about-us/team/exelk-team-03.jpg'} alt={''}/>
                        </div>
                        <div className={'col-12'}>
                            <img className={'img-fluid'} src={'/Images/about-us/team/exelk-team-01.jpg'} alt={''}/>
                        </div>
                    </div>
                </div>
                <div className={'row pb-5 pt-5'}>
                    <h2 className={'aboutus_txt_color text-center mb-5'}>Our Culture</h2>
                    <div className={'row'}>
                    </div>
                    <div className={'row'}>
                        <div className={'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3'}>
                            <img className={'img-fluid rounded-5'} src={'/Images/about-us/culture/exelk-friendly-directors.jpg'} alt={''}/>
                        </div>
                        <div className={'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3'}>
                            <img className={'img-fluid rounded-5'} src={'/Images/about-us/culture/exelk-friendly-team.jpg'} alt={''}/>
                        </div>
                        <div className={'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3'}>
                            <img className={'img-fluid rounded-5'} src={'/Images/about-us/culture/exelk-friendly-events-badminton-2.jpg'} alt={''}/>
                        </div>
                        <div className={'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3'}>
                            <img className={'img-fluid rounded-5'} src={'/Images/about-us/culture/exelk-friendly-events-badminton-1.jpg'} alt={''}/>
                        </div>
                        <div className={'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3'}>
                            <img className={'img-fluid rounded-5'} src={'/Images/about-us/culture/exelk-friendly-events-fishtherophy-1.jpg'} alt={''}/>
                        </div>
                        <div className={'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3'}>
                            <img className={'img-fluid rounded-5'} src={'/Images/about-us/culture/exelk-friendly-events-fishtherophy-2.jpg'} alt={''}/>
                        </div>
                        <div className={'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3'}>
                            <img className={'img-fluid rounded-5'} src={'/Images/about-us/culture/exelk-friendly-events-shooting-1.jpg'} alt={''}/>
                        </div>
                        <div className={'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3'}>
                            <img className={'img-fluid rounded-5'} src={'/Images/about-us/culture/exelk-friendly-events-shooting-2.jpg'} alt={''}/>
                        </div>
                        <div className={'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3'}>
                            <img className={'img-fluid rounded-5'} src={'/Images/about-us/culture/exelk-friendly-events-shooting-3.jpg'} alt={''}/>
                        </div>
                        <div className={'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3'}>
                            <img className={'img-fluid rounded-5'} src={'/Images/about-us/culture/exelk-friendly-events-swimming-1.jpg'} alt={''}/>
                        </div>
                        <div className={'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3'}>
                            <img className={'img-fluid rounded-5'} src={'/Images/about-us/culture/exelk-friendly-events-swimming-2.jpg'} alt={''}/>
                        </div>
                        <div className={'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3'}>
                            <img className={'img-fluid rounded-5'} src={'/Images/about-us/culture/exelk-friendly-events-swimming-3.jpg'} alt={''}/>
                        </div>
                    </div>
                </div>
                <div className={'row pb-5 pt-5'}>
                    <h2 className={'aboutus_txt_color text-center mb-5'}>Our Vision & Mission</h2>
                    <p className={'our_vision_and_mission_txt_color lead'}>Our vision is to create cutting-edge solutions that seamlessly integrate into everyday life, simplifying tasks and enhancing experiences. With a mission to empower individuals and businesses through innovative technology, we are dedicated to pushing the boundaries of what is possible and leaving an indelible mark on the tech industry.
                    </p>
                </div>
            </div>
        </div>
    )
}