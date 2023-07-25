"use client";
import React,{useEffect} from "react";

import Image from 'next/image'
import styles from './page.module.css'
import Hero from "@/components/hero/hero";
import Section1 from "@/components/section1/section1";
import Section2 from "@/components/section2/section2";
import Section4 from "@/components/section4/section4";
import Section5 from "@/components/section5/section5";
import Section3 from "@/components/section3/section3";
import Footer from "@/components/footer/footer";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

export default function Home() {

    useEffect(()=>{
        Swal.fire({
            title: 'Your Attention!',
            text: 'Our website is still under construction! Some of the features may not properly work and It will be completed soon. Thank you for visiting us.',
            imageUrl: '/Images/popup/alert.png',
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'Custom image',
        })
    },[]);



  return (
    <>
        <Hero/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Footer/>
    </>
  )
}
