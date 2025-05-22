import Head from "next/head";
//import Image from "next/image";

//import { Geist, Geist_Mono } from "next/font/google";
//import styles from "@/styles/Home.module.css";
import Navbar from  "./../CommonIncludes/header";
import Footer from  "./../CommonIncludes/footer";
//import HomeBanner from  "./../Components/HomeBanner";
//import HomeAbout from  "./../Components/HomeAbout";
//import HomeServices from  "./../Components/HomeServices";
import HomeClients from  "./../Components/HomeClients";
import Price from  "./../Components/Price";


function Pricing() {
    return(
<>
 <Head>
        <title>Package Pricing</title>
        <meta name="description" content="Package Pricing | www.websitedevelop.in" />
        <meta name="keyword" content="Website Develop, Website Design" />
    </Head>

    <Navbar/>
     <Price/>        
      <HomeClients/>
      <Footer/>

</>

    )
}

export default Pricing;