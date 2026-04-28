import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import ProductDetailsSlider from "@/src/components/ProductDetailsSlider";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const ProductDetails = () => {
  const [cart, setCart] = useState(1);
  return (
    <Layout>
      <PageBanner
        pageName={"Product Details"}
        description={"LawnLift digital product details for lawn business growth."}
      />
      {/*====== Start Shop Details Section ======*/}
      <section className="shop-details-section pt-100 pb-60">
        <div className="container">
          <div className="product-details-wrapper">
            <div className="row align-items-xl-center">
              <div className="col-lg-6">
                {/*=== Product Gallery ===*/}
                <ProductDetailsSlider />
              </div>
              <div className="col-lg-6">
                <div className="product-info mb-50 pl-lg-70 wow fadeInRight">
                  <h4 className="title">
                    LawnLift Starter Website Kit
                  </h4>
                  <ul className="ratings">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <a href="#">4.9(Customer Reviews)</a>
                    </li>
                  </ul>
                  <span className="price">
                    <span className="currency">$</span>149.00
                  </span>
                  <p>
                    This starter kit includes a responsive lawn business homepage, core service sections,
                    contact form setup, and conversion-focused content structure.
                  </p>
                  <p>
                    Perfect for lawn care businesses that need a professional online presence quickly.
                  </p>
                  <div className="product-cart mt-20 mb-30">
                    <ul>
                      <li>
                        <div className="quantity-input">
                          <button
                            className="quantity-down"
                            onClick={() =>
                              setCart(cart === 1 ? cart : cart - 1)
                            }
                          >
                            <i className="far fa-minus" />
                          </button>
                          <input
                            className="quantity"
                            type="text"
                            value={cart}
                            name="quantity"
                          />
                          <button
                            className="quantity-up"
                            onClick={() => setCart(cart + 1)}
                          >
                            <i className="far fa-plus" />
                          </button>
                        </div>
                      </li>
                      <li>
                        <button className="main-btn primary-btn">
                          Add to cart
                        </button>
                      </li>
                    </ul>
                  </div>
                  <ul className="product-meta pb-35 mb-40">
                    <li>
                      <span>Categories</span>
                      <a href="#">Website Templates</a>
                    </li>
                    <li>
                      <span>Tags</span>
                      <a href="#">LawnLift, SEO, Leads</a>
                    </li>
                  </ul>
                  <ul className="social-link">
                    <li>
                      <span>Share</span>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="description-wrapper mt-30">
                  <Tab.Container defaultActiveKey={"descrptions"}>
                    <div className="description-tabs mb-30 wow fadeInUp">
                      <Nav as={"ul"} className="nav">
                        <li className="nav-item">
                          <Nav.Link
                            as={"a"}
                            className="nav-link c-pointer"
                            data-toggle="tab"
                            eventKey="descrptions"
                          >
                            Description
                          </Nav.Link>
                        </li>
                        <li className="nav-item">
                          <Nav.Link
                            as={"a"}
                            className="nav-link c-pointer"
                            data-toggle="tab"
                            eventKey="information"
                          >
                            Additional Information
                          </Nav.Link>
                        </li>
                        <li className="nav-item">
                          <Nav.Link
                            as={"a"}
                            className="nav-link c-pointer"
                            data-toggle="tab"
                            eventKey="reviews"
                          >
                            Reviews (2)
                          </Nav.Link>
                        </li>
                      </Nav>
                    </div>
                    <Tab.Content className="tab-content wow fadeInUp">
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="descrptions"
                      >
                        <div className="content-box">
                          <p>
                            LawnLift products are designed for lawn service owners who want more leads,
                            better conversion rates, and a faster digital setup. Every product includes
                            practical assets built for real local service businesses.
                          </p>
                          <p>
                            We focus on clear messaging, booking-ready layouts, and local search visibility
                            so your website can support long-term growth.
                          </p>
                          <ul className="check-style-one">
                            <li>
                              <i className="far fa-check" />
                              Conversion-first website structure
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Lawn niche content and layout strategy
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Built for SEO and lead generation
                            </li>
                          </ul>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="information"
                      >
                        <div className="content-box">
                          <p>
                            Delivery includes responsive page structure, editable content blocks, CTA
                            placement, and conversion-ready section flow.
                          </p>
                          <p>
                            Product setup can be expanded with optional booking tools, local SEO, and
                            Google Business optimization services.
                          </p>
                          <ul className="check-style-one">
                            <li>
                              <i className="far fa-check" />
                              Mobile-optimized design
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Fast-loading page setup
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Scalable for paid ad traffic
                            </li>
                          </ul>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane className="tab-pane" eventKey="reviews">
                        <div className="content-box">
                          <p>
                            Lawn business owners report improved trust and higher inquiry rates after
                            upgrading from generic templates to LawnLift pages.
                          </p>
                          <p>
                            Use this kit as your foundation, then add booking workflows and SEO for
                            compounding monthly growth.
                          </p>
                          <ul className="check-style-one">
                            <li>
                              <i className="far fa-check" />
                              Better local conversion flow
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Stronger trust positioning
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Flexible upgrade options
                            </li>
                          </ul>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                  {/*=== Review Form ===*/}
                  <div className="review-form-area wow fadeInUp mt-50 mb-40">
                    <h3 className="title">Leave Your Reviews</h3>
                    <p>
                      We have 3k+ 5star Reviews
                      <img src="assets/images/products/rate.png" alt />
                    </p>
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="review-form"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form_group">
                            <input
                              type="text"
                              className="form_control"
                              placeholder="Full Name"
                              name="name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form_group">
                            <input
                              type="text"
                              className="form_control"
                              placeholder="Email Address"
                              name="email"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form_group">
                            <input
                              type="url"
                              className="form_control"
                              placeholder="Website"
                              name="website"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form_group">
                            <textarea
                              name="message"
                              className="form_control"
                              placeholder="Write Message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form_group">
                            <button className="main-btn primary-btn">
                              Send Reviews
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="sidebar-widget-area mt-30">
                  {/*=== Banner Widget ===*/}
                  <div className="sidebar-widget widget-banner mb-40 wow fadeInUp">
                    <div className="banner-content text-white">
                      <h3 className="title">Looking For Special Gardener!</h3>
                      <p>You’re in right place</p>
                      <Link legacyBehavior href="/contact">
                        <a className="main-btn secondary-btn">Contact Us</a>
                      </Link>
                      <img
                        src="assets/images/sidebar/b-w-1.png"
                        alt="Banner Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Shop Details Section ======*/}
      <section className="recent-product-section pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-50">
                <h2>Related Products</h2>
              </div>
            </div>
          </div>
          <Slider
            {...sliderProps.recentProductSlider}
            className="recent-product-slider wow fadeInUp"
          >
            {/*====== Single Product Item ======*/}
            <div className="single-product-item mb-30 wow fadeInUp">
              <div className="discount">10% OFF</div>
              <div className="product-image">
                <img
                  src="assets/images/products/pr-1.jpg"
                  alt="Products Image"
                />
              </div>
              <div className="product-info">
                <h4>
                  <Link legacyBehavior href="/product-details">
                    <a>Narcissus Flower Watering Can Arrangement</a>
                  </Link>
                </h4>
                <span className="price">
                  <span className="currency">$</span>256.00
                </span>
              </div>
            </div>
            {/*====== Single Product Item ======*/}
            <div className="single-product-item mb-30 wow fadeInUp">
              <div className="product-image">
                <img
                  src="assets/images/products/pr-2.jpg"
                  alt="Products Image"
                />
              </div>
              <div className="product-info">
                <h4>
                  <Link legacyBehavior href="/product-details">
                    <a>Narcissus Flower Watering Can Arrangement</a>
                  </Link>
                </h4>
                <span className="price">
                  <span className="currency">$</span>256.00
                </span>
              </div>
            </div>
            {/*====== Single Product Item ======*/}
            <div className="single-product-item mb-30 wow fadeInUp">
              <div className="product-image">
                <img
                  src="assets/images/products/pr-3.jpg"
                  alt="Products Image"
                />
              </div>
              <div className="product-info">
                <h4>
                  <Link legacyBehavior href="/product-details">
                    <a>Gardening Tools and Flower Pot</a>
                  </Link>
                </h4>
                <span className="price">
                  <span className="currency">$</span>256.00
                </span>
              </div>
            </div>
            {/*====== Single Product Item ======*/}
            <div className="single-product-item mb-30 wow fadeInUp">
              <div className="discount">10% OFF</div>
              <div className="product-image">
                <img
                  src="assets/images/products/pr-4.jpg"
                  alt="Products Image"
                />
              </div>
              <div className="product-info">
                <h4>
                  <Link legacyBehavior href="/product-details">
                    <a>Bucket with Grass and One Water Can</a>
                  </Link>
                </h4>
                <span className="price">
                  <span className="currency">$</span>256.00
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <Partners />
    </Layout>
  );
};
export default ProductDetails;
