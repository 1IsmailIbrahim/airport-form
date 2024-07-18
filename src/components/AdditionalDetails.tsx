import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { Button } from "primereact/button";

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

  // const handleSubmit = () => {
  //   const { termsChecked, securityChecked, transportation } = formState;
  //   // Example validation logic
  //   if (!termsChecked || !securityChecked || !transportation) {
  //     console.error("Form validation failed.");
  //     return;
  //   }
  //   console.log("Form submitted successfully!");
  //   setFormState({ ...formState, formSubmitted: true });
  //   // Proceed with form submission
  // };

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

      {/* PAY NOW Section */}
      <div className="pay-now p-2 flex flex-col col-span-12">
        <Button
          label="PAY NOW"
          icon="pi pi-check"
          className="col-span-12 w-fit bg-[#0142a2] mt-5 mx-auto p-button"
          aria-label="PAY NOW"
        />
        <div className="col-span-12 grid grid-cols-12 gap-2 mt-5">
          <div className="col-span-10 flex items-center gap-2">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <path
                fill="currentColor"
                d="M13.207 7.014V5.25c0 -1.477 -1.23 -2.707 -2.707 -2.707S7.793 3.773 7.793 5.25v1.764h5.414zm-2.707 7.875c0.943 0 1.764 -0.821 1.764 -1.764s-0.821 -1.764 -1.764 -1.764 -1.764 0.821 -1.764 1.764 0.821 1.764 1.764 1.764zm5.25 -7.875c0.943 0 1.764 0.78 1.764 1.723v8.777c0 0.943 -0.821 1.723 -1.764 1.723H5.25c-0.943 0 -1.764 -0.78 -1.764 -1.723V8.737c0 -0.943 0.821 -1.723 1.764 -1.723h0.861v-1.764c0 -2.42 1.969 -4.389 4.389 -4.389s4.389 1.969 4.389 4.389v1.764H15.75z"
              ></path>
            </svg>
            <p className="text-sm font-bold text-[#808080]">
              By clicking on the button above, you will submit the info above
              and you will be redirected to a secure payment page.
            </p>
          </div>
          <div className="col-span-2 flex items-center gap-2">
            <img src="/src/assets/paypal1.svg" alt="Secure Payment Methods" />
          </div>
        </div>
        <div className="h-[1px] col-span-12 mx-auto w-[80%] my-4 flex bg-slate-600"></div>
        <img
          src="/src/assets/paypal2.svg"
          className="h-6 col-span-12 w-10 flex mx-auto"
          alt="PayPal Logo"
        />
      </div>
    </div>
  );
};

export default AdditionalDetails;
