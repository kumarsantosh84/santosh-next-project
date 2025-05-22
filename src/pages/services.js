import Head from "next/head";
import Image from "next/image";

import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from  "./../CommonIncludes/header";
import Footer from  "./../CommonIncludes/footer";
import HomeBanner from  "./../Components/HomeBanner";
import HomeAbout from  "./../Components/HomeAbout";
import HomeServices from  "./../Components/HomeServices";
import HomeClients from  "./../Components/HomeClients";


function Services() {
    return(
<>
 <Head>
        <title>Our Services</title>
        <meta name="description" content="Our Services | www.websitedevelop.in" />
        <meta name="keyword" content="Website Develop, Website Design" />
    </Head>

    <Navbar/>
     <HomeServices/>        
      <HomeClients/>
      <Footer/>

</>

    )
}

export default Services;