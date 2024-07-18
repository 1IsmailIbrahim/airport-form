import { InputText } from "primereact/inputtext";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";
import { useState } from "react";
import { Separator } from "./Separator";

const PartnerAgent = () => {
  const [partner, setPartner] = useState("");

  const handlePartnerChange = (e: RadioButtonChangeEvent) => {
    setPartner(e.value);
  };

  return (
    <div className="space-y-3">
      <div>
        <p className="text-[#4C4C4C] font-bold">
          I am a SkyPass Partner Agent booking services on behalf of a client.
        </p>
        <p className="text-sm text-[#808080]">
          A SkyPass Partner Agent is a registered booking agent with a SkyPass
          Partner Number
        </p>
        <div className="grid grid-cols-2 mt-3">
          <div className="flex align-items-center">
            <RadioButton
              inputId="partner"
              name="partner"
              value="yes"
              onChange={handlePartnerChange}
              checked={partner === "yes"}
            />
            <label htmlFor="partner" className="ml-2">
              YES
            </label>
          </div>
          <div className="flex align-items-center">
            <RadioButton
              inputId="not-partner"
              name="not-partner"
              value="no"
              onChange={handlePartnerChange}
              checked={partner === "no"}
            />
            <label htmlFor="not-partner" className="ml-2">
              NO
            </label>
          </div>
        </div>
      </div>
      <Separator />
      {partner === "yes" && (
        <div key="partner-yes" className="grid grid-cols-12 gap-4">
          <div className="flex flex-col col-span-12 md:col-span-6 ">
            <label className="text-[#2a2a2a] font-semibold">
              Booking Agency Name<span className="text-red-500">*</span>
            </label>
            <InputText type="text" />
          </div>
          <div className="flex flex-col col-span-12 md:col-span-6 ">
            <label className="text-[#2a2a2a] font-semibold">
              Booking Agency No<span className="text-red-500">*</span>
            </label>
            <InputText type="text" placeholder="SKY-PTRNXXXX" />
          </div>
          <div className="flex flex-col col-span-12 md:col-span-6 ">
            <label className="text-[#2a2a2a] font-semibold">
              Booking Agent<span className="text-red-500">*</span>
            </label>
            <InputText type="text" />
          </div>
          <div className="flex flex-col col-span-12 md:col-span-6 ">
            <label className="text-[#2a2a2a] font-semibold">
              Booking Agent Email<span className="text-red-500">*</span>
            </label>
            <InputText type="email" />
          </div>
          <p className="text-[#2a2a2a] col-span-12 md:col-span-10 font-semibold text-sm md:text-base">
            Which email address should we send this booking confirmation to?
            <span className="text-red-500">*</span>
          </p>
          <div className="flex align-items-center col-span-6 md:col-span-4 p-3 border rounded-md p-inputgroup flex-1">
            <RadioButton inputId="customer" name="recipient" value="customer" />
            <label htmlFor="customer" className="ml-2">
              Customer
            </label>
          </div>
          <div className="flex align-items-center col-span-6 md:col-span-4 p-3 border rounded-md p-inputgroup flex-1">
            <RadioButton inputId="myself" name="recipient" value="myself" />
            <label htmlFor="myself" className="ml-2">
              Myself
            </label>
          </div>
          <div className="flex align-items-center col-span-6 md:col-span-4 p-3 border rounded-md p-inputgroup flex-1">
            <RadioButton inputId="both" name="recipient" value="both" />
            <label htmlFor="both" className="ml-2">
              Both
            </label>
          </div>
          <h6 className="text-center text-[#D51010] text-[8px] md:text-xs font-semibold col-span-12 italic pb-2 pt-3">
            **Please use ONLY the SkyPass Partner Number assigned to you. Kindly
            note that this information can only be submitted at the time of
            booking and cannot be changed or added to a reservation after it has
            been confirmed. <br />
            For additional support please email: res@skypasscaribbean.com
          </h6>
        </div>
      )}
      {partner === "no" && (
        <div key="partner-no" className="grid grid-cols-12 gap-4">
          <h6 className="text-[#2a2a2a] italic text-sm pt-3 col-span-12 font-semibold">
            If you are interested in becoming a SkyPass Partner Agent please
            enter your email address below.
          </h6>
          <InputText className="col-span-12" type="text" />
        </div>
      )}
      <Separator />
    </div>
  );
};

export default PartnerAgent;
