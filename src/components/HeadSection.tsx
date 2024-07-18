const HeadSection = () => {
  return (
    <div className="text-center flex flex-col items-center mt-4 p-2">
      <img
        className="w-[414px] h-[187px]"
        src="/src/assets/skypass-img.jpg"
        alt="SkyPass Image"
      />
      <span className="text-3xl capitalize font-bold text-[#ff0000]">
        Book Now
      </span>
    </div>
  );
};

export default HeadSection;
