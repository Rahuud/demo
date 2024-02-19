import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg" style={{backgroundColor:"#F552A2"}}>
  <div class="container-fluid">

    <a class="navbar-brand" href="#" style={{color:"white"}}>Welcome to the National Institute of Fine Arts</a>
   
  
    <a class="navbar-brand" style={{color:"white"}} href="mailto:admission@nifafinearts.com" target="_top"><i class="fas fa-envelope mr-2"></i>admission@nifafinearts.com</a>
    	
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <a class="navbar-brand" style={{color:"white"}} href="#"><i class="fas fa-phone-alt mr-2"></i>9555112200</a>
        </li>
        <li class="nav-item">
        <a class="navbar-brand" style={{color:"white"}} href="#"><i class="fas fa-phone-alt mr-2"></i>9810130552</a>
        </li>
							<li  class="nav-item" ><a style={{color:"white"}}   class="navbar-brand"  href="https://www.facebook.com/nifafinearts" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
							<li class="nav-item" ><a style={{color:"white"}}   class="navbar-brand" href="https://twitter.com/artsnifa?lang=en" target="_blank"><i class="fab fa-twitter"></i></a></li>
							<li class="nav-item" ><a style={{color:"white"}}   class="navbar-brand" href="https://instagram.com/nifafinearts?igshid=9ni7d0aogzed" target="_blank"><i class="fab fa-instagram"></i></a></li>
							<li class="nav-item" ><a style={{color:"white"}}  class="navbar-brand"  href="https://www.youtube.com/channel/UCud0pfiZT-Ph2JX1_tN6rbw" target="_blank"><i class="fab fa-youtube"></i></a></li>
      </ul>
    </div>
  </div>
</nav>
    
    
    </>
  )
}

export default Navbar



