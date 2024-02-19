import React from 'react';

const Footer = () => {
    return (
        <div  className="mt-5" id="footer-container2">
            <footer>
                <div className="container-fluid nfotcont">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xs-6">
                                <p className="aline fs-4 fw-bold">Company</p>
                                <ul className="d-flex flex-column mb-3 gap-3">
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>About</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Facilities</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Career</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Contact Us</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Terms & Conditions</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Refund Policy</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Privacy Policy</a></li>
                                </ul>
                            </div>

                            <div className="col-md-3 col-lg-3 col-xs-6 fotcol4">
                                <p className="aline fs-4 fw-bold">Activities</p>
                                <ul className="d-flex flex-column mb-3 gap-3">
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Art Gallery</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Workshops</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Outdoor Activities</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Media Coverage</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Art Events</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Exhibition</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Daily Activities</a></li>
                                </ul>
                            </div>

                            <div className="col-md-3 col-lg-3 col-xs-6 fotcol4">
                                <p className="aline fs-4 fw-bold">Popular Course</p>
                                <ul className="d-flex flex-column mb-3 gap-3">
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Diploma in Fine Arts</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Certificate Hobby Course</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Entrance Preparation</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>BFA</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Animation Sketching</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Kids Diploma</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xs-6 fotcol4">
                                <p className="aline fs-4 fw-bold">Our Locations</p>
                                <ul className="d-flex flex-column mb-3 gap-3">
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Gurgaon (Dlf Phase - 4)</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Mumbai (Andheri West)</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>South Delhi (Kailash Colony)</a></li>
                                    <li className="list-group-item"><br /><p className="nfothed">International Branches</p></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>London</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>USA</a></li>
                                    <li className="list-group-item"><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Dubai, UAE</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row nfotrow2">
                            <div className="col-md-5 col-lg-5 col-xs-12">
                                <p className="nfothed mt-4 mt-sm-0">NIFA is a unit of Nifaedutech Pvt Ltd.</p>
                                <p className="nfothed mt-4 mt-sm-0">Connect with us</p>
                                <p><a href="tel:9555112200" target="_top" style={{ textDecoration: 'none', color: 'inherit' }}>9555112200</a>,<a href="tel:9810130552" target="_top" style={{ textDecoration: 'none', color: 'inherit' }}>9810130552</a> </p>
                                <p><a href="mailto:admission@nifafinearts.com" target="_top"  style={{ textDecoration: 'none', color: 'inherit' }}>admission@nifafinearts.com</a></p>
                            </div>

                            <div className="col-md-7 col-lg-7 col-xs-12 align-left fotcol4 text-end">
                                <p className="nfothed text-right">Download the app</p>
                                <ul className="list-inline nappimg text-right mb-0">
                                    <li className="list-inline-item"><a href="https://play.google.com/store/apps/details?id=co.thanos.fljvr" target="_blank"><img src="https://www.nifafinearts.com/images/gplay.png" className="img-fluid" alt="Google Play" style={{ maxWidth: '150px' }} /></a></li>
                                    <li className="list-inline-item"><a href="https://apps.apple.com/us/app/apple-store/id1472483563" target="_blank"><img src="https://www.nifafinearts.com/images/appstore.png" className="img-fluid" alt="App Store" style={{ maxWidth: '150px' }} /></a></li>
                                </ul>
                                <p className="nfotbotline text-right mb-0 mt-3">© Copyright 2021 NIFA Fine Arts. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="whatsapp">
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=919555112200"><i className="fab fa-whatsapp"></i></a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
