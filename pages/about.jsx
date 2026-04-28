import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"About"} />
      <section className="about-section pt-95 pb-100">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        {/*====== Section-title ======*/}
        <div className="section-title mb-50 wow fadeInLeft">
          <span className="sub-title">
            <i className="flaticon-plant" />
            About Our Agency
          </span>
          <h2>We Build Websites That Grow Lawn Businesses</h2>
        </div>
      </div>
      <div className="col-lg-6">
        {/*====== About Content Box ======*/}
        <div className="about-content-box mb-50 wow fadeInRight">
          <p className="mb-30">
            We help lawn mowing and landscaping businesses get more customers online with professional websites, SEO, and booking systems.
          </p>
          <ul className="check-style-one mb-40">
            <li>
              <i className="far fa-check" />
              100+ Lawn Care Websites Delivered
            </li>
            <li>
              <i className="far fa-check" />
              5 Star Rated &amp; Trusted Web Experts
            </li>
          </ul>
          <div className="about-button">
            <Link legacyBehavior href="/about">
              <a className="main-btn secondary-btn">Learn More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="about-img-item mb-30 wow fadeInUp">
          <img src="assets/images/products/ourmis.jpg" alt="About Image" />
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="about-img-item mb-30 wow fadeInDown">
          <img src="assets/images/products/build.jpg" alt="About Image" />
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="about-img-item mb-30 wow fadeInUp">
          <img src="assets/images/products/keyworf.jpg" alt="About Image" />
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="about-wrapper-two gray-bg mt-minus-110 p-r wow fadeInDown">
          <div className="row no-gutters justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="about-features-item text-center">
                <div
                  className="hover-bg bg_cover"
                  style={{
                    backgroundImage: "url(assets/images/about/hover-bg.jpg)",
                  }}
                />
                <div className="icon">
                  <i className="flaticon-target" />
                </div>
                <div className="text">
                  <h3 className="title">Our Mission</h3>
                  <p>
                    To help lawn care businesses grow online with high-quality websites that attract more customers and generate leads.
                  </p>
                  <Link legacyBehavior href="/about">
                    <a className="btn-link">
                      Read More
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="about-features-item item-active text-center">
                <div
                  className="hover-bg bg_cover"
                  style={{
                    backgroundImage: "url(assets/images/about/hover-bg.jpg)",
                  }}
                />
                <div className="icon">
                  <i className="flaticon-vision" />
                </div>
                <div className="text">
                  <h3 className="title">Our Vision</h3>
                  <p>
                    To become the #1 web development agency for lawn mowing and landscaping businesses worldwide.
                  </p>
                  <Link legacyBehavior href="/about">
                    <a className="btn-link">
                      Read More
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="about-features-item text-center">
                <div
                  className="hover-bg bg_cover"
                  style={{
                    backgroundImage: "url(assets/images/about/hover-bg.jpg)",
                  }}
                />
                <div className="icon">
                  <i className="flaticon-management" />
                </div>
                <div className="text">
                  <h3 className="title">Our Goals</h3>
                  <p>
                    Deliver 500+ lawn care websites and help every client rank #1 on Google for local searches.
                  </p>
                  <Link legacyBehavior href="/about">
                    <a className="btn-link">
                      Read More
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/*====== End About Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section p-r z-1 pb-100">
  <div className="features-wrapper">
    <div
      className="features-bg bg_cover"
      style={{
        backgroundImage: "url(assets/images/products/after.jpg)",
      }}
    />
    <div className="features-bgc-content-box main-bg text-white wow fadeInRight">
      <div className="features-content-box">
        {/*====== Section-title ======*/}
        <div className="section-title mb-50 wow fadeInUp">
          <span className="sub-title">
            <i className="flaticon-plant" />
            Digital Solutions
          </span>
          <h2>We Offer Websites &amp; SEO for Lawn Pros</h2>
        </div>
        <p className="mb-40">
          We provide custom website design and local SEO services that help lawn mowing and landscaping businesses get found online, book more jobs, and grow faster than ever.
        </p>
        <div className="single-features-item mb-30 wow fadeInDown">
          <div className="icon">
            <i className="flaticon-pruning-shears" />
            <span className="shape-circle" />
          </div>
          <div className="text">
            <h5 className="title">Custom Website Design &amp; Expert Team</h5>
            <p>
              Our experienced web developers create stunning, mobile-friendly websites specifically for lawn care and landscaping businesses.
            </p>
          </div>
        </div>
        <div className="single-features-item mb-30 wow fadeInUp">
          <div className="icon">
            <i className="flaticon-gardening-1" />
            <span className="shape-circle" />
          </div>
          <div className="text">
            <h5 className="title">Local SEO &amp; Google Business</h5>
            <p>
              We optimize your online presence so customers find you when searching for lawn mowing and landscaping services near them.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/*====== End Features Section ======*/}
      {/*====== Start Team Section ======*/}
      <section className="team-section pt-95">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-12">
              {/*====== Section-title ======*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Team Member
                </span>
                <h2>Meet Our Expert Gardener</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-team-item mb-50 wow fadeInLeft">
                <div className="member-img">
                  <img src="assets/images/team/team-1.jpg" alt="Team Image" />
                  <div className="icon-btn">
                    <i className="far fa-plus" />
                  </div>
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/single-team">
                      Benjamin S. Hughes
                    </Link>
                  </h3>
                  <p>Senior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-team-item mb-50 wow fadeInDown">
                <div className="member-img">
                  <img src="assets/images/team/team-2.jpg" alt="Team Image" />
                  <div className="icon-btn">
                    <i className="far fa-plus" />
                  </div>
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/single-team">
                      Michael K. Greenwalds
                    </Link>
                  </h3>
                  <p>Senior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-team-item mb-50 wow fadeInRight">
                <div className="member-img">
                  <img src="assets/images/team/team-3.jpg" alt="Team Image" />
                  <div className="icon-btn">
                    <i className="far fa-plus" />
                  </div>
                </div>
                <div className="member-info text-center">
                  <h3 className="title">
                    <Link legacyBehavior href="/single-team">
                      Joshua M. Miranda
                    </Link>
                  </h3>
                  <p>Junior Gardener</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Team Section ======*/}
      {/*====== Start CTA Section  ======*/}
      <section
  className="cta-bg-section bg_cover pt-100 p-r z-1"
  style={{ backgroundImage: "url(assets/images/bg/cta-bg-1.jpg)" }}
