import React from 'react';
import Footer from '../Comonents/Footer';

const Admission = () => {
    return (
        <>
            <div className="card mb-3">
                <img src="https://www.nifafinearts.com/images/admission.jpg" height={400} className="card-img-top" alt="..." />
            </div>
            <div className='container-fluid d-flex justify-content-center pt-5'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src="https://www.nifafinearts.com/images/onadmleft.jpg" alt="" className='img-fluid' />
                    </div>
                    <div className='col-lg-6 '>
                        <div className="container">
                            <div className="row mb-3">
                                <div className="col-lg-6 text-left">
                                    <label>Course Name</label>
                                </div>
                                <div className="col-lg-6">
                                    <input className='form-control' type="text" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-6 text-left">
                                    <label>Name</label>
                                </div>
                                <div className="col-lg-6">
                                    <input className='form-control' type="text" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-6 text-left">
                                    <label>Father's/Husband's name & Occupations</label>
                                </div>
                                <div className="col-lg-6">
                                    <input className='form-control' type="text" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-6 text-left">
                                    <label>Nature Of Business</label>
                                </div>
                                <div className="col-lg-6">
                                    <input className='form-control' type="text" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-6 text-left">
                                    <label>Date Of Birth</label>
                                </div>
                                <div className="col-lg-6">
                                    <input className='form-control' type="text" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-6 text-left">
                                    <label>Qualification</label>
                                </div>
                                <div className="col-lg-6">
                                    <input className='form-control' type="text" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-6 text-left">
                                    <label>Occupation</label>
                                </div>
                                <div className="col-lg-6">
                                    <input className='form-control' type="text" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-6 text-left">
                                    <label>Permanent Address</label>
                                </div>
                                <div className="col-lg-6">
                                    <input className='form-control' type="text" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-6 text-left">
                                    <label>Phone No</label>
                                </div>
                                <div className="col-lg-6">
                                    <input className='form-control' type="text" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-6 text-left">
                                    <label>E-Mail</label>
                                </div>
                                <div className="col-lg-6">
                                    <input className='form-control' type="text" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-6 text-left">
                                    <label>Enter Captcha</label>
                                </div>
                                <div className="col-lg-6">
                                    <input className='form-control' type="text" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-12 text-left">
                                    <p>Please read our Refund Policy. By submitting this form, you agree that you have read and understood the Terms and you agree to them.
                                    </p>
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
            <Footer />
        </>
    )
}

export default Admission;
