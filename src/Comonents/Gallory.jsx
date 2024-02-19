import React, { useState } from 'react';
import { im } from "../assets/photo"; 

const Gallery = () => {
  const [pic, setPic] = useState(im); 

  return (
    <div>
      <h1 className='text-center mt-5'>Students Work</h1>
    <div className="container-fluid mt-5" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
      {pic.map((image, index) => (
        <div key={index} style={{ width: image.width, height: image.height, marginBottom: '10px' }}>
          <img 
            src={image.a} 
            alt={image.id} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
      ))}
    </div>
    </div>
  );
}

export default Gallery;


