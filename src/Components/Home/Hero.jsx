import world from "../../assets/world.jpeg"
function Hero() {
    return (
     <div >
<div className="hero-container">
<img src={world} alt="hero" className="hero" />
<div className="hero-content">
    <h1>Transforming Ideas <br />
    into INNOVATIVE <br />
     SOLUTIONS.</h1>
   <p>Grow your business through our <br />
   Tech Solutions and unlock your potential.</p>
   <div>
   <button className="btn">Explore More</button>
   </div>
  </div>
</div>
     </div>
    );
  }
  
  export default Hero;
  