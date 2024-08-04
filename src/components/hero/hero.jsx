import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import scss for Home
import './hero.scss';

export default function Hero(){

    return(
        <div id="hero" className="container-fluid hero">
            <div className="container-fluid hero_animation">
                {/* Each container has wrapper */}
                <div className="container-fluid animation_eliment1_wrapper">
                    {/* Div for applying css animation  */}
                    <div className="animation_eliment1">
                        {/* floating element image */}

                        <img className={'img-fluid animation_img'} src="/Images/Hero/X-1.svg" alt="img"/>
                    </div>
                </div>
                <div className="container-fluid animation_eliment2_wrapper">
                    <div className="animation_eliment2">

                        <img className={'img-fluid animation_img'} src="/Images/Hero/Rectangle 4.svg" alt="img"/>
                    </div>
                </div>

                <div className="container-fluid animation_eliment3_wrapper">
                    <div className="animation_eliment3">

                        <img className={'img-fluid animation_img'} src="/Images/Hero/Polygon 4.svg" alt="img"/>
                    </div>
                </div>

                <div className="container-fluid animation_eliment4_wrapper">
                    <div className="animation_eliment4">

                        <img className={'img-fluid animation_img'} src="/Images/Hero/Ellipse 3.svg" alt="img"/>
                    </div>
                </div>

                <div className="container-fluid animation_eliment5_wrapper">
                    <div className="animation_eliment5">

                        <img className={'img-fluid animation_img'} src="/Images/Hero/Ellipse 2.svg" alt="img"/>
                    </div>
                </div>

                <div className="container-fluid animation_eliment6_wrapper">
                    <div className="animation_eliment6">

                        <img className={'img-fluid animation_img'} src="/Images/Hero/Polygon 1.svg" alt="img"/>
                    </div>
                </div>

                <div className="container-fluid animation_eliment7_wrapper">
                    <div className="animation_eliment7">

                        <img className={'img-fluid animation_img'} src="/Images/Hero/X.svg" alt="img"/>
                    </div>
                </div>

                <div className="container-fluid animation_eliment8_wrapper">
                    <div className="animation_eliment8">

                        <img className={'img-fluid animation_img'} src="/Images/Hero/Polygon 3.svg" alt="img"/>
                    </div>
                </div>

                <div className="container-fluid animation_eliment9_wrapper">
                    <div className="animation_eliment9">

                        <img className={'img-fluid animation_img'} src="/Images/Hero/Ellipse 1.svg" alt="img"/>
                    </div>
                </div>

                <div className="container-fluid animation_eliment10_wrapper">
                    <div className="animation_eliment10">

                        <img className={'img-fluid animation_img'} src="/Images/Hero/Rectangle 5.svg" alt="img"/>
                    </div>
                </div>
            </div>
            <div className="container pt-5 mt-5">

                <img className="img-fluid" src="/Images/e-logo-c.png" alt="img"/>
                {/* website heading */}
                {/* <h2 className={'text-light'}>Make Your Idea Executable</h2> */}
                {/* button for open client request submit popup  */}
                {/* <button  className="btn btn-lg btn_outline_secondary cursor-pointer mt-5" href="#section5">Connect With Us</button> */}
                <button className="btn btn-lg btn_outline_secondary mt-5">Connect With Us  <i className="fa-solid fa-arrow-right-long"></i></button>
            </div>
        </div>
    )
}