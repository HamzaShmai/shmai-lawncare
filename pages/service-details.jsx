import ServiceDetailsTemplate from "@/src/components/ServiceDetailsTemplate";
import { lawnliftServices } from "@/src/data/services";

const ServiceDetails = () => (
  <ServiceDetailsTemplate service={lawnliftServices[0]} services={lawnliftServices} />
);

export default ServiceDetails;
