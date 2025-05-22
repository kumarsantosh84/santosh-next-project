function NavBar()
{
return(
<>
<header className="top-navbar">

		<nav className="navbar navbar-expand-lg navbar-light bg-light">

			<div className="container-fluid">

				<a  className="navbar-brand logotxt" href="/" >

                Website Develop				

				</a>

				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-host" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">

					<span className="icon-bar"></span>

                    <span className="icon-bar"></span>

                    <span className="icon-bar"></span>

				</button>

				<div className="collapse navbar-collapse" id="navbars-host">

					<ul className="navbar-nav ml-auto">

						<li className="nav-item active"><a className="nav-link" href="/">Home</a></li>

						<li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>						
                        
                        <li className="nav-item"><a className="nav-link" href="/services">Our Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="/pricing">Pricing</a></li>
						<li className="nav-item"><a className="nav-link" href="/team">Our Team</a></li>				

						<li className="nav-item"><a className="nav-link" href="#contact_details">Contact</a></li>

					</ul>

				

				</div>

			</div>

		</nav>

	</header>
</>
);

}

export default NavBar;