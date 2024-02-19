import React from 'react'
import Footer from '../Comonents/Footer'
const PayFee = () => {
  return (
    <>

      <div className="card mb-5">
        <img src="https://www.nifafinearts.com/banner-images/art-for-sale-bg.jpg" height={300} className="card-img-top" alt="..." />

      </div>
      <div className="container bg-body-secondary">
        <div className="row">
          <div className="col-12">
            <h1>Online Payment</h1>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <h6>Amount (INR)</h6>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <h6>Name</h6>
          </div>
          <div className="col-4">
            <h6>E-mail</h6>
          </div>
          <div className="col-4">
            <h6>Contacts</h6>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <input type="text" className="form-control" placeholder="Please enter name" />
          </div>
          <div className="col-4">
            <input type="text" className="form-control" placeholder="Please enter email id" />
          </div>
          <div className="col-4">
            <input type="text" className="form-control" placeholder="Please enter mobile number" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <h6>Address</h6>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <textarea className="form-control" name="" id="" cols="30" rows="5"></textarea>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <h6>City</h6>
          </div>
          <div className="col-4">
            <h6>State</h6>
          </div>
          <div className="col-4">
            <h6>Zip</h6>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <input type="text" className="form-control" placeholder="Please enter city" />
          </div>
          <div className="col-4">
            <input type="text" className="form-control" placeholder="Please enter state" />
          </div>
          <div className="col-4">
            <input type="text" className="form-control" placeholder="Please enter zip code" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-2">Enter Captcha :</div>
          <div className="col-2">
            <input type="text" className="form-control" />
          </div>
          <div className="col-6"></div>
          <div className="col-2">
            <button className="btn btn-primary butten">Checkout</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default PayFee