import Counter from "@/src/components/Counter";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const Index3 = () => {
  return (
    <Layout header={3} footer={3}>
      {/*====== Start Banner Section ======*/}
      <section className="banner-section">
        {/*====== Hero Wrapper ======*/}
        <div className="hero-wrapper-three">
          <div className="hero-waves">
            <img src="assets/images/hero/bg-2.png" className="waves one" alt />
            <img src="assets/images/hero/bg.png" className="waves two" alt />
          </div>
          {/*====== Hero Slider ======*/}
          <Slider {...sliderProps.heroSliderTwo} className="hero-slider-two">
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_two-slider-1.jpg)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content text-center">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Lawn Care Website Redesign Experts
                      </span>

                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Upgrade Your Lawn Website for More Clients                      </h1>

                      <p data-animation="fadeInUp" data-delay=".6s">
                        At LawnLift Studio, we redesign lawn care and mowing websites to improve design, speed, and conversions — helping you get more calls, leads, and bookings without changing your business.
                      </p>

                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      >
                        <Link legacyBehavior href="/contact">
                          <a className="main-btn primary-btn mb-10">
                            Get Free Website Audit →
                          </a>
                        </Link>

                        <Link legacyBehavior href="/portfolio">
                          <a className="main-btn filled-btn filled-white mb-10 shmai">
                            View Before & After Results
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_two-slider-3.jpg)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content text-center">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Helping Lawn Businesses Grow Online
                      </span>

                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Fix Your Website. Get More Calls & Leads.
                      </h1>

                      <p data-animation="fadeInUp" data-delay=".6s">
                        We improve your existing lawn care website with modern design, faster speed, and better user experience — so your visitors turn into real customers.
                      </p>

                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      >
                        <Link legacyBehavior href="/contact">
                          <a className="main-btn primary-btn mb-10">
                            Request Free Redesign Plan →
                          </a>
                        </Link>

                        <Link legacyBehavior href="/portfolio">
                          <a className="main-btn filled-btn filled-white mb-10 shmai">
                            See Our Work
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Banner Section ======*/}
      {/*====== Start Features Section ======*/}
    
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-bg-section">

  <div
    className="about-bg bg_cover wow fadeInLeft"
    style={{ backgroundImage: "url(assets/images/products/build.jpg)" }}
  />
  <div className="container">
    <div className="row align-items-center justify-content-end">
      <div className="col-lg-6">
        {/*====== About Content Box ======*/}
        <div className="about-two_content-box pb-80 wow fadeInRight">
          <div className="section-title">
            <div className="section-title mb-50">
              <span className="sub-title">
                <i className="flaticon-plant" />
                Who We Are
              </span>
              <h2>We Build Websites for Lawn Care Businesses</h2>
            </div>
            <p className="mb-45">
              We specialize in creating professional websites for lawn mowing, landscaping, and gardening businesses. 
              From custom designs and online booking systems to SEO and Google Business management, 
              we help lawn care companies attract more customers and grow their business online. 
              Get a high-performing website that converts visitors into paying clients.
            </p>
            <div className="about-inner-content d-flex justify-content-between">
              <div className="inner-content">
                <ul className="check-style-one mb-45">
                  <li>
                    <i className="far fa-check" />
                    100+ Lawn Care Websites Built
                  </li>
                  <li>
                    <i className="far fa-check" />
                    5 Star Rated Web Solutions
                  </li>
                </ul>
                <Link legacyBehavior href="/about">
                  <a className="main-btn primary-btn">Learn More Us</a>
                </Link>
              </div>
              <div className="experience-box-two">
                <h2 className="number">
                  <Counter end={15} />+
                </h2>
                <h6>Years Of Experience</h6>
                <Link legacyBehavior href="/about">
                  <a className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/*====== End About Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="service-bgc-section p-r z-1 main-bg pt-150 pb-70">
        <div className="shape shape-one">
          <span>
            <img src="assets/images/shape/leaf-1.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/shape/leaf-2.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="shape shape-three">
          <span>
            <img src="assets/images/shape/leaf-3.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-12">
              {/*====== Section Title ======*/}
              <div className="section-title text-white text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Popular Services
                </span>
                <h2>We Care Your Garden &amp; Landscape</h2>
              </div>
            </div>
          </div>
          <div className="row">
  <div className="col-xl-4 col-lg-6 col-sm-12">
    <div className="single-service-item mb-30 wow fadeInUp" data-wow-delay=".2s">
      <div className="service-info">
        <div className="shape icon-shape">
          <i className="flaticon-agriculture" />
        </div>
        <div className="icon">
          <i className="flaticon-agriculture" />
        </div>
        <h4 className="title">
          <Link legacyBehavior href="/service/custom-lawn-websites">
            <a>Custom Lawn Websites</a>
          </Link>
        </h4>
        <p>Professional responsive websites for lawn mowing and landscaping businesses that attract more customers online.</p>
      </div>
    </div>
  </div>

  <div className="col-xl-4 col-lg-6 col-sm-12">
    <div className="single-service-item mb-30 wow fadeInDown" data-wow-delay=".25s">
      <div className="service-info">
        <div className="shape icon-shape">
          <i className="flaticon-field-1" />
        </div>
        <div className="icon">
          <i className="flaticon-field-1" />
        </div>
        <h4 className="title">
          <Link legacyBehavior href="/service/booking-payment">
            <a>Booking & Payment</a>
          </Link>
        </h4>
        <p>Easy online booking and payment integration so customers can schedule and pay for lawn services directly.</p>
      </div>
    </div>
  </div>

  <div className="col-xl-4 col-lg-6 col-sm-12">
    <div className="single-service-item mb-30 wow fadeInUp" data-wow-delay=".3s">
      <div className="service-info">
        <div className="shape icon-shape">
          <i className="flaticon-farming" />
        </div>
        <div className="icon">
          <i className="flaticon-farming" />
        </div>
        <h4 className="title">
          <Link legacyBehavior href="/service/lawn-business-seo">
            <a>Lawn Business SEO</a>
          </Link>
        </h4>
        <p>Rank higher on Google and get more local customers searching for lawn mowing and yard care services.</p>
      </div>
    </div>
  </div>

  <div className="col-xl-4 col-lg-6 col-sm-12">
    <div className="single-service-item mb-30 wow fadeInDown" data-wow-delay=".35s">
      <div className="service-info">
        <div className="shape icon-shape">
          <i className="flaticon-park" />
        </div>
        <div className="icon">
          <i className="flaticon-park" />
        </div>
        <h4 className="title">
          <Link legacyBehavior href="/service/google-business">
            <a>Google Business</a>
          </Link>
        </h4>
        <p>Optimize your Google Business Profile to appear in local searches and attract nearby lawn care customers.</p>
      </div>
    </div>
  </div>

  <div className="col-xl-4 col-lg-6 col-sm-12">
    <div className="single-service-item mb-30 wow fadeInUp" data-wow-delay=".4s">
      <div className="service-info">
        <div className="shape icon-shape">
          <i className="flaticon-rake" />
        </div>
        <div className="icon">
          <i className="flaticon-rake" />
        </div>
        <h4 className="title">
          <Link legacyBehavior href="/service/maintenance-support">
            <a>Maintenance & Support</a>
          </Link>
        </h4>
        <p>Regular updates security backups and support to keep your lawn business website running smoothly.</p>
      </div>
    </div>
  </div>

  <div className="col-xl-4 col-lg-6 col-sm-12">
    <div className="single-service-item mb-30 wow fadeInDown" data-wow-delay=".45s">
      <div className="service-info">
        <div className="shape icon-shape">
          <i className="flaticon-growth-1" />
        </div>
        <div className="icon">
          <i className="flaticon-growth-1" />
        </div>
        <h4 className="title">
          <Link legacyBehavior href="/service/crm-for-lawn-care">
            <a>CRM for Lawn Care</a>
          </Link>
        </h4>
        <p>Contact forms WhatsApp buttons and CTAs that convert visitors into paying lawn care customers automatically.</p>
      </div>
    </div>
  </div>
