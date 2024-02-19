import React from 'react'
import Multi from '../Comonents/Multi'
import Footer from '../Comonents/Footer'
const Courses = () => {
  return (
    <>
    
    <div className="card mb-3">
                <img src="https://www.nifafinearts.com/course-banner_image/16182170512ydfa.jpg" height={400} className="card-img-top" alt="..." />
                <div className="card-body">
                
                 <p className='card-text'>We offer courses in Fine Arts for all ages and abilities. Our courses are designed to give you complete insight on how you can make a career in fine arts or take this program for your inner growth as an artist. If you do these courses for your own self and not for your career then also you will see how art can change your perspective and gives you a stress free mind and soul.All our courses are researched, structured and focused on developing one or more aspects of a student's skills. At the end of each set of integrated courses students are asked for their feedback to ensure needs are met and value delivered. At all times we are aware that each student has different capabilities, needs and expectations so we try to blend the fun of creativity with the learning required to progress.These courses are certified by UGC and NCT. A full list appears below.</p>
               
                </div>
            </div>
            <Multi/>
            <Footer/>
    </>
  )
}

export default Courses