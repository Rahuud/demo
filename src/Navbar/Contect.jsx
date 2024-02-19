import React from 'react'
import Footer from '../Comonents/Footer'
const Contect = () => {
    return (
        <>
            <div className="card mb-5">
                <img src="https://www.nifafinearts.com/images/contact.jpg" height={450} className="card-img-top" alt="..." />
            </div>
            <div className="row">
                <div className="col-12"><h1>CONTACT US</h1></div>
                <hr/>
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-4 bg-body-secondary

">
                        <div className="row">
                            <div className="col-12"><h3>Indian Branches:</h3></div>
                        </div>
                        <div className="row">
                            <div className="col-12"><h6>Gurgao(DIF Phase-4)</h6></div>
                        </div>
                        <div className="row">
                            <div className="col-12"><h6>Mumbai(Andheri West)</h6></div>
                        </div>
                        <div className="row">
                            <div className="col-12"><h6>Kailash Colony(south Delhi)</h6></div>
                        </div>
                        <div className="row">
                            <div className="col-12"><h3>International Branches</h3></div>
                        </div>
                        <div className="row">
                            <div className="col-12"><h6>London</h6></div>
                        </div>
                        <div className="row">
                            <div className="col-12"><h6>USA</h6></div>
                        </div>
                        <div className="row">
                            <div className="col-12"><h6>Dubai,UAE</h6></div>
                        </div>


                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-12"><p>Gurgaon 1012, Dlf Phase - 4, Opp Hamilton Court, Near Galleria Market Gurgaon, Haryana - 122002</p>
                                <p>+91-9555112200, 9810130552</p>
                                <p> admission@nifafinearts.com</p>
                                <p>Pls feel free to call us anytime between 10.00 AM to 6.00 PM (IST) .</p>

                                <p>Weekly Off Is Friday. Open on Monday to Thursday and Sat and Sunday.</p>

                                <p>Drop a msg for a call back. We ll be happy to assist you.</p></div>
                        </div>
                        <div className="col-12"><img src="https://maps.gstatic.com/mapfiles/openhand_8_8.cur" alt="" /></div>

                    </div>
                </div>
            </div>
            <div className="container bg-body-secondary mt-5">
        <div className="row">
          <div className="col-12">
            <h1>Enquire Now</h1>
          </div>
        </div>
      <hr />
      
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
            <h6>Message</h6>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <textarea className="form-control" name="" id="" cols="30" rows="5"></textarea>
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

export default Contect