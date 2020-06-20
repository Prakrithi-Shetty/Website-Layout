import React from 'react';
import { Link ,NavLink } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

function Footer() {

  return (
<>
<div className="theme-footer" id="mainFooter">
      <div className="container _ph-mob-0">
        <div className="row row-eq-height row-mob-full" data-gutter={60}>
          <div className="col-md-3">
            <div className="theme-footer-section theme-footer-">
              <a className="theme-footer-brand _mb-mob-30" href="#">
                <img src="Brand Logo" alt="Image Alternative text" title="Saiworld" />
              </a>
              <div className="theme-footer-brand-text">
                <p>Magnis porttitor penatibus dapibus ad molestie massa libero tristique auctor fringilla aliquet dolor hac leo</p>
                <p>Amet mi adipiscing magna gravida pretium cum sed sapien potenti himenaeos et cras dictumst molestie</p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-4">
                <div className="theme-footer-section theme-footer-">
                  <h5 className="theme-footer-section-title">Saiworld</h5>
                  <ul className="theme-footer-section-list">
                    <li>
                      <a href="#">About Saiworld</a>
                    </li>
                    <li>
                      <a href="#">Mobile App</a>
                    </li>
                    <li>
                      <a href="#">Customer Support</a>
                    </li>
                    <li>
                      <a href="#">Advertising</a>
                    </li>
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms of Use</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="theme-footer-section theme-footer-">
                  <h5 className="theme-footer-section-title">Explore</h5>
                  <ul className="theme-footer-section-list">
                    <li>
                      <a href="#">Countries</a>
                    </li>
                    <li>
                      <a href="#">Regions</a>
                    </li>
                    <li>
                      <a href="#">Cities</a>
                    </li>
                    <li>
                      <a href="#">Districs</a>
                    </li>
                    <li>
                      <a href="#">Airports</a>
                    </li>
                    <li>
                      <a href="#">Hotels</a>
                    </li>
                    <li>
                      <a href="#">Places of Interest</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="theme-footer-section theme-footer-">
                  <h5 className="theme-footer-section-title">Book</h5>
                  <ul className="theme-footer-section-list">
                    <li>
                      <a href="#">Apartments</a>
                    </li>
                    <li>
                      <a href="#">Resorts</a>
                    </li>
                    <li>
                      <a href="#">Villas</a>
                    </li>
                    <li>
                      <a href="#">Hostels</a>
                    </li>
                    <li>
                      <a href="#">B&amp;Bs</a>
                    </li>
                    <li>
                      <a href="#">Guesthouses</a>
                    </li>
                    <li>
                      <a href="#">Hotel Chains</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="theme-footer-section theme-footer-section-subscribe bg-grad _mt-mob-30">
              <div className="theme-footer-section-subscribe-bg" style={{backgroundImage: 'url(img/footer/footer_subscribe_bg.png)'}} />
              <div className="theme-footer-section-subscribe-content">
                <h5 className="theme-footer-section-title">Save up to 50% off your next trip</h5>
                <p className="text-muted">Subscribe to unlock our secret deals</p>
                <form>
                  <div className="form-group">
                    <input className="form-control theme-footer-subscribe-form-control" type="email" placeholder="Type your e-mail here" />
                  </div>
                  <button className="btn btn-primary-invert btn-shadow text-upcase theme-footer-subscribe-btn" type="submit">Get deals</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="theme-copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="theme-copyright-text">Copyright © 2020
              <a href="#">Saiworld</a>. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <ul className="theme-copyright-social">
              <li>
                <a className="fa fa-facebook" href="#" />
              </li>
              <li>
                <a className="fa fa-google" href="#" />
              </li>
              <li>
                <a className="fa fa-twitter" href="#" />
              </li>
              <li>
                <a className="fa fa-youtube-play" href="#" />
              </li>
              <li>
                <a className="fa fa-instagram" href="#" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  
  </>
  );
}

  export default Footer
  