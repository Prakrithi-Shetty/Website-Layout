import React from 'react';


function HotelPages() {
    return (
        <div>
        {/* <nav className="navbar navbar-default navbar-inverse navbar-theme navbar-theme-abs navbar-theme-transparent navbar-theme-border" id="main-nav">
          <div className="container">
            <div className="navbar-inner nav">
              <div className="navbar-header">
                <button className="navbar-toggle collapsed" data-target="#navbar-main" data-toggle="collapse" type="button" area-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="index.html">
                  <img src="img/logo.png" alt="Image Alternative text" title="Image Title" />
                </a>
              </div>
              <div className="collapse navbar-collapse" id="navbar-main">
                <ul className="nav navbar-nav">
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="index.html" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                    <div className="dropdown-menu dropdown-menu-lg">
                      <div className="row">
                        <div className="col-md-4">
                          <h5 className="dropdown-meganav-list-title">Homepages</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="index.html">Index 1</a>
                            </li>
                            <li>
                              <a href="index-2.html">Index 2</a>
                            </li>
                            <li>
                              <a href="index-3.html">Index 3</a>
                            </li>
                            <li>
                              <a href="index-4.html">Index 4</a>
                            </li>
                            <li>
                              <a href="index-5.html">Index 5</a>
                            </li>
                            <li>
                              <a href="index-6.html">Index 6</a>
                            </li>
                            <li>
                              <a href="index-7.html">Index 7</a>
                            </li>
                            <li>
                              <a href="index-8.html">Index 8</a>
                            </li>
                            <li>
                              <a href="index-9.html">Index 9</a>
                            </li>
                            <li>
                              <a href="index-10.html">Index 10</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5 className="dropdown-meganav-list-title">Misc</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="blog-post.html">Blog Post</a>
                            </li>
                            <li>
                              <a href="404.html">404</a>
                            </li>
                            <li>
                              <a href="about-us.html">About Us</a>
                            </li>
                            <li>
                              <a href="contact.html">Contact</a>
                            </li>
                            <li>
                              <a href="login.html">Login</a>
                            </li>
                            <li>
                              <a href="login-2.html">Login 2</a>
                            </li>
                            <li>
                              <a href="register.html">Register</a>
                            </li>
                            <li>
                              <a href="pwd-reset.html">Reset password</a>
                            </li>
                            <li>
                              <a href="payment-success.html">Sucess Payment</a>
                            </li>
                            <li>
                              <a href="coming-soon.html">Coming Soon</a>
                            </li>
                            <li>
                              <a href="loading.html">Loading</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5 className="dropdown-meganav-list-title">Country/City</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="index-city-1.html">Index City 1</a>
                            </li>
                            <li>
                              <a href="index-city-2.html">Index City 2</a>
                            </li>
                            <li>
                              <a href="index-city-3.html">Index City 3</a>
                            </li>
                            <li>
                              <a href="index-country-1.html">Index Country 1</a>
                            </li>
                            <li>
                              <a href="index-country-2.html">Index Country 2</a>
                            </li>
                            <li>
                              <a href="index-country-3.html">Index Country 3</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="active dropdown">
                    <a className="dropdown-toggle" href="hotel-index-1.html" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Hotels</a>
                    <div className="dropdown-menu dropdown-menu-xl">
                      <div className="row">
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Homepages</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="hotel-index-1.html">Layout 1</a>
                            </li>
                            <li>
                              <a href="hotel-index-2.html">Layout 2</a>
                            </li>
                            <li>
                              <a href="hotel-index-3.html">Layout 3</a>
                            </li>
                            <li>
                              <a href="hotel-index-4.html">Layout 4</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Search Results</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="hotel-results-1.html">Layout 1</a>
                            </li>
                            <li>
                              <a href="hotel-results-2.html">Layout 2</a>
                            </li>
                            <li>
                              <a href="hotel-results-3.html">Layout 3</a>
                            </li>
                            <li>
                              <a href="hotel-results-4.html">Layout 4</a>
                            </li>
                            <li>
                              <a href="hotel-results-5.html">Layout 5</a>
                            </li>
                            <li>
                              <a href="hotel-results-6.html">Layout 6</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Hotel Pages</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="hotel-page-1.html">Layout 1</a>
                            </li>
                            <li>
                              <a href="hotel-page-2.html">Layout 2</a>
                            </li>
                            <li>
                              <a href="hotel-page-3.html">Layout 3</a>
                            </li>
                            <li>
                              <a href="hotel-page-4.html">Layout 4</a>
                            </li>
                            <li>
                              <a href="hotel-page-5.html">Layout 5</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Payment</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="hotel-payment-1.html">Layout 1</a>
                            </li>
                            <li>
                              <a href="hotel-payment-2.html">Layout 2</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="room-index-1.html" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Rooms</a>
                    <div className="dropdown-menu dropdown-menu-xl">
                      <div className="row">
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Homepages</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="room-index-1.html">Layout 1</a>
                            </li>
                            <li>
                              <a href="room-index-2.html">Layout 2</a>
                            </li>
                            <li>
                              <a href="room-index-3.html">Layout 3</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Search Results</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="room-results-1.html">Layout 1</a>
                            </li>
                            <li>
                              <a href="room-results-2.html">Layout 2</a>
                            </li>
                            <li>
                              <a href="room-results-3.html">Layout 3</a>
                            </li>
                            <li>
                              <a href="room-results-4.html">Layout 4</a>
                            </li>
                            <li>
                              <a href="room-results-5.html">Layout 5</a>
                            </li>
                            <li>
                              <a href="room-results-6.html">Layout 6</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Room Pages</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="room-page-1.html">Layout 1</a>
                            </li>
                            <li>
                              <a href="room-page-2.html">Layout 2</a>
                            </li>
                            <li>
                              <a href="room-page-3.html">Layout 3</a>
                            </li>
                            <li>
                              <a href="room-page-4.html">Layout 4</a>
                            </li>
                            <li>
                              <a href="room-page-5.html">Layout 5</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Payment</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="room-payment-1.html">Layout 1</a>
                            </li>
                            <li>
                              <a href="room-payment-2.html">Layout 2</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="flight-index-1.html" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Flights</a>
                    <div className="dropdown-menu dropdown-menu-lg">
                      <div className="row">
                        <div className="col-md-4">
                          <h5 className="dropdown-meganav-list-title">Homepages</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="flight-index-1.html">Layout 1</a>
                            </li>
                            <li>
                              <a href="flight-index-2.html">Layout 2</a>
                            </li>
                            <li>
                              <a href="flight-index-3.html">Layout 3</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5 className="dropdown-meganav-list-title">Search Results</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="flight-results-1.html">Layout 1</a>
                            </li>
                            <li>
                              <a href="flight-results-2.html">Layout 2</a>
                            </li>
                            <li>
                              <a href="flight-results-3.html">Layout 3</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5 className="dropdown-meganav-list-title">Payment</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="flight-payment-1.html">Layout 1</a>
                            </li>
                            <li>
                              <a href="flight-payment-2.html">Layout 2</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="car-index-1.html" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cars</a>
                    <div className="dropdown-menu dropdown-menu-lg">
                      <div className="row">
                        <div className="col-md-4">
                          <h5 className="dropdown-meganav-list-title">Homepages</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="car-index-1.html">Layout 1</a>
                            </li>
                            <li>
                              <a href="car-index-2.html">Layout 2</a>
                            </li>
                            <li>
                              <a href="car-index-3.html">Layout 3</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5 className="dropdown-meganav-list-title">Search Results</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="car-results-1.html">Layout 1</a>
                            </li>
                            <li>
                              <a href="car-results-2.html">Layout 2</a>
                            </li>
                            <li>
                              <a href="car-results-3.html">Layout 3</a>
                            </li>
                            <li>
                              <a href="car-results-4.html">Layout 4</a>
                            </li>
                            <li>
                              <a href="car-results-5.html">Layout 5</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5 className="dropdown-meganav-list-title">Payment</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="car-payment-1.html">Layout 1</a>
                            </li>
                            <li>
                              <a href="car-payment-2.html">Layout 2</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="exp-index-1.html" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Experiences</a>
                    <div className="dropdown-menu dropdown-menu-xl">
                      <div className="row">
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Homepages</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="exp-index-1.html">Layout 1</a>
                            </li>
                            <li>
                              <a href="exp-index-2.html">Layout 2</a>
                            </li>
                            <li>
                              <a href="exp-index-3.html">Layout 3</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Search Results</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="exp-results-1.html">Layout 1</a>
                            </li>
                            <li>
                              <a href="exp-results-2.html">Layout 2</a>
                            </li>
                            <li>
                              <a href="exp-results-3.html">Layout 3</a>
                            </li>
                            <li>
                              <a href="exp-results-4.html">Layout 4</a>
                            </li>
                            <li>
                              <a href="exp-results-5.html">Layout 5</a>
                            </li>
                            <li>
                              <a href="exp-results-6.html">Layout 6</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Event Pages</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="exp-page-1.html">Layout 1</a>
                            </li>
                            <li>
                              <a href="exp-page-2.html">Layout 2</a>
                            </li>
                            <li>
                              <a href="exp-page-3.html">Layout 3</a>
                            </li>
                            <li>
                              <a href="exp-page-4.html">Layout 4</a>
                            </li>
                            <li>
                              <a href="exp-page-5.html">Layout 5</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h5 className="dropdown-meganav-list-title">Payment</h5>
                          <ul className="dropdown-meganav-list-items">
                            <li>
                              <a href="exp-payment-1.html">Layout 1</a>
                            </li>
                            <li>
                              <a href="exp-payment-2.html">Layout 2</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                      <span className="_desk-h">Currency</span>
                      <b>USD</b>
                    </a>
                    <div className="dropdown-menu dropdown-menu-xxl">
                      <h5 className="dropdown-meganav-select-list-title">Popular Currencies</h5>
                      <div className="row" data-gutter={10}>
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-currency">
                            <li>
                              <a href="#">
                                <span>€</span>Euro
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>£</span>Pound sterling
                              </a>
                            </li>
                            <li className="active">
                              <a href="#">
                                <span>US$</span>U.S. dollar
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-currency">
                            <li>
                              <a href="#">
                                <span>CAD</span>Canadian dollar
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>AUD</span>Australian dollar
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>RUB</span>Russian Ruble
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-currency">
                            <li>
                              <a href="#">
                                <span>S$</span>Singapore dollar
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>CNY</span>Chinese yuan
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>¥</span>Japanese yen
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <hr />
                      <h5 className="dropdown-meganav-select-list-title">All Currencies</h5>
                      <div className="row" data-gutter={10}>
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-currency">
                            <li>
                              <a href="#">
                                <span>AR$</span>Argentine peso
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>AUD</span>Australian dollar
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>AZN</span>Azerbaijan, New Ma...
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>BHD</span>Bahrain dinar
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>BRL</span>Brazilian real
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>BGN</span>Bulgarian lev
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>CAD</span>Canadian dollar
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>XOF</span>CFA Franc BCEAO
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>CL$</span>Chilean peso
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>CNY</span>Chinese yuan
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>COP</span>Colombian peso
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>Kč</span>Czech koruna
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>DKK</span>Danish krone
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-currency">
                            <li>
                              <a href="#">
                                <span>EGP</span>Egyptian pound
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>€</span>Euro
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>FJD</span>Fijian dollar
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>GEL</span>Georgian lari
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>HK$</span>Hong Kong Dollar
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>HUF</span>Hungarian forint
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>Rs.</span>Indian rupee
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>Rp</span>Indonesian rupiah
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>₪</span>Israeli new sheqel
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>¥</span>Japanese yen
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>JOD</span>Jordanian dinar
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>KZT</span>Kazakhstani tenge
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>KRW</span>Korean won
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-currency">
                            <li>
                              <a href="#">
                                <span>KWD</span>Kuwaiti dinar
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>MYR</span>Malaysian ringgit
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>MXN</span>Mexican peso
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>MDL</span>Moldovan leu
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>NAD</span>Namibian Dollar
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>TWD</span>New Taiwan Dollar
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>NZD</span>New Zealand dollar
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>NOK</span>Norwegian krone
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>OMR</span>Omani rial
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>zł</span>Polish zloty
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>£</span>Pound sterling
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>QAR</span>Qatar riyal
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>lei</span>Romanian new leu
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-currency">
                            <li>
                              <a href="#">
                                <span>RUB</span>Russian Ruble
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>SAR</span>Saudi Arabian riyal
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>S$</span>Singapore dollar
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>ZAR</span>South African rand
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>SEK</span>Swedish krona
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>CHF</span>Swiss franc
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>THB</span>Thai baht
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>TL</span>Turkish lira
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>AED</span>U.A.E. dirham
                              </a>
                            </li>
                            <li className="active">
                              <a href="#">
                                <span>US$</span>U.S. dollar
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>UAH</span>Ukraine Hryvnia
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>UZS</span>Uzbekistan, Sums
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                      <span className="_desk-h">Language</span>
                      <img className="navbar-flag" src="img/flags/USA.png" alt="Image Alternative text" title="Image Title" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-xxl">
                      <h5 className="dropdown-meganav-select-list-title">Languages</h5>
                      <div className="row" data-gutter={10}>
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-lang">
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/UK.png" alt="Image Alternative text" title="Image Title" />English(UK)
                              </a>
                            </li>
                            <li className="active">
                              <a href="#">
                                <img src="img/flag_codes/US.png" alt="Image Alternative text" title="Image Title" />English(US)
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/DE.png" alt="Image Alternative text" title="Image Title" />Deutsch
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/NED.png" alt="Image Alternative text" title="Image Title" />Nederlands
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/FR.png" alt="Image Alternative text" title="Image Title" />Français
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/SP.png" alt="Image Alternative text" title="Image Title" />Español
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/ARG.png" alt="Image Alternative text" title="Image Title" />Español (AR)
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/IT.png" alt="Image Alternative text" title="Image Title" />Italiano
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/PT.png" alt="Image Alternative text" title="Image Title" />Português (PT)
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/BR.png" alt="Image Alternative text" title="Image Title" />Português (BR)
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/NR.png" alt="Image Alternative text" title="Image Title" />Norsk
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-lang">
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/FIN.png" alt="Image Alternative text" title="Image Title" />Suomi
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/SW.png" alt="Image Alternative text" title="Image Title" />Svenska
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/DEN.png" alt="Image Alternative text" title="Image Title" />Dansk
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/CZ.png" alt="Image Alternative text" title="Image Title" />Čeština
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/HUN.png" alt="Image Alternative text" title="Image Title" />Magyar
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/ROM.png" alt="Image Alternative text" title="Image Title" />Română
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/JP.png" alt="Image Alternative text" title="Image Title" />日本語
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/CN.png" alt="Image Alternative text" title="Image Title" />简体中文
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/PL.png" alt="Image Alternative text" title="Image Title" />Polski
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/GR.png" alt="Image Alternative text" title="Image Title" />Ελληνικά
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/RU.png" alt="Image Alternative text" title="Image Title" />Русский
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-lang">
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/TUR.png" alt="Image Alternative text" title="Image Title" />Türkçe
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/BUL.png" alt="Image Alternative text" title="Image Title" />Български
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/ARB.png" alt="Image Alternative text" title="Image Title" />العربية
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/KOR.png" alt="Image Alternative text" title="Image Title" />한국어
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/ISR.png" alt="Image Alternative text" title="Image Title" />עברית
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/LAT.png" alt="Image Alternative text" title="Image Title" />Latviski
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/UKR.png" alt="Image Alternative text" title="Image Title" />Українська
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/IND.png" alt="Image Alternative text" title="Image Title" />Bahasa Indonesia
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/MAL.png" alt="Image Alternative text" title="Image Title" />Bahasa Malaysia
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/TAI.png" alt="Image Alternative text" title="Image Title" />ภาษาไทย
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/EST.png" alt="Image Alternative text" title="Image Title" />Eesti
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="dropdown-meganav-select-list-lang">
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/CRO.png" alt="Image Alternative text" title="Image Title" />Hrvatski
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/LIT.png" alt="Image Alternative text" title="Image Title" />Lietuvių
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/SLO.png" alt="Image Alternative text" title="Image Title" />Slovenčina
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/SERB.png" alt="Image Alternative text" title="Image Title" />Srpski
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/SLOVE.png" alt="Image Alternative text" title="Image Title" />Slovenščina
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/NAM.png" alt="Image Alternative text" title="Image Title" />Tiếng Việt
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/PHI.png" alt="Image Alternative text" title="Image Title" />Filipino
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img src="img/flag_codes/ICE.png" alt="Image Alternative text" title="Image Title" />Íslenska
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="navbar-nav-item-user dropdown">
                    <a className="dropdown-toggle" href="account.html" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-user-circle-o navbar-nav-item-user-icon" />My Account
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="account.html">Preferences</a>
                      </li>
                      <li>
                        <a href="account-notifications.html">Notifications</a>
                      </li>
                      <li>
                        <a href="account-cards.html">Payment Methods</a>
                      </li>
                      <li>
                        <a href="account-travelers.html">Travelers</a>
                      </li>
                      <li>
                        <a href="account-history.html">History</a>
                      </li>
                      <li>
                        <a href="account-bookmarks.html">Bookmarks</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav> */}
        <div className="theme-hero-area">
          <div className="theme-hero-area-bg-wrap">
            <div className="theme-hero-area-bg ws-action" style={{backgroundImage: 'url(./img/950x630.png)'}} data-parallax="true" />
            <div className="theme-hero-area-mask theme-hero-area-mask-half" />
            <div className="theme-hero-area-inner-shadow" />
          </div>
          <div className="theme-hero-area-body">
            <div className="container">
              <div className="theme-item-page-header _pt-150 _pb-50 theme-item-page-header-white">
                <div className="theme-item-page-header-body">
                  <ul className="theme-item-page-header-stars">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                  <h1 className="theme-item-page-header-title">The Manhattan at Times Square</h1>
                  <div className="theme-item-page-header-price">
                    <p className="theme-item-page-header-price-body">
                      <span>from</span>
                      <b>$97</b>
                      <span>/ night</span>
                    </p>
                    <a className="btn _tt-uc btn-primary-inverse" data-scroll href="#booking-scroll">Show Rooms</a>
                  </div>
                  <ul className="theme-breadcrumbs _mt-20 _mob-h">
                    <li>
                      <p className="theme-breadcrumbs-item-title">
                        <a href="index.html">Home</a>
                      </p>
                    </li>
                    <li>
                      <p className="theme-breadcrumbs-item-title">
                        <a href="#">United States</a>
                      </p>
                      <p className="theme-breadcrumbs-item-subtitle">123,878 hotels</p>
                    </li>
                    <li>
                      <p className="theme-breadcrumbs-item-title">
                        <a href="#">New York State</a>
                      </p>
                      <p className="theme-breadcrumbs-item-subtitle">5,478 hotels</p>
                    </li>
                    <li>
                      <p className="theme-breadcrumbs-item-title">
                        <a href="#">New York City Hotels</a>
                      </p>
                      <p className="theme-breadcrumbs-item-subtitle">2438 properties</p>
                    </li>
                    <li>
                      <p className="theme-breadcrumbs-item-title active">The Manhattan</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="theme-page-section theme-page-section-gray">
          <div className="container">
            <div className="row row-col-static" id="sticky-parent">
              <div className="col-md-9 ">
                <div className="theme-sidebar-section _mb-20 _desk-h">
                  <h5 className="theme-sidebar-section-title">Booking Summary</h5>
                  <ul className="theme-sidebar-section-summary-list">
                    <li>1 room, 2 adults, 6 nights</li>
                    <li>Check-in: Wed, Jun 27, 2018</li>
                    <li>Check-out: Tue, Jul 03, 2018</li>
                  </ul>
                </div>
                <div className="fotorama _mb-30" data-nav="thumbs" data-minwidth="100%" data-arrows="always" data-allowfullscreen="native">
                  <img src="./img/1140x480.png" alt="Image Alternative text" title="Image Title" />
                  <img src="./img/1140x480.png" alt="Image Alternative text" title="Image Title" />
                  <img src="./img/1140x480.png" alt="Image Alternative text" title="Image Title" />
                  <img src="./img/1140x480.png" alt="Image Alternative text" title="Image Title" />
                  <img src="./img/1140x480.png" alt="Image Alternative text" title="Image Title" />
                  <img src="./img/1140x480.png" alt="Image Alternative text" title="Image Title" />
                  <img src="./img/1140x480.png" alt="Image Alternative text" title="Image Title" />
                  <img src="./img/1140x480.png" alt="Image Alternative text" title="Image Title" />
                  <img src="./img/1140x480.png" alt="Image Alternative text" title="Image Title" />
                  <img src="./img/1140x480.png" alt="Image Alternative text" title="Image Title" />
                  <img src="./img/1140x480.png" alt="Image Alternative text" title="Image Title" />
                  <img src="./img/1140x480.png" alt="Image Alternative text" title="Image Title" />
                  <img src="./img/1140x480.png" alt="Image Alternative text" title="Image Title" />
                </div>
                <div className="theme-item-page-tabs _mb-30">
                  <div className="tabbable">
                    <ul className="nav nav-tabs nav-default nav-no-br nav-sqr nav-mob-inline" role="tablist">
                      <li className="active" role="presentation">
                        <a className="_ph-30" aria-controls="HotelPageTabs-1" role="tab" data-toggle="tab" href="#HotelPageTabs-1">Details</a>
                      </li>
                      <li role="presentation">
                        <a className="_ph-30" aria-controls="HotelPageTabs-2" role="tab" data-toggle="tab" href="#HotelPageTabs-2">Map</a>
                      </li>
                      <li role="presentation">
                        <a className="_ph-30" aria-controls="HotelPageTabs-3" role="tab" data-toggle="tab" href="#HotelPageTabs-3">Reviews</a>
                      </li>
                      <li role="presentation">
                        <a className="_ph-30" aria-controls="HotelPageTabs-4" role="tab" data-toggle="tab" href="#HotelPageTabs-4">Facilities</a>
                      </li>
                    </ul>
                    <div className="tab-content _p-30 _bg-w">
                      <div className="tab-pane active" id="HotelPageTabs-1" role="tab-panel">
                        <div className="theme-item-page-desc">
                          <p>This Manhattan hotel is located across the street from Madison Square Garden and Penn Station. The hotel offers access to the adjacent fitness club which includes a gym and a tour desk with ticket services.</p>
                          <p>Each air-conditioned room at the Hotel Pennsylvania provides cable TV. Guests also have access to a work desk, alarm clock, black-out drapes, iron and hairdryer in every room.</p>
                          <p>The Pennsylvania Hotel includes a 24-hour coffee shop and a restaurant. Guests can make transportation reservations and acquire theater tickets at the hotel. Guests will also have access to a safety deposit desk at the front desk, any time of the day.</p>
                          <p>Times Square and the Museum of Modern Art are less than a 15-minute walk from Hotel Penn. Guests are also one block from Macy's and 2 blocks from the Empire State Building.</p>
                          <p>This is our guests' favourite part of New York, according to independent reviews. This area is also great for shopping, with popular brands nearby: H&amp;M, Nike, Ralph Lauren.</p>
                        </div>
                      </div>
                      <div className="tab-pane" id="HotelPageTabs-2" role="tab-panel">
                        <div className="theme-item-page-map google-map" data-lat="40.7483624" data-lng="-73.9900896" />
                      </div>
                      <div className="tab-pane" id="HotelPageTabs-3" role="tab-panel">
                        <div className="theme-reviews">
                          <div className="theme-reviews-score theme-reviews-score-hor">
                            <div className="row">
                              <div className="col-md-3 ">
                                <div className="theme-reviews-score-header">
                                  <h5 className="theme-reviews-score-title">Review score</h5>
                                  <p className="theme-reviews-score-subtitle">Based on 2889 reviews</p>
                                </div>
                                <div className="theme-reviews-score-total">
                                  <p>6.4</p>
                                </div>
                              </div>
                              <div className="col-md-9 ">
                                <div className="theme-reviews-score-list">
                                  <div className="row">
                                    <div className="col-md-6 ">
                                      <div className="theme-reviews-score-item">
                                        <div className="theme-reviews-score-item-header">
                                          <p className="theme-reviews-score-item-title">Breakfast</p>
                                          <p className="theme-reviews-score-item-num">8.1</p>
                                        </div>
                                        <div className="theme-reviews-score-item-bar">
                                          <div style={{width: '81%'}} />
                                        </div>
                                      </div>
                                      <div className="theme-reviews-score-item">
                                        <div className="theme-reviews-score-item-header">
                                          <p className="theme-reviews-score-item-title">Clearness</p>
                                          <p className="theme-reviews-score-item-num">5.1</p>
                                        </div>
                                        <div className="theme-reviews-score-item-bar">
                                          <div style={{width: '51%'}} />
                                        </div>
                                      </div>
                                      <div className="theme-reviews-score-item">
                                        <div className="theme-reviews-score-item-header">
                                          <p className="theme-reviews-score-item-title">Comfort</p>
                                          <p className="theme-reviews-score-item-num">7.8</p>
                                        </div>
                                        <div className="theme-reviews-score-item-bar">
                                          <div style={{width: '78%'}} />
                                        </div>
                                      </div>
                                      <div className="theme-reviews-score-item">
                                        <div className="theme-reviews-score-item-header">
                                          <p className="theme-reviews-score-item-title">Location</p>
                                          <p className="theme-reviews-score-item-num">7.3</p>
                                        </div>
                                        <div className="theme-reviews-score-item-bar">
                                          <div style={{width: '73%'}} />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 ">
                                      <div className="theme-reviews-score-item">
                                        <div className="theme-reviews-score-item-header">
                                          <p className="theme-reviews-score-item-title">Facilities</p>
                                          <p className="theme-reviews-score-item-num">5.4</p>
                                        </div>
                                        <div className="theme-reviews-score-item-bar">
                                          <div style={{width: '54%'}} />
                                        </div>
                                      </div>
                                      <div className="theme-reviews-score-item">
                                        <div className="theme-reviews-score-item-header">
                                          <p className="theme-reviews-score-item-title">Staff</p>
                                          <p className="theme-reviews-score-item-num">5.1</p>
                                        </div>
                                        <div className="theme-reviews-score-item-bar">
                                          <div style={{width: '51%'}} />
                                        </div>
                                      </div>
                                      <div className="theme-reviews-score-item">
                                        <div className="theme-reviews-score-item-header">
                                          <p className="theme-reviews-score-item-title">Value for money</p>
                                          <p className="theme-reviews-score-item-num">5.6</p>
                                        </div>
                                        <div className="theme-reviews-score-item-bar">
                                          <div style={{width: '56%'}} />
                                        </div>
                                      </div>
                                      <div className="theme-reviews-score-item">
                                        <div className="theme-reviews-score-item-header">
                                          <p className="theme-reviews-score-item-title">Free WiFi</p>
                                          <p className="theme-reviews-score-item-num">7.1</p>
                                        </div>
                                        <div className="theme-reviews-score-item-bar">
                                          <div style={{width: '71%'}} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="theme-reviews-list">
                            <article className="theme-reviews-item">
                              <div className="row" data-gutter={10}>
                                <div className="col-md-3 ">
                                  <div className="theme-reviews-item-info">
                                    <img className="theme-reviews-item-avatar" src="./img/70x70.png" alt="Image Alternative text" title="Image Title" />
                                    <p className="theme-reviews-item-date">Reviewed Mon, Jun 25</p>
                                    <p className="theme-reviews-item-author">by Elizabeth Wallace</p>
                                  </div>
                                </div>
                                <div className="col-md-9 ">
                                  <div className="theme-reviews-rating">
                                    <div className="theme-reviews-rating-header">
                                      <span className="theme-reviews-rating-num">8.0</span>
                                      <span className="theme-reviews-rating-title">Excellent</span>
                                    </div>
                                    <div className="theme-reviews-rating-bar">
                                      <div style={{width: '80%'}} />
                                    </div>
                                  </div>
                                  <div className="theme-reviews-item-body">
                                    <p className="theme-reviews-item-text">Egestas mollis nam egestas mattis elit tempor porttitor dolor scelerisque vestibulum tincidunt vulputate praesent tristique turpis dapibus hendrerit ridiculus turpis magna condimentum eu nullam lobortis consectetur habitasse faucibus porta tellus mollis ultricies ipsum commodo curabitur urna habitant aliquam nunc mus sociis nisi lectus</p>
                                  </div>
                                </div>
                              </div>
                            </article>
                            <article className="theme-reviews-item">
                              <div className="row" data-gutter={10}>
                                <div className="col-md-3 ">
                                  <div className="theme-reviews-item-info">
                                    <img className="theme-reviews-item-avatar" src="./img/70x70.png" alt="Image Alternative text" title="Image Title" />
                                    <p className="theme-reviews-item-date">Reviewed Tue, Jun 19</p>
                                    <p className="theme-reviews-item-author">by Richard Jones</p>
                                  </div>
                                </div>
                                <div className="col-md-9 ">
                                  <div className="theme-reviews-rating">
                                    <div className="theme-reviews-rating-header">
                                      <span className="theme-reviews-rating-num">5.5</span>
                                      <span className="theme-reviews-rating-title">Okay</span>
                                    </div>
                                    <div className="theme-reviews-rating-bar">
                                      <div style={{width: '55%'}} />
                                    </div>
                                  </div>
                                  <div className="theme-reviews-item-body">
                                    <p className="theme-reviews-item-text">Neque interdum inceptos nostra amet velit libero orci inceptos eu venenatis purus aliquam ligula litora morbi suspendisse per diam montes massa est gravida porta pharetra sollicitudin quis nullam etiam elementum pharetra suspendisse ornare auctor lorem porta aliquam ultricies fusce lacus dui fames dictum elit rhoncus</p>
                                  </div>
                                </div>
                              </div>
                            </article>
                            <article className="theme-reviews-item">
                              <div className="row" data-gutter={10}>
                                <div className="col-md-3 ">
                                  <div className="theme-reviews-item-info">
                                    <img className="theme-reviews-item-avatar" src="./img/70x70.png" alt="Image Alternative text" title="Image Title" />
                                    <p className="theme-reviews-item-date">Reviewed Sun, Jun 17</p>
                                    <p className="theme-reviews-item-author">by Brandon Burgess</p>
                                  </div>
                                </div>
                                <div className="col-md-9 ">
                                  <div className="theme-reviews-rating">
                                    <div className="theme-reviews-rating-header">
                                      <span className="theme-reviews-rating-num">9.2</span>
                                      <span className="theme-reviews-rating-title">Excellent</span>
                                    </div>
                                    <div className="theme-reviews-rating-bar">
                                      <div style={{width: '92%'}} />
                                    </div>
                                  </div>
                                  <div className="theme-reviews-item-body">
                                    <p className="theme-reviews-item-text">Bibendum pulvinar inceptos nisi eros feugiat venenatis montes tempor nisl at condimentum congue elementum interdum blandit congue purus vulputate fermentum</p>
                                  </div>
                                </div>
                              </div>
                            </article>
                            <div className="row">
                              <div className="col-md-9 col-md-offset-3">
                                <a className="theme-reviews-more" href="#">+ More Reviews</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="HotelPageTabs-4" role="tab-panel">
                        <div className="theme-item-page-facilities">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-item-page-facilities-item">
                                <i className="fa fa-shower theme-item-page-facilities-item-icon" />
                                <h5 className="theme-item-page-facilities-item-title">Bathroom</h5>
                                <ul className="theme-item-page-facilities-item-list">
                                  <li>Toilet paper</li>
                                  <li>Linen</li>
                                  <li>Towels</li>
                                  <li>Toilet</li>
                                  <li>Free toiletries</li>
                                  <li>Hairdryer</li>
                                </ul>
                              </div>
                              <div className="theme-item-page-facilities-item">
                                <i className="fa fa-heart theme-item-page-facilities-item-icon" />
                                <h5 className="theme-item-page-facilities-item-title">Pool and wellness</h5>
                                <ul className="theme-item-page-facilities-item-list">
                                  <li>Massage</li>
                                  <li>Fitness centre</li>
                                  <li>Sauna</li>
                                </ul>
                              </div>
                              <div className="theme-item-page-facilities-item">
                                <i className="fa fa-glass theme-item-page-facilities-item-icon" />
                                <h5 className="theme-item-page-facilities-item-title">Food and Drink</h5>
                                <ul className="theme-item-page-facilities-item-list">
                                  <li>Breakfast in the room</li>
                                  <li>Bar</li>
                                  <li>Restaurant</li>
                                  <li>Tea/Coffee maker</li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3 ">
                              <div className="theme-item-page-facilities-item">
                                <i className="fa fa-wifi theme-item-page-facilities-item-icon" />
                                <h5 className="theme-item-page-facilities-item-title">Internet</h5>
                                <p className="theme-item-page-facilities-item-body">WiFi is available in all areas and costs USD 16.95 per 24 hours.</p>
                              </div>
                              <div className="theme-item-page-facilities-item">
                                <i className="fa fa-car theme-item-page-facilities-item-icon" />
                                <h5 className="theme-item-page-facilities-item-title">Parking</h5>
                                <p className="theme-item-page-facilities-item-body">Private parking is possible on site (reservation is not needed) and costs USD 60 per day.</p>
                              </div>
                              <div className="theme-item-page-facilities-item">
                                <i className="fa fa-users theme-item-page-facilities-item-icon" />
                                <h5 className="theme-item-page-facilities-item-title">Reception services</h5>
                                <ul className="theme-item-page-facilities-item-list">
                                  <li>Concierge service</li>
                                  <li>ATM/cash machine on site</li>
                                  <li>Luggage storage</li>
                                  <li>Ticket service</li>
                                  <li>Tour desk</li>
                                  <li>Currency excharge</li>
                                  <li>Express check-in/check-out</li>
                                  <li>24-hour front desk</li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3 ">
                              <div className="theme-item-page-facilities-item">
                                <i className="fa fa-tint theme-item-page-facilities-item-icon" />
                                <h5 className="theme-item-page-facilities-item-title">Cleaning services</h5>
                                <ul className="theme-item-page-facilities-item-list">
                                  <li>Daily maid service</li>
                                  <li>Shoeshine</li>
                                  <li>Ironing service</li>
                                  <li>Dry cleaning</li>
                                  <li>Laundry</li>
                                </ul>
                              </div>
                              <div className="theme-item-page-facilities-item">
                                <i className="fa fa-handshake-o theme-item-page-facilities-item-icon" />
                                <h5 className="theme-item-page-facilities-item-title">Business facilities</h5>
                                <ul className="theme-item-page-facilities-item-list">
                                  <li>Fax/photocopynig</li>
                                  <li>Buness centre</li>
                                  <li>Meeting/banquet facilities</li>
                                </ul>
                              </div>
                              <div className="theme-item-page-facilities-item">
                                <i className="fa fa-laptop theme-item-page-facilities-item-icon" />
                                <h5 className="theme-item-page-facilities-item-title">Media and technology</h5>
                                <ul className="theme-item-page-facilities-item-list">
                                  <li>iPod dock</li>
                                  <li>Cable channels</li>
                                  <li>Radio</li>
                                  <li>Telephone</li>
                                  <li>TV</li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3 ">
                              <div className="theme-item-page-facilities-item">
                                <i className="fa fa-info-circle theme-item-page-facilities-item-icon" />
                                <h5 className="theme-item-page-facilities-item-title">General</h5>
                                <ul className="theme-item-page-facilities-item-list">
                                  <li>Vending machine</li>
                                  <li>Air conditioning</li>
                                  <li>Wake-up service</li>
                                  <li>Heating</li>
                                  <li>Laptop safe</li>
                                  <li>Safety deposit box</li>
                                  <li>Lift</li>
                                  <li>Family rooms</li>
                                  <li>Facilities for disabled guests</li>
                                  <li>Non-smoking rooms</li>
                                  <li>Iron</li>
                                  <li>Newspapers</li>
                                </ul>
                              </div>
                              <div className="theme-item-page-facilities-item">
                                <i className="fa fa-globe theme-item-page-facilities-item-icon" />
                                <h5 className="theme-item-page-facilities-item-title">Languages spoken</h5>
                                <ul className="theme-item-page-facilities-item-list">
                                  <li>Italian</li>
                                  <li>French</li>
                                  <li>Spanish</li>
                                  <li>English</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="booking-scroll">
                  <div className="theme-search-area _p-30 _bg-p _mb-30 _br-3 theme-search-area-white">
                    <div className="row">
                      <div className="col-md-3 ">
                        <div className="theme-search-area-header theme-search-area-header-sm">
                          <h1 className="theme-search-area-title">Choose Your Room</h1>
                          <p className="theme-search-area-subtitle">best prices guaranteed</p>
                        </div>
                      </div>
                      <div className="col-md-9 ">
                        <div className="theme-search-area-form">
                          <div className="row" data-gutter={10}>
                            <div className="col-md-11 ">
                              <div className="row" data-gutter={10}>
                                <div className="col-md-3 ">
                                  <div className="theme-search-area-section theme-search-area-section-sm theme-search-area-section-no-border theme-search-area-section-fade-white theme-search-area-section-curved">
                                    <div className="theme-search-area-section-inner">
                                      <i className="theme-search-area-section-icon lin lin-calendar" />
                                      <input className="theme-search-area-section-input datePickerStart _mob-h" defaultValue="Wed 06/27" type="text" placeholder="Check-in" />
                                      <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-06-27" type="date" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3 ">
                                  <div className="theme-search-area-section theme-search-area-section-sm theme-search-area-section-no-border theme-search-area-section-fade-white theme-search-area-section-curved">
                                    <div className="theme-search-area-section-inner">
                                      <i className="theme-search-area-section-icon lin lin-calendar" />
                                      <input className="theme-search-area-section-input datePickerEnd _mob-h" defaultValue="Mon 07/02" type="text" placeholder="Check-out" />
                                      <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-07-02" type="date" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3 ">
                                  <div className="theme-search-area-section theme-search-area-section-sm theme-search-area-section-no-border theme-search-area-section-fade-white theme-search-area-section-curved quantity-selector" data-increment="Rooms">
                                    <div className="theme-search-area-section-inner">
                                      <i className="theme-search-area-section-icon lin lin-tag" />
                                      <input className="theme-search-area-section-input" defaultValue="1 Room" type="text" />
                                      <div className="quantity-selector-box" id="HotelSearchRooms">
                                        <div className="quantity-selector-inner">
                                          <p className="quantity-selector-title">Rooms</p>
                                          <ul className="quantity-selector-controls">
                                            <li className="quantity-selector-decrement">
                                              <a href="#">-</a>
                                            </li>
                                            <li className="quantity-selector-current">1</li>
                                            <li className="quantity-selector-increment">
                                              <a href="#">+</a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3 ">
                                  <div className="theme-search-area-section theme-search-area-section-sm theme-search-area-section-no-border theme-search-area-section-fade-white theme-search-area-section-curved quantity-selector" data-increment="Guests">
                                    <div className="theme-search-area-section-inner">
                                      <i className="theme-search-area-section-icon lin lin-people" />
                                      <input className="theme-search-area-section-input" defaultValue="2 Guests" type="text" />
                                      <div className="quantity-selector-box" id="HotelSearchGuests">
                                        <div className="quantity-selector-inner">
                                          <p className="quantity-selector-title">Guests</p>
                                          <ul className="quantity-selector-controls">
                                            <li className="quantity-selector-decrement">
                                              <a href="#">-</a>
                                            </li>
                                            <li className="quantity-selector-current">1</li>
                                            <li className="quantity-selector-increment">
                                              <a href="#">+</a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-1 ">
                              <button className="theme-search-area-submit _mt-0 theme-search-area-submit-sm theme-search-area-submit-no-border theme-search-area-submit-curved">
                                <i className="theme-search-area-submit-icon fa fa-pencil" />
                                <span className="_desk-h">Search</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="theme-item-page-rooms-table _p-30 _bg-w _mb-mob-30">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Room type</th>
                        <th>Max</th>
                        <th>Options</th>
                        <th>Price</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="theme-item-page-rooms-table-type">
                          <h5 className="theme-item-page-rooms-table-type-title">Standart King Room</h5>
                          <img className="theme-item-page-rooms-table-type-img" src="./img/350x232.png" alt="Image Alternative text" title="Image Title" />
                          <ul className="theme-item-page-rooms-table-type-feature-list">
                            <li>
                              <i className="fa fa-bed theme-item-page-rooms-table-type-feature-list-icon" />1 King bed
                            </li>
                            <li>
                              <i className="fa fa-arrows-h theme-item-page-rooms-table-type-feature-list-icon" />250 squre feet
                            </li>
                            <li>
                              <i className="fa fa-shower theme-item-page-rooms-table-type-feature-list-icon" />Private bathroom
                            </li>
                            <li>
                              <i className="fa fa-wifi theme-item-page-rooms-table-type-feature-list-icon" />Free Wifi
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="theme-item-page-rooms-table-guests-count">
                            <li>
                              <i className="fa fa-male" />
                            </li>
                            <li>
                              <i className="fa fa-male" />
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="theme-item-page-rooms-table-options-list">
                            <li>Non-refundable</li>
                            <li>Special conditions,
                              <br />pay when you stay
                            </li>
                            <li>Breakfast $30</li>
                            <li>
                              <b className="text-color-inverse">Last minute deal: save 25%</b>
                            </li>
                          </ul>
                        </td>
                        <td className="theme-item-page-rooms-table-price">
                          <div>
                            <div className="theme-item-page-rooms-table-price-night">
                              <p className="theme-item-page-rooms-table-price-sign">Per night</p>
                              <p className="theme-item-page-rooms-table-price-night-amount">$97</p>
                            </div>
                            <div className="theme-item-page-rooms-table-price-total">
                              <p className="theme-item-page-rooms-table-price-sign">Total price
                                <br />for 5 nights
                              </p>
                              <p className="theme-item-page-rooms-table-price-total-amount">$485</p>
                            </div>
                          </div>
                          <p className="theme-item-page-rooms-table-price-note">* Discounts already
                            <br />included in price.
                          </p>
                        </td>
                        <td>
                          <a className="btn btn-primary-inverse btn-block">Book now</a>
                          <p className="theme-item-page-rooms-table-booking-note">No booking or
                            <br />credit card fees!
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="theme-item-page-rooms-table-type">
                          <h5 className="theme-item-page-rooms-table-type-title">Superior King Room</h5>
                          <img className="theme-item-page-rooms-table-type-img" src="./img/350x232.png" alt="Image Alternative text" title="Image Title" />
                          <ul className="theme-item-page-rooms-table-type-feature-list">
                            <li>
                              <i className="fa fa-bed theme-item-page-rooms-table-type-feature-list-icon" />1 King bed
                            </li>
                            <li>
                              <i className="fa fa-arrows-h theme-item-page-rooms-table-type-feature-list-icon" />270 squre feet
                            </li>
                            <li>
                              <i className="fa fa-shower theme-item-page-rooms-table-type-feature-list-icon" />Private bathroom
                            </li>
                            <li>
                              <i className="fa fa-wifi theme-item-page-rooms-table-type-feature-list-icon" />Free Wifi
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="theme-item-page-rooms-table-guests-count">
                            <li>
                              <i className="fa fa-male" />
                            </li>
                            <li>
                              <i className="fa fa-male" />
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="theme-item-page-rooms-table-options-list">
                            <li>Non-refundable</li>
                            <li>Special conditions,
                              <br />pay when you stay
                            </li>
                            <li>Breakfast $30</li>
                          </ul>
                        </td>
                        <td className="theme-item-page-rooms-table-price">
                          <div>
                            <div className="theme-item-page-rooms-table-price-night">
                              <p className="theme-item-page-rooms-table-price-sign">Per night</p>
                              <p className="theme-item-page-rooms-table-price-night-amount">$173</p>
                            </div>
                            <div className="theme-item-page-rooms-table-price-total">
                              <p className="theme-item-page-rooms-table-price-sign">Total price
                                <br />for 5 nights
                              </p>
                              <p className="theme-item-page-rooms-table-price-total-amount">$865</p>
                            </div>
                          </div>
                          <p className="theme-item-page-rooms-table-price-note">* Discounts already
                            <br />included in price.
                          </p>
                        </td>
                        <td>
                          <a className="btn btn-primary-inverse btn-block">Book now</a>
                          <p className="theme-item-page-rooms-table-booking-note">No booking or
                            <br />credit card fees!
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="theme-item-page-rooms-table-type">
                          <h5 className="theme-item-page-rooms-table-type-title">Deluxe King Room</h5>
                          <img className="theme-item-page-rooms-table-type-img" src="./img/350x232.png" alt="Image Alternative text" title="Image Title" />
                          <ul className="theme-item-page-rooms-table-type-feature-list">
                            <li>
                              <i className="fa fa-bed theme-item-page-rooms-table-type-feature-list-icon" />1 King bed
                            </li>
                            <li>
                              <i className="fa fa-arrows-h theme-item-page-rooms-table-type-feature-list-icon" />300 squre feet
                            </li>
                            <li>
                              <i className="fa fa-shower theme-item-page-rooms-table-type-feature-list-icon" />Private bathroom
                            </li>
                            <li>
                              <i className="fa fa-wifi theme-item-page-rooms-table-type-feature-list-icon" />Free Wifi
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="theme-item-page-rooms-table-guests-count">
                            <li>
                              <i className="fa fa-male" />
                            </li>
                            <li>
                              <i className="fa fa-male" />
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="theme-item-page-rooms-table-options-list">
                            <li>Non-refundable</li>
                            <li>Special conditions,
                              <br />pay when you stay
                            </li>
                            <li>Breakfast $30</li>
                          </ul>
                        </td>
                        <td className="theme-item-page-rooms-table-price">
                          <div>
                            <div className="theme-item-page-rooms-table-price-night">
                              <p className="theme-item-page-rooms-table-price-sign">Per night</p>
                              <p className="theme-item-page-rooms-table-price-night-amount">$217</p>
                            </div>
                            <div className="theme-item-page-rooms-table-price-total">
                              <p className="theme-item-page-rooms-table-price-sign">Total price
                                <br />for 5 nights
                              </p>
                              <p className="theme-item-page-rooms-table-price-total-amount">$1085</p>
                            </div>
                          </div>
                          <p className="theme-item-page-rooms-table-price-note">* Discounts already
                            <br />included in price.
                          </p>
                        </td>
                        <td>
                          <a className="btn btn-primary-inverse btn-block">Book now</a>
                          <p className="theme-item-page-rooms-table-booking-note">No booking or
                            <br />credit card fees!
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="theme-item-page-rooms-table-type">
                          <h5 className="theme-item-page-rooms-table-type-title">Junior Suite with King Size Bed</h5>
                          <img className="theme-item-page-rooms-table-type-img" src="./img/350x232.png" alt="Image Alternative text" title="Image Title" />
                          <ul className="theme-item-page-rooms-table-type-feature-list">
                            <li>
                              <i className="fa fa-bed theme-item-page-rooms-table-type-feature-list-icon" />2 King beds
                            </li>
                            <li>
                              <i className="fa fa-arrows-h theme-item-page-rooms-table-type-feature-list-icon" />320 squre feet
                            </li>
                            <li>
                              <i className="fa fa-shower theme-item-page-rooms-table-type-feature-list-icon" />Private bathroom
                            </li>
                            <li>
                              <i className="fa fa-wifi theme-item-page-rooms-table-type-feature-list-icon" />Free Wifi
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="theme-item-page-rooms-table-guests-count">
                            <li>
                              <i className="fa fa-male" />
                            </li>
                            <li>
                              <i className="fa fa-male" />
                            </li>
                            <li>
                              <i className="fa fa-male" />
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="theme-item-page-rooms-table-options-list">
                            <li>Non-refundable</li>
                            <li>Special conditions,
                              <br />pay when you stay
                            </li>
                            <li>Breakfast included</li>
                            <li>
                              <b className="text-color-inverse">Last minute deal: save 35%</b>
                            </li>
                          </ul>
                        </td>
                        <td className="theme-item-page-rooms-table-price">
                          <div>
                            <div className="theme-item-page-rooms-table-price-night">
                              <p className="theme-item-page-rooms-table-price-sign">Per night</p>
                              <p className="theme-item-page-rooms-table-price-night-amount">$315</p>
                            </div>
                            <div className="theme-item-page-rooms-table-price-total">
                              <p className="theme-item-page-rooms-table-price-sign">Total price
                                <br />for 5 nights
                              </p>
                              <p className="theme-item-page-rooms-table-price-total-amount">$1575</p>
                            </div>
                          </div>
                          <p className="theme-item-page-rooms-table-price-note">* Discounts already
                            <br />included in price.
                          </p>
                        </td>
                        <td>
                          <a className="btn btn-primary-inverse btn-block">Book now</a>
                          <p className="theme-item-page-rooms-table-booking-note">No booking or
                            <br />credit card fees!
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="theme-item-page-rooms-table-type">
                          <h5 className="theme-item-page-rooms-table-type-title">Suite with King Size Bed and Park View</h5>
                          <img className="theme-item-page-rooms-table-type-img" src="./img/350x232.png" alt="Image Alternative text" title="Image Title" />
                          <ul className="theme-item-page-rooms-table-type-feature-list">
                            <li>
                              <i className="fa fa-bed theme-item-page-rooms-table-type-feature-list-icon" />2 King beds
                            </li>
                            <li>
                              <i className="fa fa-arrows-h theme-item-page-rooms-table-type-feature-list-icon" />400 squre feet
                            </li>
                            <li>
                              <i className="fa fa-shower theme-item-page-rooms-table-type-feature-list-icon" />2 Private bathrooms
                            </li>
                            <li>
                              <i className="fa fa-wifi theme-item-page-rooms-table-type-feature-list-icon" />Free Wifi
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="theme-item-page-rooms-table-guests-count">
                            <li>
                              <i className="fa fa-male" />
                            </li>
                            <li>
                              <i className="fa fa-male" />
                            </li>
                            <li>
                              <i className="fa fa-male" />
                            </li>
                            <li>
                              <i className="fa fa-male" />
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul className="theme-item-page-rooms-table-options-list">
                            <li>Free cancellation</li>
                            <li>Special conditions,
                              <br />pay when you stay
                            </li>
                            <li>Breakfast included</li>
                          </ul>
                        </td>
                        <td className="theme-item-page-rooms-table-price">
                          <div>
                            <div className="theme-item-page-rooms-table-price-night">
                              <p className="theme-item-page-rooms-table-price-sign">Per night</p>
                              <p className="theme-item-page-rooms-table-price-night-amount">$485</p>
                            </div>
                            <div className="theme-item-page-rooms-table-price-total">
                              <p className="theme-item-page-rooms-table-price-sign">Total price
                                <br />for 5 nights
                              </p>
                              <p className="theme-item-page-rooms-table-price-total-amount">$2425</p>
                            </div>
                          </div>
                          <p className="theme-item-page-rooms-table-price-note">* Discounts already
                            <br />included in price.
                          </p>
                        </td>
                        <td>
                          <a className="btn btn-primary-inverse btn-block">Book now</a>
                          <p className="theme-item-page-rooms-table-booking-note">No booking or
                            <br />credit card fees!
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="sticky-col">
                  <div className="theme-sidebar-section _mb-10 _mob-h">
                    <h5 className="theme-sidebar-section-title">Booking Summary</h5>
                    <ul className="theme-sidebar-section-summary-list">
                      <li>1 room, 2 adults, 6 nights</li>
                      <li>Check-in: Wed, Jun 27, 2018</li>
                      <li>Check-out: Tue, Jul 03, 2018</li>
                    </ul>
                  </div>
                  <div className="theme-sidebar-section _mb-10">
                    <h5 className="theme-sidebar-section-title">Weather in New York</h5>
                    <ul className="theme-sidebar-section-weather-list">
                      <li>
                        <p className="theme-sidebar-section-weather-date">Wed, Jun 27</p>
                        <p className="theme-sidebar-section-weather-temp">
                          <i className="wi wi-cloudy theme-sidebar-section-weather-icon" />
                          <b>38°</b>/29°
                        </p>
                      </li>
                      <li>
                        <p className="theme-sidebar-section-weather-date">Thu, Jun 28</p>
                        <p className="theme-sidebar-section-weather-temp">
                          <i className="wi wi-cloudy theme-sidebar-section-weather-icon" />
                          <b>35°</b>/25°
                        </p>
                      </li>
                      <li>
                        <p className="theme-sidebar-section-weather-date">Fri, Jun 29</p>
                        <p className="theme-sidebar-section-weather-temp">
                          <i className="wi wi-cloudy theme-sidebar-section-weather-icon" />
                          <b>32°</b>/25°
                        </p>
                      </li>
                      <li>
                        <p className="theme-sidebar-section-weather-date">Sat, Jun 30</p>
                        <p className="theme-sidebar-section-weather-temp">
                          <i className="wi wi-day-sunny theme-sidebar-section-weather-icon" />
                          <b>30°</b>/24°
                        </p>
                      </li>
                      <li>
                        <p className="theme-sidebar-section-weather-date">Sun, Jul 01</p>
                        <p className="theme-sidebar-section-weather-temp">
                          <i className="wi wi-cloudy theme-sidebar-section-weather-icon" />
                          <b>37°</b>/28°
                        </p>
                      </li>
                      <li>
                        <p className="theme-sidebar-section-weather-date">Mon, Jul 02</p>
                        <p className="theme-sidebar-section-weather-temp">
                          <i className="wi wi-rain theme-sidebar-section-weather-icon" />
                          <b>38°</b>/28°
                        </p>
                      </li>
                    </ul>
                    <p className="theme-sidebar-section-weather-forecast">
                      <a href="#">detailed forecast →</a>
                    </p>
                  </div>
                  <div className="theme-sidebar-section _mb-10">
                    <ul className="theme-sidebar-section-features-list">
                      <li>
                        <h5 className="theme-sidebar-section-features-list-title">Manage your bookings!</h5>
                        <p className="theme-sidebar-section-features-list-body">You're in control of your booking - no registration required.</p>
                      </li>
                      <li>
                        <h5 className="theme-sidebar-section-features-list-title">Customer support available 24/7 worldwide!</h5>
                        <p className="theme-sidebar-section-features-list-body">Website and customer support in English and 41 other languages.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="theme-ad">
                    <a className="theme-ad-link" href="#" />
                    <p className="theme-ad-sign">Advertisement</p>
                    <img className="theme-ad-img" src="./img/300x600.png" alt="Image Alternative text" title="Image Title" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
        );
    }
    
    export default HotelPages;