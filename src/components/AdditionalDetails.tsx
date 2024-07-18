import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";

interface City {
  name: string;
  code: string;
}

const AdditionalDetails: React.FC = () => {
  const [formState, setFormState] = useState({
    infants: null as boolean | null,
    checkedBags: null as boolean | null,
    transportation: null as City | null,
    comments: "",
    termsChecked: false,
    securityChecked: false,
    formSubmitted: false,
  });

  const transportationOptions: City[] = [
    { name: "New York", code: "NY" },
    { name: "London", code: "LDN" },
    { name: "Paris", code: "PRS" },
    { name: "Tokyo", code: "TKY" },
    { name: "Cairo", code: "CAI" },
  ];

  const clearChoice = (field: keyof typeof formState) => {
    setFormState({ ...formState, [field]: null });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (field: keyof typeof formState, value: any) => {
    setFormState({ ...formState, [field]: value });
  };

  const handleCheckboxChange = (
    field: keyof typeof formState,
    e: CheckboxChangeEvent
  ) => {
    setFormState({ ...formState, [field]: e.checked });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Additional Details</h3>
      <div className="grid grid-cols-12 gap-4">
        <div className="flex flex-col justify-between col-span-12 md:col-span-6">
          {/* Infants */}
          <div>
            <label className="text-[#2a2a2a] font-semibold">
              Are you traveling with infants? <br />
              (kids 0-2 years)
              <span className="text-red-500">*</span>
            </label>
            <p className="col-span-12 text-sm text-[#808080] pt-1">
              Kindly note that we reserve the right to refuse service if the
              details provided are not true.
            </p>
          </div>
          {formState.infants !== null && (
            <div className="col-span-12 md:col-span-6">
              <button
                type="button"
                className="text-blue-500 cursor-pointer mt-2"
                onClick={() => clearChoice("infants")}
              >
                Clear Infants
              </button>
            </div>
          )}
          <div className="flex items-center justify-around space-x-2 mt-2">
            <div className="flex items-center space-x-2 mt-2">
              <RadioButton
                inputId="infantsYes"
                name="infants"
                value={true}
                onChange={(e) => handleChange("infants", e.value)}
                checked={formState.infants === true}
              />
              <label htmlFor="infantsYes">YES</label>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <RadioButton
                inputId="infantsNo"
                name="infants"
                value={false}
                onChange={(e) => handleChange("infants", e.value)}
                checked={formState.infants === false}
              />
              <label htmlFor="infantsNo">NO</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between col-span-12 md:col-span-6">
          {/* Checked Bags */}
          <div>
            <label className="text-[#2a2a2a] font-semibold">
              Are you traveling with checked bags?
              <span className="text-red-500">*</span>
            </label>
            <p className="col-span-12 text-sm text-[#808080] pt-1">
              While we are not airport porters this information helps us to help
              you better.
            </p>
          </div>
          {formState.checkedBags !== null && (
            <div className="col-span-12 md:col-span-6">
              <button
                type="button"
                className="text-blue-500 cursor-pointer mt-2"
                onClick={() => clearChoice("checkedBags")}
              >
                Clear Checked Bags
              </button>
            </div>
          )}
          <div className="flex items-center justify-around space-x-2 mt-2">
            <div className="flex items-center space-x-2 mt-2">
              <RadioButton
                inputId="bagsYes"
                name="checkedBags"
                value={true}
                onChange={(e) => handleChange("checkedBags", e.value)}
                checked={formState.checkedBags === true}
              />
              <label htmlFor="bagsYes">YES</label>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <RadioButton
                inputId="bagsNo"
                name="checkedBags"
                value={false}
                onChange={(e) => handleChange("checkedBags", e.value)}
                checked={formState.checkedBags === false}
              />
              <label htmlFor="bagsNo">NO</label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 col-span-12 pt-2">
          {/* Transportation */}
          <label className="text-[#2a2a2a] col-span-12 font-semibold pt-[10px]">
            Confirm your transportation arrangements
            <span className="text-red-500">*</span>
          </label>
          <Dropdown
            value={formState.transportation}
            options={transportationOptions}
            onChange={(e) => handleChange("transportation", e.value)}
            optionLabel="name"
            placeholder="Select transportation"
            className="col-span-12 md:col-span-6 mt-2 p-dropdown"
          />
        </div>

        <div className="flex flex-col col-span-12">
          {/* Comments */}
          <label className="text-[#2a2a2a] font-semibold">Comments</label>
          <InputTextarea
            value={formState.comments}
            onChange={(e) => handleChange("comments", e.target.value)}
            rows={4}
            placeholder="Enter your comments here..."
            className="w-full md:resize-none"
          />
        </div>

        <div className="col-span-12 grid grid-cols-12 gap-2 md:gap-4 items-start">
          {/* Payment Method */}
          <div className="grid grid-cols-12 justify-items-center col-span-12 pt-2">
            <label className="text-[#2a2a2a] col-span-12 text-center md:text-start font-semibold pt-[10px]">
              Payment Method
            </label>
            <div className="payment-method col-span-12 flex gap-6 md:gap-2 my-2">
              <img
                className="w-[63px] h-[40px]"
                src="/src/assets/visa.png"
                alt="Visa Logo"
              />
              <img
                className="w-[63px] h-[40px]"
                src="/src/assets/mastercard.png"
                alt="MasterCard Logo"
              />
            </div>
          </div>
        </div>

        <div className="col-span-12 grid grid-cols-12 gap-4 items-start mt-5">
          {/* Terms of Service */}
          <div className="grid grid-cols-12 col-span-12 pt-2">
            <label className="text-[#2a2a2a] col-span-12 font-semibold pt-[10px]">
              SkyPass Caribbean - Terms of Service
            </label>
            <div className="flex col-span-12 items-center mt-2">
              <Checkbox
                inputId="termsOfService"
                checked={formState.termsChecked}
                onChange={(e) => handleCheckboxChange("termsChecked", e)}
                className="mr-2"
              />
              <label
                htmlFor="termsOfService"
                className="text-sm cursor-pointer"
              >
                I agree to the terms of use and privacy policy
                <a
                  className="ml-1 text-blue-600"
                  href="https://skypasscaribbean.com/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://skypasscaribbean.com/privacy-policy/
                </a>
                .
              </label>
            </div>
          </div>
          {/* Security Regulations */}
          <div className="grid grid-cols-12 col-span-12 pt-2">
            <label className="text-[#2a2a2a] col-span-12 font-semibold pt-[10px]">
              Immigration & Airport Security Regulations
            </label>
            <div className="flex col-span-12 items-center mt-2">
              <Checkbox
                inputId="securityRegulations"
                checked={formState.securityChecked}
                onChange={(e) => handleCheckboxChange("securityChecked", e)}
                className="mr-2"
              />
              <label
                htmlFor="securityRegulations"
                className="text-sm cursor-pointer"
              >
                I confirm that I have read and understood the regulations at all
                times and the information provided is accurate.
              </label>
            </div>
          </div>
        </div>
      </div>

      <p className="p-2 col-span-12 mt-5 italic text-red-600 text-center">
        Please add us: fastpass@skypasscaribbean.com to your email contacts. If
        you do not receive an email from us in your INBOX after you submit this
        booking request, kindly check your SPAM folder.
      </p>
    </div>
  );
};

export default AdditionalDetails;
