const Footer = () => {
  return (
    <>
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
            By clicking on the button above, you will submit the info above and
            you will be redirected to a secure payment page.
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
    </>
  );
};

export default Footer;
