import HeadSection from "./HeadSection";
import CustomerDetails from "./CustomerDetails";
import PartnerAgent from "./PartnerAgent";
import Services from "./Services";
import { Separator } from "./Separator";
import AdditionalDetails from "./AdditionalDetails";
import { Button } from "primereact/button";
import Footer from "./Footer";

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
      <div className="pay-now p-2 flex flex-col col-span-12">
        <Button
          label="PAY NOW"
          icon="pi pi-check"
          className="col-span-12 w-fit bg-[#0142a2] mt-5 mx-auto p-button"
          aria-label="PAY NOW"
        />
      </div>
      <Footer />
    </div>
  );
};

export default AgentDetails;
