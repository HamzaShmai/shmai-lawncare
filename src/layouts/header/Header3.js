import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { Fragment, useState } from "react";
import SearchModal from "../SearchModal";
import Sidebar from "../Sidebar";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
const Header3 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchModal, setSearchModal] = useState(false);
  return (
    <Fragment>
      <SearchModal
        show={searchModal}
        handleClose={() => setSearchModal(false)}
      />
      <header className="header-area header-three">
        <div className="header-top-bar-two white-bg d-none d-xl-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8">
                {/*====== Top Left ======*/}
                <div className="top-left">
                  <span>
                    <i className="far fa-envelope" />

                    <a href="mailto:support@gmail.com">support@gmail.com</a>
                  </span>
                  <span>
                    <i className="far fa-phone-plus" />

                    <a href="tel:+000(123)45688">+000 (123) 456 88</a>
                  </span>
                  <span>
                    <i className="far fa-map-marker-alt" />
                    55 Main Street, New York
                  </span>
                </div>
              </div>
              <div className="col-lg-4">
                {/*====== Top Right ======*/}
                <div className="top-right d-flex float-lg-right">
                  <div className="inl">
                    <span className="xeno">

                      Follow us
                    </span>
                  </div>
                  <ul class="social-link">
                    <li>
                      <a href="#" class="social-icon">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="social-icon">
                        <FaXTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#" class="social-icon">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="social-icon">
                        <i class="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*======= Header Navigation ======*/}
        <div className="header-navigation main-bg navigation-white d-xl-block d-none">
          <div className="nav-overlay" />
          <div className="container-fluid">
            {/*======= Primary Menu ======*/}
            <div className="primary-menu">
              {/*======= Site Branding ======*/}
              <div className="site-branding">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/logo-shmai.png"
                      alt="Site Logo"
                    />
                  </a>
                </Link>
              </div>
              {/*======= Nav Menu ======*/}
              <div className="nav-menu">
                {/* Mobile Logo */}
                <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                  <Link legacyBehavior href="/">
                    <a className="brand-logo">
                      <img
                        src="assets/images/logo/logo-shmai1.png"
                        alt="Site Logo"
                      />
                    </a>
                  </Link>
                </div>
                {/*=== Nav Search ===*/}
                <div className="nav-search mb-30 d-block d-xl-none ">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Search Here"
                        name="email"
                        required
                      />
                      <button className="search-btn">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
                {/*=== Main menu ===*/}
                <Menu />
                {/*====== Menu Button ======*/}
                <div className="menu-button mt-40 d-xl-none">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn secondary-btn">Get a Quote</a>
                  </Link>
                </div>
              </div>
              {/*======= Nav Right Item ======*/}
              <div className="nav-right-item d-flex align-items-center">

                <div
                  className="search-btn"
                  data-toggle="modal"
                  data-target="#search-modal"
                  onClick={() => setSearchModal(true)}
                >
                  <i className="far fa-search" />
                </div>
                <div className="menu-button d-xl-block d-none">
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn secondary-btn">Book now</a>
                  </Link>
                </div>
                <div
                  className="bar-button"
                  data-toggle="modal"
                  data-target="#sidebar-modal"
                  onClick={handleShow}
                >
                  <img src="assets/images/bar2.png" alt="Image" />
                </div>

              </div>
            </div>
          </div>
        </div>
        <MobileMenu
          handleShow={handleShow}
          logo="assets/images/logo/logo-shmai.png"
          extraClass={"main-bg navigation-white"}
          barIcon="assets/images/bar2.png"
        />
      </header>
      <Sidebar show={show} handleClose={handleClose} />
    </Fragment>
  );
};
export default Header3;
