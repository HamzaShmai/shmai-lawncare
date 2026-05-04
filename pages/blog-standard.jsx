import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const BlogStandard = () => {
  return (
    <Layout>
      <PageBanner pageName={"Blog Standard"} />
      <section className="blog-standard-section pt-100 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-standard-wrapper">
                {/* Blog Post 1 */}
                <div className="single-blog-post-three mb-30 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/blog-7.jpg" alt="Post Image" />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <span className="date">
                        <Link legacyBehavior href="/blog-details">
                          <a>15 January 2023</a>
                        </Link>
                      </span>
                      <span className="comment">
                        <Link legacyBehavior href="/blog-details">
                          <a>8 Comments</a>
                        </Link>
                      </span>
                    </div>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Essential Spring Yard Cleaning Tips for Homeowners
                        </a>
                      </Link>
                    </h3>
                    <div className="author">
                      <img
                        src="assets/images/blog/author-thumb-4.jpg"
                        alt="Author Image"
                      />
                      <h6>
                        <span>By</span>
                        <Link legacyBehavior href="/blog-details">
                          <a>Sarah Johnson</a>
                        </Link>
                      </h6>
                    </div>
                    <p>
                      Learn professional yard cleaning techniques that will transform your outdoor space this season.
                    </p>
                  </div>
                </div>

                {/* Blog Post 2 */}
                <div className="single-blog-post-three mb-30 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/blog-8.jpg" alt="Post Image" />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <span className="date">
                        <Link legacyBehavior href="/blog-details">
                          <a>10 January 2023</a>
                        </Link>
                      </span>
                      <span className="comment">
                        <Link legacyBehavior href="/blog-details">
                          <a>12 Comments</a>
                        </Link>
                      </span>
                    </div>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Sustainable Landscaping Ideas for Eco-Friendly Gardens
                        </a>
                      </Link>
                    </h3>
                    <div className="author">
                      <img
                        src="assets/images/blog/author-thumb-5.jpg"
                        alt="Author Image"
                      />
                      <h6>
                        <span>By</span>
                        <Link legacyBehavior href="/blog-details">
                          <a>Michael Chen</a>
                        </Link>
                      </h6>
                    </div>
                    <p>
                      Discover eco-conscious landscaping methods that save water and support local wildlife.
                    </p>
                  </div>
                </div>

                {/* Blog Post 3 */}
                <div className="single-blog-post-three mb-30 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/blog-9.jpg" alt="Post Image" />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <span className="date">
                        <Link legacyBehavior href="/blog-details">
                          <a>5 January 2023</a>
                        </Link>
                      </span>
                      <span className="comment">
                        <Link legacyBehavior href="/blog-details">
                          <a>6 Comments</a>
                        </Link>
                      </span>
                    </div>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Best Decorative Plants for Every Season and Climate
                        </a>
                      </Link>
                    </h3>
                    <div className="author">
                      <img
                        src="assets/images/blog/author-thumb-6.jpg"
                        alt="Author Image"
                      />
                      <h6>
                        <span>By</span>
                        <Link legacyBehavior href="/blog-details">
                          <a>Emma Rodriguez</a>
                        </Link>
                      </h6>
                    </div>
                    <p>
                      Choose the perfect ornamental plants to keep your garden beautiful all year long.
                    </p>
                  </div>
                </div>

                {/* Blog Post 4 */}
                <div className="single-blog-post-three mb-30 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/blog-10.jpg" alt="Post Image" />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <span className="date">
                        <Link legacyBehavior href="/blog-details">
                          <a>28 December 2022</a>
                        </Link>
                      </span>
                      <span className="comment">
                        <Link legacyBehavior href="/blog-details">
                          <a>15 Comments</a>
                        </Link>
                      </span>
                    </div>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Lawn Mowing Techniques for a Healthier Greener Yard
                        </a>
                      </Link>
                    </h3>
                    <div className="author">
                      <img
                        src="assets/images/blog/author-thumb-7.jpg"
                        alt="Author Image"
                      />
                      <h6>
                        <span>By</span>
                        <Link legacyBehavior href="/blog-details">
                          <a>David Kim</a>
                        </Link>
                      </h6>
                    </div>
                    <p>
                      Master proper mowing height and frequency for optimal grass growth and health.
                    </p>
                  </div>
                </div>

                {/* Blog Post 5 */}
                <div className="single-blog-post-three mb-30 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/blog-11.jpg" alt="Post Image" />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <span className="date">
                        <Link legacyBehavior href="/blog-details">
                          <a>20 December 2022</a>
                        </Link>
                      </span>
                      <span className="comment">
                        <Link legacyBehavior href="/blog-details">
                          <a>9 Comments</a>
                        </Link>
                      </span>
                    </div>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Complete Guide to Year-Round Yard Maintenance Schedule
                        </a>
                      </Link>
                    </h3>
                    <div className="author">
                      <img
                        src="assets/images/blog/author-thumb-4.jpg"
                        alt="Author Image"
                      />
                      <h6>
                        <span>By</span>
                        <Link legacyBehavior href="/blog-details">
                          <a>Lisa Wong</a>
                        </Link>
                      </h6>
                    </div>
                    <p>
                      Plan your seasonal yard tasks from spring cleaning to winter preparation effectively.
                    </p>
                  </div>
                </div>

                {/* Blog Post 6 */}
                <div className="single-blog-post-three mb-30 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/blog-12.jpg" alt="Post Image" />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <span className="date">
                        <Link legacyBehavior href="/blog-details">
                          <a>15 December 2022</a>
                        </Link>
                      </span>
                      <span className="comment">
                        <Link legacyBehavior href="/blog-details">
                          <a>4 Comments</a>
                        </Link>
                      </span>
                    </div>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Tree Plantation Benefits for Urban Environments and Homes
                        </a>
                      </Link>
                    </h3>
                    <div className="author">
                      <img
                        src="assets/images/blog/author-thumb-5.jpg"
                        alt="Author Image"
                      />
                      <h6>
                        <span>By</span>
                        <Link legacyBehavior href="/blog-details">
                          <a>James Wilson</a>
                        </Link>
                      </h6>
                    </div>
                    <p>
                      Learn why planting trees improves air quality and increases property value significantly.
                    </p>
                  </div>
                </div>

                {/* Blog Post 7 */}
                <div className="single-blog-post-three mb-30 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/blog-13.jpg" alt="Post Image" />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <span className="date">
                        <Link legacyBehavior href="/blog-details">
                          <a>10 December 2022</a>
                        </Link>
                      </span>
                      <span className="comment">
                        <Link legacyBehavior href="/blog-details">
                          <a>11 Comments</a>
                        </Link>
                      </span>
                    </div>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Professional Garden Makeup Ideas for Small Backyards
                        </a>
                      </Link>
                    </h3>
                    <div className="author">
                      <img
                        src="assets/images/blog/author-thumb-6.jpg"
                        alt="Author Image"
                      />
                      <h6>
                        <span>By</span>
                        <Link legacyBehavior href="/blog-details">
                          <a>Natalie Brown</a>
                        </Link>
                      </h6>
                    </div>
                    <p>
                      Transform limited spaces into stunning gardens with clever design and plant choices.
                    </p>
                  </div>
                </div>

                {/* Blog Post 8 */}
                <div className="single-blog-post-three mb-30 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/blog-14.jpg" alt="Post Image" />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <span className="date">
                        <Link legacyBehavior href="/blog-details">
                          <a>5 December 2022</a>
                        </Link>
                      </span>
                      <span className="comment">
                        <Link legacyBehavior href="/blog-details">
                          <a>7 Comments</a>
                        </Link>
                      </span>
                    </div>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Essential Tools Every Home Gardener Should Own Today
                        </a>
                      </Link>
                    </h3>
                    <div className="author">
                      <img
                        src="assets/images/blog/author-thumb-7.jpg"
                        alt="Author Image"
                      />
                      <h6>
                        <span>By</span>
                        <Link legacyBehavior href="/blog-details">
                          <a>Robert Taylor</a>
                        </Link>
                      </h6>
                    </div>
                    <p>
                      Equip yourself with must-have gardening tools for efficient yard maintenance work.
                    </p>
                  </div>
                </div>

                {/* Pagination */}
                <ul className="gadden-pagination mb-40 wow fadeInUp">
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

            <div className="col-xl-4 col-lg-5">
              <div className="sidebar-widget-area">
                {/* Search Widget */}
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
                        placeholder="Search articles..."
                        name="search"
                        required
                      />
                    </div>
                  </form>
                </div>

                {/* Author Widget */}
                <div className="sidebar-widget widget-post-author mb-40 wow fadeInUp">
                  <div className="author-img">
                    <img
                      src="assets/images/blog/author-1.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-content text-center">
                    <div className="author-title-box">
                      <h4>Jason C. Cavazos</h4>
                      <span className="posiiton">CEO &amp; Founder</span>
                    </div>
                    <p>
                      Passionate horticulturist with 15 years of experience in sustainable landscaping.
                    </p>
                    <ul className="social-link">
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
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Category Widget */}
                <div className="sidebar-widget widget-category gray-bg mb-40 wow fadeInUp">
                  <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>
                      <a href="#">
                        Yard Cleaning
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Garden Makeup
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Landscaping
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Lawn Mowing
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Decorative Plants
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Yard Maintenance
                        <i className="far fa-angle-double-right" />
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Recent Post Widget */}
                <div className="sidebar-widget widget-recent-post mb-40 wow fadeInUp">
                  <h4 className="widget-title">Recent News</h4>
                  <ul className="recent-post-list">
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/blog/post-thumb-1.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <a href="#">15 Jan 2023</a>
                        </span>
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            <a>Spring Yard Cleaning Essential Tips</a>
                          </Link>
                        </h6>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/blog/post-thumb-2.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <a href="#">10 Jan 2023</a>
                        </span>
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            <a>Sustainable Landscaping Ideas Guide</a>
                          </Link>
                        </h6>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/blog/post-thumb-3.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <span className="posted-on">
                          <a href="#">5 Jan 2023</a>
                        </span>
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            <a>Best Plants for Every Season</a>
                          </Link>
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Banner Widget */}
                <div className="sidebar-widget widget-banner mb-40 wow fadeInUp">
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

                {/* Tag Widget */}
                <div className="sidebar-widget widget-tag-cloud mb-40 wow fadeInUp">
                  <h4 className="widget-title">Tags</h4>
                  <a href="#">Gardening</a>
                  <a href="#">Landscaping</a>
                  <a href="#">Plants</a>
                  <a href="#">Trimming</a>
                  <a href="#">Yard</a>
                  <a href="#">Yard Maintenance</a>
                  <a href="#">Tree</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Start Partners Section ======*/}
      <Partners />
    </Layout>
  );
};
export default BlogStandard;
