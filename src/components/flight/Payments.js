import React from 'react';


function flightPayment() {
    return (
        <div>
  {/* <nav className="navbar navbar-default navbar-inverse navbar-theme" id="main-nav">
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
            <li className="active dropdown">
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
  <div className="theme-page-section theme-page-section-lg">
    <div className="container">
      <div className="row row-col-static row-col-mob-gap" id="sticky-parent" data-gutter={60}>
        <div className="col-md-8 ">
          <div className="theme-payment-page-sections">
            <div className="theme-payment-page-sections-item">
              <div className="theme-payment-page-signin">
                <i className="theme-payment-page-signin-icon fa fa-user-circle-o" />
                <div className="theme-payment-page-signin-body">
                  <h4 className="theme-payment-page-signin-title">Sign in if you have an account</h4>
                  <p className="theme-payment-page-signin-subtitle">We will retrieve saved travelers and credit cards for faster checkout</p>
                </div>
                <a className="btn theme-payment-page-signin-btn btn-primary" href="#">Sign in</a>
              </div>
            </div>
            <div className="theme-payment-page-sections-item">
              <div className="theme-search-results-item theme-payment-page-item-thumb">
                <div className="row" data-gutter={20}>
                  <div className="col-md-9 ">
                    <p className="theme-search-results-item-flight-payment-airline">You are flying Virgin Atlantic Airways</p>
                    <h5 className="theme-search-results-item-title">London, LHR &nbsp;→&nbsp; New York, JFK</h5>
                    <p className="theme-search-results-item-flight-payment-info">Round-trip, Economy, 1 Adult</p>
                    <ul className="theme-search-results-item-flight-payment-dates">
                      <li>Depart: May 17, 2018</li>
                      <li>Return: May 23, 2018</li>
                    </ul>
                    <a className="theme-search-results-item-flight-payment-details-link" href="#FlightPaymentDetails" data-toggle="collapse" aria-expanded="false" aria-controls="FlightPaymentDetails">Flight Details &nbsp;
                      <i className="fa fa-angle-down" />
                    </a>
                    <div className="collapse _pt-20" id="FlightPaymentDetails">
                      <div className="theme-search-results-item-flight-detail-items">
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Depart</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 17</p>
                                <p className="theme-search-results-item-flight-details-info-cities">London → New York</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">20h 30m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">1 stop</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon" />
                                    <div className="theme-search-results-item-flight-details-schedule-dots" />
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">02:40
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">—</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">02:60
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">12h 20m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LHR</b>Heathrow
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>→</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>WAW</b>Warsaw Chopin
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Warszawa</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>1660 American</li>
                                      <li>Wide-body jet</li>
                                      <li>Boeing 777-200</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon" />
                                    <div className="theme-search-results-item-flight-details-schedule-dots" />
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">02:60
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">—</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">05:30
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">2h 30m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Warszawa(WAW)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon" />
                                    <div className="theme-search-results-item-flight-details-schedule-dots" />
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 17</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">05:30
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">—</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">11:10
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">5h 40m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>WAW</b>Warsaw Chopin
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Warszawa</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>→</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>JFK</b>John F. Kennedy
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>6830 American</li>
                                      <li>Wide-body jet</li>
                                      <li>Boeing 777-300ER</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="theme-search-results-item-flight-details">
                          <div className="row">
                            <div className="col-md-3 ">
                              <div className="theme-search-results-item-flight-details-info">
                                <h5 className="theme-search-results-item-flight-details-info-title">Return</h5>
                                <p className="theme-search-results-item-flight-details-info-date">Tue, May 23</p>
                                <p className="theme-search-results-item-flight-details-info-cities">New York → London</p>
                                <p className="theme-search-results-item-flight-details-info-fly-time">26h 30m</p>
                                <p className="theme-search-results-item-flight-details-info-stops">2 stops</p>
                              </div>
                            </div>
                            <div className="col-md-9 ">
                              <div className="theme-search-results-item-flight-details-schedule">
                                <ul className="theme-search-results-item-flight-details-schedule-list">
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon" />
                                    <div className="theme-search-results-item-flight-details-schedule-dots" />
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">08:50
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">—</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">05:30
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">8h 40m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>LHR</b>Heathrow
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">London</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>→</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>CDG</b>Charles de Gaulle
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Paris</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>7293 Virgin</li>
                                      <li>Wide-body jet</li>
                                      <li>Embraer 175</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon" />
                                    <div className="theme-search-results-item-flight-details-schedule-dots" />
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">05:30
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">—</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">06:50
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">1h 20m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Paris(CDG)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon" />
                                    <div className="theme-search-results-item-flight-details-schedule-dots" />
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">06:50
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">—</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">11:40
                                        <span>pm</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">4h 50m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>CDG</b>Charles de Gaulle
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Paris</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>→</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>BOS</b>Logan
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Boston</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>8929 Virgin</li>
                                      <li>Narrow-body jet</li>
                                      <li>Boeing 777-300ER</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <i className="fa fa-exchange theme-search-results-item-flight-details-schedule-icon" />
                                    <div className="theme-search-results-item-flight-details-schedule-dots" />
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">11:40
                                        <span>pm</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">—</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">01:60
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">2h 20m</p>
                                    <p className="theme-search-results-item-flight-details-schedule-transfer">Change planes in Boston(BOS)</p>
                                  </li>
                                  <li>
                                    <i className="fa fa-plane theme-search-results-item-flight-details-schedule-icon" />
                                    <div className="theme-search-results-item-flight-details-schedule-dots" />
                                    <p className="theme-search-results-item-flight-details-schedule-date">Tue, May 23</p>
                                    <div className="theme-search-results-item-flight-details-schedule-time">
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">01:60
                                        <span>am</span>
                                      </span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-separator">—</span>
                                      <span className="theme-search-results-item-flight-details-schedule-time-item">11:20
                                        <span>am</span>
                                      </span>
                                    </div>
                                    <p className="theme-search-results-item-flight-details-schedule-fly-time">9h 20m</p>
                                    <div className="theme-search-results-item-flight-details-schedule-destination">
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>BOS</b>Logan
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">Boston</p>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-separator">
                                        <span>→</span>
                                      </div>
                                      <div className="theme-search-results-item-flight-details-schedule-destination-item">
                                        <p className="theme-search-results-item-flight-details-schedule-destination-title">
                                          <b>JFK</b>John F. Kennedy
                                        </p>
                                        <p className="theme-search-results-item-flight-details-schedule-destination-city">New York</p>
                                      </div>
                                    </div>
                                    <ul className="theme-search-results-item-flight-details-schedule-features">
                                      <li>7127 Virgin</li>
                                      <li>Wide-body jet</li>
                                      <li>Embraer 175</li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 ">
                    <div className="theme-search-results-item-img-wrap">
                      <img className="theme-search-results-item-img _mob-h" src="./img/351x253.png" alt="Image Alternative text" title="Image Title" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="theme-payment-page-sections-item">
              <h3 className="theme-payment-page-sections-item-title">Enter Passenger Details</h3>
              <div className="theme-payment-page-form">
                <h3 className="theme-payment-page-form-title">Passenger 1</h3>
                <div className="row row-col-gap" data-gutter={20}>
                  <div className="col-md-6 ">
                    <div className="row row-col-gap" data-gutter={10}>
                      <div className="col-md-6 ">
                        <div className="theme-payment-page-form-item form-group">
                          <i className="fa fa-angle-down" />
                          <select className="form-control">
                            <option>Month</option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="theme-payment-page-form-item form-group">
                          <i className="fa fa-angle-down" />
                          <select className="form-control">
                            <option>Day</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="theme-payment-page-form-item form-group">
                          <i className="fa fa-angle-down" />
                          <select className="form-control">
                            <option>Year</option>
                            <option>2018</option>
                            <option>2017</option>
                            <option>2016</option>
                            <option>2015</option>
                            <option>2014</option>
                            <option>2013</option>
                            <option>2012</option>
                            <option>2011</option>
                            <option>2010</option>
                            <option>2009</option>
                            <option>2008</option>
                            <option>2007</option>
                            <option>2006</option>
                            <option>2005</option>
                            <option>2004</option>
                            <option>2003</option>
                            <option>2002</option>
                            <option>2001</option>
                            <option>2000</option>
                            <option>1999</option>
                            <option>1998</option>
                            <option>1997</option>
                            <option>1996</option>
                            <option>1995</option>
                            <option>1994</option>
                            <option>1993</option>
                            <option>1992</option>
                            <option>1991</option>
                            <option>1990</option>
                            <option>1989</option>
                            <option>1988</option>
                            <option>1987</option>
                            <option>1986</option>
                            <option>1985</option>
                            <option>1984</option>
                            <option>1983</option>
                            <option>1982</option>
                            <option>1981</option>
                            <option>1980</option>
                            <option>1979</option>
                            <option>1978</option>
                            <option>1977</option>
                            <option>1976</option>
                            <option>1975</option>
                            <option>1974</option>
                            <option>1973</option>
                            <option>1972</option>
                            <option>1971</option>
                            <option>1970</option>
                            <option>1969</option>
                            <option>1968</option>
                            <option>1967</option>
                            <option>1966</option>
                            <option>1965</option>
                            <option>1964</option>
                            <option>1963</option>
                            <option>1962</option>
                            <option>1961</option>
                            <option>1960</option>
                            <option>1959</option>
                            <option>1958</option>
                            <option>1957</option>
                            <option>1956</option>
                            <option>1955</option>
                            <option>1954</option>
                            <option>1953</option>
                            <option>1952</option>
                            <option>1951</option>
                            <option>1950</option>
                            <option>1949</option>
                            <option>1948</option>
                            <option>1947</option>
                            <option>1946</option>
                            <option>1945</option>
                            <option>1944</option>
                            <option>1943</option>
                            <option>1942</option>
                            <option>1941</option>
                            <option>1940</option>
                            <option>1939</option>
                            <option>1938</option>
                            <option>1937</option>
                            <option>1936</option>
                            <option>1935</option>
                            <option>1934</option>
                            <option>1933</option>
                            <option>1932</option>
                            <option>1931</option>
                            <option>1930</option>
                            <option>1929</option>
                            <option>1928</option>
                            <option>1927</option>
                            <option>1926</option>
                            <option>1925</option>
                            <option>1924</option>
                            <option>1923</option>
                            <option>1922</option>
                            <option>1921</option>
                            <option>1920</option>
                            <option>1919</option>
                            <option>1918</option>
                            <option>1917</option>
                            <option>1916</option>
                            <option>1915</option>
                            <option>1914</option>
                            <option>1913</option>
                            <option>1912</option>
                            <option>1911</option>
                            <option>1910</option>
                            <option>1909</option>
                            <option>1908</option>
                            <option>1907</option>
                            <option>1906</option>
                            <option>1905</option>
                            <option>1904</option>
                            <option>1903</option>
                            <option>1902</option>
                            <option>1901</option>
                            <option>1900</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="theme-payment-page-form-item form-group">
                      <i className="fa fa-angle-down" />
                      <select className="form-control">
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="theme-payment-page-form-item form-group">
                      <input className="form-control" type="text" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="theme-payment-page-form-item form-group">
                      <input className="form-control" type="text" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="theme-payment-page-form-item form-group">
                      <input className="form-control" type="text" placeholder="Passport Serial" />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="theme-payment-page-form-item form-group">
                      <i className="fa fa-angle-down" />
                      <select className="form-control">
                        <option>Citizenship</option>
                        <option>Afghanistan</option>
                        <option>Albania</option>
                        <option>Algeria</option>
                        <option>American Samoa</option>
                        <option>AndorrA</option>
                        <option>Angola</option>
                        <option>Anguilla</option>
                        <option>Antarctica</option>
                        <option>Antigua and Barbuda</option>
                        <option>Argentina</option>
                        <option>Armenia</option>
                        <option>Aruba</option>
                        <option>Australia</option>
                        <option>Austria</option>
                        <option>Azerbaijan</option>
                        <option>Bahamas</option>
                        <option>Bahrain</option>
                        <option>Bangladesh</option>
                        <option>Barbados</option>
                        <option>Belarus</option>
                        <option>Belgium</option>
                        <option>Belize</option>
                        <option>Benin</option>
                        <option>Bermuda</option>
                        <option>Bhutan</option>
                        <option>Bolivia</option>
                        <option>Bosnia and Herzegovina</option>
                        <option>Botswana</option>
                        <option>Bouvet Island</option>
                        <option>Brazil</option>
                        <option>British Indian Ocean Territory</option>
                        <option>Brunei Darussalam</option>
                        <option>Bulgaria</option>
                        <option>Burkina Faso</option>
                        <option>Burundi</option>
                        <option>Cambodia</option>
                        <option>Cameroon</option>
                        <option>Canada</option>
                        <option>Cape Verde</option>
                        <option>Cayman Islands</option>
                        <option>Central African Republic</option>
                        <option>Chad</option>
                        <option>Chile</option>
                        <option>China</option>
                        <option>Christmas Island</option>
                        <option>Cocos (Keeling) Islands</option>
                        <option>Colombia</option>
                        <option>Comoros</option>
                        <option>Congo</option>
                        <option>Congo, The Democratic Republic of the</option>
                        <option>Cook Islands</option>
                        <option>Costa Rica</option>
                        <option>Cote D"Ivoire</option>
                        <option>Croatia</option>
                        <option>Cuba</option>
                        <option>Cyprus</option>
                        <option>Czech Republic</option>
                        <option>Denmark</option>
                        <option>Djibouti</option>
                        <option>Dominica</option>
                        <option>Dominican Republic</option>
                        <option>Ecuador</option>
                        <option>Egypt</option>
                        <option>El Salvador</option>
                        <option>Equatorial Guinea</option>
                        <option>Eritrea</option>
                        <option>Estonia</option>
                        <option>Ethiopia</option>
                        <option>Falkland Islands (Malvinas)</option>
                        <option>Faroe Islands</option>
                        <option>Fiji</option>
                        <option>Finland</option>
                        <option>France</option>
                        <option>French Guiana</option>
                        <option>French Polynesia</option>
                        <option>French Southern Territories</option>
                        <option>Gabon</option>
                        <option>Gambia</option>
                        <option>Georgia</option>
                        <option>Germany</option>
                        <option>Ghana</option>
                        <option>Gibraltar</option>
                        <option>Greece</option>
                        <option>Greenland</option>
                        <option>Grenada</option>
                        <option>Guadeloupe</option>
                        <option>Guam</option>
                        <option>Guatemala</option>
                        <option>Guernsey</option>
                        <option>Guinea</option>
                        <option>Guinea-Bissau</option>
                        <option>Guyana</option>
                        <option>Haiti</option>
                        <option>Heard Island and Mcdonald Islands</option>
                        <option>Holy See (Vatican City State)</option>
                        <option>Honduras</option>
                        <option>Hong Kong</option>
                        <option>Hungary</option>
                        <option>Iceland</option>
                        <option>India</option>
                        <option>Indonesia</option>
                        <option>Iran, Islamic Republic Of</option>
                        <option>Iraq</option>
                        <option>Ireland</option>
                        <option>Isle of Man</option>
                        <option>Israel</option>
                        <option>Italy</option>
                        <option>Jamaica</option>
                        <option>Japan</option>
                        <option>Jersey</option>
                        <option>Jordan</option>
                        <option>Kazakhstan</option>
                        <option>Kenya</option>
                        <option>Kiribati</option>
                        <option>Korea, Democratic People"S Republic of</option>
                        <option>Korea, Republic of</option>
                        <option>Kuwait</option>
                        <option>Kyrgyzstan</option>
                        <option>Lao People"S Democratic Republic</option>
                        <option>Latvia</option>
                        <option>Lebanon</option>
                        <option>Lesotho</option>
                        <option>Liberia</option>
                        <option>Libyan Arab Jamahiriya</option>
                        <option>Liechtenstein</option>
                        <option>Lithuania</option>
                        <option>Luxembourg</option>
                        <option>Macao</option>
                        <option>Macedonia, The Former Yugoslav Republic of</option>
                        <option>Madagascar</option>
                        <option>Malawi</option>
                        <option>Malaysia</option>
                        <option>Maldives</option>
                        <option>Mali</option>
                        <option>Malta</option>
                        <option>Marshall Islands</option>
                        <option>Martinique</option>
                        <option>Mauritania</option>
                        <option>Mauritius</option>
                        <option>Mayotte</option>
                        <option>Mexico</option>
                        <option>Micronesia, Federated States of</option>
                        <option>Moldova, Republic of</option>
                        <option>Monaco</option>
                        <option>Mongolia</option>
                        <option>Montserrat</option>
                        <option>Morocco</option>
                        <option>Mozambique</option>
                        <option>Myanmar</option>
                        <option>Namibia</option>
                        <option>Nauru</option>
                        <option>Nepal</option>
                        <option>Netherlands</option>
                        <option>Netherlands Antilles</option>
                        <option>New Caledonia</option>
                        <option>New Zealand</option>
                        <option>Nicaragua</option>
                        <option>Niger</option>
                        <option>Nigeria</option>
                        <option>Niue</option>
                        <option>Norfolk Island</option>
                        <option>Northern Mariana Islands</option>
                        <option>Norway</option>
                        <option>Oman</option>
                        <option>Pakistan</option>
                        <option>Palau</option>
                        <option>Palestinian Territory, Occupied</option>
                        <option>Panama</option>
                        <option>Papua New Guinea</option>
                        <option>Paraguay</option>
                        <option>Peru</option>
                        <option>Philippines</option>
                        <option>Pitcairn</option>
                        <option>Poland</option>
                        <option>Portugal</option>
                        <option>Puerto Rico</option>
                        <option>Qatar</option>
                        <option>Reunion</option>
                        <option>Romania</option>
                        <option>Russian Federation</option>
                        <option>RWANDA</option>
                        <option>Saint Helena</option>
                        <option>Saint Kitts and Nevis</option>
                        <option>Saint Lucia</option>
                        <option>Saint Pierre and Miquelon</option>
                        <option>Saint Vincent and the Grenadines</option>
                        <option>Samoa</option>
                        <option>San Marino</option>
                        <option>Sao Tome and Principe</option>
                        <option>Saudi Arabia</option>
                        <option>Senegal</option>
                        <option>Serbia and Montenegro</option>
                        <option>Seychelles</option>
                        <option>Sierra Leone</option>
                        <option>Singapore</option>
                        <option>Slovakia</option>
                        <option>Slovenia</option>
                        <option>Solomon Islands</option>
                        <option>Somalia</option>
                        <option>South Africa</option>
                        <option>South Georgia and the South Sandwich Islands</option>
                        <option>Spain</option>
                        <option>Sri Lanka</option>
                        <option>Sudan</option>
                        <option>Suriname</option>
                        <option>Svalbard and Jan Mayen</option>
                        <option>Swaziland</option>
                        <option>Sweden</option>
                        <option>Switzerland</option>
                        <option>Syrian Arab Republic</option>
                        <option>Taiwan, Province of China</option>
                        <option>Tajikistan</option>
                        <option>Tanzania, United Republic of</option>
                        <option>Thailand</option>
                        <option>Timor-Leste</option>
                        <option>Togo</option>
                        <option>Tokelau</option>
                        <option>Tonga</option>
                        <option>Trinidad and Tobago</option>
                        <option>Tunisia</option>
                        <option>Turkey</option>
                        <option>Turkmenistan</option>
                        <option>Turks and Caicos Islands</option>
                        <option>Tuvalu</option>
                        <option>Uganda</option>
                        <option>Ukraine</option>
                        <option>United Arab Emirates</option>
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>United States Minor Outlying Islands</option>
                        <option>Uruguay</option>
                        <option>Uzbekistan</option>
                        <option>Vanuatu</option>
                        <option>Venezuela</option>
                        <option>Viet Nam</option>
                        <option>Virgin Islands, British</option>
                        <option>Virgin Islands, U.S.</option>
                        <option>Wallis and Futuna</option>
                        <option>Western Sahara</option>
                        <option>Yemen</option>
                        <option>Zambia</option>
                        <option>Zimbabwe</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="theme-payment-page-sections-item">
              <h3 className="theme-payment-page-sections-item-title">Enter Billing Information</h3>
              <div className="theme-payment-page-form _mb-20">
                <h3 className="theme-payment-page-form-title">Billing Address</h3>
                <div className="row row-col-gap" data-gutter={20}>
                  <div className="col-md-6 ">
                    <div className="theme-payment-page-form-item form-group">
                      <input className="form-control" type="text" placeholder="Street (line 1)" />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="theme-payment-page-form-item form-group">
                      <input className="form-control" type="text" placeholder="Street (line 2)" />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="theme-payment-page-form-item form-group">
                      <input className="form-control" type="text" placeholder="Postal Code" />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="theme-payment-page-form-item form-group">
                      <input className="form-control" type="text" placeholder="City" />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="theme-payment-page-form-item form-group">
                      <i className="fa fa-angle-down" />
                      <select className="form-control">
                        <option>State/Region</option>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>American Samoa</option>
                        <option>Arizona</option>
                        <option>Arkansas</option>
                        <option>California</option>
                        <option>Colorado</option>
                        <option>Connecticut</option>
                        <option>Delaware</option>
                        <option>District Of Columbia</option>
                        <option>Federated States Of Micronesia</option>
                        <option>Florida</option>
                        <option>Georgia</option>
                        <option>Guam</option>
                        <option>Hawaii</option>
                        <option>Idaho</option>
                        <option>Illinois</option>
                        <option>Indiana</option>
                        <option>Iowa</option>
                        <option>Kansas</option>
                        <option>Kentucky</option>
                        <option>Louisiana</option>
                        <option>Maine</option>
                        <option>Marshall Islands</option>
                        <option>Maryland</option>
                        <option>Massachusetts</option>
                        <option>Michigan</option>
                        <option>Minnesota</option>
                        <option>Mississippi</option>
                        <option>Missouri</option>
                        <option>Montana</option>
                        <option>Nebraska</option>
                        <option>Nevada</option>
                        <option>New Hampshire</option>
                        <option>New Jersey</option>
                        <option>New Mexico</option>
                        <option>New York</option>
                        <option>North Carolina</option>
                        <option>North Dakota</option>
                        <option>Northern Mariana Islands</option>
                        <option>Ohio</option>
                        <option>Oklahoma</option>
                        <option>Oregon</option>
                        <option>Palau</option>
                        <option>Pennsylvania</option>
                        <option>Puerto Rico</option>
                        <option>Rhode Island</option>
                        <option>South Carolina</option>
                        <option>South Dakota</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Utah</option>
                        <option>Vermont</option>
                        <option>Virgin Islands</option>
                        <option>Virginia</option>
                        <option>Washington</option>
                        <option>West Virginia</option>
                        <option>Wisconsin</option>
                        <option>Wyoming</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="theme-payment-page-form-item form-group">
                      <i className="fa fa-angle-down" />
                      <select className="form-control">
                        <option>Select Country</option>
                        <option>Afghanistan</option>
                        <option>Albania</option>
                        <option>Algeria</option>
                        <option>American Samoa</option>
                        <option>AndorrA</option>
                        <option>Angola</option>
                        <option>Anguilla</option>
                        <option>Antarctica</option>
                        <option>Antigua and Barbuda</option>
                        <option>Argentina</option>
                        <option>Armenia</option>
                        <option>Aruba</option>
                        <option>Australia</option>
                        <option>Austria</option>
                        <option>Azerbaijan</option>
                        <option>Bahamas</option>
                        <option>Bahrain</option>
                        <option>Bangladesh</option>
                        <option>Barbados</option>
                        <option>Belarus</option>
                        <option>Belgium</option>
                        <option>Belize</option>
                        <option>Benin</option>
                        <option>Bermuda</option>
                        <option>Bhutan</option>
                        <option>Bolivia</option>
                        <option>Bosnia and Herzegovina</option>
                        <option>Botswana</option>
                        <option>Bouvet Island</option>
                        <option>Brazil</option>
                        <option>British Indian Ocean Territory</option>
                        <option>Brunei Darussalam</option>
                        <option>Bulgaria</option>
                        <option>Burkina Faso</option>
                        <option>Burundi</option>
                        <option>Cambodia</option>
                        <option>Cameroon</option>
                        <option>Canada</option>
                        <option>Cape Verde</option>
                        <option>Cayman Islands</option>
                        <option>Central African Republic</option>
                        <option>Chad</option>
                        <option>Chile</option>
                        <option>China</option>
                        <option>Christmas Island</option>
                        <option>Cocos (Keeling) Islands</option>
                        <option>Colombia</option>
                        <option>Comoros</option>
                        <option>Congo</option>
                        <option>Congo, The Democratic Republic of the</option>
                        <option>Cook Islands</option>
                        <option>Costa Rica</option>
                        <option>Cote D"Ivoire</option>
                        <option>Croatia</option>
                        <option>Cuba</option>
                        <option>Cyprus</option>
                        <option>Czech Republic</option>
                        <option>Denmark</option>
                        <option>Djibouti</option>
                        <option>Dominica</option>
                        <option>Dominican Republic</option>
                        <option>Ecuador</option>
                        <option>Egypt</option>
                        <option>El Salvador</option>
                        <option>Equatorial Guinea</option>
                        <option>Eritrea</option>
                        <option>Estonia</option>
                        <option>Ethiopia</option>
                        <option>Falkland Islands (Malvinas)</option>
                        <option>Faroe Islands</option>
                        <option>Fiji</option>
                        <option>Finland</option>
                        <option>France</option>
                        <option>French Guiana</option>
                        <option>French Polynesia</option>
                        <option>French Southern Territories</option>
                        <option>Gabon</option>
                        <option>Gambia</option>
                        <option>Georgia</option>
                        <option>Germany</option>
                        <option>Ghana</option>
                        <option>Gibraltar</option>
                        <option>Greece</option>
                        <option>Greenland</option>
                        <option>Grenada</option>
                        <option>Guadeloupe</option>
                        <option>Guam</option>
                        <option>Guatemala</option>
                        <option>Guernsey</option>
                        <option>Guinea</option>
                        <option>Guinea-Bissau</option>
                        <option>Guyana</option>
                        <option>Haiti</option>
                        <option>Heard Island and Mcdonald Islands</option>
                        <option>Holy See (Vatican City State)</option>
                        <option>Honduras</option>
                        <option>Hong Kong</option>
                        <option>Hungary</option>
                        <option>Iceland</option>
                        <option>India</option>
                        <option>Indonesia</option>
                        <option>Iran, Islamic Republic Of</option>
                        <option>Iraq</option>
                        <option>Ireland</option>
                        <option>Isle of Man</option>
                        <option>Israel</option>
                        <option>Italy</option>
                        <option>Jamaica</option>
                        <option>Japan</option>
                        <option>Jersey</option>
                        <option>Jordan</option>
                        <option>Kazakhstan</option>
                        <option>Kenya</option>
                        <option>Kiribati</option>
                        <option>Korea, Democratic People"S Republic of</option>
                        <option>Korea, Republic of</option>
                        <option>Kuwait</option>
                        <option>Kyrgyzstan</option>
                        <option>Lao People"S Democratic Republic</option>
                        <option>Latvia</option>
                        <option>Lebanon</option>
                        <option>Lesotho</option>
                        <option>Liberia</option>
                        <option>Libyan Arab Jamahiriya</option>
                        <option>Liechtenstein</option>
                        <option>Lithuania</option>
                        <option>Luxembourg</option>
                        <option>Macao</option>
                        <option>Macedonia, The Former Yugoslav Republic of</option>
                        <option>Madagascar</option>
                        <option>Malawi</option>
                        <option>Malaysia</option>
                        <option>Maldives</option>
                        <option>Mali</option>
                        <option>Malta</option>
                        <option>Marshall Islands</option>
                        <option>Martinique</option>
                        <option>Mauritania</option>
                        <option>Mauritius</option>
                        <option>Mayotte</option>
                        <option>Mexico</option>
                        <option>Micronesia, Federated States of</option>
                        <option>Moldova, Republic of</option>
                        <option>Monaco</option>
                        <option>Mongolia</option>
                        <option>Montserrat</option>
                        <option>Morocco</option>
                        <option>Mozambique</option>
                        <option>Myanmar</option>
                        <option>Namibia</option>
                        <option>Nauru</option>
                        <option>Nepal</option>
                        <option>Netherlands</option>
                        <option>Netherlands Antilles</option>
                        <option>New Caledonia</option>
                        <option>New Zealand</option>
                        <option>Nicaragua</option>
                        <option>Niger</option>
                        <option>Nigeria</option>
                        <option>Niue</option>
                        <option>Norfolk Island</option>
                        <option>Northern Mariana Islands</option>
                        <option>Norway</option>
                        <option>Oman</option>
                        <option>Pakistan</option>
                        <option>Palau</option>
                        <option>Palestinian Territory, Occupied</option>
                        <option>Panama</option>
                        <option>Papua New Guinea</option>
                        <option>Paraguay</option>
                        <option>Peru</option>
                        <option>Philippines</option>
                        <option>Pitcairn</option>
                        <option>Poland</option>
                        <option>Portugal</option>
                        <option>Puerto Rico</option>
                        <option>Qatar</option>
                        <option>Reunion</option>
                        <option>Romania</option>
                        <option>Russian Federation</option>
                        <option>RWANDA</option>
                        <option>Saint Helena</option>
                        <option>Saint Kitts and Nevis</option>
                        <option>Saint Lucia</option>
                        <option>Saint Pierre and Miquelon</option>
                        <option>Saint Vincent and the Grenadines</option>
                        <option>Samoa</option>
                        <option>San Marino</option>
                        <option>Sao Tome and Principe</option>
                        <option>Saudi Arabia</option>
                        <option>Senegal</option>
                        <option>Serbia and Montenegro</option>
                        <option>Seychelles</option>
                        <option>Sierra Leone</option>
                        <option>Singapore</option>
                        <option>Slovakia</option>
                        <option>Slovenia</option>
                        <option>Solomon Islands</option>
                        <option>Somalia</option>
                        <option>South Africa</option>
                        <option>South Georgia and the South Sandwich Islands</option>
                        <option>Spain</option>
                        <option>Sri Lanka</option>
                        <option>Sudan</option>
                        <option>Suriname</option>
                        <option>Svalbard and Jan Mayen</option>
                        <option>Swaziland</option>
                        <option>Sweden</option>
                        <option>Switzerland</option>
                        <option>Syrian Arab Republic</option>
                        <option>Taiwan, Province of China</option>
                        <option>Tajikistan</option>
                        <option>Tanzania, United Republic of</option>
                        <option>Thailand</option>
                        <option>Timor-Leste</option>
                        <option>Togo</option>
                        <option>Tokelau</option>
                        <option>Tonga</option>
                        <option>Trinidad and Tobago</option>
                        <option>Tunisia</option>
                        <option>Turkey</option>
                        <option>Turkmenistan</option>
                        <option>Turks and Caicos Islands</option>
                        <option>Tuvalu</option>
                        <option>Uganda</option>
                        <option>Ukraine</option>
                        <option>United Arab Emirates</option>
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>United States Minor Outlying Islands</option>
                        <option>Uruguay</option>
                        <option>Uzbekistan</option>
                        <option>Vanuatu</option>
                        <option>Venezuela</option>
                        <option>Viet Nam</option>
                        <option>Virgin Islands, British</option>
                        <option>Virgin Islands, U.S.</option>
                        <option>Wallis and Futuna</option>
                        <option>Western Sahara</option>
                        <option>Yemen</option>
                        <option>Zambia</option>
                        <option>Zimbabwe</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme-payment-page-form">
                <h3 className="theme-payment-page-form-title">Card Details</h3>
                <div className="row row-col-gap" data-gutter={20}>
                  <div className="col-md-6 ">
                    <div className="theme-payment-page-form-item form-group">
                      <input className="form-control" type="text" placeholder="Name on Card" />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="theme-payment-page-form-item form-group">
                      <input className="form-control" type="text" placeholder="Credit/Debit Card Number" />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="row row-col-gap" data-gutter={10}>
                      <div className="col-md-4 ">
                        <div className="theme-payment-page-form-item form-group">
                          <i className="fa fa-angle-down" />
                          <select className="form-control">
                            <option>(1) Jan</option>
                            <option>(2) Feb</option>
                            <option>(3) Mar</option>
                            <option>(4) Apr</option>
                            <option>(5) May</option>
                            <option>(6) Jun</option>
                            <option>(7) Jul</option>
                            <option>(8) Aug</option>
                            <option>(9) Sep</option>
                            <option>(10) Oct</option>
                            <option>(11) Nov</option>
                            <option>(12) Dec</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4 ">
                        <div className="theme-payment-page-form-item form-group">
                          <i className="fa fa-angle-down" />
                          <select className="form-control">
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4 ">
                        <div className="theme-payment-page-form-item form-group">
                          <input className="form-control" type="text" placeholder="Security Code" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <ul className="theme-payment-page-card-list">
                      <li>
                        <img src="img/credit-icons/mastercard-straight-64px.png" alt="Image Alternative text" title="Image Title" />
                      </li>
                      <li>
                        <img src="img/credit-icons/visa-straight-64px.png" alt="Image Alternative text" title="Image Title" />
                      </li>
                      <li>
                        <img src="img/credit-icons/visa-electron-straight-64px.png" alt="Image Alternative text" title="Image Title" />
                      </li>
                      <li>
                        <img src="img/credit-icons/discover-straight-64px.png" alt="Image Alternative text" title="Image Title" />
                      </li>
                      <li>
                        <img src="img/credit-icons/maestro-straight-64px.png" alt="Image Alternative text" title="Image Title" />
                      </li>
                      <li>
                        <img src="img/credit-icons/american-express-straight-64px.png" alt="Image Alternative text" title="Image Title" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="theme-payment-page-sections-item">
              <div className="theme-payment-page-booking">
                <div className="theme-payment-page-booking-header">
                  <h3 className="theme-payment-page-booking-title">Total</h3>
                  <p className="theme-payment-page-booking-subtitle">By clicking book now button you agree with terms and conditionals and money back gurantee. Thank you for trusting our service.</p>
                  <p className="theme-payment-page-booking-price">$670.00</p>
                </div>
                <a className="btn _tt-uc btn-primary-inverse btn-lg btn-block" href="#">Book Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="sticky-col">
            <div className="theme-sidebar-section _mb-10">
              <h5 className="theme-sidebar-section-title">Booking Summary</h5>
              <ul className="theme-sidebar-section-summary-list">
                <li>round-trip, economy, 1 adult</li>
                <li>Depart: Apr 07, 2018</li>
                <li>Return: Apr 13, 2018</li>
              </ul>
            </div>
            <div className="theme-sidebar-section _mb-10">
              <h5 className="theme-sidebar-section-title">Charges</h5>
              <div className="theme-sidebar-section-charges">
                <ul className="theme-sidebar-section-charges-list">
                  <li className="theme-sidebar-section-charges-item">
                    <h5 className="theme-sidebar-section-charges-item-title">1 adult</h5>
                    <p className="theme-sidebar-section-charges-item-subtitle">Economy</p>
                    <p className="theme-sidebar-section-charges-item-price">$615.00</p>
                  </li>
                  <li className="theme-sidebar-section-charges-item">
                    <h5 className="theme-sidebar-section-charges-item-title">Taxes, Fees &amp; Surcharges</h5>
                    <p className="theme-sidebar-section-charges-item-subtitle" />
                    <p className="theme-sidebar-section-charges-item-price">$55.00</p>
                  </li>
                </ul>
                <p className="theme-sidebar-section-charges-total">Total
                  <span>$670.00</span>
                </p>
              </div>
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
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="theme-footer" id="mainFooter">
    <div className="container _ph-mob-0">
      <div className="row row-eq-height row-mob-full" data-gutter={60}>
        <div className="col-md-3">
          <div className="theme-footer-section theme-footer-">
            <a className="theme-footer-brand _mb-mob-30" href="#">
              <img src="img/logo-black.png" alt="Image Alternative text" title="Image Title" />
            </a>
            <div className="theme-footer-brand-text">
              <p>Taciti egestas commodo tristique porttitor ante cursus habitant nascetur fermentum morbi lobortis parturient sit semper</p>
              <p>Dignissim sem porttitor varius quis penatibus tempus phasellus vel est pellentesque dis nascetur netus viverra</p>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="row">
            <div className="col-md-4">
              <div className="theme-footer-section theme-footer-">
                <h5 className="theme-footer-section-title">Travel Mate</h5>
                <ul className="theme-footer-section-list">
                  <li>
                    <a href="#">About Travel Mate</a>
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
          <p className="theme-copyright-text">Copyright © 2018
            <a href="#">Bookify</a>. All rights reserved.
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
</div>

        );
    }
    
    export default flightPayment;