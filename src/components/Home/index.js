import React from 'react';
import { Link ,NavLink } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

function Home() {

  return (
  <div>
    
    
    <div className="theme-hero-area">
      <div className="theme-hero-area-bg-wrap">
        <div className="theme-hero-area-bg ws-action" style={{backgroundImage: 'url(./img/back1.png)'}} data-parallax="true" />
        <div className="theme-hero-area-mask theme-hero-area-mask-strong" />
        <div className="theme-hero-area-inner-shadow" />
      </div>
      <div className="theme-hero-area-body">
        <div className="container">
          <div className="theme-search-area-tabs _pv-150 _pv-mob-50">
            <div className="theme-search-area-tabs-header _ta-c _c-w _mb-60">
              <h1 className="theme-search-area-tabs-title">You dream, we plan</h1>
              <p className="theme-search-area-tabs-subtitle">Compare hundreds travel websites at once</p>
            </div>
            <div className="tabbable">
              <ul className="nav _mh-mob-5 nav-tabs nav-center nav-white nav-active-white nav-no-br nav-lg nav-mob-inline" role="tablist">
                <li className="active" role="presentation">
                  <a aria-controls="SearchAreaTabs-1" role="tab" data-toggle="tab" href="#SearchAreaTabs-1">Hotels</a>
                </li>
                {/* <li role="presentation">
                  <a aria-controls="SearchAreaTabs-2" role="tab" data-toggle="tab" href="#SearchAreaTabs-2">Homes</a>
                </li> */}
                <li role="presentation">
                  <a aria-controls="SearchAreaTabs-3" role="tab" data-toggle="tab" href="#SearchAreaTabs-3">Flights</a>
                </li>
                <li role="presentation">
                  <a aria-controls="SearchAreaTabs-4" role="tab" data-toggle="tab" href="#SearchAreaTabs-4">Cars</a>
                </li>
                <li role="presentation">
                  <a aria-controls="SearchAreaTabs-5" role="tab" data-toggle="tab" href="#SearchAreaTabs-5">Experiences</a>
                </li>
              </ul>
              <div className="tab-content _ph-25 _pt-30 _pb-15 _bg-w tab-content-curved">
                <div className="tab-pane active" id="SearchAreaTabs-1" role="tab-panel">
                  <div className="theme-search-area">
                    <div className="theme-search-area-form">
                      <div className="row" data-gutter={10}>
                        <div className="col-md-3 ">
                          <div className="theme-search-area-section first theme-search-area-section-curved theme-search-area-section-fade-white">
                            <div className="theme-search-area-section-inner">
                              <i className="theme-search-area-section-icon lin lin-location-pin" />
                              <input className="theme-search-area-section-input typeahead" type="text" placeholder="Hotel Location" data-provide="typeahead" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 ">
                          <div className="row" data-gutter={10}>
                            <div className="col-md-6 ">
                              <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-fade-white">
                                <div className="theme-search-area-section-inner">
                                  <i className="theme-search-area-section-icon lin lin-calendar" />
                                  <input className="theme-search-area-section-input datePickerStart _mob-h" defaultValue="Wed 06/27" type="text" placeholder="Check-in" />
                                  <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-06-27" type="date" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 ">
                              <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-fade-white">
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
                          <div className="row" data-gutter={10}>
                            <div className="col-md-6 ">
                              <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-fade-white quantity-selector" data-increment="Rooms">
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
                              <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-fade-white quantity-selector" data-increment="Guests">
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
                          <button className="theme-search-area-submit _mt-0 theme-search-area-submit-no-border theme-search-area-submit-curved theme-search-area-submit-primary">Search</button>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-area-options _mob-h theme-search-area-options-center clearfix">
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
                <div className="tab-pane" id="SearchAreaTabs-2" role="tab-panel">
                  <div className="theme-search-area">
                    <div className="theme-search-area-form">
                      <div className="row" data-gutter={10}>
                        <div className="col-md-4 ">
                          <div className="theme-search-area-section first theme-search-area-section-curved theme-search-area-section-fade-white">
                            <div className="theme-search-area-section-inner">
                              <i className="theme-search-area-section-icon lin lin-location-pin" />
                              <input className="theme-search-area-section-input typeahead" type="text" placeholder="Apartment Location" data-provide="typeahead" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7 ">
                          <div className="row" data-gutter={10}>
                            <div className="col-md-4 ">
                              <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-fade-white">
                                <div className="theme-search-area-section-inner">
                                  <i className="theme-search-area-section-icon lin lin-calendar" />
                                  <input className="theme-search-area-section-input datePickerStart _mob-h" defaultValue="Wed 06/27" type="text" placeholder="Check-in" />
                                  <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-06-27" type="date" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 ">
                              <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-fade-white">
                                <div className="theme-search-area-section-inner">
                                  <i className="theme-search-area-section-icon lin lin-calendar" />
                                  <input className="theme-search-area-section-input datePickerEnd _mob-h" defaultValue="Mon 07/02" type="text" placeholder="Check-out" />
                                  <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-07-02" type="date" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 ">
                              <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-fade-white quantity-selector" data-increment="Guests">
                                <div className="theme-search-area-section-inner">
                                  <i className="theme-search-area-section-icon lin lin-people" />
                                  <input className="theme-search-area-section-input" defaultValue="2 Guests" type="text" />
                                  <div className="quantity-selector-box" id="RoomSearchGuests">
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
                          <button className="theme-search-area-submit _mt-0 theme-search-area-submit-no-border theme-search-area-submit-curved theme-search-area-submit-primary">Search</button>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-area-options _mob-h theme-search-area-options-center clearfix">
                      <div className="btn-group theme-search-area-options-list" data-toggle="buttons">
                        <label className="btn btn-primary active">
                          <input type="radio" name="room-options" id="room-option-1" defaultChecked />Any
                        </label>
                        <label className="btn btn-primary">
                          <input type="radio" name="room-options" id="room-option-2" />Entire Home
                        </label>
                        <label className="btn btn-primary">
                          <input type="radio" name="room-options" id="room-option-3" />Private Room
                        </label>
                        <label className="btn btn-primary">
                          <input type="radio" name="room-options" id="room-option-4" />Shared Space
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="SearchAreaTabs-3" role="tab-panel">
                  <div className="theme-search-area">
                    <div className="theme-search-area-form">
                      <div className="row" data-gutter={10}>
                        <div className="col-md-5 ">
                          <div className="row" data-gutter={10}>
                            <div className="col-md-6 ">
                              <div className="theme-search-area-section first theme-search-area-section-curved theme-search-area-section-fade-white">
                                <div className="theme-search-area-section-inner">
                                  <i className="theme-search-area-section-icon lin lin-location-pin" />
                                  <input className="theme-search-area-section-input typeahead" type="text" placeholder="Departure" data-provide="typeahead" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 ">
                              <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-fade-white">
                                <div className="theme-search-area-section-inner">
                                  <i className="theme-search-area-section-icon lin lin-location-pin" />
                                  <input className="theme-search-area-section-input typeahead" type="text" placeholder="Arrival" data-provide="typeahead" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 ">
                          <div className="row" data-gutter={10}>
                            <div className="col-md-4 ">
                              <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-fade-white">
                                <div className="theme-search-area-section-inner">
                                  <i className="theme-search-area-section-icon lin lin-calendar" />
                                  <input className="theme-search-area-section-input datePickerStart _mob-h" defaultValue="Wed 06/27" type="text" placeholder="Check-in" />
                                  <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-06-27" type="date" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 ">
                              <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-fade-white">
                                <div className="theme-search-area-section-inner">
                                  <i className="theme-search-area-section-icon lin lin-calendar" />
                                  <input className="theme-search-area-section-input datePickerEnd _mob-h" defaultValue="Mon 07/02" type="text" placeholder="Check-out" />
                                  <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-07-02" type="date" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 ">
                              <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-fade-white quantity-selector" data-increment="Passengers">
                                <div className="theme-search-area-section-inner">
                                  <i className="theme-search-area-section-icon lin lin-people" />
                                  <input className="theme-search-area-section-input" defaultValue="1 Passenger" type="text" />
                                  <div className="quantity-selector-box" id="FlySearchPassengers">
                                    <div className="quantity-selector-inner">
                                      <p className="quantity-selector-title">Passengers</p>
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
                          <button className="theme-search-area-submit _mt-0 theme-search-area-submit-no-border theme-search-area-submit-curved theme-search-area-submit-primary">Search</button>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-area-options theme-search-area-options-center clearfix">
                      <div className="btn-group theme-search-area-options-list" data-toggle="buttons">
                        <label className="btn btn-primary active">
                          <input type="radio" name="flight-options" id="flight-option-1" defaultChecked />Round Trip
                        </label>
                        <label className="btn btn-primary">
                          <input type="radio" name="flight-options" id="flight-option-2" />One Way
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="SearchAreaTabs-4" role="tab-panel">
                  <div className="theme-search-area">
                    <div className="theme-search-area-form">
                      <div className="row" data-gutter={10}>
                        <div className="col-md-7 ">
                          <div className="row" data-gutter={10}>
                            <div className="col-md-6 ">
                              <div className="theme-search-area-section first theme-search-area-section-curved theme-search-area-section-fade-white">
                                <div className="theme-search-area-section-inner">
                                  <i className="theme-search-area-section-icon lin lin-location-pin" />
                                  <input className="theme-search-area-section-input typeahead" type="text" placeholder="Pick up location" data-provide="typeahead" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 ">
                              <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-fade-white">
                                <div className="theme-search-area-section-inner">
                                  <i className="theme-search-area-section-icon lin lin-location-pin" />
                                  <input className="theme-search-area-section-input typeahead" type="text" placeholder="Drop off location" data-provide="typeahead" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 ">
                          <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-fade-white">
                            <div className="theme-search-area-section-inner">
                              <i className="theme-search-area-section-icon lin lin-calendar" />
                              <input className="theme-search-area-section-input datePickerStart _mob-h" defaultValue="Wed 06/27" type="text" placeholder="Check-in" />
                              <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-06-27" type="date" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 ">
                          <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-fade-white">
                            <div className="theme-search-area-section-inner">
                              <i className="theme-search-area-section-icon lin lin-calendar" />
                              <input className="theme-search-area-section-input datePickerEnd _mob-h" defaultValue="Mon 07/02" type="text" placeholder="Check-out" />
                              <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-07-02" type="date" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-1 ">
                          <button className="theme-search-area-submit _mt-0 theme-search-area-submit-no-border theme-search-area-submit-curved theme-search-area-submit-primary">Search</button>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-area-options _mob-h theme-search-area-options-center clearfix">
                      <div className="btn-group theme-search-area-options-list" data-toggle="buttons">
                        <label className="btn btn-primary active">
                          <input type="radio" name="car-options" id="car-option-1" defaultChecked />Any
                        </label>
                        <label className="btn btn-primary">
                          <input type="radio" name="car-options" id="car-option-2" />Sedan
                        </label>
                        <label className="btn btn-primary">
                          <input type="radio" name="car-options" id="car-option-3" />Hatchback
                        </label>
                        <label className="btn btn-primary">
                          <input type="radio" name="car-options" id="car-option-4" />SUV
                        </label>
                        <label className="btn btn-primary">
                          <input type="radio" name="car-options" id="car-option-5" />Crossover
                        </label>
                        <label className="btn btn-primary">
                          <input type="radio" name="car-options" id="car-option-6" />Coupe
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="SearchAreaTabs-5" role="tab-panel">
                  <div className="theme-search-area">
                    <div className="theme-search-area-form">
                      <div className="row" data-gutter={10}>
                        <div className="col-md-4 ">
                          <div className="theme-search-area-section first theme-search-area-section-curved theme-search-area-section-fade-white">
                            <div className="theme-search-area-section-inner">
                              <i className="theme-search-area-section-icon lin lin-location-pin" />
                              <input className="theme-search-area-section-input typeahead" type="text" placeholder="Destination" data-provide="typeahead" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7 ">
                          <div className="row" data-gutter={10}>
                            <div className="col-md-4 ">
                              <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-fade-white">
                                <div className="theme-search-area-section-inner">
                                  <i className="theme-search-area-section-icon lin lin-calendar" />
                                  <input className="theme-search-area-section-input datePickerStart _mob-h" defaultValue="Wed 06/27" type="text" placeholder="Check-in" />
                                  <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-06-27" type="date" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 ">
                              <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-fade-white">
                                <div className="theme-search-area-section-inner">
                                  <i className="theme-search-area-section-icon lin lin-calendar" />
                                  <input className="theme-search-area-section-input datePickerEnd _mob-h" defaultValue="Mon 07/02" type="text" placeholder="Check-out" />
                                  <input className="theme-search-area-section-input _desk-h mobile-picker" defaultValue="2018-07-02" type="date" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 ">
                              <div className="theme-search-area-section theme-search-area-section-curved theme-search-area-section-fade-white quantity-selector" data-increment="Guests">
                                <div className="theme-search-area-section-inner">
                                  <i className="theme-search-area-section-icon lin lin-people" />
                                  <input className="theme-search-area-section-input" defaultValue="2 Guests" type="text" />
                                  <div className="quantity-selector-box" id="ExpSearchGuests">
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
                          <button className="theme-search-area-submit _mt-0 theme-search-area-submit-no-border theme-search-area-submit-curved theme-search-area-submit-primary">Search</button>
                        </div>
                      </div>
                    </div>
                    <div className="theme-search-area-options _mob-h theme-search-area-options-center clearfix">
                      <div className="btn-group theme-search-area-options-list" data-toggle="buttons">
                        <label className="btn btn-primary active">
                          <input type="radio" name="exp-options" id="exp-option-1" defaultChecked />Any
                        </label>
                        <label className="btn btn-primary">
                          <input type="radio" name="exp-options" id="exp-option-2" />Experiences
                        </label>
                        <label className="btn btn-primary">
                          <input type="radio" name="exp-options" id="exp-option-3" />Immersions
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="theme-page-section _pv-120 theme-page-section-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="theme-hero-text theme-hero-text-center">
              <div className="theme-hero-text-header">
                <h2 className="theme-hero-text-title">Welcome to
                  <b>Saiworld</b>
                </h2>
                <p className="theme-hero-text-subtitle">SaiWorld is booking service, which is striving to get the best prices for you with exellent support. We offer best deals for hotels, vacation rentals, flights, car rentals, and travel experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="theme-hero-area">
      <div className="theme-hero-area-bg-wrap">
        <div className="theme-hero-area-bg" style={{backgroundImage: 'url(./img/1500x801.png)'}} />
        <div className="theme-hero-area-mask theme-hero-area-mask-half" />
      </div>
      <div className="theme-hero-area-body">
        <div className="theme-page-section theme-page-section-xxl">
          <div className="container">
            <div className="row row-col-mob-gap">
              <div className="col-md-2-5 ">
                <div className="feature _br-5 _bsh-xl _bsh-light feature-wrap-fade-white feature-center">
                  <i className="feature-icon feature-icon-primary-inverse feature-icon-box feature-icon-round fa fa-globe" />
                  <div className="feature-caption _c-w">
                    <h5 className="feature-title">Explore the World</h5>
                    <p className="feature-subtitle">Start to discrover. We will help you to visit any place you can imagine</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2-5 ">
                <div className="feature _br-5 _bsh-xl _bsh-light feature-wrap-fade-white feature-center">
                  <i className="feature-icon feature-icon-primary-inverse feature-icon-box feature-icon-round fa fa-gift" />
                  <div className="feature-caption _c-w">
                    <h5 className="feature-title">Gifts &amp; Rewards</h5>
                    <p className="feature-subtitle">Get even more from our service. Spend less and travel more</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2-5 ">
                <div className="feature _br-5 _bsh-xl _bsh-light feature-wrap-fade-white feature-center">
                  <i className="feature-icon feature-icon-primary-inverse feature-icon-box feature-icon-round fa fa-credit-card" />
                  <div className="feature-caption _c-w">
                    <h5 className="feature-title">Best prices</h5>
                    <p className="feature-subtitle">We are comparing hundreds travel websites to find best price for you</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2-5 ">
                <div className="feature _br-5 _bsh-xl _bsh-light feature-wrap-fade-white feature-center">
                  <i className="feature-icon feature-icon-primary-inverse feature-icon-box feature-icon-round fa fa-comments-o" />
                  <div className="feature-caption _c-w">
                    <h5 className="feature-title">27/7 Support</h5>
                    <p className="feature-subtitle">Contact us anytime, anywhere. We will resolve any issues ASAP</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2-5 ">
                <div className="feature _br-5 _bsh-xl _bsh-light feature-wrap-fade-white feature-center">
                  <i className="feature-icon feature-icon-primary-inverse feature-icon-box feature-icon-round fa fa-suitcase" />
                  <div className="feature-caption _c-w">
                    <h5 className="feature-title">Trip Manager</h5>
                    <p className="feature-subtitle">Be in control with your trips by using our free and award winning manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="theme-page-section theme-page-section-xxl theme-page-section-dark">
      <div className="container">
        <div className="theme-page-section-header theme-page-section-header-white">
          <h5 className="theme-page-section-title">Popular Destinations</h5>
          <p className="theme-page-section-subtitle">The most searched cities in March</p>
        </div>
        <div className="row row-col-gap" data-gutter={20}>
          <div className="col-md-5 ">
            <div className="banner _h-40vh _br-3 _bsh-xl _bsh-light banner-animate banner-animate-mask-in">
              <div className="banner-bg" style={{backgroundImage: 'url(./img/800x600.png)'}} />
              <div className="banner-mask" />
              <a className="banner-link" href="#" />
              <div className="banner-caption _pt-100 banner-caption-bottom banner-caption-grad">
                <h5 className="banner-title">Santorini</h5>
                <p className="banner-subtitle">Greece</p>
              </div>
            </div>
          </div>
          <div className="col-md-7 ">
            <div className="banner _h-40vh _br-3 _bsh-xl _bsh-light banner-animate banner-animate-mask-in">
              <div className="banner-bg" style={{backgroundImage: 'url(./img/800x600.png)'}} />
              <div className="banner-mask" />
              <a className="banner-link" href="#" />
              <div className="banner-caption _pt-100 banner-caption-bottom banner-caption-grad">
                <h5 className="banner-title">Goa</h5>
                <p className="banner-subtitle">India</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="banner _h-33vh _br-3 _bsh-xl _bsh-light banner-animate banner-animate-mask-in">
              <div className="banner-bg" style={{backgroundImage: 'url(./img/500x400.png)'}} />
              <div className="banner-mask" />
              <a className="banner-link" href="#" />
              <div className="banner-caption _pt-100 banner-caption-bottom banner-caption-grad">
                <h5 className="banner-title">Bali</h5>
                <p className="banner-subtitle">Indonesia</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="banner _h-33vh _br-3 _bsh-xl _bsh-light banner-animate banner-animate-mask-in">
              <div className="banner-bg" style={{backgroundImage: 'url(./img/500x400.png)'}} />
              <div className="banner-mask" />
              <a className="banner-link" href="#" />
              <div className="banner-caption _pt-100 banner-caption-bottom banner-caption-grad">
                <h5 className="banner-title">Sydney</h5>
                <p className="banner-subtitle">Australia</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="banner _h-33vh _br-3 _bsh-xl _bsh-light banner-animate banner-animate-mask-in">
              <div className="banner-bg" style={{backgroundImage: 'url(./img/400x500.png)'}} />
              <div className="banner-mask" />
              <a className="banner-link" href="#" />
              <div className="banner-caption _pt-100 banner-caption-bottom banner-caption-grad">
                <h5 className="banner-title">Paris</h5>
                <p className="banner-subtitle">France</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="banner _h-40vh _br-3 _bsh-xl _bsh-light banner-animate banner-animate-mask-in">
              <div className="banner-bg" style={{backgroundImage: 'url(./img/800x600.png)'}} />
              <div className="banner-mask" />
              <a className="banner-link" href="#" />
              <div className="banner-caption _pt-100 banner-caption-bottom banner-caption-grad">
                <h5 className="banner-title">Venice</h5>
                <p className="banner-subtitle">Italy</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="banner _h-40vh _br-3 _bsh-xl _bsh-light banner-animate banner-animate-mask-in">
              <div className="banner-bg" style={{backgroundImage: 'url(./img/800x600.png)'}} />
              <div className="banner-mask" />
              <a className="banner-link" href="#" />
              <div className="banner-caption _pt-100 banner-caption-bottom banner-caption-grad">
                <h5 className="banner-title">Cape Town</h5>
                <p className="banner-subtitle">South Africa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="theme-hero-area">
      <div className="theme-hero-area-bg-wrap">
        <div className="theme-hero-area-bg-pattern theme-hero-area-bg-pattern-ultra-light" style={{backgroundImage: 'url(img/patterns/travel/4.png)'}} />
        <div className="theme-hero-area-grad-mask" />
        <div className="theme-hero-area-inner-shadow theme-hero-area-inner-shadow-light" />
      </div>
      <div className="theme-hero-area-body">
        <div className="container">
          <div className="theme-page-section _p-0">
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <div className="theme-mobile-app">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="theme-mobile-app-section">
                        <div className="theme-mobile-app-body">
                          <div className="theme-mobile-app-header">
                            <h2 className="theme-mobile-app-title">Download our app</h2>
                            <p className="theme-mobile-app-subtitle">Book and manage your trips on the go. Be notified of our hot deals and offers.</p>
                          </div>
                          <ul className="theme-mobile-app-btn-list">
                            <li>
                              <a className="btn btn-dark theme-mobile-app-btn" href="#">
                                <i className="theme-mobile-app-logo">
                                  <img src="img/brands/apple.png" alt="Image Alternative text" title="Image Title" />
                                </i>
                                <span>Download on
                                  <br />
                                  <span>App Store</span>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a className="btn btn-dark theme-mobile-app-btn" href="#">
                                <i className="theme-mobile-app-logo">
                                  <img src="img/brands/play-market.png" alt="Image Alternative text" title="Image Title" />
                                </i>
                                <span>Download on
                                  <br />
                                  <span>Play Market</span>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="theme-mobile-app-section">
                        <img className="theme-mobile-app-img" src="img/mockups/phone-2.png" alt="Image Alternative text" title="Image Title" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  
    );
}

export default Home;