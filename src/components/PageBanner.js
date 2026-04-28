import Link from "next/link";

const PageBanner = ({ pageName, pageTitle, description }) => {
  return (
    <section
      className="page-title-area text-white bg_cover"
      style={{ backgroundImage: "url(assets/images/bg/page-bg-1.jpg)" }}
    >
      <div className="container">
        {/*======  Page-title-Inner ======*/}
        <div className="page-title-inner text-center">
          <h1 className="page-title">{pageName}</h1>
          {description && <p className="mt-3 mb-3">{description}</p>}
          <div className="gd-breadcrumb">
            <span className="breadcrumb-entry">
              <Link legacyBehavior href="/">
                Home
              </Link>
            </span>
            <span className="separator" />
            <span className="breadcrumb-entry active">{pageName}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
