function HomeBanner()
{
return(
<>
<div  id="carouselExampleControls" className="carousel slide bs-slider box-slider" data-ride="carousel" data-pause="hover" data-interval="false" >

		

		<ol className="carousel-indicators">

			<li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>

			<li data-target="#carouselExampleControls" data-slide-to="1"></li>

			<li data-target="#carouselExampleControls" data-slide-to="2"></li>

		</ol>

		<div className="carousel-inner" role="listbox">

			<div className="carousel-item active">

				<div id="home" className="first-section" >

					<div className="dtab">

						<div className="container">

							<div className="row">

								<div className="col-md-12 col-sm-12 text-right">

									<div className="big-tagline">

										<h2><strong>Website Development </strong> in Delhi NCR</h2>

										<p className="lead">You will get complete online solution including E-commerce development, Design and Online Applications.</p>

											<a href="#" className="hover-btn-new"><span>Contact Us</span></a>

											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

											<a href="#" className="hover-btn-new"><span>Read More</span></a>

									</div>

								</div>

							</div>            

						</div>

					</div>

				</div>

			</div>

			<div className="carousel-item">

				<div id="home2" className="first-section" >

					<div className="dtab">

						<div className="container">

							<div className="row">

								<div className="col-md-12 col-sm-12 text-left">

									<div className="big-tagline">

										<h2 data-animation="animated zoomInRight">Linux<strong>Web Hosting</strong></h2>

										<p className="lead" data-animation="animated fadeInLeft">We Provide Linux Web Hosting at affordable price starting at just Rs.3000/- per year.</p>

											<a href="#" className="hover-btn-new"><span>Contact Us</span></a>

											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

											<a href="#" className="hover-btn-new"><span>Read More</span></a>

									</div>

								</div>

							</div>      

						</div>

					</div>

				</div>

			</div>

			<div className="carousel-item">

				<div id="home3" className="first-section" >

					<div className="dtab">

						<div className="container">

							<div className="row">

								<div className="col-md-12 col-sm-12 text-center">

									<div className="big-tagline">

										<h2 data-animation="animated zoomInRight"><strong>Website Maintanance</strong> Monthly Or Yearly.</h2>

										<p className="lead" data-animation="animated fadeInLeft">We provide website maintainance at very affordable price</p>

											<a href="#" className="hover-btn-new"><span>Contact Us</span></a>

											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

											<a href="#" className="hover-btn-new"><span>Read More</span></a>

									</div>

								</div>

							</div>      

						</div>

					</div>

				</div>

			</div>

			

			<a className="new-effect carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">

				<span className="fa fa-angle-left" aria-hidden="true"></span>

				<span className="sr-only">Previous</span>

			</a>



		

			<a className="new-effect carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">

				<span className="fa fa-angle-right" aria-hidden="true"></span>

				<span className="sr-only">Next</span>

			</a>

		</div>

	</div>
</>
);

}

export default HomeBanner;