>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5">
        {/*======  CTA Content Box  ======*/}
        <div className="cta-content-box text-white mb-50 wow fadeInLeft">
          <div className="section-title mb-20">
            <span className="sub-title">
              <i className="flaticon-plant" />
              Need a Website
            </span>
            <h2>Looking For a Lawn Care Web Expert?</h2>
          </div>
          <p className="mb-30">
            Get a professional website that brings more customers to your lawn mowing and landscaping business. Start growing online today!
          </p>
          <Link legacyBehavior href="/contact">
            <a className="main-btn golden-btn">Get a Free Quote</a>
          </Link>
        </div>
      </div>
      <div className="col-lg-7">
        {/*======  CTA Image Box  ======*/}
        <div className="cta-image-box mb-50 wow fadeInRight">
          <img src="assets/images/products/custom.jpg" alt="Image" />
        </div>
      </div>
    </div>
  </div>
</section>
      {/*====== End CTA Section  ======*/}
      {/*====== Start Testimonial Section  ======*/}
      <section className="testimonial-section pt-100 pb-100">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-12">
        <div className="section-title text-center mb-50 wow fadeInDown">
          <span className="sub-title">
            <i className="flaticon-plant" />
            Testimonials
          </span>
          <h2>Lawn Business Owners Love Us</h2>
        </div>
      </div>
    </div>
    {/*====== Testimonial Slider  ======*/}
    <Slider
      {...sliderProps.testimonialSliderOne}
      className="testimonial-slider-one wow fadeInUp"
    >
      {/*====== Testimonial Item 1 ======*/}
      <div className="single-testimonial-item">
        <div className="testimonial-inner-content">
          <div className="quote-rating-box">
            <div className="icon">
              <img
                src="assets/images/testimonial/quote.png"
                alt="quote icon"
              />
            </div>
            <div className="ratings-box">
              <h6>Amazing Website</h6>
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
            My new website brought in 3x more customers within a month. The booking system saved me hours of phone time. Best investment for my lawn business!
          </p>
          <div className="author-thumb-title">
            <div className="author-thumb">
              <img
                src="assets/images/testimonial/thumb-1.jpg"
                alt="Author Image"
              />
            </div>
            <div className="author-title">
              <h6 className="title">Douglas D. Hall</h6>
              <p className="position">GreenCare Lawn Owner</p>
            </div>
          </div>
        </div>
      </div>
      {/*====== Testimonial Item 2 ======*/}
      <div className="single-testimonial-item">
        <div className="testimonial-inner-content">
          <div className="quote-rating-box">
            <div className="icon">
              <img
                src="assets/images/testimonial/quote.png"
                alt="quote icon"
              />
            </div>
            <div className="ratings-box">
              <h6>SEO Results Incredible</h6>
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
            My lawn mowing company now ranks #1 on Google. I get calls daily without paying for ads. Their SEO team completely transformed my business.
          </p>
          <div className="author-thumb-title">
            <div className="author-thumb">
              <img
                src="assets/images/testimonial/thumb-2.jpg"
                alt="Author Image"
              />
            </div>
            <div className="author-title">
              <h6 className="title">Sarah M. Johnson</h6>
              <p className="position">Johnson Landscaping</p>
            </div>
          </div>
        </div>
      </div>
      {/*====== Testimonial Item 3 ======*/}
      <div className="single-testimonial-item">
        <div className="testimonial-inner-content">
          <div className="quote-rating-box">
            <div className="icon">
              <img
                src="assets/images/testimonial/quote.png"
                alt="quote icon"
              />
            </div>
            <div className="ratings-box">
              <h6>Professional & Fast</h6>
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
            They delivered my lawn care website in just 2 weeks. The design is modern and my customers love how easy it is to request a quote online.
          </p>
          <div className="author-thumb-title">
            <div className="author-thumb">
              <img
                src="assets/images/testimonial/thumb-3.jpg"
                alt="Author Image"
              />
            </div>
            <div className="author-title">
              <h6 className="title">Brian L. Swinton</h6>
              <p className="position">Swinton Lawn Services</p>
            </div>
          </div>
        </div>
      </div>
      {/*====== Testimonial Item 4 ======*/}
      <div className="single-testimonial-item">
        <div className="testimonial-inner-content">
          <div className="quote-rating-box">
            <div className="icon">
              <img
                src="assets/images/testimonial/quote.png"
                alt="quote icon"
              />
            </div>
            <div className="ratings-box">
              <h6>Great Support</h6>
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
            Their team is always available when I need help. My Google Business profile is fully optimized and I'm getting more local customers every week.
          </p>
          <div className="author-thumb-title">
            <div className="author-thumb">
              <img
                src="assets/images/testimonial/thumb-1.jpg"
                alt="Author Image"
              />
            </div>
            <div className="author-title">
              <h6 className="title">Timothy V. Kim</h6>
              <p className="position">Kim's Lawn Care</p>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  </div>
</section>
      {/*====== End Testimonial Section  ======*/}
      {/*====== Start Partners Section ======*/}
      <Partners />
    </Layout>
  );
};
export default About;
