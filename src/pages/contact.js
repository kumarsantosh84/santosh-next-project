import Head from "next/head";
//import Image from "next/image";

//import { Geist, Geist_Mono } from "next/font/google";
//import styles from "@/styles/Home.module.css";
import Navbar from  "./../CommonIncludes/header";
import Footer from  "./../CommonIncludes/footer";
//import HomeBanner from  "./../Components/HomeBanner";
//import HomeAbout from  "./../Components/HomeAbout";
//import HomeServices from  "./../Components/HomeServices";
//import HomeClients from  "./../Components/HomeClients";
//import Team from  "./../Components/Team";
//import Contact from  "./../Components/Contact";

import { sendEmail } from "../lib/resend";


function Contact() {

    sendEmail();

    return(
<>
 <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us | www.websitedevelop.in" />
        <meta name="keyword" content="Website Develop, Website Design" />
    </Head>

    <Navbar/>
      <div id="contact" className="contact-area section-padding">
	<div className="container">	
  									
		<div className="section-title text-center">
			<h3>Contact Us </h3>		
		</div>					
		<div className="row">
			<div className="col-lg-7">	
				<div className="contact">
					<form className="form" name="enq" method="post" action="{ sendmail }" onsubmit="return validation();">
						<div className="row">
							<div className="form-group col-md-6">
								<input type="text" name="name" className="form-control" placeholder="Name" required="required" />
							</div>
							<div className="form-group col-md-6">
								<input type="email" name="email" className="form-control" placeholder="Email" required="required" />
							</div>
							<div className="form-group col-md-12">
								<input type="text" name="subject" className="form-control" placeholder="Subject" required="required" />
							</div>
							<div className="form-group col-md-12">
								<textarea rows="6" name="message" className="form-control" placeholder="Your Message" required="required"></textarea>
							</div>
							<div className="col-md-12 text-center">
								<button type="submit" value="Send message" name="submit" id="submitButton" className="btn btn-contact-bg" title="Submit Your Message!">Send Message</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="col-lg-5">
				<div className="single_address">
					<h4>Our Address</h4>
					<p>Janakpuri, New Delhi - 110058</p>
				</div>
				<div className="single_address">
					<h4>Send your message</h4>
					<p>jhaphpdeveloper@gmail.com, info@websitedevelop.in</p>
				</div>
				<div className="single_address">
					<h4>Call us on</h4>
					<p>(+91) 8920476441</p>
				</div>
				<div className="single_address">
					<h4>Work Time</h4>
					<p>Mon - Fri: 10.00 - 18.00. <br/>Sat: 10.00 - 14.00</p>
				</div>					
			</div> 
		</div>
	</div>	
</div>   
     
      <Footer/>

</>

    )
}

export default Contact;