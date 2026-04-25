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
      title: "What Is Gardening?",
      content: "Gardening is the practice of growing and cultivating plants as part of horticulture. It includes ornamental plants, fruits, vegetables, and herbs for beautification or consumption."
    },
    {
      title: "How Much Time to Do Better Gardening?",
      content: "Regular gardening requires 2-4 hours per week for maintenance. However, initial setup may take more time. Consistency is key to achieving beautiful results."
    },
    {
      title: "Landscaping For Tree Plants?",
      content: "Tree landscaping involves strategic placement of trees to enhance property aesthetics, provide shade, and improve environmental conditions. We plan each tree's location carefully."
    },
    {
      title: "How Much Cost Gardening?",
      content: "Gardening costs vary based on property size, services needed, and plant selection. Basic maintenance starts at $50/month while full landscaping projects range from $500-$5000."
    },
    {
      title: "Why We Build Gardening & Landscaping?",
      content: "Gardening and landscaping increase property value, improve mental well-being, create beautiful outdoor spaces, and contribute positively to the environment."
    },
  ];

  const faqsData2 = [
    {
      title: "How About Our Team Member?",
      content: "Our team consists of certified horticulturists, landscape designers, and experienced gardeners who bring years of expertise to every project."
    },
    {
      title: "What Rules Are Followed To Build a Garden?",
      content: "We follow soil testing guidelines, proper plant spacing rules, sun exposure requirements, water management practices, and local building codes for structures."
    },
    {
      title: "Residential Gardening?",
      content: "Residential gardening services include lawn care, flower bed maintenance, pruning, weeding, mulching, and seasonal cleanup for private homes."
    },
    {
      title: "Commercial Gardening?",
      content: "Commercial gardening covers office complexes, retail spaces, hotels, and corporate campuses with professional landscape maintenance and design services."
    },
    {
      title: "We Provide Transportation?",
      content: "Yes, we provide full transportation of equipment, plants, and materials to and from your property for all scheduled gardening services."
    },
    {
      title: "What Is Sustainable Gardening?",
      content: "Sustainable gardening uses eco-friendly practices like water conservation, composting, native plants, and organic pest control to protect the environment."
    },
  ];

  const [active, setActive] = useState("collapse0");

  return (
    <Layout>
      <PageBanner pageName={"FAQs"} />
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
                    <a className="main-btn golden-btn">Get a Quote</a>
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
                    <a className="main-btn golden-btn">Support & Join</a>
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