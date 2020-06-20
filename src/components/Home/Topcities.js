import React from 'react';
import { Link ,NavLink } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

function Topcities() {

  return (
<>
<div className="theme-hero-area">
        <div className="theme-hero-area-bg-wrap">
          <div className="theme-hero-area-bg-pattern theme-hero-area-bg-pattern-ultra-light" style={{backgroundImage: 'url(img/patterns/travel/2.png)'}} />
          <div className="theme-hero-area-grad-mask" />
          <div className="theme-hero-area-inner-shadow theme-hero-area-inner-shadow-light" />
        </div>
        <div className="theme-hero-area-body">
          <div className="theme-page-section theme-page-section-xxl">
            <div className="container">
              <div className="theme-page-section-header theme-page-section-header-white">
                <h5 className="theme-page-section-title">Cities to Travel</h5>
                <p className="theme-page-section-subtitle">The most searched cities in March</p>
              </div>
              <div className="theme-inline-slider row" data-gutter={10}>
                <div className="owl-carousel owl-carousel-nav-white" data-items={5} data-loop="true" data-nav="true">
                  <div className="theme-inline-slider-item">
                    <div className="banner _h-40vh _br-3 _bsh-xs banner-animate banner-animate-mask-in banner-animate-slow">
                      <div className="banner-bg" style={{backgroundImage: 'url(./img/400x500.png)'}} />
                      <div className="banner-mask" />
                      <a className="banner-link" href="#" />
                      <div className="banner-caption _p-20 _bg-w banner-caption-bottom banner-caption-dark">
                        <h5 className="banner-title _fs _fw-b">Bangkok</h5>
                        <p className="banner-subtitle _fw-n _mt-5">Amet malesuada placerat</p>
                      </div>
                    </div>
                  </div>
                  <div className="theme-inline-slider-item">
                    <div className="banner _h-40vh _br-3 _bsh-xs banner-animate banner-animate-mask-in banner-animate-slow">
                      <div className="banner-bg" style={{backgroundImage: 'url(./img/400x500.png)'}} />
                      <div className="banner-mask" />
                      <a className="banner-link" href="#" />
                      <div className="banner-caption _p-20 _bg-w banner-caption-bottom banner-caption-dark">
                        <h5 className="banner-title _fs _fw-b">San Francisco</h5>
                        <p className="banner-subtitle _fw-n _mt-5">Vehicula volutpat porta</p>
                      </div>
                    </div>
                  </div>
                  <div className="theme-inline-slider-item">
                    <div className="banner _h-40vh _br-3 _bsh-xs banner-animate banner-animate-mask-in banner-animate-slow">
                      <div className="banner-bg" style={{backgroundImage: 'url(./img/400x500.png)'}} />
                      <div className="banner-mask" />
                      <a className="banner-link" href="#" />
                      <div className="banner-caption _p-20 _bg-w banner-caption-bottom banner-caption-dark">
                        <h5 className="banner-title _fs _fw-b">Paris</h5>
                        <p className="banner-subtitle _fw-n _mt-5">Commodo mattis id</p>
                      </div>
                    </div>
                  </div>
                  <div className="theme-inline-slider-item">
                    <div className="banner _h-40vh _br-3 _bsh-xs banner-animate banner-animate-mask-in banner-animate-slow">
                      <div className="banner-bg" style={{backgroundImage: 'url(./img/400x500.png)'}} />
                      <div className="banner-mask" />
                      <a className="banner-link" href="#" />
                      <div className="banner-caption _p-20 _bg-w banner-caption-bottom banner-caption-dark">
                        <h5 className="banner-title _fs _fw-b">London</h5>
                        <p className="banner-subtitle _fw-n _mt-5">Adipiscing metus quis</p>
                      </div>
                    </div>
                  </div>
                  <div className="theme-inline-slider-item">
                    <div className="banner _h-40vh _br-3 _bsh-xs banner-animate banner-animate-mask-in banner-animate-slow">
                      <div className="banner-bg" style={{backgroundImage: 'url(./img/400x500.png)'}} />
                      <div className="banner-mask" />
                      <a className="banner-link" href="#" />
                      <div className="banner-caption _p-20 _bg-w banner-caption-bottom banner-caption-dark">
                        <h5 className="banner-title _fs _fw-b">New York</h5>
                        <p className="banner-subtitle _fw-n _mt-5">Donec nam placerat</p>
                      </div>
                    </div>
                  </div>
                  <div className="theme-inline-slider-item">
                    <div className="banner _h-40vh _br-3 _bsh-xs banner-animate banner-animate-mask-in banner-animate-slow">
                      <div className="banner-bg" style={{backgroundImage: 'url(./img/400x500.png)'}} />
                      <div className="banner-mask" />
                      <a className="banner-link" href="#" />
                      <div className="banner-caption _p-20 _bg-w banner-caption-bottom banner-caption-dark">
                        <h5 className="banner-title _fs _fw-b">Dubai</h5>
                        <p className="banner-subtitle _fw-n _mt-5">Curabitur habitasse porttitor</p>
                      </div>
                    </div>
                  </div>
                  <div className="theme-inline-slider-item">
                    <div className="banner _h-40vh _br-3 _bsh-xs banner-animate banner-animate-mask-in banner-animate-slow">
                      <div className="banner-bg" style={{backgroundImage: 'url(./img/400x500.png)'}} />
                      <div className="banner-mask" />
                      <a className="banner-link" href="#" />
                      <div className="banner-caption _p-20 _bg-w banner-caption-bottom banner-caption-dark">
                        <h5 className="banner-title _fs _fw-b">Tokyo</h5>
                        <p className="banner-subtitle _fw-n _mt-5">Feugiat lobortis tortor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }


export default Topcities

