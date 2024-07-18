import { useState } from "react";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { InputNumber } from "primereact/inputnumber";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import { Dropdown } from "primereact/dropdown";
import ProductCard from "./ServiceCard";
import { Separator } from "./Separator";

interface City {
  name: string;
  code: string;
}

interface FormState {
  date: Nullable<Date>;
  arrivalTime: Nullable<Date>;
  selectedCity: City | null;
  arrivalFlightNumber: number | null;
  departureFlightNumber: number | null;
}

interface ServicesState {
  arrival: boolean;
  departure: boolean;
}

const Services = () => {
  const [formState, setFormState] = useState<FormState>({
    date: null,
    arrivalTime: null,
    selectedCity: null,
    arrivalFlightNumber: null,
    departureFlightNumber: null,
  });

  const [services, setServices] = useState<ServicesState>({
    arrival: false,
    departure: false,
  });

  const cities: City[] = [
    { name: "New York", code: "NY" },
    { name: "London", code: "LDN" },
    { name: "Paris", code: "PRS" },
    { name: "Tokyo", code: "TKY" },
    { name: "Cairo", code: "CAI" },
  ];

  const handleServiceChange = (e: CheckboxChangeEvent) => {
    setServices((prevServices) => ({
      ...prevServices,
      [e.value]: e.checked,
    }));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormChange = (name: keyof FormState, value: any) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-3">
      <div className="space-y-3">
        <h3 className="text-2xl text-[#D90505] font-semibold mb-4">
          SELECT YOUR SERVICE
        </h3>
        <p className="font-light">
          Choose the SkyPass Services you wish to book
        </p>
        <div className="grid grid-cols-12 gap-4 mt-4">
          <div className="flex items-center col-span-12 md:col-span-6 p-4 border rounded-md">
            <Checkbox
              inputId="arrival"
              name="arrival"
              value="arrival"
              onChange={handleServiceChange}
              checked={services.arrival}
            />
            <label htmlFor="arrival" className="ml-2">
              ARRIVAL SERVICES
            </label>
          </div>
          <div className="flex items-center col-span-12 md:col-span-6 p-4 border rounded-md">
            <Checkbox
              inputId="departure"
              name="departure"
              value="departure"
              onChange={handleServiceChange}
              checked={services.departure}
            />
            <label htmlFor="departure" className="ml-2">
              DEPARTURE SERVICES
            </label>
          </div>
        </div>
      </div>
      <Separator />
      {services.arrival && (
        <div className="space-y-4">
          <ProductCard
            title="Arrival Fast Pass"
            price="$75.00"
            hint="Per Passenger - Adults & Kids 3+"
            description="Gain access to expedited processing lanes thru Passport Control and Customs on Arrival in Turks and Caicos"
          />
          <ProductCard
            title="Arrival Suv Transfer"
            price="$135.00"
            hint="Per SUV - Each vehicle = 6 seats"
            description="Private Luxury SUV Transfer on arrival in Turks and Caicos for a private experience from the airport to your hotel or villa. Avoid sharing a taxi or hotel shuttle and start your vacation right"
          />
          <ProductCard
            title="Arrival Van Transfer"
            price="$150.00"
            hint="Per VAN - Each vehicle = 10 seats"
            description="Private Luxury SUV Transfer on arrival in Turks and Caicos for a private experience from the airport to your hotel or villa. Avoid sharing a taxi or hotel shuttle and start your vacation right."
          />
        </div>
      )}
      {services.departure && (
        <div className="space-y-4">
          <ProductCard
            title="Departure Fast Pass"
            price="$75.00"
            hint="Per Passenger - Adults & Kids 3+"
            description="Access expedited security checkpoints with our airport concierge"
          />
          <ProductCard
            title="Departure Suv Transfer"
            price="$135.00"
            hint="Per SUV - Each vehicle = 6 seats"
            description="Experience our private SUV transfers from hotel to Villa to the airport"
          />
          <ProductCard
            title="Departure Van Transfer"
            price="$150.00"
            hint="Per VAN - Each vehicle = 10 seats"
            description="Experience our private SUV transfers from hotel to Villa to the airport"
          />
        </div>
      )}
      <Separator />
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Flight Information</h3>
        <div className="grid grid-cols-12 gap-4">
          {services.arrival && (
            <>
              <div className="flex flex-col col-span-12 md:col-span-6">
                <label className="text-[#2a2a2a] font-semibold">
                  Arrival Date<span className="text-red-500">*</span>
                </label>
                <Calendar
                  value={formState.date}
                  onChange={(e) => handleFormChange("date", e.value)}
                  dateFormat="mm/dd/yy"
                  placeholder="MM/DD/YYYY"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col col-span-12 md:col-span-6">
                <label className="text-[#2a2a2a] font-semibold">
                  Arrival Time<span className="text-red-500">*</span>
                </label>
                <Calendar
                  value={formState.arrivalTime}
                  onChange={(e) => handleFormChange("arrivalTime", e.value)}
                  timeOnly
                  hourFormat="12"
                  placeholder="HH:MM AM/PM"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col col-span-12 md:col-span-6">
                <label className="text-[#2a2a2a] font-semibold">
                  Arrival Airline<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={formState.selectedCity}
                  options={cities}
                  onChange={(e) => handleFormChange("selectedCity", e.value)}
                  optionLabel="name"
                  placeholder="Select a City"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col col-span-12 md:col-span-6">
                <label className="text-[#2a2a2a] font-semibold">
                  Arrival Flight Number<span className="text-red-500">*</span>
                </label>
                <InputNumber
                  value={formState.arrivalFlightNumber}
                  onValueChange={(e) =>
                    handleFormChange("arrivalFlightNumber", e.value)
                  }
                  className="w-full"
                />
              </div>
            </>
          )}
          {services.departure && (
            <>
              <div className="flex flex-col col-span-12 md:col-span-6">
                <label className="text-[#2a2a2a] font-semibold">
                  Departure Date<span className="text-red-500">*</span>
                </label>
                <Calendar
                  value={formState.date}
                  onChange={(e) => handleFormChange("date", e.value)}
                  dateFormat="mm/dd/yy"
                  placeholder="MM/DD/YYYY"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col col-span-12 md:col-span-6">
                <label className="text-[#2a2a2a] font-semibold">
                  Departure Time<span className="text-red-500">*</span>
                </label>
                <Calendar
                  value={formState.arrivalTime}
                  onChange={(e) => handleFormChange("arrivalTime", e.value)}
                  timeOnly
                  hourFormat="12"
                  placeholder="HH:MM AM/PM"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col col-span-12 md:col-span-6">
                <label className="text-[#2a2a2a] font-semibold">
                  Departure Airline<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={formState.selectedCity}
                  options={cities}
                  onChange={(e) => handleFormChange("selectedCity", e.value)}
                  optionLabel="name"
                  placeholder="Select a City"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col col-span-12 md:col-span-6">
                <label className="text-[#2a2a2a] font-semibold">
                  Departure Flight Number<span className="text-red-500">*</span>
                </label>
                <InputNumber
                  value={formState.departureFlightNumber}
                  onValueChange={(e) =>
                    handleFormChange("departureFlightNumber", e.value)
                  }
                  className="w-full"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
