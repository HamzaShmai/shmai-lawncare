import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layouts/Layout";

const TermsAndConditions = () => {
  return (
    <Layout>
      <PageBanner
        pageName={"Terms and Conditions"}
        description={
          "Terms that govern use of LawnLift website solutions and digital services."
        }
      />
      <section className="about-section pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title mb-25">
                <h2>Terms and Conditions</h2>
              </div>
              <p>
                These Terms and Conditions apply to all LawnLift website, SEO, and digital
                marketing services. By using our website, you agree to these terms.
              </p>
              <h4 className="mt-30">Service Scope</h4>
              <p>
                Project scope, timelines, deliverables, and pricing are defined in approved
                proposals or agreements. Any additional work may require separate approval.
              </p>
              <h4 className="mt-30">Client Responsibilities</h4>
              <p>
                Clients are responsible for providing accurate business details, approvals, content,
                and timely communication required to complete project milestones.
              </p>
              <h4 className="mt-30">Payments</h4>
              <p>
                Payment terms are shared before project start. Delayed payments may impact timeline
                and delivery schedules for active services.
              </p>
              <h4 className="mt-30">Intellectual Property</h4>
              <p>
                Final website assets and content ownership transfers as agreed after full payment.
                LawnLift may showcase completed work in its portfolio unless otherwise requested.
              </p>
              <h4 className="mt-30">Limitation of Liability</h4>
              <p>
                LawnLift is not liable for indirect losses related to third-party outages, platform
                changes, or events outside our reasonable control.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsAndConditions;
