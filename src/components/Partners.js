import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partners = () => {
  // Direct settings with ALL drag properties
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    touchThreshold: 10,
    // Desktop drag ke liye yeh property bhi add karo
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          draggable: true,
          autoplay: true,
          swipe: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          draggable: true,
          swipe: true,
          draggable: true,

        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          draggable: true,
          swipe: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          draggable: true,
          swipe: true,
        },
      },
    ],
  };

  return (
    <section className="partners-section">
      <div className="container">
        <Slider {...sliderSettings} className="partner-slider-one pb-70 wow fadeInDown">
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                <img src="assets/images/products/logo.webp" alt="Partner Image" />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                <img src="assets/images/partners/partner-2.png" alt="Partner Image" />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                <img src="assets/images/products/logo.png" alt="Partner Image" />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                <img src="assets/images/products/logo4.jpg" alt="Partner Image" />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                <img src="assets/images/products/logo6.png" alt="Partner Image" />
              </a>
            </div>
          </div>
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                <img src="assets/images/partners/partner-4.png" alt="Partner Image" />
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Partners;