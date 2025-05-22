import Link from "next/link";
function Footer()
{

  

return(
<>
 <footer className="footer">

        <div className="container">

            <div className="row">

                <div className="col-lg-4 col-md-4 col-xs-12">

                    <div className="widget clearfix">

                        <div className="widget-title">

                            <h3>About US</h3>

                        </div>

                        <p style={{marginTop:"10px",padding:"15px"}}> We work independent as Free Lance.</p>   

						<div className="footer-right">

							<ul className="footer-links-soi">

								

							</ul>

						</div>						

                    </div>

                </div>



				<div className="col-lg-4 col-md-4 col-xs-12">

                    <div className="widget clearfix">

                        <div className="widget-title">

                            <h3>Information Link</h3>

                        </div>

                        <ul className="footer-links">

                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/services">Our Services</Link></li>
                            <li><Link href="/team">Our Team</Link></li>
							<li><Link href="/contact">Contact</Link></li>

                        </ul>

                    </div>

                </div>

				

                <div className="col-lg-4 col-md-4 col-xs-12" id="contact_details">

                    <div className="widget clearfix">

                        <div className="widget-title">

                            <h3>Contact Details</h3>

                        </div>



                        <ul className="footer-links">
                        <li><Link href="mailto:jhaphpdeveloper@gmail.com">jhaphpdeveloper@gmail.com</Link></li>
                        <li><Link href="mailto:info@websitedevelop.in">info@websitedevelop.in</Link></li>                        
                        <li><Link href="/">www.websitedevelop.in</Link></li>
                        <li>A-39 & A-40, First Floor, Street No. 3 Syndicate Enclave, Phankha Road, New Delhi - 110045</li>
                            <li>+91 8920476441</li>

                        </ul>

                    </div>

                </div>

				

            </div>

        </div>

    </footer>

</>
);

}

export default Footer;