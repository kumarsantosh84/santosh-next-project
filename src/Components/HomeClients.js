import Link from "next/link";
function HomeClients()
{
return(
<>

<footer className="text-white text-lg-start" style={{background:"#282a35"}}>
 
  <div className="container p-4">
    
    <div className="row">
     
      <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase text-white">About Us</h5>
        <p className="text-white">
          We work independent as <br/> Free Lancer<br/> Kumar Santosh
        </p>
      </div>
     

     
      <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase text-white ">Important Link</h5>

        <ul className="list-unstyled mb-0">
          <li>
            <Link href="/" className="text-white">Home</Link>            
          </li>
          <li>
           <Link href="/about" className="text-white">About</Link>   
          </li>
          <li>
            <Link href="/services" className="text-white">Our Services</Link>   
          </li>
          <li>
           <Link href="/team" className="text-white">Our Team</Link>   
          </li>
          <li>
           <Link href="/contact" className="text-white">Contact</Link>   
          </li>
        </ul>
      </div>
     

     
      <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-0 text-white" >Contact Details</h5>
        <ul className="list-unstyled">
          <li>
            <Link href="mailto:jhaphpdeveloper@gmail.com" className="text-white" >jhaphpdeveloper@gmail.com</Link>
          </li>
          <li>
            <Link href="mailto:info@websitedevelop.in" className="text-white" >info@websitedevelop.in</Link>
          </li>
          <li>
            <Link href="tel:+918920476441" className="text-white" >+91-8920476441</Link>
          </li>
          <li>
            <a href="#!" className="text-white">Janakpuri, New Delhi</a>
          </li>
        </ul>
      </div>
     
    </div>
    
  </div>
  

  
  
  
</footer>
    
   

</>
);

}

export default HomeClients;