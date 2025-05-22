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

                        <p> We work independent as Free Lance.</p>   

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

                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a  href="/services">Our Services</a></li>
                            <li><a href="/team">Our Team</a></li>
							<li><a href="/contact">Contact</a></li>

                        </ul>

                    </div>

                </div>

				

                <div className="col-lg-4 col-md-4 col-xs-12" id="contact_details">

                    <div className="widget clearfix">

                        <div className="widget-title">

                            <h3>Contact Details</h3>

                        </div>



                        <ul className="footer-links">
                        <li><a href="mailto:jhaphpdeveloper@gmail.com">jhaphpdeveloper@gmail.com</a></li>
                        <li><a href="mailto:info@websitedevelop.in">info@websitedevelop.in</a></li>                        
                        <li><a href="/">www.websitedevelop.in</a></li>
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