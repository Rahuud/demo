import React from 'react'
import Footer from '../Comonents/Footer'
const Art = () => {
  return (
    <>
    
    <div className="card mb-5">
                <img src="https://www.nifafinearts.com/arts-gallery/1618301951animation-sketching.jpg" height={550} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="text-center fw-bold fs-1">Art Gallery</h5>
            <p className='card-text'>Art is a means of showing your expressions, emotions and thoughts. Imagination has wings, moreover, when passion for arts gets a hand of right guidance, then the resulting artwork will be a great one. That is, when artistic attitude blends with innocent creativity, it gives a magnificent artwork such as these following paintings.</p>
                </div>
            </div>
    
            <div className='container-fluid d-flex flex-wrap  align-items-center gap-3 mb-10'>
                <div className="card" style={{ width: "15rem" }}>
                    <img src="https://www.nifafinearts.com/images/workshop.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="text-center">Workshops</h5>
                        <a href="#" className="btn btn-primary butten mx-4">Know more</a>
                    </div>
                </div>
   
                <div className="card" style={{ width: "15rem" }}>
                    <img src="https://www.nifafinearts.com/images/outdoor.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="text-center">Outdoor</h5>
                        <a href="#" className="btn btn-primary butten mx-4">Know more</a>
                    </div>
                </div>
   
                <div className="card" style={{ width: "15rem" }}>
                    <img src="https://www.nifafinearts.com/images/exhibition.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="text-center">Exhibition</h5>
                     
                        <a href="#" className="btn btn-primary butten mx-4">Know more</a>
                    </div>
                </div>
   
                <div className="card" style={{ width: "15rem" }}>
                    <img src="https://www.nifafinearts.com/images/media.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="text-center">Media Coverage</h5>
                   
                        <a href="#" className="btn btn-primary butten mx-4">Know more</a>
                    </div>
                </div>
   
                <div className="card" style={{ width: "15rem" }}>
                    <img src="https://www.nifafinearts.com/images/dailyactivity.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="text-center">Daily Activities</h5>
                       
                        <a href="#" className="btn btn-primary butten mx-4">Know more</a>
                    </div>
                </div>
   
         
   
            </div>
            <Footer></Footer>
        
    </>
  )
}

export default Art