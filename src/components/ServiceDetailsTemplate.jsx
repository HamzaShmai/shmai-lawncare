import Link from "next/link";
import Partners from "@/src/components/Partners";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layouts/Layout";

const ServiceDetailsTemplate = ({ service, services }) => {
  const currentIndex = services.findIndex((item) => item.slug === service.slug);
  const prevService =
    currentIndex > 0 ? services[currentIndex - 1] : services[services.length - 1];
  const nextService =
    currentIndex < services.length - 1 ? services[currentIndex + 1] : services[0];

  return (
    <Layout>
      <PageBanner pageName={service.title} description={service.shortDescription} />
      <section className="service-details-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">
                <h2 className="title">{service.title}</h2>
                <p>{service.intro}</p>
                <div className="block-image wow fadeInDown">
                  <img src={service.mainImage} alt={service.title} />
                </div>
                <h3>{service.benefitTitle}</h3>
                <p>{service.benefitText}</p>
                <ul className="check-style-one mb-60">
                  {service.benefits.map((benefit) => (
                    <li key={benefit}>
                      <i className="far fa-check" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="row">
                  <div className="col-md-6">
                    <div className="block-image wow fadeInLeft">
                      <img src={service.galleryImages[0]} alt={`${service.title} gallery 1`} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="block-image wow fadeInRight">
                      <img src={service.galleryImages[1]} alt={`${service.title} gallery 2`} />
                    </div>
                  </div>
                </div>
                <h3>Working Process</h3>
                <p>
                  Every LawnLift service follows a simple process focused on strategy, execution,
                  and measurable growth for your lawn care business.
                </p>
                <div className="process-wrapper p-r z-1 wow fadeInUp">
                  <div className="shape line-shape">
                    <span>
                      <img src="assets/images/shape/process-line.png" alt="line" />
                    </span>
                  </div>
                  <div className="row">
                    {service.process.map((step) => (
                      <div className="col-sm-4" key={step.title}>
                        <div className="process-step-item text-center mb-50">
                          <div className="icon">
                            <i className={step.icon} />
                          </div>
                          <div className="text">
                            <h6>{step.title}</h6>
                            <p>{step.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="block-image wow fadeInDown">
                  <img src={service.galleryImages[2]} alt={`${service.title} result`} />
                </div>
                <h3>LawnLift Tips</h3>
                <p>{service.tips[0]}</p>
                <p>{service.tips[1]}</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar-widget-area">
                <div className="sidebar-widget widget-service-nav gray-bg mb-30 wow fadeInUp">
                  <h4 className="widget-title">Website Solutions</h4>
                  <ul>
                    {services.map((item) => (
                      <li key={item.slug}>
                        <Link legacyBehavior href={`/service/${item.slug}`}>
                          <a>
                            {item.title}
                            <i className="far fa-angle-double-right" />
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="duahaseeb">
                <div className="sidebar-widget widget-banner mb-30 wow fadeInUp">
                  <div className="banner-content text-white">
                    <h3 className="title">Need More Lawn Leads?</h3>
                    <p>LawnLift builds websites that grow your local bookings.</p>
                    <Link legacyBehavior href="/contact">
                      <a className="main-btn secondary-btn">Contact LawnLift</a>
                    </Link>
                    <img src="assets/images/sidebar/b-w-1.png" alt="LawnLift banner" />
                  </div>
                </div>
                <div className="sidebar-widget widget-newsletter gray-bg mb-30 wow fadeInUp">
                  <h4 className="widget-title">Newsletter</h4>
                  <div className="sidebar-content">
                    <p>
                      Get LawnLift insights for lawn business websites, SEO, and conversion
                      growth.
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
                        <button className="main-btn primary-btn">Subscribe Now</button>
                      </div>
                    </form>
                  </div>
                </div>
                </div>
              
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="post-navigation pt-40  border-top-1 wow fadeInDown">
                <div className="row">
                  <div className="col-md-6">
                    <div className="navigation-item prev-post mb-40">
                      <div className="thumb">
                        <img src="assets/images/service/prev.jpg" alt="Previous service" />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <Link legacyBehavior href={`/service/${prevService.slug}`}>
                            <a>{prevService.title}</a>
                          </Link>
                        </h3>
                        <Link legacyBehavior href={`/service/${prevService.slug}`}>
                          <a className="btn-link">
                            Read More
                            <i className="far fa-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="navigation-item next-post mb-40">
                      <div className="thumb">
                        <img src="assets/images/service/next.jpg" alt="Next service" />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <Link legacyBehavior href={`/service/${nextService.slug}`}>
                            <a>{nextService.title}</a>
                          </Link>
                        </h3>
                        <Link legacyBehavior href={`/service/${nextService.slug}`}>
                          <a className="btn-link">
                            Read More
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
        </div>
      </section>
      <Partners />
    </Layout>
  );
};

export default ServiceDetailsTemplate;
