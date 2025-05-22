function Portfolio(){
    return(
        <>
        <div id="ourclients" style={{marginTop:"50px"}}>
    
      <div className="row">
        <div className="section-title text-center" style={{ display:"block",clear:"both", width:"100%" }}>                        
		<h3>Portfolio </h3>  
</div>       
</div>
</div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{padding:"50px 50px 50px 50px",background:"lightgray"}}>
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="portfolio/asc.png" alt="All Schools Colleges" title="All Schools Colleges" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="portfolio/phoolwala.png" alt="Phoolwala" title="Phoolwala" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="portfolio/npa.png" alt="Newspaper Adagency" title="Newspaper Adagency" />
    </div>

    <div className="carousel-item">
      <img className="d-block w-100" src="portfolio/ilo.png" alt="India Law Offices" title="India Law Offices" />
    </div>

    <div className="carousel-item">
      <img className="d-block w-100" src="portfolio/oneness.png" alt="Onenessrun" title="Onenessrun" />
    </div>

    <div className="carousel-item">
      <img className="d-block w-100" src="portfolio/intact.png" alt="Intact Advertising" title="Intact Advertising" />
    </div>

    <div className="carousel-item">
      <img className="d-block w-100" src="portfolio/tcl.png" alt="Tangerine Creative Lab" title="Tangerine Creative Lab" />
    </div>

  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </>
    )
}

export default Portfolio;