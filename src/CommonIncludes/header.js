import Link from "next/link";
function NavBar()
{
return(
<>
<header className="top-navbar" >

		<nav className="navbar navbar-expand-lg navbar-light bg-light" >

			<div className="container-fluid">

				<Link  className="navbar-brand logotxt" href="/" >

                Website Develop				

				</Link>

				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-host" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">

					<span className="icon-bar"></span>

                    <span className="icon-bar"></span>

                    <span className="icon-bar"></span>

				</button>

				<div className="collapse navbar-collapse" id="navbars-host">

					<ul className="navbar-nav ml-auto">

						<li className="nav-item active"><Link className="nav-link" href="/">Home</Link></li>

						<li className="nav-item"><Link className="nav-link" href="/about">About Us</Link></li>						
                        
                        <li className="nav-item"><Link className="nav-link" href="/services">Our Services</Link></li>
                        <li className="nav-item"><Link className="nav-link" href="/pricing">Pricing</Link></li>
						<li className="nav-item"><Link className="nav-link" href="/team">Our Team</Link></li>				

						<li className="nav-item"><Link className="nav-link" href="/contact">Contact Us</Link></li>

					</ul>

				

				</div>

			</div>

		</nav>

	</header>
</>
);

}

export default NavBar;