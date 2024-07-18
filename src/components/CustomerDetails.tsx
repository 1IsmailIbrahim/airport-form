import { InputText } from "primereact/inputtext";

const CustomerDetails = () => {
  return (
    <div className="space-y-5">
      <div>
        <label className="text-[#2a2a2a] font-semibold">
          Customer Name<span className="text-red-500">*</span>
        </label>
        <p className="text-sm text-[#808080]">
          Insert the name of the Lead Passenger. This is the name that will be
          used to identify your booking.
        </p>
        <div className="grid grid-cols-12 gap-4 mt-2">
          <InputText
            className="col-span-12 md:col-span-6"
            type="text"
            placeholder="First*"
          />
          <InputText
            className="col-span-12 md:col-span-6"
            type="text"
            placeholder="Last*"
          />
        </div>
      </div>
      <div className="space-y-5">
        <div className="grid grid-cols-12 gap-4">
          <div className="flex flex-col col-span-12 md:col-span-6 ">
            <label className="text-[#2a2a2a] font-semibold">
              Email<span className="text-red-500">*</span>
            </label>
            <InputText type="text" />
          </div>
          <div className="flex flex-col col-span-12 md:col-span-6 ">
            <label className="text-[#2a2a2a] font-semibold">
              Mobile Phone<span className="text-red-500">*</span>
            </label>
            <InputText type="number" placeholder="### ### ####" />
          </div>
        </div>
        <p className="text-xs text-[#4C4C4C]">
          **By entering your phone number, you consent to SkyPass Caribbean
          sending text messages regarding your booking. Standard message and
          data rates may apply and frequency of messages may vary. You can
          opt-out at any time by replying STOP or HELP. However, opting out may
          affect our ability to communicate important booking information. We
          prioritize your privacy and only use your phone number for
          booking-related communications. For more information please review our
          privacy policy.
        </p>
      </div>
      <div className="flex flex-col">
        <label className="text-[#2a2a2a] font-semibold">
          Hotel/Villa Name<span className="text-red-500">*</span>
        </label>
        <InputText type="text" />
      </div>
    </div>
  );
};

export default CustomerDetails;