</div>
        </div>
      </section>
        <section className="features-section pt-95">
  <div className="container">
    <div className="row align-items-xl-center">
      <div className="col-lg-6">
        <div className="section-title mb-55 wow fadeInLeft">
          <span className="sub-title">
            <i className="flaticon-plant" />
            Why Choose Us
          </span>
          <h2>We Help Lawn Care Businesses Go Digital</h2>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="features-content-box mb-55 wow fadeInRight">
          <p>
            Stop losing customers to competitors with better websites. We create digital solutions that help lawn mowing and landscaping businesses get found online, book more jobs, and grow faster.
          </p>
          <Link legacyBehavior href="/about">
            <a className="btn-link">
              Learn More
              <i className="far fa-angle-double-right" />
            </a>
          </Link>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-3 col-md-6 col-sm-12">
        <div
          className="features-thumb-item-two mb-40 wow fadeInDown"
          data-wow-delay=".2s"
        >
          <div className="thumb">
            <img
              src="assets/images/products/google.jpg"
              alt="Image"
            />
          </div>
          <div className="text hyu">
            <div className="icon">
              <i className="flaticon-landscape-1" />
            </div>
            <h5 className="title">Google Reach</h5>
            <p>Appear at the top when customers search for lawn mowing near you and beat local competitors.</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 col-sm-12">
        <div
          className="features-thumb-item-two mb-40 wow fadeInUp"
          data-wow-delay=".25s"
        >
          <div className="thumb">
            <img
              src="assets/images/products/booking.png"
              alt="Image"
            />
          </div>
          <div className="text hyu">
            <div className="icon">
              <i className="flaticon-watering-can" />
            </div>
            <h5 className="title">Book Jobs 24/7</h5>
            <p>Customers can schedule and pay for lawn services anytime, even when you're sleeping or on a job.</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 col-sm-12">
        <div
          className="features-thumb-item-two mb-40 wow fadeInDown"
          data-wow-delay=".3s"
        >
          <div className="thumb">
            <img
              src="assets/images/products/after.jpg"
              alt="Image"
            />
          </div>
          <div className="text hyu">
            <div className="icon">
              <i className="flaticon-lawnmower" />
            </div>
            <h5 className="title">Work Showcase</h5>
            <p>Display before/after photos of lawns and gardens to build trust and win more customers.</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 col-sm-12">
        <div
          className="features-thumb-item-two mb-40 wow fadeInUp"
          data-wow-delay=".35s"
        >
          <div className="thumb">
            <img
              src="assets/images/products/images.jpg"
              alt="Image"
            />
          </div>
          <div className="text hyu">
            <div className="icon">
              <i className="flaticon-spider-plant" />
            </div>
            <h5 className="title">Grow Your Business</h5>
            <p>Get more leads, more bookings, and more repeat customers with a website that works for you.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/*====== End Service Section ======*/}
      {/*====== Start Skills Section  ======*/}
      <section className="skills-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-lg-center">
            <div className="col-xl-6 col-lg-12">
              {/*====== Skill Content Box ======*/}
              <div className="skill-content-box mb-35 mr-lg-50 wow fadeInLeft">
                {/*====== Section-title ======*/}
                <div className="section-title mb-25">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    We're Skilled Full
                  </span>
                  <h2>Experience Gardening & Landscape Center</h2>
                </div>
                <p className="mb-30">
                  We offer professional gardening and landscaping solutions with skilled experts who care for your lawn, plants, and outdoor spaces. From regular garden maintenance and pruning to complete landscape design and seasonal planting, our team delivers quality results with eco-friendly methods and affordable rates.
                </p>
                {/*====== Skills List ======*/}
                <ul className="skills-list">
                  <li>
                    <div className="single-skill-bar mb-15">
                      <h5 className="title">Gardening</h5>
                      <div className="progress-bar">
                        <div
                          className="progress wow slideInLeft"
                          style={{ width: "89%" }}
                        />
                      </div>
                      <span className="number">89%</span>
                    </div>
                  </li>
                  <li>
                    <div className="single-skill-bar mb-15">
                      <h5 className="title">Landscape</h5>
                      <div className="progress-bar">
                        <div
                          className="progress wow slideInLeft"
                          style={{ width: "83%" }}
                        />
                      </div>
                      <span className="number">83%</span>
                    </div>
                  </li>
                  <li>
                    <div className="single-skill-bar mb-15">
                      <h5 className="title">Maintenance</h5>
                      <div className="progress-bar">
                        <div
                          className="progress wow slideInLeft"
                          style={{ width: "93%" }}
                        />
                      </div>
                      <span className="number">93%</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*====== Skills Image Box ======*/}
              <div className="skill-two_image-box mb-20 p-r z-1 wow fadeInRight">
                <img
                  src="assets/images/skill/skill-4.jpg"
                  className="skill-img-one"
                  alt="Skill Image"
                />
                <img
                  src="assets/images/skill/skill-5.jpg"
                  className="skill-img-two"
                  alt="Skill Image"
                />
                <div className="circle-logo">
                  <div className="inner-circle">
                    <i className="flaticon-carnivorous-plant" />
                    <h5>Shmai</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Skills Section  ======*/}
      {/*====== Start CTA Section ======*/}
      <section className="cta-section">
        <div className="container">
          {/*====== CTA Wrapper ======*/}
          <div className="cta-wrapper pt-60 border-top-1">
            <div className="row align-items-center">
              <div className="col-lg-9">
                {/*====== CTA Content Box ======*/}
                <div className="cta-content-box d-flex align-items-center mb-40 wow fadeInLeft">
                  <img
                    src="assets/images/gallery/circle-logo.png"
                    className="circle-logo"
                    alt="Circle Logo"
                  />
                  <h2>Looking For a Lawn Care Website Expert?</h2>
                </div>
              </div>
              <div className="col-lg-3">
                {/*====== CTA Button ======*/}
                <div className="cta-button float-lg-right mb-40 wow fadeInRight">
                  <Link legacyBehavior href="/portfolio">
                    <a className="main-btn secondary-btn">View Our Work</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <section className="gallery-section">
        <div className="container-fluid">
          {/*====== Gallery Slider ======*/}
          <Slider
            {...sliderProps.projectsSliderTwo}
            className="projects-slider-two wow fadeInDown"
          >
            {/*====== Project Item ======*/}
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/products/project3.png" alt="Gallery Image" />

                <div className="project-overlay">
                  <a href="#" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                  <div className="hover-content text-white text-center">
                    <h3 className="title">
                      <Link legacyBehavior href="/portfolio">
                        <a>Garden Caring</a>
                      </Link>
                    </h3>
                    <p>Water The Plants</p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/products/project2.png" alt="Gallery Image" />

                <div className="project-overlay">
                  <a href="#" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                  <div className="hover-content text-white text-center">
                    <h3 className="title">
                      <Link legacyBehavior href="/portfolio">
                        <a>Garden Caring</a>
                      </Link>
                    </h3>
                    <p>Water The Plants</p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/products/project4.png" alt="Gallery Image" />

                <div className="project-overlay">
                  <a href="#" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                  <div className="hover-content text-white text-center">
                    <h3 className="title">
                      <Link legacyBehavior href="/portfolio">
                        <a>Garden Caring</a>
                      </Link>
                    </h3>
                    <p>Water The Plants</p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/products/project5.png" alt="Gallery Image" />

                <div className="project-overlay">
                  <a href="#" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                  <div className="hover-content text-white text-center">
                    <h3 className="title">
                      <Link legacyBehavior href="/portfolio">
                        <a>Garden Caring</a>
                      </Link>
                    </h3>
                    <p>Water The Plants</p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/products/project6.png" alt="Gallery Image" />

                <div className="project-overlay">
                  <a href="#" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                  <div className="hover-content text-white text-center">
                    <h3 className="title">
                      <Link legacyBehavior href="/portfolio">
                        <a>Garden Caring</a>
                      </Link>
                    </h3>
                    <p>Water The Plants</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Gallery Section ======*/}
      {/*====== Start Pricing Section ======*/}
     
      {/*====== End Pricing Section ======*/}
      {/*====== Start Testimonial Section  ======*/}
      <section className="testimonial-section pt-5">
  <div className="container-fluid">
    {/*====== Testimonial Wrapper ======*/}
    <div className="testimonial-wrapper main-bg wow fadeInDown">
      <div className="shape shape-one">
        <span>
          <img src="assets/images/testimonial/img-1.jpg" alt="image" />
        </span>
      </div>
      <div className="shape shape-two">
        <span>
          <img src="assets/images/testimonial/img-2.jpg" alt="image" />
        </span>
      </div>
      <div className="shape shape-three">
        <span>
          <img src="assets/images/testimonial/img-3.jpg" alt="image" />
        </span>
      </div>
      <div className="shape shape-four">
        <span>
          <img src="assets/images/testimonial/tree.png" alt="Tree image" />
        </span>
      </div>
      <div className="shape shape-five">
        <span>
          <img src="assets/images/testimonial/tree2.png" alt="Tree image" />
        </span>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            {/*====== Testimonial Slider  ======*/}
            <Slider
              {...sliderProps.testimonialSliderTwo}
              className="testimonial-slider-two"
            >
              {/*====== Single Testimonial Item 1 ======*/}
              <div className="single-testimonial-item-two">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote2.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h3>Great Website Design</h3>
                    <ul className="ratings">
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                    </ul>
                  </div>
                </div>
                <p>
                  Their team built a stunning website for my lawn care business. Now I get daily booking requests online. Best investment I ever made for my company!
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="assets/images/testimonial/thumb-1.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h6 className="title">Michael R. Green</h6>
                    <p className="position">Green Lawn Care Owner</p>
                  </div>
                </div>
              </div>
              {/*====== Single Testimonial Item 2 ======*/}
              <div className="single-testimonial-item-two mb-60">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote2.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h3>SEO Results Fast</h3>
                    <ul className="ratings">
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                    </ul>
                  </div>
                </div>
                <p>
                  My lawn mowing website now ranks #1 on Google. Calls and messages haven't stopped coming in. Their SEO work is absolutely incredible.
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="assets/images/testimonial/thumb-1.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h6 className="title">Sarah J. Martinez</h6>
                    <p className="position">Martinez Landscaping</p>
                  </div>
                </div>
              </div>
              {/*====== Single Testimonial Item 3 ======*/}
              <div className="single-testimonial-item-two mb-60">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote2.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h3>Amazing Support</h3>
                    <ul className="ratings">
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                    </ul>
                  </div>
                </div>
                <p>
                  The online booking system they set up saved me hours of phone calls. My customers love how easy it is to schedule lawn services now.
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="assets/images/testimonial/thumb-1.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h6 className="title">David T. Wilson</h6>
                    <p className="position">Wilson Lawn & Garden</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/*====== End Testimonial Section  ======*/}
      {/*====== Start Blog Section  ======*/}
      <section className="blog-section pt-100 pb-60">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-7 col-lg-12">
        <div className="section-title text-center mb-50 wow fadeInDown">
          <span className="sub-title">
            <i className="flaticon-plant" />
            Resources &amp; Guides
          </span>
          <h2>Read Latest Web Tips For Lawn Businesses</h2>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-xl-4 col-md-6 col-sm-12">
        {/*====== Single Blog Post 1 ======*/}
        <div
          className="single-blog-post-two mb-40 wow fadeInUp"
          data-wow-delay=".2s"
        >
          <div className="entry-content">
            <div className="post-meta">
              <span className="date">
                <Link legacyBehavior href="/blog-details">
                  <a>15 January 2024</a>
                </Link>
              </span>
              <span className="comment">
                <Link legacyBehavior href="/blog-details">
                  <a>12 Comments</a>
                </Link>
              </span>
            </div>
            <h4 className="entry-title">
              <Link legacyBehavior href="/blog-details">
                <a>How to Get More Lawn Care Customers Online</a>
              </Link>
            </h4>
            <div className="author">
              <img
                src="assets/images/blog/author-thumb-4.jpg"
                alt="Author Image"
              />
              <h6>
                <span>By</span>
                <Link legacyBehavior href="/blog/how-to-get-more-lawn-care-customers-online">
                  <a>Michael</a>
                </Link>
              </h6>
            </div>
          </div>
          <div className="post-thumbnail">
            <img
              src="assets/images/blog/blog-4.jpg"
              alt="Post Thumbnail"
            />
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6 col-sm-12">
        {/*====== Single Blog Post 2 ======*/}
        <div
          className="single-blog-post-two mb-40 wow fadeInDown"
          data-wow-delay=".25s"
        >
          <div className="entry-content">
            <div className="post-meta">
              <span className="date">
                <Link legacyBehavior href="/blog/why-your-lawn-business-needs-online-booking">
                  <a>05 February 2024</a>
                </Link>
              </span>
              <span className="comment">
                <Link legacyBehavior href="/blog/why-your-lawn-business-needs-online-booking">
                  <a>8 Comments</a>
                </Link>
              </span>
            </div>
            <h4 className="entry-title">
              <Link legacyBehavior href="/blog/why-your-lawn-business-needs-online-booking">
                <a>Why Your Lawn Business Needs Online Booking</a>
              </Link>
            </h4>
            <div className="author">
              <img
                src="assets/images/blog/author-thumb-5.jpg"
                alt="Author Image"
              />
              <h6>
                <span>By</span>
                <Link legacyBehavior href="/blog/why-your-lawn-business-needs-online-booking">
                  <a>Sarah</a>
                </Link>
              </h6>
            </div>
          </div>
          <div className="post-thumbnail">
            <img
              src="assets/images/blog/blog-5.jpg"
              alt="Post Thumbnail"
            />
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6 col-sm-12">
        {/*====== Single Blog Post 3 ======*/}
        <div
          className="single-blog-post-two mb-40 wow fadeInUp"
          data-wow-delay=".3s"
        >
          <div className="entry-content">
            <div className="post-meta">
              <span className="date">
                <Link legacyBehavior href="/blog/top-seo-tips-for-lawn-mowing-companies">
                  <a>20 March 2024</a>
                </Link>
              </span>
              <span className="comment">
                <Link legacyBehavior href="/blog/top-seo-tips-for-lawn-mowing-companies">
                  <a>15 Comments</a>
                </Link>
              </span>
            </div>
            <h4 className="entry-title">
              <Link legacyBehavior href="/blog/top-seo-tips-for-lawn-mowing-companies">
                <a>Top SEO Tips for Lawn Mowing Companies</a>
              </Link>
            </h4>
            <div className="author">
              <img
                src="assets/images/blog/author-thumb-6.jpg"
                alt="Author Image"
              />
              <h6>
                <span>By</span>
                <Link legacyBehavior href="/blog/top-seo-tips-for-lawn-mowing-companies">
                  <a>David</a>
                </Link>
              </h6>
            </div>
          </div>
          <div className="post-thumbnail">
            <img
              src="assets/images/blog/blog-6.jpg"
              alt="Post Thumbnail"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/*====== End Blog Section  ======*/}
      {/*====== Start Partners Section ======*/}
      <Partners />
      {/*====== End Partners Section ======*/}
    </Layout>
  );
};
export default Index3;
