import React from 'react';


function Hotels() {
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
        <div className="theme-hero-area theme-hero-area-primary">
          <div className="theme-hero-area-bg-wrap">
            <div className="theme-hero-area-bg ws-action" style={{backgroundImage: 'url(./img/1500x800.png)'}} data-parallax="true" />
            <div className="theme-hero-area-mask theme-hero-area-mask-strong" />
          </div>
          <div className="theme-hero-area-body">
            <div className="container">
              <div className="theme-search-area _pv-200 _pv-mob-60 theme-search-area-stacked theme-search-area-white">
                <div className="theme-search-area-header">
                  <h1 className="theme-search-area-title theme-search-area-title-lg">Best Hotel Deals</h1>
                  <p className="theme-search-area-subtitle">Compare top travel sites at once</p>
                </div>
                <div className="theme-search-area-form" id="hero-search-form">
                  <div className="row" data-gutter="none">
                    <div className="col-md-3 ">
                      <div className="theme-search-area-section first theme-search-area-section-fade-white theme-search-area-section-mr theme-search-area-section-no-border theme-search-area-section-curved">
                        <div className="theme-search-area-section-inner">
                          <i className="theme-search-area-section-icon lin lin-location-pin" />
                          <input className="theme-search-area-section-input typeahead" type="text" placeholder="Hotel Location" data-provide="typeahead" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 ">
                      <div className="row" data-gutter="none">
                        <div className="col-md-6 ">
                          <div className="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-mr theme-search-area-section-no-border theme-search-area-section-curved">
                            <div className="theme-search-area-section-inner">
                              <i className="theme-search-area-section-icon lin lin-calendar" />
                              <input className="theme-search-area-section-input datePickerStart _mob-h" defaultValue="Wed 06/27" type="text" placeholder="Check-in" />
                              <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-06-27" type="date" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 ">
                          <div className="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-mr theme-search-area-section-no-border theme-search-area-section-curved">
                            <div className="theme-search-area-section-inner">
                              <i className="theme-search-area-section-icon lin lin-calendar" />
                              <input className="theme-search-area-section-input datePickerEnd _mob-h" defaultValue="Mon 07/02" type="text" placeholder="Check-out" />
                              <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-07-02" type="date" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 ">
                      <div className="row" data-gutter="none">
                        <div className="col-md-6 ">
                          <div className="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-mr theme-search-area-section-no-border theme-search-area-section-curved quantity-selector" data-increment="Rooms">
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
                        <div className="col-md-6 ">
                          <div className="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-mr theme-search-area-section-no-border theme-search-area-section-curved quantity-selector" data-increment="Guests">
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
                      <button className="theme-search-area-submit _mt-0 theme-search-area-submit-no-border theme-search-area-submit-curved">Search</button>
                    </div>
                  </div>
                </div>
                <div className="theme-search-area-options _mob-h theme-search-area-options-dot-primary-inverse clearfix">
                  <h5 className="theme-search-area-options-title">Hotel type</h5>
                  <div className="btn-group theme-search-area-options-list" data-toggle="buttons">
                    <label className="btn btn-primary active">
                      <input type="radio" name="hotel-options" id="hotel-option-1" defaultChecked />Any
                    </label>
                    <label className="btn btn-primary">
                      <input type="radio" name="hotel-options" id="hotel-option-2" />Business
                    </label>
                    <label className="btn btn-primary">
                      <input type="radio" name="hotel-options" id="hotel-option-3" />Family
                    </label>
                    <label className="btn btn-primary">
                      <input type="radio" name="hotel-options" id="hotel-option-4" />Luxury
                    </label>
                    <label className="btn btn-primary">
                      <input type="radio" name="hotel-options" id="hotel-option-5" />Budget
                    </label>
                    <label className="btn btn-primary">
                      <input type="radio" name="hotel-options" id="hotel-option-6" />Romantic
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="theme-page-section theme-page-section-xxl theme-page-section-dark">
          <div className="container">
            <div className="row row-col-mob-gap" data-gutter={60}>
              <div className="col-md-3 ">
                <div className="feature">
                  <i className="feature-icon _mb-30 feature-icon-lg feature-icon-primary fa fa-globe" />
                  <div className="feature-caption _c-w">
                    <h5 className="feature-title _fs-b">Explore the World</h5>
                    <p className="feature-subtitle">Start to discrover. We will help you to visit any place you can imagine</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="feature">
                  <i className="feature-icon _mb-30 feature-icon-lg feature-icon-primary fa fa-gift" />
                  <div className="feature-caption _c-w">
                    <h5 className="feature-title _fs-b">Gifts &amp; Rewards</h5>
                    <p className="feature-subtitle">Get even more from our service. Spend less and travel more</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="feature">
                  <i className="feature-icon _mb-30 feature-icon-lg feature-icon-primary fa fa-credit-card" />
                  <div className="feature-caption _c-w">
                    <h5 className="feature-title _fs-b">Best prices</h5>
                    <p className="feature-subtitle">We are comparing hundreds travel websites to find best price for you</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="feature">
                  <i className="feature-icon _mb-30 feature-icon-lg feature-icon-primary fa fa-comments-o" />
                  <div className="feature-caption _c-w">
                    <h5 className="feature-title _fs-b">27/7 Support</h5>
                    <p className="feature-subtitle">Contact us anytime, anywhere. We will resolve any issues ASAP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="theme-page-section theme-page-section-xxl">
          <div className="container">
            <div className="theme-page-section-header _ta-l">
              <h5 className="theme-page-section-title">Top Destinations</h5>
              <p className="theme-page-section-subtitle">Most visited Countries in March</p>
            </div>
            <div className="row row-col-gap" data-gutter={10}>
              <div className="col-md-4 ">
                <div className="banner _h-40vh _br-4 banner-animate banner-animate-mask-out banner-animate-zoom-in banner-animate-slow">
                  <div className="banner-bg" style={{backgroundImage: 'url(./img/550x360.png)'}} />
                  <div className="banner-mask" />
                  <a className="banner-link" href="#" />
                  <div className="banner-caption banner-caption-top">
                    <h5 className="banner-title">India</h5>
                    <p className="banner-subtitle _fw-n">Incredeble !india</p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 ">
                <div className="banner _h-40vh _br-4 banner-animate banner-animate-mask-out banner-animate-zoom-in banner-animate-slow">
                  <div className="banner-bg" style={{backgroundImage: 'url(./img/860x360.png)'}} />
                  <div className="banner-mask" />
                  <a className="banner-link" href="#" />
                  <div className="banner-caption banner-caption-top">
                    <h5 className="banner-title">China</h5>
                    <p className="banner-subtitle _fw-n">China like never before</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="banner _h-33vh _br-4 banner-animate banner-animate-mask-out banner-animate-zoom-in banner-animate-slow">
                  <div className="banner-bg" style={{backgroundImage: 'url(./img/400x400.png)'}} />
                  <div className="banner-mask" />
                  <a className="banner-link" href="#" />
                  <div className="banner-caption banner-caption-top">
                    <h5 className="banner-title">Japan</h5>
                    <p className="banner-subtitle _fw-n">Endless Discovery</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="banner _h-33vh _br-4 banner-animate banner-animate-mask-out banner-animate-zoom-in banner-animate-slow">
                  <div className="banner-bg" style={{backgroundImage: 'url(./img/400x360.png)'}} />
                  <div className="banner-mask" />
                  <a className="banner-link" href="#" />
                  <div className="banner-caption banner-caption-top">
                    <h5 className="banner-title">Canada</h5>
                    <p className="banner-subtitle _fw-n">Keep exploring</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="banner _h-33vh _br-4 banner-animate banner-animate-mask-out banner-animate-zoom-in banner-animate-slow">
                  <div className="banner-bg" style={{backgroundImage: 'url(./img/400x360.png)'}} />
                  <div className="banner-mask" />
                  <a className="banner-link" href="#" />
                  <div className="banner-caption banner-caption-top">
                    <h5 className="banner-title">Portugal</h5>
                    <p className="banner-subtitle _fw-n">Europe's west coast</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="banner _h-33vh _br-4 banner-animate banner-animate-mask-out banner-animate-zoom-in banner-animate-slow">
                  <div className="banner-bg" style={{backgroundImage: 'url(./img/400x360.png)'}} />
                  <div className="banner-mask" />
                  <a className="banner-link" href="#" />
                  <div className="banner-caption banner-caption-top">
                    <h5 className="banner-title">Malasia</h5>
                    <p className="banner-subtitle _fw-n">Truly asia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      

);
}

export default Hotels;