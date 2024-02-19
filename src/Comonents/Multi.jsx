import React, { useState } from 'react'
import { data } from './Data'


const Multi = () => {

const [elem, setElem] = useState(...data)


  return (
    <>
    <div className='container-fluid'>
<h1 className='text-center'>Our Courses</h1>
{data.map((e) => (
  <div className="card  d-inline-flex p-1 flex-wrap .justify-content-md-center mt-5 m-2" style={{width:"18rem"}} key={e.id}>
    <img src={e.img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title"></h5>
      <p className="card-text">{e.info}</p>
      <a href="#" className="btn btn-primary butten mx-5">Know More</a>
    </div>
  </div>

))}
</div>
    </>
  )
}

export default Multi