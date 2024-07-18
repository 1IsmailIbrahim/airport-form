import HeadSection from "./HeadSection";
import CustomerDetails from "./CustomerDetails";
import PartnerAgent from "./PartnerAgent";
import Services from "./Services";
import { Separator } from "./Separator";
import AdditionalDetails from "./AdditionalDetails";

const AgentDetails = () => {
  return (
    <div className="space-y-5">
      <HeadSection />
      <CustomerDetails />
      <Separator />
      <PartnerAgent />
      <Services />
      <Separator />
      <AdditionalDetails />
    </div>
  );
};

export default AgentDetails;
