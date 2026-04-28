import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layouts/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <PageBanner
        pageName={"Privacy Policy"}
        description={
          "How LawnLift collects, uses, and protects your information across our website services."
        }
      />
      <section className="about-section pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title mb-25">
                <h2>Privacy Policy</h2>
              </div>
              <p>
                LawnLift respects your privacy and is committed to protecting your personal
                information. This policy explains what data we collect and how we use it.
              </p>
              <h4 className="mt-30">Information We Collect</h4>
              <p>
                We may collect your name, email address, phone number, business information, and
                project details when you submit forms or contact us for services.
              </p>
              <h4 className="mt-30">How We Use Information</h4>
              <p>
                We use your information to respond to inquiries, deliver website and SEO services,
                improve customer support, and share important updates related to your project.
              </p>
              <h4 className="mt-30">Data Security</h4>
              <p>
                We apply reasonable security measures to protect your data. While no online system
                is fully risk-free, we work to prevent unauthorized access or misuse.
              </p>
              <h4 className="mt-30">Third-Party Services</h4>
              <p>
                We may use trusted third-party tools for analytics, hosting, communication, and
                payments. These providers process data according to their own privacy policies.
              </p>
              <h4 className="mt-30">Contact Us</h4>
              <p>
                If you have questions about this Privacy Policy, please contact LawnLift through
                our contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
