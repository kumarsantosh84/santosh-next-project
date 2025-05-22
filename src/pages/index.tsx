import Head from "next/head";
//import Image from "next/image";

//import { Geist, Geist_Mono } from "next/font/google";
//import styles from "@/styles/Home.module.css";
import Navbar from  "./../CommonIncludes/header";
import Footer from  "./../CommonIncludes/footer";
import HomeBanner from  "./../Components/HomeBanner";
import HomeAbout from  "./../Components/HomeAbout";
import HomeServices from  "./../Components/HomeServices";
import HomeClients from  "./../Components/HomeClients";
import Portfolio from  "./../Components/Portfolio";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <>
      <Head>
        <title>Website Development in Delhi | Web Development Services in Delhi | www.websitedevelop.in</title>
        <meta name="description" content="Website Development in PHP, Website Development in Next JS," />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="2sOMZUozJTfUctm2VuwqJzpIzQFAsyJ37-Os61fy8S0" />
      </Head>

      <Navbar/>
      <HomeBanner/>
      <HomeAbout/>
      <HomeServices/> 
      <Portfolio/>    
      <HomeClients/>
      <Footer/>

      
     
    </>
  );
}
