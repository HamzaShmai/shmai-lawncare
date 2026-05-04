import PageBanner from "@/src/components/PageBanner";
import Counter from "@/src/components/Counter";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const Service = () => {
  return (
    <Layout>
      <PageBanner pageName={"Service"} />
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
      <Partners />
    </Layout>
  );
};
export default Service;
