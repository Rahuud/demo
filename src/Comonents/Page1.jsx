// Page1.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Page1() {
  return (
    <section style={{marginTop:"3rem"}} className="downapp">
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col md={5}>
            <div className="lmore-content text-center">
              <h2>Online Classes</h2>
              <p>Dear Students/Parents, Nifa presents its Learning App for your regular art practice in which we have added many amazing features like step-by-step recorded demo videos prepared by your faculty members, regular assessment of your practice through the assignment section, live class section from the same app, attendance, payment invoice, art news, announcements, important information, and direct connect with the management team are some more features. So hurry up and join now to experience personalized coaching by experts sitting at your home.</p>
              <p>We wish you Happy Learning. Stay Safe and Healthy.</p>
              <Button variant="outline" onClick={() => window.location.href='#'}>Read More</Button>
              <p className="nfothed">Download the app</p>
              <ul className="list-inline nappimg">
                <li className="list-inline-item"><a href="https://play.google.com/store/apps/details?id=co.thanos.fljvr" target="_blank"><img src="https://www.nifafinearts.com/images/gplay.png" className="img-fluid" alt="Google Play" style={{ maxWidth: '150px' }} /></a></li>
                <li className="list-inline-item"><a href="https://apps.apple.com/us/app/apple-store/id1472483563" target="_blank"><img src="https://www.nifafinearts.com/images/appstore.png" className="img-fluid" alt="App Store" style={{ maxWidth: '150px' }} /></a></li>
              </ul>
            </div>
          </Col>
          <Col md={7} className="d-flex justify-content-center align-items-center">
            <div className="embed-responsive embed-responsive-16by9" style={{height:"20rem",width:"40rem",objectFit:"cover" }}>
              <iframe width={"100%"} height={"100%"} title="YouTube Video" className="embed-responsive-item" src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0" frameBorder="0" allowFullScreen style={{ maxWidth: '100%', maxHeight: '200px' }}></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Page1;
