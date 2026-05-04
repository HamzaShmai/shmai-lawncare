import GaddenAccordion from "@/src/components/GaddenAccordion";
import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const Faqs = () => {
  const faqsData1 = [
    {
      title: "What does LawnLift do?",
      content:
        "LawnLift builds website solutions for lawn care businesses including custom websites, SEO, online booking, and lead generation optimization."
    },
    {
      title: "How long does a website project take?",
      content:
        "Most LawnLift website projects are delivered in 7-14 business days depending on your content readiness, service complexity, and revision speed."
    },
    {
      title: "Do you support booking and payments?",
      content:
        "Yes. We can set up online booking forms and payment integration so your customers can schedule and pay directly from your website."
    },
    {
      title: "How much does LawnLift cost?",
      content:
        "Pricing depends on project scope. We offer starter packages and custom solutions based on your goals, service area, and growth targets."
    },
    {
      title: "Can you redesign my existing site?",
      content:
        "Absolutely. We can redesign your current website while keeping important content and improving conversion flow, speed, and local SEO."
    },
  ];

  const faqsData2 = [
    {
      title: "Do you provide ongoing support?",
      content:
        "Yes. LawnLift offers maintenance and support plans to keep your site secure, updated, and running smoothly."
    },
    {
      title: "Will my site rank on Google?",
      content:
        "We build your website with local SEO best practices and can provide ongoing SEO services to improve search visibility over time."
    },
    {
      title: "Do you work with new lawn startups?",
      content:
        "Yes. We help both new and established lawn businesses build a professional online presence and generate consistent leads."
    },
    {
      title: "Can I request content updates later?",
      content:
        "Yes. You can request updates to services, prices, areas, and pages anytime through our support workflow."
    },
    {
      title: "Do you manage Google Business Profile too?",
      content:
        "Yes. We optimize your Google Business Profile to help improve map visibility and local customer inquiries."
    },
    {
      title: "How do I get started with LawnLift?",
      content:
        "Use the contact page to share your business details, current website status, and goals. We will send a tailored proposal with next steps."
    },
  ];

  const [active, setActive] = useState("collapse0");

  return (
    <Layout>
      <PageBanner
        pageName={"FAQs"}
        description={"Answers about LawnLift website solutions for lawn care businesses."}
      />
      <section className="faq-section pt-95">
        <div className="container">
          <Accordion
            defaultActiveKey="collapse0"
            className="accordion"
            id="accordionOne"
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-content-box wow fadeInLeft">
                  {faqsData1.map((faq, i) => (
                    <GaddenAccordion
                      title={faq.title}
                      content={faq.content}
                      key={i}
                      event={`collapse${i}`}
                      onClick={() => setActive(`collapse${i}`)}
                      active={active}
                    />
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content-box wow fadeInRight">
                  {faqsData2.map((faq, i) => (
                    <GaddenAccordion
                      title={faq.title}
                      content={faq.content}
                      key={i}
                      event={`collapseB${i}`}
                      onClick={() => setActive(`collapseB${i}`)}
                      active={active}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Accordion>
        </div>
      </section>

      {/*====== Start Info Section ======*/}
      <section className="info-section pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="single-info-item style-one mb-40 wow fadeInUp">
                <div className="shape shape-one">
                  <span>
                    <img
                      src="assets/images/shape/info-shape-1.png"
                      alt="shape"
                    />
                  </span>
                </div>
                <div className="info">
                  <span>Get Consultations</span>
                  <h4 className="title">
                    Need Expert Consultations to Build Your Garden?
                  </h4>
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn secondary-btn">Get a Quote</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="single-info-item style-two mb-40 wow fadeInDown">
                <div className="shape shape-one">
                  <span>
                    <img
                      src="assets/images/shape/info-shape-1.png"
                      alt="shape"
                    />
                  </span>
                </div>
                <div className="info">
                  <span>24/7 Support</span>
                  <h4 className="title">
                    Get Every Single Update With 24/7 Customer Support
                  </h4>
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn secondary-btn">Support & Join</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="single-info-item style-three mb-40 wow fadeInUp">
                <div className="shape shape-one">
                  <span>
                    <img
                      src="assets/images/shape/info-shape-2.png"
                      alt="shape"
                    />
                  </span>
                </div>
                <div className="info">
                  <span>Need A Career?</span>
                  <h4 className="title">
                    Looking For Jobs or Want To Join Our Team?
                  </h4>
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn primary-btn">Contact Us</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Info Section ======*/}

      {/*====== Start Pricing Section ======*/}
      <section className="pricing-section pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Pricing Plan
                </span>
                <h2>Smart Pricing Package</h2>
                <p className="mb-30 mt-20">
                  Choose the perfect plan that fits your gardening needs and budget. All packages
                  include professional service, quality materials, and satisfaction guaranteed.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-pricing-item mb-40 wow fadeInUp" data-wow-delay=".2s">
                <div className="pricing-img">
                  <img
                    src="assets/images/pricing/pricing-1.jpg"
                    alt="Pricing Image"
                  />
                </div>
                <div className="pricing-body">
                  <div className="shape shape-one">
                    <span>
                      <img src="assets/images/pricing/leaf.png" alt="Image" />
                    </span>
                  </div>
                  <div className="pricing-title text-center mb-35">
                    <h3 className="title">Residential Package</h3>
                  </div>
                  <ul className="mb-35">
                    <li>
                      <i className="fas fa-badge-check" />
                      Lawn Mowing & Trimming
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Garden Bed Maintenance
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Seasonal Leaf Removal
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Hedge & Shrub Pruning
                    </li>
                  </ul>
                  <h2 className="price">
                    <span className="currency">$</span>19.36
                    <span className="duration">/Per Month</span>
                  </h2>
                  <div className="pricing-button text-center">
                    <a href="#" className="main-btn primary-btn">
                      Choose Package
                    </a>
                    <p>Save 23% on Annual Services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-pricing-item mb-40 wow fadeInDown" data-wow-delay=".2s">
                <div className="pricing-img">
                  <img
                    src="assets/images/pricing/pricing-2.jpg"
                    alt="Pricing Image"
                  />
                </div>
                <div className="pricing-body">
                  <div className="shape shape-one">
                    <span>
                      <img src="assets/images/pricing/leaf.png" alt="Image" />
                    </span>
                  </div>
                  <div className="pricing-title text-center mb-35">
                    <h3 className="title">Commercial Package</h3>
                  </div>
                  <ul className="mb-35">
                    <li>
                      <i className="fas fa-badge-check" />
                      Full Landscape Management
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Tree & Shrub Care Program
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Irrigation System Maintenance
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Seasonal Color Rotation
                    </li>
                  </ul>
                  <h2 className="price">
                    <span className="currency">$</span>39.47
                    <span className="duration">/Per Month</span>
                  </h2>
                  <div className="pricing-button text-center">
                    <a href="#" className="main-btn primary-btn">
                      Choose Package
                    </a>
                    <p>Save 23% on Annual Services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-pricing-item mb-40 wow fadeInUp" data-wow-delay=".2s">
                <div className="pricing-img">
                  <img
                    src="assets/images/pricing/pricing-3.jpg"
                    alt="Pricing Image"
                  />
                </div>
                <div className="pricing-body">
                  <div className="shape shape-one">
                    <span>
                      <img src="assets/images/pricing/leaf.png" alt="Image" />
                    </span>
                  </div>
                  <div className="pricing-title text-center mb-35">
                    <h3 className="title">Industrial Package</h3>
                  </div>
                  <ul className="mb-35">
                    <li>
                      <i className="fas fa-badge-check" />
                      Large Scale Grounds Care
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Erosion Control Solutions
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Native Plant Restoration
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Custom Design & Planning
                    </li>
                  </ul>
                  <h2 className="price">
                    <span className="currency">$</span>92.36
                    <span className="duration">/Per Month</span>
                  </h2>
                  <div className="pricing-button text-center">
                    <a href="#" className="main-btn primary-btn">
                      Choose Package
                    </a>
                    <p>Save 15% on Annual Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Pricing Section ======*/}

      {/*====== Start Partners Section ======*/}
      <Partners />
    </Layout>
  );
};

export default Faqs;