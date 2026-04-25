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
                  About Gardening
                </span>
                <h2>We Care Your Garden &amp; Landscaping</h2>
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== About Content Box ======*/}
              <div className="about-content-box mb-50 wow fadeInRight">
                <p className="mb-30">
                  We envision a world where every volunteer finds purpose and every community
                  receives compassionate support through sustainable, impactful actions.
                </p>
                <ul className="check-style-one mb-40">
                  <li>
                    <i className="far fa-check" />
                    We’re Experience Gardening
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Awards Winning &amp; Professional Team Member
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
              {/*====== About Image Item ======*/}
              <div className="about-img-item mb-30 wow fadeInUp">
                <img src="assets/images/about/about-3.jpg" alt="About Image" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*====== About Image Item ======*/}
              <div className="about-img-item mb-30 wow fadeInDown">
                <img src="assets/images/about/about-4.jpg" alt="About Image" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*====== About Image Item ======*/}
              <div className="about-img-item mb-30 wow fadeInUp">
                <img src="assets/images/about/about-5.jpg" alt="About Image" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/*====== About Wrapper ======*/}
              <div className="about-wrapper-two gray-bg mt-minus-110 p-r wow fadeInDown">
                <div className="row no-gutters justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    {/*====== About features Item ======*/}
                    <div className="about-features-item text-center">
                      <div
                        className="hover-bg bg_cover"
                        style={{
                          backgroundImage:
                            "url(assets/images/about/hover-bg.jpg)",
                        }}
                      />
                      <div className="icon">
                        <i className="flaticon-target" />
                      </div>
                      <div className="text">
                        <h3 className="title">Our Mission</h3>
                        <p>
                          We empower volunteers to create lasting change through dedication, collaboration,
                          and compassionate community service worldwide.
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
                    {/*====== About features Item ======*/}
                    <div className="about-features-item item-active text-center">
                      <div
                        className="hover-bg bg_cover"
                        style={{
                          backgroundImage:
                            "url(assets/images/about/hover-bg.jpg)",
                        }}
                      />
                      <div className="icon">
                        <i className="flaticon-vision" />
                      </div>
                      <div className="text">
                        <h3 className="title">Our Vision</h3>
                        <p>
                          We envision a world where every volunteer finds purpose and every community
                          receives compassionate support through sustainable, impactful actions.
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
                    {/*====== About features Item ======*/}
                    <div className="about-features-item text-center">
                      <div
                        className="hover-bg bg_cover"
                        style={{
                          backgroundImage:
                            "url(assets/images/about/hover-bg.jpg)",
                        }}
                      />
                      <div className="icon">
                        <i className="flaticon-management" />
                      </div>
                      <div className="text">
                        <h3 className="title">Plan &amp; Goals</h3>
                        <p>
                          Our roadmap focuses on strategic growth, volunteer engagement, and measurable
                          community impact each year.
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
              backgroundImage: "url(assets/images/bg/features-bg-1.jpg)",
            }}
          />
          <div className="features-bgc-content-box main-bg text-white wow fadeInRight">
            <div className="features-content-box">
              {/*====== Section-title ======*/}
              <div className="section-title mb-50 wow fadeInUp">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Modern Gardening
                </span>
                <h2>We Offer Landscape &amp; Tree Plantations</h2>
              </div>
              <p className="mb-40">
                We provide professional landscape design and sustainable tree plantation
                services that transform outdoor spaces into thriving, eco-friendly
                environments for communities and future generations to enjoy.
              </p>
              <div className="single-features-item mb-30 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-pruning-shears" />
                  <span className="shape-circle" />
                </div>
                <div className="text">
                  <h5 className="title">Modern Gardening &amp; Expert Team</h5>
                  <p>
                    Our skilled horticulturists blend innovation and expertise to create stunning,
                    sustainable modern gardens for any space.
                  </p>
                </div>
              </div>
              <div className="single-features-item mb-30 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-gardening-1" />
                  <span className="shape-circle" />
                </div>
                <div className="text">
                  <h5 className="title">Tree Plantations &amp; Landscape</h5>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    dislike beguiled and demoralized
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
                    Need a Expert
                  </span>
                  <h2>Looking For a Garden Specialist</h2>
                </div>
                <p className="mb-30">
                  Find the perfect gardening expert to design, maintain, and nurture your
                  dream outdoor space with care.
                </p>
                <Link legacyBehavior href="/team">
                  <a className="main-btn golden-btn">Find Specialist</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              {/*======  CTA Image Box  ======*/}
              <div className="cta-image-box mb-50 wow fadeInRight">
                <img src="assets/images/gallery/cta-1.jpg" alt="Image" />
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
                <h2>Global Clients Feedback</h2>
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
                    <h6>Excellent Service</h6>
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
                  The landscape transformation exceeded our expectations completely.
                  Their team's dedication and professionalism made every step smooth
                  and enjoyable for our entire organization.
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
                    <p className="position">CEO &amp; Founder</p>
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
                    <h6>Amazing Results</h6>
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
                  Working with this team transformed our outdated garden into a stunning
                  paradise. Their expert advice and quality work truly made a remarkable
                  difference for our property's value.
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
                    <p className="position">Marketing Director</p>
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
                    <h6>Professional Team</h6>
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
                  I highly recommend their gardening services to anyone seeking quality.
                  From design to maintenance, every detail was handled perfectly with
                  great communication throughout the whole process.
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
                    <p className="position">Web Designer</p>
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
                    <h6>Sustainable Approach</h6>
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
                  Their eco-friendly practices and attention to sustainability impressed
                  us greatly. The plantation project was completed on time and within
                  budget while exceeding all our green standards.
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
                    <p className="position">SR Manager</p>
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
