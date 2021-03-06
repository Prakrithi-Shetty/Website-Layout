import React from 'react';


function SearchCar() {
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
                  <li className="dropdown">
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
                  <li className="active dropdown">
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
        <div className="theme-hero-area front">
          <div className="theme-hero-area-bg-wrap">
            <div className="theme-hero-area-bg" style={{backgroundImage: 'url(./img/1500x400.png)'}} id="hero-banner" />
            <div className="theme-hero-area-mask theme-hero-area-mask-half" />
          </div>
          <div className="theme-hero-area-body">
            <div className="container">
              <div className="_pb-100 _pt-150 _pv-mob-50">
                <div className="theme-search-area _mob-h theme-search-area-stacked">
                  <div className="theme-search-area-header _mb-20">
                    <ul className="theme-breadcrumbs _mt-20">
                      <li>
                        <p className="theme-breadcrumbs-item-title">
                          <a href="index.html">Home</a>
                        </p>
                      </li>
                      <li>
                        <p className="theme-breadcrumbs-item-title">
                          <a href="#">United States</a>
                        </p>
                        <p className="theme-breadcrumbs-item-subtitle">123,878 deals</p>
                      </li>
                      <li>
                        <p className="theme-breadcrumbs-item-title">
                          <a href="#">New York State</a>
                        </p>
                        <p className="theme-breadcrumbs-item-subtitle">5,478 deals</p>
                      </li>
                      <li>
                        <p className="theme-breadcrumbs-item-title active">New York City Car Rentals</p>
                        <p className="theme-breadcrumbs-item-subtitle">2438 deals</p>
                      </li>
                    </ul>
                  </div>
                  <div className="theme-search-area-form" id="hero-search-form">
                    <div className="row" data-gutter="none">
                      <div className="col-md-7 ">
                        <div className="row" data-gutter="none">
                          <div className="col-md-6 ">
                            <div className="theme-search-area-section first theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-mr">
                              <label className="theme-search-area-section-label _c-w">Pick Up</label>
                              <div className="theme-search-area-section-inner">
                                <i className="theme-search-area-section-icon lin lin-location-pin" />
                                <input className="theme-search-area-section-input typeahead" defaultValue="New York" type="text" placeholder="Pick up location" data-provide="typeahead" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 ">
                            <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-mr">
                              <label className="theme-search-area-section-label _c-w">Drop Off</label>
                              <div className="theme-search-area-section-inner">
                                <i className="theme-search-area-section-icon lin lin-location-pin" />
                                <input className="theme-search-area-section-input typeahead" defaultValue="New York" type="text" placeholder="Drop off location" data-provide="typeahead" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 ">
                        <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-mr">
                          <label className="theme-search-area-section-label _c-w">Check In</label>
                          <div className="theme-search-area-section-inner">
                            <i className="theme-search-area-section-icon lin lin-calendar" />
                            <input className="theme-search-area-section-input datePickerStart _mob-h" defaultValue="Wed 06/27" type="text" placeholder="Check-in" />
                            <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-06-27" type="date" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 ">
                        <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-bg-white theme-search-area-section-mr">
                          <label className="theme-search-area-section-label _c-w">Check Out</label>
                          <div className="theme-search-area-section-inner">
                            <i className="theme-search-area-section-icon lin lin-calendar" />
                            <input className="theme-search-area-section-input datePickerEnd _mob-h" defaultValue="Mon 07/02" type="text" placeholder="Check-out" />
                            <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-07-02" type="date" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-1 ">
                        <button className="theme-search-area-submit theme-search-area-submit-curved theme-search-area-submit-primary">Change</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="theme-search-area-inline _desk-h theme-search-area-inline-white">
                  <h4 className="theme-search-area-inline-title">New York Cars</h4>
                  <p className="theme-search-area-inline-details">June 27 → July 02</p>
                  <a className="theme-search-area-inline-link magnific-inline" href="#searchEditModal">
                    <i className="fa fa-pencil" />Edit
                  </a>
                  <div className="magnific-popup magnific-popup-sm mfp-hide" id="searchEditModal">
                    <div className="theme-search-area theme-search-area-vert">
                      <div className="theme-search-area-header">
                        <h1 className="theme-search-area-title theme-search-area-title-sm">Edit your Search</h1>
                        <p className="theme-search-area-subtitle">Prices might be different from current results</p>
                      </div>
                      <div className="theme-search-area-form">
                        <div className="theme-search-area-section first theme-search-area-section-curved">
                          <label className="theme-search-area-section-label">Pick Up</label>
                          <div className="theme-search-area-section-inner">
                            <i className="theme-search-area-section-icon lin lin-location-pin" />
                            <input className="theme-search-area-section-input typeahead" defaultValue="New York" type="text" placeholder="Pick up location" data-provide="typeahead" />
                          </div>
                        </div>
                        <div className="theme-search-area-section theme-search-area-section-curved">
                          <label className="theme-search-area-section-label">Drop Off</label>
                          <div className="theme-search-area-section-inner">
                            <i className="theme-search-area-section-icon lin lin-location-pin" />
                            <input className="theme-search-area-section-input typeahead" defaultValue="New York" type="text" placeholder="Drop off location" data-provide="typeahead" />
                          </div>
                        </div>
                        <div className="row" data-gutter={10}>
                          <div className="col-md-6 ">
                            <div className="theme-search-area-section theme-search-area-section-curved">
                              <label className="theme-search-area-section-label">Check In</label>
                              <div className="theme-search-area-section-inner">
                                <i className="theme-search-area-section-icon lin lin-calendar" />
                                <input className="theme-search-area-section-input datePickerStart _mob-h" defaultValue="Wed 06/27" type="text" placeholder="Check-in" />
                                <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-06-27" type="date" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 ">
                            <div className="theme-search-area-section theme-search-area-section-curved">
                              <label className="theme-search-area-section-label">Check Out</label>
                              <div className="theme-search-area-section-inner">
                                <i className="theme-search-area-section-icon lin lin-calendar" />
                                <input className="theme-search-area-section-input datePickerEnd _mob-h" defaultValue="Mon 07/02" type="text" placeholder="Check-out" />
                                <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-07-02" type="date" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="theme-search-area-submit _mt-0 _tt-uc theme-search-area-submit-curved">Change</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="theme-page-section theme-page-section-gray">
          <div className="container">
            <div className="row row-col-static" id="sticky-parent">
              <div className="col-md-2-5 ">
                <div className="sticky-col _mob-h">
                  <div className="theme-search-results-sidebar">
                    <div className="theme-search-results-sidebar-map-view">
                      <a className="theme-search-results-sidebar-map-view-link" href="#" />
                      <div className="theme-search-results-sidebar-map-view-body">
                        <i className="fa fa-map-marker theme-search-results-sidebar-map-view-icon" />
                        <p className="theme-search-results-sidebar-map-view-sign">Map View</p>
                      </div>
                      <div className="theme-search-results-sidebar-map-view-mask" />
                    </div>
                    <div className="theme-search-results-sidebar-sections">
                      <div className="theme-search-results-sidebar-section">
                        <h5 className="theme-search-results-sidebar-section-title">Price</h5>
                        <div className="theme-search-results-sidebar-section-price">
                          <input id="price-slider" name="price-slider" data-min={100} data-max={500} />
                        </div>
                      </div>
                      <div className="theme-search-results-sidebar-section">
                        <h5 className="theme-search-results-sidebar-section-title">Pickup Location</h5>
                        <div className="theme-search-results-sidebar-section-checkbox-list">
                          <div className="theme-search-results-sidebar-section-checkbox-list-items">
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">LGA: LaGuardia</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">139</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">EWR: Newark</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">276</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">JFK: John F. Ken...</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">360</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Non-airport</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">113</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="theme-search-results-sidebar-section">
                        <h5 className="theme-search-results-sidebar-section-title">Passengers</h5>
                        <div className="theme-search-results-sidebar-section-checkbox-list">
                          <div className="theme-search-results-sidebar-section-checkbox-list-items">
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">1 to 2 passengers</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">224</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">3 to 5 passengers</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">234</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">6 or more</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">360</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="theme-search-results-sidebar-section">
                        <h5 className="theme-search-results-sidebar-section-title">Bags</h5>
                        <div className="theme-search-results-sidebar-section-checkbox-list">
                          <div className="theme-search-results-sidebar-section-checkbox-list-items">
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">1 to 2 bags</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">409</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">3 to 4 bags</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">156</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">5 or more</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">378</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="theme-search-results-sidebar-section">
                        <h5 className="theme-search-results-sidebar-section-title">Car Type</h5>
                        <div className="theme-search-results-sidebar-section-checkbox-list">
                          <div className="theme-search-results-sidebar-section-checkbox-list-items">
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Small</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">412</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Large</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">457</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Medium</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">340</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">SUV</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">306</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Van</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">344</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Commercial</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">250</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Luxury</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">355</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Pickup truck</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">190</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Convertable</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">234</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="theme-search-results-sidebar-section">
                        <h5 className="theme-search-results-sidebar-section-title">Payment Type</h5>
                        <div className="theme-search-results-sidebar-section-checkbox-list">
                          <div className="theme-search-results-sidebar-section-checkbox-list-items">
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Pay now</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">418</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Pay at counter</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">107</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="theme-search-results-sidebar-section">
                        <h5 className="theme-search-results-sidebar-section-title">Rental Agency</h5>
                        <div className="theme-search-results-sidebar-section-checkbox-list">
                          <div className="theme-search-results-sidebar-section-checkbox-list-items">
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Ace</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">473</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Action</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">186</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Advantage</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">354</span>
                            </div>
                            <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                              <label className="icheck-label">
                                <input className="icheck" type="checkbox" />
                                <span className="icheck-title">Alamo</span>
                              </label>
                              <span className="theme-search-results-sidebar-section-checkbox-list-amount">416</span>
                            </div>
                          </div>
                          <div className="collapse" id="SearchResultsCheckboxRentalAgency">
                            <div className="theme-search-results-sidebar-section-checkbox-list-items theme-search-results-sidebar-section-checkbox-list-items-expand">
                              <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                <label className="icheck-label">
                                  <input className="icheck" type="checkbox" />
                                  <span className="icheck-title">Avis</span>
                                </label>
                                <span className="theme-search-results-sidebar-section-checkbox-list-amount">195</span>
                              </div>
                              <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                <label className="icheck-label">
                                  <input className="icheck" type="checkbox" />
                                  <span className="icheck-title">Budget</span>
                                </label>
                                <span className="theme-search-results-sidebar-section-checkbox-list-amount">453</span>
                              </div>
                              <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                <label className="icheck-label">
                                  <input className="icheck" type="checkbox" />
                                  <span className="icheck-title">Dollar</span>
                                </label>
                                <span className="theme-search-results-sidebar-section-checkbox-list-amount">119</span>
                              </div>
                              <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                <label className="icheck-label">
                                  <input className="icheck" type="checkbox" />
                                  <span className="icheck-title">Enterprise</span>
                                </label>
                                <span className="theme-search-results-sidebar-section-checkbox-list-amount">121</span>
                              </div>
                              <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                <label className="icheck-label">
                                  <input className="icheck" type="checkbox" />
                                  <span className="icheck-title">Hertz</span>
                                </label>
                                <span className="theme-search-results-sidebar-section-checkbox-list-amount">270</span>
                              </div>
                              <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                <label className="icheck-label">
                                  <input className="icheck" type="checkbox" />
                                  <span className="icheck-title">National</span>
                                </label>
                                <span className="theme-search-results-sidebar-section-checkbox-list-amount">222</span>
                              </div>
                              <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                <label className="icheck-label">
                                  <input className="icheck" type="checkbox" />
                                  <span className="icheck-title">Payless</span>
                                </label>
                                <span className="theme-search-results-sidebar-section-checkbox-list-amount">458</span>
                              </div>
                              <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                <label className="icheck-label">
                                  <input className="icheck" type="checkbox" />
                                  <span className="icheck-title">Prestige Car Rental</span>
                                </label>
                                <span className="theme-search-results-sidebar-section-checkbox-list-amount">167</span>
                              </div>
                              <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                <label className="icheck-label">
                                  <input className="icheck" type="checkbox" />
                                  <span className="icheck-title">Special rate</span>
                                </label>
                                <span className="theme-search-results-sidebar-section-checkbox-list-amount">309</span>
                              </div>
                              <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                <label className="icheck-label">
                                  <input className="icheck" type="checkbox" />
                                  <span className="icheck-title">Thrifty</span>
                                </label>
                                <span className="theme-search-results-sidebar-section-checkbox-list-amount">149</span>
                              </div>
                              <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                <label className="icheck-label">
                                  <input className="icheck" type="checkbox" />
                                  <span className="icheck-title">U-Save</span>
                                </label>
                                <span className="theme-search-results-sidebar-section-checkbox-list-amount">292</span>
                              </div>
                            </div>
                          </div>
                          <a className="theme-search-results-sidebar-section-checkbox-list-expand-link" role="button" data-toggle="collapse" href="#SearchResultsCheckboxRentalAgency" aria-expanded="false">Show more
                            <i className="fa fa-angle-down" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="theme-ad">
                    <a className="theme-ad-link" href="#" />
                    <p className="theme-ad-sign">Advertisement</p>
                    <img className="theme-ad-img" src="./img/300x400.png" alt="Image Alternative text" title="Image Title" />
                  </div>
                </div>
              </div>
              <div className="col-md-6-5 ">
                <div className="theme-search-results-sort _mob-h clearfix">
                  <h5 className="theme-search-results-sort-title">Sort by:</h5>
                  <ul className="theme-search-results-sort-list">
                    <li>
                      <a href="#">Price
                        <span>Low → High</span>
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">Guest Rating
                        <span>High → Low</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Property Class
                        <span>Stars &nbsp; 5 → 1</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Property Name
                        <span>Name &nbsp; A → Z</span>
                      </a>
                    </li>
                  </ul>
                  <div className="dropdown theme-search-results-sort-alt">
                    <a id="dropdownMenu" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">More
                      <span className="caret" />
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                      <li>
                        <a href="#">Recommended</a>
                      </li>
                      <li>
                        <a href="#">Most Popular</a>
                      </li>
                      <li>
                        <a href="#">Trendy Now</a>
                      </li>
                      <li>
                        <a href="#">Best Deals</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="theme-search-results-sort-select _desk-h">
                  <select>
                    <option>Price</option>
                    <option>Guest Rating</option>
                    <option>Property Class</option>
                    <option>Property Name</option>
                    <option>Recommended</option>
                    <option>Most Popular</option>
                    <option>Trendy Now</option>
                    <option>Best Deals</option>
                  </select>
                </div>
                <div className="theme-search-results-sign-in _mob-h bg-grad">
                  <i className="theme-search-results-sign-in-icon fa fa-unlock-alt" />
                  <h5 className="theme-search-results-sign-in-title">Sign in to unlock our secret delas. Save up to
                    <b>50%</b>
                  </h5>
                  <a className="btn theme-search-results-sign-in-btn btn-ghost btn-white" href="#">Sign in now</a>
                </div>
                <div className="theme-search-results">
                  <div className="_mob-h">
                    <div className="theme-search-results-item _mb-10 theme-search-results-item-">
                      <div className="theme-search-results-item-preview">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="row" data-gutter={20}>
                          <div className="col-md-5 ">
                            <div className="theme-search-results-item-img-wrap">
                              <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                            </div>
                            <ul className="theme-search-results-item-car-feature-list">
                              <li>
                                <i className="fa fa-male" />
                                <span>4</span>
                              </li>
                              <li>
                                <i className="fa fa-suitcase" />
                                <span>2</span>
                              </li>
                              <li>
                                <i className="fa fa-cog" />
                                <span>Auto</span>
                              </li>
                              <li>
                                <i className="fa fa-snowflake-o" />
                                <span>A/C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-5 ">
                            <h5 className="theme-search-results-item-title theme-search-results-item-title-lg">Toyota Yaris</h5>
                            <div className="theme-search-results-item-car-location">
                              <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                              <div className="theme-search-results-item-car-location-body">
                                <p className="theme-search-results-item-car-location-title">Newark Liberty International Airport</p>
                                <p className="theme-search-results-item-car-location-subtitle">Shuttle to car</p>
                              </div>
                            </div>
                            <ul className="theme-search-results-item-car-list">
                              <li>
                                <i className="fa fa-check" />Unlimited mileage
                              </li>
                              <li>
                                <i className="fa fa-check" />Pay now
                              </li>
                              <li>
                                <i className="fa fa-check" />Free cancellation
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-2 ">
                            <div className="theme-search-results-item-book">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$16</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                              <a className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" href="#">Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _mb-10 theme-search-results-item-">
                      <div className="theme-search-results-item-preview">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="row" data-gutter={20}>
                          <div className="col-md-5 ">
                            <div className="theme-search-results-item-img-wrap">
                              <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                            </div>
                            <ul className="theme-search-results-item-car-feature-list">
                              <li>
                                <i className="fa fa-male" />
                                <span>5</span>
                              </li>
                              <li>
                                <i className="fa fa-suitcase" />
                                <span>4</span>
                              </li>
                              <li>
                                <i className="fa fa-cog" />
                                <span>Auto</span>
                              </li>
                              <li>
                                <i className="fa fa-snowflake-o" />
                                <span>A/C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-5 ">
                            <h5 className="theme-search-results-item-title theme-search-results-item-title-lg">Audi Q7</h5>
                            <div className="theme-search-results-item-car-location">
                              <i className="fa fa-building theme-search-results-item-car-location-icon" />
                              <div className="theme-search-results-item-car-location-body">
                                <p className="theme-search-results-item-car-location-title">73 Pacific St.</p>
                                <p className="theme-search-results-item-car-location-subtitle">City pickup</p>
                              </div>
                            </div>
                            <ul className="theme-search-results-item-car-list">
                              <li>
                                <i className="fa fa-check" />Unlimited mileage
                              </li>
                              <li>
                                <i className="fa fa-check" />Pay at the counter
                              </li>
                              <li>
                                <i className="fa fa-check" />Free cancellation
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-2 ">
                            <div className="theme-search-results-item-book">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$32</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                              <a className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" href="#">Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _mb-10 theme-search-results-item-">
                      <div className="theme-search-results-item-preview">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="row" data-gutter={20}>
                          <div className="col-md-5 ">
                            <div className="theme-search-results-item-img-wrap">
                              <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                            </div>
                            <ul className="theme-search-results-item-car-feature-list">
                              <li>
                                <i className="fa fa-male" />
                                <span>4</span>
                              </li>
                              <li>
                                <i className="fa fa-suitcase" />
                                <span>3</span>
                              </li>
                              <li>
                                <i className="fa fa-cog" />
                                <span>Auto</span>
                              </li>
                              <li>
                                <i className="fa fa-snowflake-o" />
                                <span>A/C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-5 ">
                            <h5 className="theme-search-results-item-title theme-search-results-item-title-lg">Chevrolet Cruze</h5>
                            <div className="theme-search-results-item-car-location">
                              <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                              <div className="theme-search-results-item-car-location-body">
                                <p className="theme-search-results-item-car-location-title">LaGuardia Airport International Airport</p>
                                <p className="theme-search-results-item-car-location-subtitle">Shuttle to car</p>
                              </div>
                            </div>
                            <ul className="theme-search-results-item-car-list">
                              <li>
                                <i className="fa fa-check" />Unlimited mileage
                              </li>
                              <li>
                                <i className="fa fa-check" />Pay now
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-2 ">
                            <div className="theme-search-results-item-book">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$43</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                              <a className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" href="#">Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _mb-10 theme-search-results-item-">
                      <div className="theme-search-results-item-preview">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="row" data-gutter={20}>
                          <div className="col-md-5 ">
                            <div className="theme-search-results-item-img-wrap">
                              <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                            </div>
                            <ul className="theme-search-results-item-car-feature-list">
                              <li>
                                <i className="fa fa-male" />
                                <span>5</span>
                              </li>
                              <li>
                                <i className="fa fa-suitcase" />
                                <span>2</span>
                              </li>
                              <li>
                                <i className="fa fa-cog" />
                                <span>Auto</span>
                              </li>
                              <li>
                                <i className="fa fa-snowflake-o" />
                                <span>A/C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-5 ">
                            <h5 className="theme-search-results-item-title theme-search-results-item-title-lg">Volkswagen Jetta</h5>
                            <div className="theme-search-results-item-car-location">
                              <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                              <div className="theme-search-results-item-car-location-body">
                                <p className="theme-search-results-item-car-location-title">Newark Liberty International Airport</p>
                                <p className="theme-search-results-item-car-location-subtitle">Shuttle to car</p>
                              </div>
                            </div>
                            <ul className="theme-search-results-item-car-list">
                              <li>
                                <i className="fa fa-check" />Unlimited mileage
                              </li>
                              <li>
                                <i className="fa fa-check" />Pay at the counter
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-2 ">
                            <div className="theme-search-results-item-book">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$51</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                              <a className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" href="#">Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _mb-10 theme-search-results-item-">
                      <div className="theme-search-results-item-preview">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="row" data-gutter={20}>
                          <div className="col-md-5 ">
                            <div className="theme-search-results-item-img-wrap">
                              <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                            </div>
                            <ul className="theme-search-results-item-car-feature-list">
                              <li>
                                <i className="fa fa-male" />
                                <span>4</span>
                              </li>
                              <li>
                                <i className="fa fa-suitcase" />
                                <span>3</span>
                              </li>
                              <li>
                                <i className="fa fa-cog" />
                                <span>Auto</span>
                              </li>
                              <li>
                                <i className="fa fa-snowflake-o" />
                                <span>A/C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-5 ">
                            <h5 className="theme-search-results-item-title theme-search-results-item-title-lg">Ford Fiesta</h5>
                            <div className="theme-search-results-item-car-location">
                              <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                              <div className="theme-search-results-item-car-location-body">
                                <p className="theme-search-results-item-car-location-title">John F. Kennedy International Airport</p>
                                <p className="theme-search-results-item-car-location-subtitle">Terminal pickup</p>
                              </div>
                            </div>
                            <ul className="theme-search-results-item-car-list">
                              <li>
                                <i className="fa fa-check" />Unlimited mileage
                              </li>
                              <li>
                                <i className="fa fa-check" />Pay at the counter
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-2 ">
                            <div className="theme-search-results-item-book">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$60</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                              <a className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" href="#">Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _mb-10 theme-search-results-item-">
                      <div className="theme-search-results-item-preview">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="row" data-gutter={20}>
                          <div className="col-md-5 ">
                            <div className="theme-search-results-item-img-wrap">
                              <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                            </div>
                            <ul className="theme-search-results-item-car-feature-list">
                              <li>
                                <i className="fa fa-male" />
                                <span>4</span>
                              </li>
                              <li>
                                <i className="fa fa-suitcase" />
                                <span>4</span>
                              </li>
                              <li>
                                <i className="fa fa-cog" />
                                <span>Auto</span>
                              </li>
                              <li>
                                <i className="fa fa-snowflake-o" />
                                <span>A/C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-5 ">
                            <h5 className="theme-search-results-item-title theme-search-results-item-title-lg">Mazda 5</h5>
                            <div className="theme-search-results-item-car-location">
                              <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                              <div className="theme-search-results-item-car-location-body">
                                <p className="theme-search-results-item-car-location-title">John F. Kennedy International Airport</p>
                                <p className="theme-search-results-item-car-location-subtitle">Terminal pickup</p>
                              </div>
                            </div>
                            <ul className="theme-search-results-item-car-list">
                              <li>
                                <i className="fa fa-check" />Unlimited mileage
                              </li>
                              <li>
                                <i className="fa fa-check" />Pay now
                              </li>
                              <li>
                                <i className="fa fa-check" />Free cancellation
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-2 ">
                            <div className="theme-search-results-item-book">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$43</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                              <a className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" href="#">Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _mb-10 theme-search-results-item-">
                      <div className="theme-search-results-item-preview">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="row" data-gutter={20}>
                          <div className="col-md-5 ">
                            <div className="theme-search-results-item-img-wrap">
                              <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                            </div>
                            <ul className="theme-search-results-item-car-feature-list">
                              <li>
                                <i className="fa fa-male" />
                                <span>4</span>
                              </li>
                              <li>
                                <i className="fa fa-suitcase" />
                                <span>5</span>
                              </li>
                              <li>
                                <i className="fa fa-cog" />
                                <span>Auto</span>
                              </li>
                              <li>
                                <i className="fa fa-snowflake-o" />
                                <span>A/C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-5 ">
                            <h5 className="theme-search-results-item-title theme-search-results-item-title-lg">Citroen DS4</h5>
                            <div className="theme-search-results-item-car-location">
                              <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                              <div className="theme-search-results-item-car-location-body">
                                <p className="theme-search-results-item-car-location-title">John F. Kennedy International Airport</p>
                                <p className="theme-search-results-item-car-location-subtitle">Shuttle to car</p>
                              </div>
                            </div>
                            <ul className="theme-search-results-item-car-list">
                              <li>
                                <i className="fa fa-check" />Unlimited mileage
                              </li>
                              <li>
                                <i className="fa fa-check" />Pay at the counter
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-2 ">
                            <div className="theme-search-results-item-book">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$81</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                              <a className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" href="#">Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _mb-10 theme-search-results-item-">
                      <div className="theme-search-results-item-preview">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="row" data-gutter={20}>
                          <div className="col-md-5 ">
                            <div className="theme-search-results-item-img-wrap">
                              <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                            </div>
                            <ul className="theme-search-results-item-car-feature-list">
                              <li>
                                <i className="fa fa-male" />
                                <span>4</span>
                              </li>
                              <li>
                                <i className="fa fa-suitcase" />
                                <span>2</span>
                              </li>
                              <li>
                                <i className="fa fa-cog" />
                                <span>Auto</span>
                              </li>
                              <li>
                                <i className="fa fa-snowflake-o" />
                                <span>A/C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-5 ">
                            <h5 className="theme-search-results-item-title theme-search-results-item-title-lg">Volkswagen Touareg</h5>
                            <div className="theme-search-results-item-car-location">
                              <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                              <div className="theme-search-results-item-car-location-body">
                                <p className="theme-search-results-item-car-location-title">John F. Kennedy International Airport</p>
                                <p className="theme-search-results-item-car-location-subtitle">Terminal pickup</p>
                              </div>
                            </div>
                            <ul className="theme-search-results-item-car-list">
                              <li>
                                <i className="fa fa-check" />Unlimited mileage
                              </li>
                              <li>
                                <i className="fa fa-check" />Pay at the counter
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-2 ">
                            <div className="theme-search-results-item-book">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$66</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                              <a className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" href="#">Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _mb-10 theme-search-results-item-">
                      <div className="theme-search-results-item-preview">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="row" data-gutter={20}>
                          <div className="col-md-5 ">
                            <div className="theme-search-results-item-img-wrap">
                              <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                            </div>
                            <ul className="theme-search-results-item-car-feature-list">
                              <li>
                                <i className="fa fa-male" />
                                <span>4</span>
                              </li>
                              <li>
                                <i className="fa fa-suitcase" />
                                <span>3</span>
                              </li>
                              <li>
                                <i className="fa fa-cog" />
                                <span>Auto</span>
                              </li>
                              <li>
                                <i className="fa fa-snowflake-o" />
                                <span>A/C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-5 ">
                            <h5 className="theme-search-results-item-title theme-search-results-item-title-lg">Nissan Juke</h5>
                            <div className="theme-search-results-item-car-location">
                              <i className="fa fa-building theme-search-results-item-car-location-icon" />
                              <div className="theme-search-results-item-car-location-body">
                                <p className="theme-search-results-item-car-location-title">709 Honey Creek Dr.</p>
                                <p className="theme-search-results-item-car-location-subtitle">City pickup</p>
                              </div>
                            </div>
                            <ul className="theme-search-results-item-car-list">
                              <li>
                                <i className="fa fa-check" />Unlimited mileage
                              </li>
                              <li>
                                <i className="fa fa-check" />Pay at the counter
                              </li>
                              <li>
                                <i className="fa fa-check" />Free cancellation
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-2 ">
                            <div className="theme-search-results-item-book">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$66</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                              <a className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" href="#">Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _mb-10 theme-search-results-item-">
                      <div className="theme-search-results-item-preview">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="row" data-gutter={20}>
                          <div className="col-md-5 ">
                            <div className="theme-search-results-item-img-wrap">
                              <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                            </div>
                            <ul className="theme-search-results-item-car-feature-list">
                              <li>
                                <i className="fa fa-male" />
                                <span>4</span>
                              </li>
                              <li>
                                <i className="fa fa-suitcase" />
                                <span>3</span>
                              </li>
                              <li>
                                <i className="fa fa-cog" />
                                <span>Auto</span>
                              </li>
                              <li>
                                <i className="fa fa-snowflake-o" />
                                <span>A/C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-5 ">
                            <h5 className="theme-search-results-item-title theme-search-results-item-title-lg">Volvo xc70</h5>
                            <div className="theme-search-results-item-car-location">
                              <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                              <div className="theme-search-results-item-car-location-body">
                                <p className="theme-search-results-item-car-location-title">LaGuardia Airport International Airport</p>
                                <p className="theme-search-results-item-car-location-subtitle">Shuttle to car</p>
                              </div>
                            </div>
                            <ul className="theme-search-results-item-car-list">
                              <li>
                                <i className="fa fa-check" />Unlimited mileage
                              </li>
                              <li>
                                <i className="fa fa-check" />Pay now
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-2 ">
                            <div className="theme-search-results-item-book">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$33</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                              <a className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" href="#">Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _mb-10 theme-search-results-item-">
                      <div className="theme-search-results-item-preview">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="row" data-gutter={20}>
                          <div className="col-md-5 ">
                            <div className="theme-search-results-item-img-wrap">
                              <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                            </div>
                            <ul className="theme-search-results-item-car-feature-list">
                              <li>
                                <i className="fa fa-male" />
                                <span>5</span>
                              </li>
                              <li>
                                <i className="fa fa-suitcase" />
                                <span>4</span>
                              </li>
                              <li>
                                <i className="fa fa-cog" />
                                <span>Auto</span>
                              </li>
                              <li>
                                <i className="fa fa-snowflake-o" />
                                <span>A/C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-5 ">
                            <h5 className="theme-search-results-item-title theme-search-results-item-title-lg">Chevrolet Spark</h5>
                            <div className="theme-search-results-item-car-location">
                              <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                              <div className="theme-search-results-item-car-location-body">
                                <p className="theme-search-results-item-car-location-title">LaGuardia Airport International Airport</p>
                                <p className="theme-search-results-item-car-location-subtitle">Terminal pickup</p>
                              </div>
                            </div>
                            <ul className="theme-search-results-item-car-list">
                              <li>
                                <i className="fa fa-check" />Unlimited mileage
                              </li>
                              <li>
                                <i className="fa fa-check" />Pay now
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-2 ">
                            <div className="theme-search-results-item-book">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$78</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                              <a className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" href="#">Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _mb-10 theme-search-results-item-">
                      <div className="theme-search-results-item-preview">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="row" data-gutter={20}>
                          <div className="col-md-5 ">
                            <div className="theme-search-results-item-img-wrap">
                              <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                            </div>
                            <ul className="theme-search-results-item-car-feature-list">
                              <li>
                                <i className="fa fa-male" />
                                <span>5</span>
                              </li>
                              <li>
                                <i className="fa fa-suitcase" />
                                <span>2</span>
                              </li>
                              <li>
                                <i className="fa fa-cog" />
                                <span>Auto</span>
                              </li>
                              <li>
                                <i className="fa fa-snowflake-o" />
                                <span>A/C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-5 ">
                            <h5 className="theme-search-results-item-title theme-search-results-item-title-lg">Mazda CX-5</h5>
                            <div className="theme-search-results-item-car-location">
                              <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                              <div className="theme-search-results-item-car-location-body">
                                <p className="theme-search-results-item-car-location-title">Newark Liberty International Airport</p>
                                <p className="theme-search-results-item-car-location-subtitle">Terminal pickup</p>
                              </div>
                            </div>
                            <ul className="theme-search-results-item-car-list">
                              <li>
                                <i className="fa fa-check" />Unlimited mileage
                              </li>
                              <li>
                                <i className="fa fa-check" />Pay now
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-2 ">
                            <div className="theme-search-results-item-book">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$63</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                              <a className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" href="#">Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _mb-10 theme-search-results-item-">
                      <div className="theme-search-results-item-preview">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="row" data-gutter={20}>
                          <div className="col-md-5 ">
                            <div className="theme-search-results-item-img-wrap">
                              <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                            </div>
                            <ul className="theme-search-results-item-car-feature-list">
                              <li>
                                <i className="fa fa-male" />
                                <span>4</span>
                              </li>
                              <li>
                                <i className="fa fa-suitcase" />
                                <span>3</span>
                              </li>
                              <li>
                                <i className="fa fa-cog" />
                                <span>Auto</span>
                              </li>
                              <li>
                                <i className="fa fa-snowflake-o" />
                                <span>A/C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-5 ">
                            <h5 className="theme-search-results-item-title theme-search-results-item-title-lg">Nissan NV200</h5>
                            <div className="theme-search-results-item-car-location">
                              <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                              <div className="theme-search-results-item-car-location-body">
                                <p className="theme-search-results-item-car-location-title">LaGuardia Airport International Airport</p>
                                <p className="theme-search-results-item-car-location-subtitle">Terminal pickup</p>
                              </div>
                            </div>
                            <ul className="theme-search-results-item-car-list">
                              <li>
                                <i className="fa fa-check" />Unlimited mileage
                              </li>
                              <li>
                                <i className="fa fa-check" />Pay at the counter
                              </li>
                              <li>
                                <i className="fa fa-check" />Free cancellation
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-2 ">
                            <div className="theme-search-results-item-book">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$91</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                              <a className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" href="#">Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _mb-10 theme-search-results-item-">
                      <div className="theme-search-results-item-preview">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="row" data-gutter={20}>
                          <div className="col-md-5 ">
                            <div className="theme-search-results-item-img-wrap">
                              <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                            </div>
                            <ul className="theme-search-results-item-car-feature-list">
                              <li>
                                <i className="fa fa-male" />
                                <span>4</span>
                              </li>
                              <li>
                                <i className="fa fa-suitcase" />
                                <span>5</span>
                              </li>
                              <li>
                                <i className="fa fa-cog" />
                                <span>Auto</span>
                              </li>
                              <li>
                                <i className="fa fa-snowflake-o" />
                                <span>A/C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-5 ">
                            <h5 className="theme-search-results-item-title theme-search-results-item-title-lg">Volkswagen Golf</h5>
                            <div className="theme-search-results-item-car-location">
                              <i className="fa fa-building theme-search-results-item-car-location-icon" />
                              <div className="theme-search-results-item-car-location-body">
                                <p className="theme-search-results-item-car-location-title">15 St Margarets Lane</p>
                                <p className="theme-search-results-item-car-location-subtitle">City pickup</p>
                              </div>
                            </div>
                            <ul className="theme-search-results-item-car-list">
                              <li>
                                <i className="fa fa-check" />Unlimited mileage
                              </li>
                              <li>
                                <i className="fa fa-check" />Pay at the counter
                              </li>
                              <li>
                                <i className="fa fa-check" />Free cancellation
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-2 ">
                            <div className="theme-search-results-item-book">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$77</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                              <a className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" href="#">Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _mb-10 theme-search-results-item-">
                      <div className="theme-search-results-item-preview">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="row" data-gutter={20}>
                          <div className="col-md-5 ">
                            <div className="theme-search-results-item-img-wrap">
                              <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                            </div>
                            <ul className="theme-search-results-item-car-feature-list">
                              <li>
                                <i className="fa fa-male" />
                                <span>5</span>
                              </li>
                              <li>
                                <i className="fa fa-suitcase" />
                                <span>2</span>
                              </li>
                              <li>
                                <i className="fa fa-cog" />
                                <span>Auto</span>
                              </li>
                              <li>
                                <i className="fa fa-snowflake-o" />
                                <span>A/C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-5 ">
                            <h5 className="theme-search-results-item-title theme-search-results-item-title-lg">Hyundai Santa Fe Sport</h5>
                            <div className="theme-search-results-item-car-location">
                              <i className="fa fa-building theme-search-results-item-car-location-icon" />
                              <div className="theme-search-results-item-car-location-body">
                                <p className="theme-search-results-item-car-location-title">3 South Sherman Street</p>
                                <p className="theme-search-results-item-car-location-subtitle">City pickup</p>
                              </div>
                            </div>
                            <ul className="theme-search-results-item-car-list">
                              <li>
                                <i className="fa fa-check" />Unlimited mileage
                              </li>
                              <li>
                                <i className="fa fa-check" />Pay at the counter
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-2 ">
                            <div className="theme-search-results-item-book">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$39</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                              <a className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" href="#">Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _mb-10 theme-search-results-item-">
                      <div className="theme-search-results-item-preview">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="row" data-gutter={20}>
                          <div className="col-md-5 ">
                            <div className="theme-search-results-item-img-wrap">
                              <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                            </div>
                            <ul className="theme-search-results-item-car-feature-list">
                              <li>
                                <i className="fa fa-male" />
                                <span>4</span>
                              </li>
                              <li>
                                <i className="fa fa-suitcase" />
                                <span>4</span>
                              </li>
                              <li>
                                <i className="fa fa-cog" />
                                <span>Auto</span>
                              </li>
                              <li>
                                <i className="fa fa-snowflake-o" />
                                <span>A/C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-5 ">
                            <h5 className="theme-search-results-item-title theme-search-results-item-title-lg">Maserati Quattroporte</h5>
                            <div className="theme-search-results-item-car-location">
                              <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                              <div className="theme-search-results-item-car-location-body">
                                <p className="theme-search-results-item-car-location-title">John F. Kennedy International Airport</p>
                                <p className="theme-search-results-item-car-location-subtitle">Terminal pickup</p>
                              </div>
                            </div>
                            <ul className="theme-search-results-item-car-list">
                              <li>
                                <i className="fa fa-check" />Unlimited mileage
                              </li>
                              <li>
                                <i className="fa fa-check" />Pay now
                              </li>
                              <li>
                                <i className="fa fa-check" />Free cancellation
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-2 ">
                            <div className="theme-search-results-item-book">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$62</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                              <a className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" href="#">Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _mb-10 theme-search-results-item-">
                      <div className="theme-search-results-item-preview">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="row" data-gutter={20}>
                          <div className="col-md-5 ">
                            <div className="theme-search-results-item-img-wrap">
                              <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                            </div>
                            <ul className="theme-search-results-item-car-feature-list">
                              <li>
                                <i className="fa fa-male" />
                                <span>5</span>
                              </li>
                              <li>
                                <i className="fa fa-suitcase" />
                                <span>3</span>
                              </li>
                              <li>
                                <i className="fa fa-cog" />
                                <span>Auto</span>
                              </li>
                              <li>
                                <i className="fa fa-snowflake-o" />
                                <span>A/C</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-5 ">
                            <h5 className="theme-search-results-item-title theme-search-results-item-title-lg">Mazda 3</h5>
                            <div className="theme-search-results-item-car-location">
                              <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                              <div className="theme-search-results-item-car-location-body">
                                <p className="theme-search-results-item-car-location-title">John F. Kennedy International Airport</p>
                                <p className="theme-search-results-item-car-location-subtitle">Shuttle to car</p>
                              </div>
                            </div>
                            <ul className="theme-search-results-item-car-list">
                              <li>
                                <i className="fa fa-check" />Unlimited mileage
                              </li>
                              <li>
                                <i className="fa fa-check" />Pay at the counter
                              </li>
                              <li>
                                <i className="fa fa-check" />Free cancellation
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-2 ">
                            <div className="theme-search-results-item-book">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$39</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                              <a className="btn btn-primary-inverse btn-block theme-search-results-item-price-btn" href="#">Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="_desk-h">
                    <div className="theme-search-results-item _br-3 _mb-20 _bsh-xl theme-search-results-item-grid">
                      <div className="_h-30vh theme-search-results-item-img-wrap-inner">
                        <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                      </div>
                      <div className="theme-search-results-item-grid-body _pt-0">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="theme-search-results-item-grid-header">
                          <h5 className="theme-search-results-item-title _fs">Toyota Yaris</h5>
                        </div>
                        <div className="theme-search-results-item-grid-caption">
                          <div className="row" data-gutter={10}>
                            <div className="col-xs-9 ">
                              <div className="theme-search-results-item-car-location">
                                <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                                <div className="theme-search-results-item-car-location-body">
                                  <p className="theme-search-results-item-car-location-title">Newark Liberty</p>
                                  <p className="theme-search-results-item-car-location-subtitle">Shuttle to car</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-3 ">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$41</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _br-3 _mb-20 _bsh-xl theme-search-results-item-grid">
                      <div className="_h-30vh theme-search-results-item-img-wrap-inner">
                        <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                      </div>
                      <div className="theme-search-results-item-grid-body _pt-0">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="theme-search-results-item-grid-header">
                          <h5 className="theme-search-results-item-title _fs">Audi Q7</h5>
                        </div>
                        <div className="theme-search-results-item-grid-caption">
                          <div className="row" data-gutter={10}>
                            <div className="col-xs-9 ">
                              <div className="theme-search-results-item-car-location">
                                <i className="fa fa-building theme-search-results-item-car-location-icon" />
                                <div className="theme-search-results-item-car-location-body">
                                  <p className="theme-search-results-item-car-location-title">73 Pacific St.</p>
                                  <p className="theme-search-results-item-car-location-subtitle">City pickup</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-3 ">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$87</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _br-3 _mb-20 _bsh-xl theme-search-results-item-grid">
                      <div className="_h-30vh theme-search-results-item-img-wrap-inner">
                        <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                      </div>
                      <div className="theme-search-results-item-grid-body _pt-0">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="theme-search-results-item-grid-header">
                          <h5 className="theme-search-results-item-title _fs">Chevrolet Cruze</h5>
                        </div>
                        <div className="theme-search-results-item-grid-caption">
                          <div className="row" data-gutter={10}>
                            <div className="col-xs-9 ">
                              <div className="theme-search-results-item-car-location">
                                <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                                <div className="theme-search-results-item-car-location-body">
                                  <p className="theme-search-results-item-car-location-title">LaGuardia Airport</p>
                                  <p className="theme-search-results-item-car-location-subtitle">Shuttle to car</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-3 ">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$42</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _br-3 _mb-20 _bsh-xl theme-search-results-item-grid">
                      <div className="_h-30vh theme-search-results-item-img-wrap-inner">
                        <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                      </div>
                      <div className="theme-search-results-item-grid-body _pt-0">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="theme-search-results-item-grid-header">
                          <h5 className="theme-search-results-item-title _fs">Volkswagen Jetta</h5>
                        </div>
                        <div className="theme-search-results-item-grid-caption">
                          <div className="row" data-gutter={10}>
                            <div className="col-xs-9 ">
                              <div className="theme-search-results-item-car-location">
                                <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                                <div className="theme-search-results-item-car-location-body">
                                  <p className="theme-search-results-item-car-location-title">John F. Kennedy</p>
                                  <p className="theme-search-results-item-car-location-subtitle">Terminal pickup</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-3 ">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$41</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _br-3 _mb-20 _bsh-xl theme-search-results-item-grid">
                      <div className="_h-30vh theme-search-results-item-img-wrap-inner">
                        <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                      </div>
                      <div className="theme-search-results-item-grid-body _pt-0">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="theme-search-results-item-grid-header">
                          <h5 className="theme-search-results-item-title _fs">Ford Fiesta</h5>
                        </div>
                        <div className="theme-search-results-item-grid-caption">
                          <div className="row" data-gutter={10}>
                            <div className="col-xs-9 ">
                              <div className="theme-search-results-item-car-location">
                                <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                                <div className="theme-search-results-item-car-location-body">
                                  <p className="theme-search-results-item-car-location-title">LaGuardia Airport</p>
                                  <p className="theme-search-results-item-car-location-subtitle">Terminal pickup</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-3 ">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$92</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _br-3 _mb-20 _bsh-xl theme-search-results-item-grid">
                      <div className="_h-30vh theme-search-results-item-img-wrap-inner">
                        <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                      </div>
                      <div className="theme-search-results-item-grid-body _pt-0">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="theme-search-results-item-grid-header">
                          <h5 className="theme-search-results-item-title _fs">Mazda 5</h5>
                        </div>
                        <div className="theme-search-results-item-grid-caption">
                          <div className="row" data-gutter={10}>
                            <div className="col-xs-9 ">
                              <div className="theme-search-results-item-car-location">
                                <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                                <div className="theme-search-results-item-car-location-body">
                                  <p className="theme-search-results-item-car-location-title">Newark Liberty</p>
                                  <p className="theme-search-results-item-car-location-subtitle">Shuttle to car</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-3 ">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$63</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _br-3 _mb-20 _bsh-xl theme-search-results-item-grid">
                      <div className="_h-30vh theme-search-results-item-img-wrap-inner">
                        <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                      </div>
                      <div className="theme-search-results-item-grid-body _pt-0">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="theme-search-results-item-grid-header">
                          <h5 className="theme-search-results-item-title _fs">Citroen DS4</h5>
                        </div>
                        <div className="theme-search-results-item-grid-caption">
                          <div className="row" data-gutter={10}>
                            <div className="col-xs-9 ">
                              <div className="theme-search-results-item-car-location">
                                <i className="fa fa-building theme-search-results-item-car-location-icon" />
                                <div className="theme-search-results-item-car-location-body">
                                  <p className="theme-search-results-item-car-location-title">73 Pacific St.</p>
                                  <p className="theme-search-results-item-car-location-subtitle">City pickup</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-3 ">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$50</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _br-3 _mb-20 _bsh-xl theme-search-results-item-grid">
                      <div className="_h-30vh theme-search-results-item-img-wrap-inner">
                        <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                      </div>
                      <div className="theme-search-results-item-grid-body _pt-0">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="theme-search-results-item-grid-header">
                          <h5 className="theme-search-results-item-title _fs">Volkswagen Touareg</h5>
                        </div>
                        <div className="theme-search-results-item-grid-caption">
                          <div className="row" data-gutter={10}>
                            <div className="col-xs-9 ">
                              <div className="theme-search-results-item-car-location">
                                <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                                <div className="theme-search-results-item-car-location-body">
                                  <p className="theme-search-results-item-car-location-title">LaGuardia Airport</p>
                                  <p className="theme-search-results-item-car-location-subtitle">Terminal pickup</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-3 ">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$37</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _br-3 _mb-20 _bsh-xl theme-search-results-item-grid">
                      <div className="_h-30vh theme-search-results-item-img-wrap-inner">
                        <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                      </div>
                      <div className="theme-search-results-item-grid-body _pt-0">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="theme-search-results-item-grid-header">
                          <h5 className="theme-search-results-item-title _fs">Nissan Juke</h5>
                        </div>
                        <div className="theme-search-results-item-grid-caption">
                          <div className="row" data-gutter={10}>
                            <div className="col-xs-9 ">
                              <div className="theme-search-results-item-car-location">
                                <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                                <div className="theme-search-results-item-car-location-body">
                                  <p className="theme-search-results-item-car-location-title">Newark Liberty</p>
                                  <p className="theme-search-results-item-car-location-subtitle">Terminal pickup</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-3 ">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$42</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _br-3 _mb-20 _bsh-xl theme-search-results-item-grid">
                      <div className="_h-30vh theme-search-results-item-img-wrap-inner">
                        <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                      </div>
                      <div className="theme-search-results-item-grid-body _pt-0">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="theme-search-results-item-grid-header">
                          <h5 className="theme-search-results-item-title _fs">Volvo xc70</h5>
                        </div>
                        <div className="theme-search-results-item-grid-caption">
                          <div className="row" data-gutter={10}>
                            <div className="col-xs-9 ">
                              <div className="theme-search-results-item-car-location">
                                <i className="fa fa-building theme-search-results-item-car-location-icon" />
                                <div className="theme-search-results-item-car-location-body">
                                  <p className="theme-search-results-item-car-location-title">812 Thatcher Court</p>
                                  <p className="theme-search-results-item-car-location-subtitle">City pickup</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-3 ">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$32</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _br-3 _mb-20 _bsh-xl theme-search-results-item-grid">
                      <div className="_h-30vh theme-search-results-item-img-wrap-inner">
                        <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                      </div>
                      <div className="theme-search-results-item-grid-body _pt-0">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="theme-search-results-item-grid-header">
                          <h5 className="theme-search-results-item-title _fs">Chevrolet Spark</h5>
                        </div>
                        <div className="theme-search-results-item-grid-caption">
                          <div className="row" data-gutter={10}>
                            <div className="col-xs-9 ">
                              <div className="theme-search-results-item-car-location">
                                <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                                <div className="theme-search-results-item-car-location-body">
                                  <p className="theme-search-results-item-car-location-title">LaGuardia Airport</p>
                                  <p className="theme-search-results-item-car-location-subtitle">Terminal pickup</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-3 ">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$43</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _br-3 _mb-20 _bsh-xl theme-search-results-item-grid">
                      <div className="_h-30vh theme-search-results-item-img-wrap-inner">
                        <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                      </div>
                      <div className="theme-search-results-item-grid-body _pt-0">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="theme-search-results-item-grid-header">
                          <h5 className="theme-search-results-item-title _fs">Mazda CX-5</h5>
                        </div>
                        <div className="theme-search-results-item-grid-caption">
                          <div className="row" data-gutter={10}>
                            <div className="col-xs-9 ">
                              <div className="theme-search-results-item-car-location">
                                <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                                <div className="theme-search-results-item-car-location-body">
                                  <p className="theme-search-results-item-car-location-title">LaGuardia Airport</p>
                                  <p className="theme-search-results-item-car-location-subtitle">Terminal pickup</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-3 ">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$37</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _br-3 _mb-20 _bsh-xl theme-search-results-item-grid">
                      <div className="_h-30vh theme-search-results-item-img-wrap-inner">
                        <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                      </div>
                      <div className="theme-search-results-item-grid-body _pt-0">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="theme-search-results-item-grid-header">
                          <h5 className="theme-search-results-item-title _fs">Nissan NV200</h5>
                        </div>
                        <div className="theme-search-results-item-grid-caption">
                          <div className="row" data-gutter={10}>
                            <div className="col-xs-9 ">
                              <div className="theme-search-results-item-car-location">
                                <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                                <div className="theme-search-results-item-car-location-body">
                                  <p className="theme-search-results-item-car-location-title">John F. Kennedy</p>
                                  <p className="theme-search-results-item-car-location-subtitle">Terminal pickup</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-3 ">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$79</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _br-3 _mb-20 _bsh-xl theme-search-results-item-grid">
                      <div className="_h-30vh theme-search-results-item-img-wrap-inner">
                        <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                      </div>
                      <div className="theme-search-results-item-grid-body _pt-0">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="theme-search-results-item-grid-header">
                          <h5 className="theme-search-results-item-title _fs">Volkswagen Golf</h5>
                        </div>
                        <div className="theme-search-results-item-grid-caption">
                          <div className="row" data-gutter={10}>
                            <div className="col-xs-9 ">
                              <div className="theme-search-results-item-car-location">
                                <i className="fa fa-building theme-search-results-item-car-location-icon" />
                                <div className="theme-search-results-item-car-location-body">
                                  <p className="theme-search-results-item-car-location-title">73 Pacific St.</p>
                                  <p className="theme-search-results-item-car-location-subtitle">City pickup</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-3 ">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$19</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _br-3 _mb-20 _bsh-xl theme-search-results-item-grid">
                      <div className="_h-30vh theme-search-results-item-img-wrap-inner">
                        <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                      </div>
                      <div className="theme-search-results-item-grid-body _pt-0">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="theme-search-results-item-grid-header">
                          <h5 className="theme-search-results-item-title _fs">Hyundai Santa Fe Sport</h5>
                        </div>
                        <div className="theme-search-results-item-grid-caption">
                          <div className="row" data-gutter={10}>
                            <div className="col-xs-9 ">
                              <div className="theme-search-results-item-car-location">
                                <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                                <div className="theme-search-results-item-car-location-body">
                                  <p className="theme-search-results-item-car-location-title">John F. Kennedy</p>
                                  <p className="theme-search-results-item-car-location-subtitle">Shuttle to car</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-3 ">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$24</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _br-3 _mb-20 _bsh-xl theme-search-results-item-grid">
                      <div className="_h-30vh theme-search-results-item-img-wrap-inner">
                        <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                      </div>
                      <div className="theme-search-results-item-grid-body _pt-0">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="theme-search-results-item-grid-header">
                          <h5 className="theme-search-results-item-title _fs">Maserati Quattroporte</h5>
                        </div>
                        <div className="theme-search-results-item-grid-caption">
                          <div className="row" data-gutter={10}>
                            <div className="col-xs-9 ">
                              <div className="theme-search-results-item-car-location">
                                <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                                <div className="theme-search-results-item-car-location-body">
                                  <p className="theme-search-results-item-car-location-title">LaGuardia Airport</p>
                                  <p className="theme-search-results-item-car-location-subtitle">Terminal pickup</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-3 ">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$76</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-results-item _br-3 _mb-20 _bsh-xl theme-search-results-item-grid">
                      <div className="_h-30vh theme-search-results-item-img-wrap-inner">
                        <img className="theme-search-results-item-img" src="./img/600x398.png" alt="Image Alternative text" title="Image Title" />
                      </div>
                      <div className="theme-search-results-item-grid-body _pt-0">
                        <a className="theme-search-results-item-mask-link" href="#" />
                        <div className="theme-search-results-item-grid-header">
                          <h5 className="theme-search-results-item-title _fs">Mazda 3</h5>
                        </div>
                        <div className="theme-search-results-item-grid-caption">
                          <div className="row" data-gutter={10}>
                            <div className="col-xs-9 ">
                              <div className="theme-search-results-item-car-location">
                                <i className="fa fa-plane theme-search-results-item-car-location-icon" />
                                <div className="theme-search-results-item-car-location-body">
                                  <p className="theme-search-results-item-car-location-title">John F. Kennedy</p>
                                  <p className="theme-search-results-item-car-location-subtitle">Shuttle to car</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-3 ">
                              <div className="theme-search-results-item-price">
                                <p className="theme-search-results-item-price-tag">$15</p>
                                <p className="theme-search-results-item-price-sign">per day</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="theme-search-results-mobile-filters" id="mobileFilters">
                    <a className="theme-search-results-mobile-filters-btn magnific-inline" href="#MobileFilters">
                      <i className="fa fa-filter" />Filters
                    </a>
                    <div className="magnific-popup mfp-hide" id="MobileFilters">
                      <div className="theme-search-results-sidebar">
                        <div className="theme-search-results-sidebar-sections">
                          <div className="theme-search-results-sidebar-section">
                            <h5 className="theme-search-results-sidebar-section-title">Price</h5>
                            <div className="theme-search-results-sidebar-section-price">
                              <input id="price-slider-mob" name="price-slider" data-min={100} data-max={500} />
                            </div>
                          </div>
                          <div className="theme-search-results-sidebar-section">
                            <h5 className="theme-search-results-sidebar-section-title">Pickup Location</h5>
                            <div className="theme-search-results-sidebar-section-checkbox-list">
                              <div className="theme-search-results-sidebar-section-checkbox-list-items">
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">LGA: LaGuardia</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">224</span>
                                </div>
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">EWR: Newark</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">215</span>
                                </div>
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">JFK: John F. Ken...</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">487</span>
                                </div>
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">Non-airport</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">307</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="theme-search-results-sidebar-section">
                            <h5 className="theme-search-results-sidebar-section-title">Passengers</h5>
                            <div className="theme-search-results-sidebar-section-checkbox-list">
                              <div className="theme-search-results-sidebar-section-checkbox-list-items">
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">1 to 2 passengers</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">140</span>
                                </div>
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">3 to 5 passengers</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">214</span>
                                </div>
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">6 or more</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">213</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="theme-search-results-sidebar-section">
                            <h5 className="theme-search-results-sidebar-section-title">Bags</h5>
                            <div className="theme-search-results-sidebar-section-checkbox-list">
                              <div className="theme-search-results-sidebar-section-checkbox-list-items">
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">1 to 2 bags</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">199</span>
                                </div>
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">3 to 4 bags</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">221</span>
                                </div>
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">5 or more</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">148</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="theme-search-results-sidebar-section">
                            <h5 className="theme-search-results-sidebar-section-title">Car Type</h5>
                            <div className="theme-search-results-sidebar-section-checkbox-list">
                              <div className="theme-search-results-sidebar-section-checkbox-list-items">
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">Small</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">223</span>
                                </div>
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">Large</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">348</span>
                                </div>
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">Medium</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">355</span>
                                </div>
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">SUV</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">146</span>
                                </div>
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">Van</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">471</span>
                                </div>
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">Commercial</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">127</span>
                                </div>
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">Luxury</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">499</span>
                                </div>
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">Pickup truck</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">366</span>
                                </div>
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">Convertable</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">296</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="theme-search-results-sidebar-section">
                            <h5 className="theme-search-results-sidebar-section-title">Payment Type</h5>
                            <div className="theme-search-results-sidebar-section-checkbox-list">
                              <div className="theme-search-results-sidebar-section-checkbox-list-items">
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">Pay now</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">320</span>
                                </div>
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">Pay at counter</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">169</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="theme-search-results-sidebar-section">
                            <h5 className="theme-search-results-sidebar-section-title">Rental Agency</h5>
                            <div className="theme-search-results-sidebar-section-checkbox-list">
                              <div className="theme-search-results-sidebar-section-checkbox-list-items">
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">Ace</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">456</span>
                                </div>
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">Action</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">411</span>
                                </div>
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">Advantage</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">109</span>
                                </div>
                                <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                  <label className="icheck-label">
                                    <input className="icheck" type="checkbox" />
                                    <span className="icheck-title">Alamo</span>
                                  </label>
                                  <span className="theme-search-results-sidebar-section-checkbox-list-amount">290</span>
                                </div>
                              </div>
                              <div className="collapse" id="mobile-SearchResultsCheckboxRentalAgency">
                                <div className="theme-search-results-sidebar-section-checkbox-list-items theme-search-results-sidebar-section-checkbox-list-items-expand">
                                  <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                    <label className="icheck-label">
                                      <input className="icheck" type="checkbox" />
                                      <span className="icheck-title">Avis</span>
                                    </label>
                                    <span className="theme-search-results-sidebar-section-checkbox-list-amount">293</span>
                                  </div>
                                  <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                    <label className="icheck-label">
                                      <input className="icheck" type="checkbox" />
                                      <span className="icheck-title">Budget</span>
                                    </label>
                                    <span className="theme-search-results-sidebar-section-checkbox-list-amount">228</span>
                                  </div>
                                  <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                    <label className="icheck-label">
                                      <input className="icheck" type="checkbox" />
                                      <span className="icheck-title">Dollar</span>
                                    </label>
                                    <span className="theme-search-results-sidebar-section-checkbox-list-amount">377</span>
                                  </div>
                                  <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                    <label className="icheck-label">
                                      <input className="icheck" type="checkbox" />
                                      <span className="icheck-title">Enterprise</span>
                                    </label>
                                    <span className="theme-search-results-sidebar-section-checkbox-list-amount">301</span>
                                  </div>
                                  <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                    <label className="icheck-label">
                                      <input className="icheck" type="checkbox" />
                                      <span className="icheck-title">Hertz</span>
                                    </label>
                                    <span className="theme-search-results-sidebar-section-checkbox-list-amount">495</span>
                                  </div>
                                  <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                    <label className="icheck-label">
                                      <input className="icheck" type="checkbox" />
                                      <span className="icheck-title">National</span>
                                    </label>
                                    <span className="theme-search-results-sidebar-section-checkbox-list-amount">359</span>
                                  </div>
                                  <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                    <label className="icheck-label">
                                      <input className="icheck" type="checkbox" />
                                      <span className="icheck-title">Payless</span>
                                    </label>
                                    <span className="theme-search-results-sidebar-section-checkbox-list-amount">375</span>
                                  </div>
                                  <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                    <label className="icheck-label">
                                      <input className="icheck" type="checkbox" />
                                      <span className="icheck-title">Prestige Car Rental</span>
                                    </label>
                                    <span className="theme-search-results-sidebar-section-checkbox-list-amount">263</span>
                                  </div>
                                  <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                    <label className="icheck-label">
                                      <input className="icheck" type="checkbox" />
                                      <span className="icheck-title">Special rate</span>
                                    </label>
                                    <span className="theme-search-results-sidebar-section-checkbox-list-amount">241</span>
                                  </div>
                                  <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                    <label className="icheck-label">
                                      <input className="icheck" type="checkbox" />
                                      <span className="icheck-title">Thrifty</span>
                                    </label>
                                    <span className="theme-search-results-sidebar-section-checkbox-list-amount">356</span>
                                  </div>
                                  <div className="checkbox theme-search-results-sidebar-section-checkbox-list-item">
                                    <label className="icheck-label">
                                      <input className="icheck" type="checkbox" />
                                      <span className="icheck-title">U-Save</span>
                                    </label>
                                    <span className="theme-search-results-sidebar-section-checkbox-list-amount">383</span>
                                  </div>
                                </div>
                              </div>
                              <a className="theme-search-results-sidebar-section-checkbox-list-expand-link" role="button" data-toggle="collapse" href="#mobile-SearchResultsCheckboxRentalAgency" aria-expanded="false">Show more
                                <i className="fa fa-angle-down" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="btn _tt-uc _fs-sm btn-white btn-block btn-lg" href="#">Load More Results</a>
              </div>
              <div className="col-md-3 ">
                <div className="sticky-col _mob-h">
                  <div className="theme-sidebar-section _mb-20">
                    <h5 className="theme-sidebar-section-title">Weather in New York</h5>
                    <ul className="theme-sidebar-section-weather-list">
                      <li>
                        <p className="theme-sidebar-section-weather-date">Wed, Jun 27</p>
                        <p className="theme-sidebar-section-weather-temp">
                          <i className="wi wi-day-sunny theme-sidebar-section-weather-icon" />
                          <b>40°</b>/31°
                        </p>
                      </li>
                      <li>
                        <p className="theme-sidebar-section-weather-date">Thu, Jun 28</p>
                        <p className="theme-sidebar-section-weather-temp">
                          <i className="wi wi-cloudy theme-sidebar-section-weather-icon" />
                          <b>30°</b>/25°
                        </p>
                      </li>
                      <li>
                        <p className="theme-sidebar-section-weather-date">Fri, Jun 29</p>
                        <p className="theme-sidebar-section-weather-temp">
                          <i className="wi wi-rain theme-sidebar-section-weather-icon" />
                          <b>38°</b>/30°
                        </p>
                      </li>
                      <li>
                        <p className="theme-sidebar-section-weather-date">Sat, Jun 30</p>
                        <p className="theme-sidebar-section-weather-temp">
                          <i className="wi wi-rain theme-sidebar-section-weather-icon" />
                          <b>36°</b>/29°
                        </p>
                      </li>
                      <li>
                        <p className="theme-sidebar-section-weather-date">Sun, Jul 01</p>
                        <p className="theme-sidebar-section-weather-temp">
                          <i className="wi wi-day-sunny theme-sidebar-section-weather-icon" />
                          <b>36°</b>/28°
                        </p>
                      </li>
                      <li>
                        <p className="theme-sidebar-section-weather-date">Mon, Jul 02</p>
                        <p className="theme-sidebar-section-weather-temp">
                          <i className="wi wi-cloudy theme-sidebar-section-weather-icon" />
                          <b>39°</b>/33°
                        </p>
                      </li>
                    </ul>
                    <p className="theme-sidebar-section-weather-forecast">
                      <a href="#">detailed forecast →</a>
                    </p>
                  </div>
                  <div className="theme-ad _mb-20">
                    <a className="theme-ad-link" href="#" />
                    <p className="theme-ad-sign">Advertisement</p>
                    <img className="theme-ad-img" src="./img/300x500.png" alt="Image Alternative text" title="Image Title" />
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

export default SearchCar;