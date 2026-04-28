import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const Shop = () => {
  return (
    <Layout>
      <PageBanner
        pageName={"Digital Shop"}
        description={"LawnLift website growth products for lawn care businesses."}
      />
      {/*====== Start Shop section ======*/}
      <section className="shop-page-section pt-95 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-12">
              {/*====== Products Filter ======*/}
              <div className="product-filter mb-40">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7">
                    {/*====== Show Text ======*/}
                    <div className="show-text mb-20">
                      <h6>Showing Results 08 Of 08</h6>
                    </div>
                  </div>
                  <div className="col-md-5">
                    {/*====== Product Dropdown ======*/}
                    <div className="product-dropdown float-md-right">
                      <span className="title">Sort By</span>
                      <select className="wide">
                        <option data-display="Default">Default</option>
                        <option value={1}>Best Products</option>
                        <option value={2}>Highest Price</option>
                        <option value={3}>Lowest Price</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/*====== Products Wrapper ======*/}
              <div className="products-wrapper">
                <div className="row">
                  <div className="col-md-6">
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
                            <a>LawnLift Starter Website Kit</a>
                          </Link>
                        </h4>
                        <span className="price">
                          <span className="currency">$</span>149.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
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
                            <a>Booking & Payment Setup Pack</a>
                          </Link>
                        </h4>
                        <span className="price">
                          <span className="currency">$</span>199.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
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
                            <a>Local SEO Booster Package</a>
                          </Link>
                        </h4>
                        <span className="price">
                          <span className="currency">$</span>249.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
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
                            <a>Google Business Optimization Kit</a>
                          </Link>
                        </h4>
                        <span className="price">
                          <span className="currency">$</span>99.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*====== Single Product Item ======*/}
                    <div className="single-product-item mb-30 wow fadeInUp">
                      <div className="discount">10% OFF</div>
                      <div className="product-image">
                        <img
                          src="assets/images/products/pr-5.jpg"
                          alt="Products Image"
                        />
                      </div>
                      <div className="product-info">
                        <h4>
                          <Link legacyBehavior href="/product-details">
                            <a>Website Care & Support Plan</a>
                          </Link>
                        </h4>
                        <span className="price">
                          <span className="currency">$</span>89.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*====== Single Product Item ======*/}
                    <div className="single-product-item mb-30 wow fadeInUp">
                      <div className="product-image">
                        <img
                          src="assets/images/products/pr-6.jpg"
                          alt="Products Image"
                        />
                      </div>
                      <div className="product-info">
                        <h4>
                          <Link legacyBehavior href="/product-details">
                            <a>Lead Generation Funnel Setup</a>
                          </Link>
                        </h4>
                        <span className="price">
                          <span className="currency">$</span>179.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*====== Single Product Item ======*/}
                    <div className="single-product-item mb-30 wow fadeInUp">
                      <div className="product-image">
                        <img
                          src="assets/images/products/pr-7.jpg"
                          alt="Products Image"
                        />
                      </div>
                      <div className="product-info">
                        <h4>
                          <Link legacyBehavior href="/product-details">
                            <a>Lawn Business Content Bundle</a>
                          </Link>
                        </h4>
                        <span className="price">
                          <span className="currency">$</span>129.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*====== Single Product Item ======*/}
                    <div className="single-product-item mb-30 wow fadeInUp">
                      <div className="discount">10% OFF</div>
                      <div className="product-image">
                        <img
                          src="assets/images/products/pr-8.jpg"
                          alt="Products Image"
                        />
                      </div>
                      <div className="product-info">
                        <h4>
                          <Link legacyBehavior href="/product-details">
                            <a>Conversion Landing Page Pack</a>
                          </Link>
                        </h4>
                        <span className="price">
                          <span className="currency">$</span>159.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <ul className="gadden-pagination mt-30 mb-40 wow fadeInUp">
                      <li>
                        <a href="#">
                          <i className="far fa-angle-double-left" />
                        </a>
                      </li>
                      <li>
                        <a href="#">01</a>
                      </li>
                      <li>
                        <a href="#">02</a>
                      </li>
                      <li>
                        <a href="#">03</a>
                      </li>
                      <li>
                        <a href="#">04</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-double-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12">
              <div className="sidebar-widget-area">
                {/*=== Search Widget ===*/}
                <div className="sidebar-widget widget-search gray-bg mb-40 wow fadeInUp">
                  <h4 className="widget-title">Search</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <label>
                        <i className="far fa-search" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Search"
                        name="search"
                        required
                      />
                    </div>
                  </form>
                </div>
                {/*=== Price Range Widget ===*/}
                <div className="sidebar-widget widget-price-filter mb-35 wow fadeInUp">
                  <h4 className="widget-title">Filter</h4>
                  <div id="slider-range" />
                  <div className="price-number">
                    <input type="text" id="amount" />
                  </div>
                </div>
                {/*=== Category Widget ===*/}
                <div className="sidebar-widget widget-category gray-bg mb-40 wow fadeInUp">
                    <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>
                      <a href="#">
                        Website Templates
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Booking Automation
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Local SEO
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Google Business
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Lead Generation
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/*=== Banner Widget ===*/}
                <div className="sidebar-widget widget-banner mb-40 wow fadeInUp">
                  <div className="banner-content text-white">
                    <h3 className="title">Need More Lawn Leads?</h3>
                    <p>LawnLift builds websites that grow your bookings.</p>
                    <Link legacyBehavior href="/contact">
                      <a className="main-btn secondary-btn">Contact Us</a>
                    </Link>
                    <img
                      src="assets/images/sidebar/b-w-1.png"
                      alt="Banner Image"
                    />
                  </div>
                </div>
                {/*=== Tag Widget ===*/}
                <div className="sidebar-widget widget-tag-cloud mb-40 wow fadeInUp">
                  <h4 className="widget-title">Tags</h4>
                  <a href="#">Website</a>
                  <a href="#">SEO</a>
                  <a href="#">Booking</a>
                  <a href="#">Google Business</a>
                  <a href="#">Leads</a>
                  <a href="#">Conversion</a>
                  <a href="#">LawnLift</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Shop section ======*/}
      {/*====== Start Partners Section ======*/}
      <Partners />
    </Layout>
  );
};
export default Shop;
