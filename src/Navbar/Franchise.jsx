import React from 'react';
import Footer from '../Comonents/Footer'

const Franchise = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 position-relative'>
                        <div className='image-container' style={{ position: 'relative' }}>

                            <img style={{ width: "100%" }} src="https://www.nifafinearts.com/images/franchise.jpg" alt="" className='img-fluid' />
                            <div className='content' style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(177, 30, 111, 0.5)' }}>
                                <img src="https://www.nifafinearts.com/images/newLogo.png" alt="" style={{ width: '50%' }} />
                                <h1 style={{ color: 'white', textAlign: 'center', marginTop: '30px', fontSize: "5rem" }}>FRANCHISE</h1>
                                <p style={{ color: 'white', textAlign: 'center' }}>Looking for a unique Franchise..?
                                    Take a look under our hood.</p>
                                <ul className='' style={{ color: 'white' }}>
                                    <li className='list-group-item'>Affordability</li>
                                    <li className='list-group-item'>Training and Recruitment</li>
                                    <li className='list-group-item'>Business Development Support</li>
                                    <li className='list-group-item'>Well Tested Curriculum</li>
                                    <li className='list-group-item'>Easy Paper Work</li>

                                </ul>
                                <button className="responsive-button">Download PDF for Detailed form</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="container">
                            <div className="row mb-3">
                                <div className="col-lg-7 text-left">
                                    <h4>Enquiry Form for Franchise</h4>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-6 text-left">
                                    <input className='form-control' type="text" placeholder='enter name' />
                                </div>
                                <div className="col-lg-6">
                                    <input className='form-control' type="text" placeholder='enter email' />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-6 text-left">
                                    <input className='form-control' type="text" placeholder='Enter Phone' />
                                </div>
                                <div className="col-lg-6">
                                    <input className='form-control' type="text" placeholder='Enter Qualification' />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-12">
                                    <textarea className="form-control" id="" cols="30" rows="5" placeholder='Enter Address'></textarea>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-6 text-left">
                                    <input className='form-control' type="text" placeholder='Interested city For Franchise' />
                                </div>
                                <div className="col-lg-6">
                                    <input className='form-control' type="text" placeholder='Enter state' />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-6 text-left">
                                    <input className='form-control' type="text" placeholder='Enter company Name' />
                                </div>
                                <div className="col-lg-6">
                                    <input className='form-control' type="text" placeholder='Enter Work Experience' />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-12 text-left">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Franchise;
