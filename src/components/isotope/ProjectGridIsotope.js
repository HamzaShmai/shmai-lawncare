import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ProjectGridIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery-active", {
        itemSelector: ".item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section className="gallery-section pt-95 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            {/*====== Section Title ======*/}
            <div className="section-title mb-40">
              <span className="sub-title">
                <i className="flaticon-plant" />
                Lawn Service Website Portfolio
              </span>
              <p>Showcasing modern, high-performing websites built specifically for lawn care and landscaping businesses.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/*====== Filter Button ======*/}
            <ul className="project-filter mb-50">
              <li
                className={`c-pointer ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
              >
                Show All
              </li>
              <li
                onClick={handleFilterKeyChange("cat-1")}
                className={activeBtn("cat-1")}
              >
                Garden
              </li>
              <li
                onClick={handleFilterKeyChange("cat-2")}
                className={activeBtn("cat-2")}
              >
                Landscape
              </li>
              <li
                onClick={handleFilterKeyChange("cat-3")}
                className={activeBtn("cat-3")}
              >
                Transport
              </li>
              <li
                onClick={handleFilterKeyChange("cat-4")}
                className={activeBtn("cat-4")}
              >
                Team
              </li>
              <li
                onClick={handleFilterKeyChange("cat-5")}
                className={activeBtn("cat-5")}
              >
                Plants
              </li>
            </ul>
          </div>
        </div>
        <div className="row gallery-active">
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-1 cat-4">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInDown">
              <div className="project-img">
                <img src="assets/images/products/project3.png" alt="Gallery Image" />
                <div className="hover-overlay">
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Garden Caring</a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/project-details">
                        <a>Water The Plants</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-2">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInUp">
              <div className="project-img">
                <img src="assets/images/products/project3.png" alt="Portfilio projects" />
                <div className="hover-overlay">
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Garden Caring</a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/project-details">
                        <a>Water The Plants</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-3 cat-5">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInDown">
              <div className="project-img">
                <img
                  src="assets/images/products/projecrt1.png"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Garden Caring</a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/project-details">
                        <a>Water The Plants</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-4 cat-1">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInLeft">
              <div className="project-img">
                <img
                  src="assets/images/products/project4.png"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Garden Carings</a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/project-details">
                        <a>Water The Plants</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-5 cat-2">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInDown">
              <div className="project-img">
                <img
                 src="assets/images/products/project5.png"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Garden Caring</a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/project-details">
                        <a>Water The Plants</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-4 cat-3">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInRight">
              <div className="project-img">
                <img
                  src="assets/images/products/project6.png"
                  alt="Gallery Image"
                />
                <div className="hover-overlay">
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="hover-content text-white">
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Garden Caring</a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/project-details">
                        <a>Water The Plants</a>
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
  );
};
export default ProjectGridIsotope;
