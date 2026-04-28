import ServiceDetailsTemplate from "@/src/components/ServiceDetailsTemplate";
import { lawnliftServices } from "@/src/data/services";

const DynamicServiceDetails = ({ service }) => {
  if (!service) return null;
  return <ServiceDetailsTemplate service={service} services={lawnliftServices} />;
};

export const getStaticPaths = () => ({
  paths: lawnliftServices.map((service) => ({
    params: { slug: service.slug },
  })),
  fallback: false,
});

export const getStaticProps = ({ params }) => {
  const service = lawnliftServices.find((item) => item.slug === params.slug) || null;
  return {
    props: {
      service,
    },
  };
};

export default DynamicServiceDetails;
