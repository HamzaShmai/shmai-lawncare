import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const ServiceDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Service Details"} />
      {/*====== Start Service Details section ======*/}
      <section className="service-details-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              {/*====== Service Details Wrapper ======*/}
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">
                <h2 className="title">Yard Cleaning</h2>
                <p>
                  We provide thorough yard cleaning services that remove debris, fallen leaves, overgrown weeds,
                  and unwanted clutter from your outdoor spaces. Our professional team ensures every corner of
                  your property looks pristine and well-maintained throughout all seasons of the year.
                </p>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/service/single-service-1.jpg"
                    alt="Service Image"
                  />
                </div>
                <h3>How to Benefit</h3>
                <p>
                  Regular yard cleaning improves property appearance, prevents pest infestations, and promotes
                  healthier plant growth. By hiring our experienced team, you save valuable time and energy while
                  enjoying a beautifully maintained outdoor space that enhances your home's curb appeal.
                </p>
                <ul className="check-style-one mb-60">
                  <li>
                    <i className="far fa-check" />
                    Experienced Gardening Professionals
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Awards Winning &amp; Professional Team Members
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Debris Removal &amp; Leaf Clearing
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Seasonal Cleanup &amp; Waste Disposal
                  </li>
                </ul>
                <div className="row">
                  <div className="col-md-6">
                    <div className="block-image wow fadeInLeft">
                      <img
                        src="assets/images/service/single-service-2.jpg"
                        alt="Service Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="block-image wow fadeInRight">
                      <img
                        src="assets/images/service/single-service-3.jpg"
                        alt="Service Image"
                      />
                    </div>
                  </div>
                </div>
                <h3>Working Process</h3>
                <p>
                  Our simple three-step process begins with a thorough property assessment to identify cleaning needs.
                  Next, our team executes a complete yard cleanup including trimming, raking, and waste removal.
                  Finally, we conduct a quality inspection to ensure your complete satisfaction.
                </p>
                <div className="process-wrapper p-r z-1 wow fadeInUp">
                  <div className="shape line-shape">
                    <span>
                      <img
                        src="assets/images/shape/process-line.png"
                        alt="line"
                      />
                    </span>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="process-step-item text-center mb-50">
                        <div className="icon">
                          <i className="flaticon-landscape" />
                        </div>
                        <div className="text">
                          <h6>Design Garden</h6>
                          <p>Plan your ideal yard layout and cleaning schedule</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="process-step-item text-center mb-50">
                        <div className="icon">
                          <i className="flaticon-industry" />
                        </div>
                        <div className="text">
                          <h6>Test Planting</h6>
                          <p>Assess soil health and plant conditions carefully</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="process-step-item text-center mb-50">
                        <div className="icon">
                          <i className="flaticon-bus-stop" />
                        </div>
                        <div className="text">
                          <h6>Got Final Result</h6>
                          <p>Enjoy a perfectly cleaned and organized yard space</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/service/single-service-4.jpg"
                    alt="Service Image"
                  />
                </div>
                <h3>Tips &amp; Tricks</h3>
                <p>
                  Keep your yard looking fresh between professional cleanings by raking leaves weekly and trimming
                  overgrown bushes promptly. Remove fallen branches after storms and clear gutters regularly to
                  prevent water damage. A little maintenance goes a long way toward preserving your landscape.
                </p>
                <p>
                  Schedule seasonal cleanings in spring and fall for best results. Mulching leaves instead of bagging
                  them adds nutrients back to your soil, while proper tool maintenance ensures efficient yard work.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              {/*====== Sidebar Widget Area ======*/}
              <div className="sidebar-widget-area">
                <div className="sidebar-widget widget-service-nav gray-bg mb-30 wow fadeInUp">
                  <h4 className="widget-title">Services List</h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          Yard Cleaning
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          Garden Makeup
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          Landscaping
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          Lawn Mowing
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          Decorative Plants
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          Yard Maintenance
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget widget-banner mb-30 wow fadeInUp">
                  <div className="banner-content text-white">
                    <h3 className="title">Looking For Special Gardener!</h3>
                    <p>You're in right place</p>
                    <Link legacyBehavior href="/contact">
                      <a className="main-btn secondary-btn">Contact Us</a>
                    </Link>
                    <img
                      src="assets/images/sidebar/b-w-1.png"
                      alt="Banner Image"
                    />
                  </div>
                </div>
                <div className="sidebar-widget widget-newsletter gray-bg mb-30 wow fadeInUp">
                  <h4 className="widget-title">Newsletter</h4>
                  <div className="sidebar-content">
                    <p>
                      Subscribe to receive expert yard care tips and exclusive offers
                      delivered directly to your inbox each month.
                    </p>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          required
                        />
                      </div>
                      <div className="form_group">
                        <button className="main-btn primary-btn">
                          Subscribe Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== Post Navigation ======*/}
          <div className="row">
            <div className="col-lg-12">
              <div className="post-navigation pt-60 pb-60 border-top-1 wow fadeInDown">
                <div className="row">
                  <div className="col-md-6">
                    <div className="navigation-item prev-post mb-40">
                      <div className="thumb">
                        <img
                          src="assets/images/service/prev.jpg"
                          alt="thumb image"
                        />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <a href="#">Garden Makeup</a>
                        </h3>
                        <a href="#" className="btn-link">
                          Read More
                          <i className="far fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="navigation-item next-post mb-40">
                      <div className="thumb">
                        <img
                          src="assets/images/service/next.jpg"
                          alt="thumb image"
                        />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <a href="#">Lawn Mowing</a>
                        </h3>
                        <a href="#" className="btn-link">
                          Read More
                          <i className="far fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Details section ======*/}
      <Partners />
    </Layout>
  );
};
export default ServiceDetails;
