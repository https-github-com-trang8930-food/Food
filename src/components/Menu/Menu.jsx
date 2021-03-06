import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <React.Fragment>
  <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div className="container">
      <a className="navbar-brand" href="index.html">Coffee<small>Blend</small></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-menu" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><a href="index.html" className="nav-link">Home</a></li>
          <li className="nav-item active"><a href="menu.html" className="nav-link">Menu</a></li>
          <li className="nav-item"><a href="services.html" className="nav-link">Services</a></li>
          <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
          <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="room.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
            <div className="dropdown-menu" aria-labelledby="dropdown04">
              <a className="dropdown-item" href="shop.html">Shop</a>
              <a className="dropdown-item" href="product-single.html">Single Product</a>
              <a className="dropdown-item" href="room.html">Cart</a>
              <a className="dropdown-item" href="checkout.html">Checkout</a>
            </div>
          </li>
          <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
          <li className="nav-item cart"><a href="cart.html" className="nav-link"><span className="icon icon-shopping_cart" /><span className="bag d-flex justify-content-center align-items-center"><small>1</small></span></a></li>
        </ul>
      </div>
    </div>
  </nav>
  {/* END nav */}
  <section className="home-slider owl-carousel">
    <div className="slider-item" style={{backgroundImage: 'url(images/bg_3.jpg)'}} data-stellar-background-ratio="0.5">
      <div className="overlay" />
      <div className="container">
        <div className="row slider-text justify-content-center align-items-center">
          <div className="col-md-7 col-sm-12 text-center ftco-animate">
            <h1 className="mb-3 mt-5 bread">Our Menu</h1>
            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Menu</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-intro">
    <div className="container-wrap">
      <div className="wrap d-md-flex align-items-xl-end">
        <div className="info">
          <div className="row no-gutters">
            <div className="col-md-4 d-flex ftco-animate">
              <div className="icon"><span className="icon-phone" /></div>
              <div className="text">
                <h3>000 (123) 456 7890</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate">
              <div className="icon"><span className="icon-my_location" /></div>
              <div className="text">
                <h3>198 West 21th Street</h3>
                <p>	203 Fake St. Mountain View, San Francisco, California, USA</p>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate">
              <div className="icon"><span className="icon-clock-o" /></div>
              <div className="text">
                <h3>Open Monday-Friday</h3>
                <p>8:00am - 9:00pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="book p-4">
          <h3>Book a Table</h3>
          <form action="#" className="appointment-form">
            <div className="d-md-flex">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="First Name" />
              </div>
              <div className="form-group ml-md-4">
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
            </div>
            <div className="d-md-flex">
              <div className="form-group">
                <div className="input-wrap">
                  <div className="icon"><span className="ion-md-calendar" /></div>
                  <input type="text" className="form-control appointment_date" placeholder="Date" />
                </div>
              </div>
              <div className="form-group ml-md-4">
                <div className="input-wrap">
                  <div className="icon"><span className="ion-ios-clock" /></div>
                  <input type="text" className="form-control appointment_time" placeholder="Time" />
                </div>
              </div>
              <div className="form-group ml-md-4">
                <input type="text" className="form-control" placeholder="Phone" />
              </div>
            </div>
            <div className="d-md-flex">
              <div className="form-group">
                <textarea name id cols={30} rows={2} className="form-control" placeholder="Message" defaultValue={""} />
              </div>
              <div className="form-group ml-md-4">
                <input type="submit" defaultValue="Appointment" className="btn btn-white py-3 px-4" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-5 pb-3">
          <h3 className="mb-5 heading-pricing ftco-animate">Starter</h3>
          <div className="pricing-entry d-flex ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/dish-1.jpg)'}} />
            <div className="desc pl-3">
              <div className="d-flex text align-items-center">
                <h3><span>Cornish - Mackerel</span></h3>
                <span className="price">$20.00</span>
              </div>
              <div className="d-block">
                <p>A small river named Duden flows by their place and supplies</p>
              </div>
            </div>
          </div>
          <div className="pricing-entry d-flex ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/dish-2.jpg)'}} />
            <div className="desc pl-3">
              <div className="d-flex text align-items-center">
                <h3><span>Roasted Steak</span></h3>
                <span className="price">$29.00</span>
              </div>
              <div className="d-block">
                <p>A small river named Duden flows by their place and supplies</p>
              </div>
            </div>
          </div>
          <div className="pricing-entry d-flex ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/dish-3.jpg)'}} />
            <div className="desc pl-3">
              <div className="d-flex text align-items-center">
                <h3><span>Seasonal Soup</span></h3>
                <span className="price">$20.00</span>
              </div>
              <div className="d-block">
                <p>A small river named Duden flows by their place and supplies</p>
              </div>
            </div>
          </div>
          <div className="pricing-entry d-flex ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/dish-4.jpg)'}} />
            <div className="desc pl-3">
              <div className="d-flex text align-items-center">
                <h3><span>Chicken Curry</span></h3>
                <span className="price">$20.00</span>
              </div>
              <div className="d-block">
                <p>A small river named Duden flows by their place and supplies</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-5 pb-3">
          <h3 className="mb-5 heading-pricing ftco-animate">Main Dish</h3>
          <div className="pricing-entry d-flex ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/dish-5.jpg)'}} />
            <div className="desc pl-3">
              <div className="d-flex text align-items-center">
                <h3><span>Sea Trout</span></h3>
                <span className="price">$49.91</span>
              </div>
              <div className="d-block">
                <p>A small river named Duden flows by their place and supplies</p>
              </div>
            </div>
          </div>
          <div className="pricing-entry d-flex ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/dish-6.jpg)'}} />
            <div className="desc pl-3">
              <div className="d-flex text align-items-center">
                <h3><span>Roasted Beef</span></h3>
                <span className="price">$20.00</span>
              </div>
              <div className="d-block">
                <p>A small river named Duden flows by their place and supplies</p>
              </div>
            </div>
          </div>
          <div className="pricing-entry d-flex ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/dish-7.jpg)'}} />
            <div className="desc pl-3">
              <div className="d-flex text align-items-center">
                <h3><span>Butter Fried Chicken</span></h3>
                <span className="price">$20.00</span>
              </div>
              <div className="d-block">
                <p>A small river named Duden flows by their place and supplies</p>
              </div>
            </div>
          </div>
          <div className="pricing-entry d-flex ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/dish-8.jpg)'}} />
            <div className="desc pl-3">
              <div className="d-flex text align-items-center">
                <h3><span>Chiken Filet</span></h3>
                <span className="price">$20.00</span>
              </div>
              <div className="d-block">
                <p>A small river named Duden flows by their place and supplies</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h3 className="mb-5 heading-pricing ftco-animate">Desserts</h3>
          <div className="pricing-entry d-flex ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/dessert-1.jpg)'}} />
            <div className="desc pl-3">
              <div className="d-flex text align-items-center">
                <h3><span>Cornish - Mackerel</span></h3>
                <span className="price">$20.00</span>
              </div>
              <div className="d-block">
                <p>A small river named Duden flows by their place and supplies</p>
              </div>
            </div>
          </div>
          <div className="pricing-entry d-flex ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/dessert-2.jpg)'}} />
            <div className="desc pl-3">
              <div className="d-flex text align-items-center">
                <h3><span>Roasted Steak</span></h3>
                <span className="price">$29.00</span>
              </div>
              <div className="d-block">
                <p>A small river named Duden flows by their place and supplies</p>
              </div>
            </div>
          </div>
          <div className="pricing-entry d-flex ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/dessert-3.jpg)'}} />
            <div className="desc pl-3">
              <div className="d-flex text align-items-center">
                <h3><span>Seasonal Soup</span></h3>
                <span className="price">$20.00</span>
              </div>
              <div className="d-block">
                <p>A small river named Duden flows by their place and supplies</p>
              </div>
            </div>
          </div>
          <div className="pricing-entry d-flex ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/dessert-4.jpg)'}} />
            <div className="desc pl-3">
              <div className="d-flex text align-items-center">
                <h3><span>Chicken Curry</span></h3>
                <span className="price">$20.00</span>
              </div>
              <div className="d-block">
                <p>A small river named Duden flows by their place and supplies</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h3 className="mb-5 heading-pricing ftco-animate">Drinks</h3>
          <div className="pricing-entry d-flex ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/drink-5.jpg)'}} />
            <div className="desc pl-3">
              <div className="d-flex text align-items-center">
                <h3><span>Sea Trout</span></h3>
                <span className="price">$49.91</span>
              </div>
              <div className="d-block">
                <p>A small river named Duden flows by their place and supplies</p>
              </div>
            </div>
          </div>
          <div className="pricing-entry d-flex ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/drink-6.jpg)'}} />
            <div className="desc pl-3">
              <div className="d-flex text align-items-center">
                <h3><span>Roasted Beef</span></h3>
                <span className="price">$20.00</span>
              </div>
              <div className="d-block">
                <p>A small river named Duden flows by their place and supplies</p>
              </div>
            </div>
          </div>
          <div className="pricing-entry d-flex ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/drink-7.jpg)'}} />
            <div className="desc pl-3">
              <div className="d-flex text align-items-center">
                <h3><span>Butter Fried Chicken</span></h3>
                <span className="price">$20.00</span>
              </div>
              <div className="d-block">
                <p>A small river named Duden flows by their place and supplies</p>
              </div>
            </div>
          </div>
          <div className="pricing-entry d-flex ftco-animate">
            <div className="img" style={{backgroundImage: 'url(images/drink-8.jpg)'}} />
            <div className="desc pl-3">
              <div className="d-flex text align-items-center">
                <h3><span>Chiken Filet</span></h3>
                <span className="price">$20.00</span>
              </div>
              <div className="d-block">
                <p>A small river named Duden flows by their place and supplies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-menu mb-5 pb-5">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-md-7 heading-section text-center ftco-animate">
          <span className="subheading">Discover</span>
          <h2 className="mb-4">Our Products</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>
      <div className="row d-md-flex">
        <div className="col-lg-12 ftco-animate p-md-5">
          <div className="row">
            <div className="col-md-12 nav-link-wrap mb-5">
              <div className="nav ftco-animate nav-pills justify-content-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Main Dish</a>
                <a className="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Drinks</a>
                <a className="nav-link" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Desserts</a>
              </div>
            </div>
            <div className="col-md-12 d-flex align-items-center">
              <div className="tab-content ftco-animate" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dish-1.jpg)'}} />
                        <div className="text">
                          <h3><a href="#">Grilled Beef</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dish-2.jpg)'}} />
                        <div className="text">
                          <h3><a href="#">Grilled Beef</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dish-3.jpg)'}} />
                        <div className="text">
                          <h3><a href="#">Grilled Beef</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dish-4.jpg)'}} />
                        <div className="text">
                          <h3><a href="#">Grilled Beef</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dish-5.jpg)'}} />
                        <div className="text">
                          <h3><a href="#">Grilled Beef</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dish-6.jpg)'}} />
                        <div className="text">
                          <h3><a href="#">Grilled Beef</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/drink-1.jpg)'}} />
                        <div className="text">
                          <h3><a href="#">Lemonade Juice</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/drink-2.jpg)'}} />
                        <div className="text">
                          <h3><a href="#">Pineapple Juice</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/drink-3.jpg)'}} />
                        <div className="text">
                          <h3><a href="#">Soda Drinks</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/drink-4.jpg)'}} />
                        <div className="text">
                          <h3><a href="#">Lemonade Juice</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/drink-5.jpg)'}} />
                        <div className="text">
                          <h3><a href="#">Pineapple Juice</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/drink-6.jpg)'}} />
                        <div className="text">
                          <h3><a href="#">Soda Drinks</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dessert-1.jpg)'}} />
                        <div className="text">
                          <h3><a href="#">Hot Cake Honey</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dessert-2.jpg)'}} />
                        <div className="text">
                          <h3><a href="#">Hot Cake Honey</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dessert-3.jpg)'}} />
                        <div className="text">
                          <h3><a href="#">Hot Cake Honey</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dessert-4.jpg)'}} />
                        <div className="text">
                          <h3><a href="#">Hot Cake Honey</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dessert-5.jpg)'}} />
                        <div className="text">
                          <h3><a href="#">Hot Cake Honey</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dessert-6.jpg)'}} />
                        <div className="text">
                          <h3><a href="#">Hot Cake Honey</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="#" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
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
  </section>
  <footer className="ftco-footer ftco-section img">
    <div className="overlay" />
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">About Us</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
              <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
              <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5 mb-md-5">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Recent Blog</h2>
            <div className="block-21 mb-4 d-flex">
              <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_1.jpg)'}} />
              <div className="text">
                <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                <div className="meta">
                  <div><a href="#"><span className="icon-calendar" /> Sept 15, 2018</a></div>
                  <div><a href="#"><span className="icon-person" /> Admin</a></div>
                  <div><a href="#"><span className="icon-chat" /> 19</a></div>
                </div>
              </div>
            </div>
            <div className="block-21 mb-4 d-flex">
              <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_2.jpg)'}} />
              <div className="text">
                <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                <div className="meta">
                  <div><a href="#"><span className="icon-calendar" /> Sept 15, 2018</a></div>
                  <div><a href="#"><span className="icon-person" /> Admin</a></div>
                  <div><a href="#"><span className="icon-chat" /> 19</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 mb-5 mb-md-5">
          <div className="ftco-footer-widget mb-4 ml-md-4">
            <h2 className="ftco-heading-2">Services</h2>
            <ul className="list-unstyled">
              <li><a href="#" className="py-2 d-block">Cooked</a></li>
              <li><a href="#" className="py-2 d-block">Deliver</a></li>
              <li><a href="#" className="py-2 d-block">Quality Foods</a></li>
              <li><a href="#" className="py-2 d-block">Mixed</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
        </div>
      </div>
    </div>
  </footer>
</React.Fragment>

        );
    }
}

export default Menu;