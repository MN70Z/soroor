const OurCustomers = () => {
  return (
    <div className="self-stretch bg-gray-300 overflow-hidden flex flex-col items-center justify-start py-[100px] px-5 box-border gap-[40px] max-w-full z-[1] text-center text-21xl text-solid-white font-jost mq450:pt-[65px] mq450:pb-[65px] mq450:box-border mq825:gap-[20px_40px]">
      <div className="w-[1170px] flex flex-row items-start justify-center max-w-full">
        <div className="w-[281px] flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <button className="cursor-pointer [border:none] py-[5px] px-[9px] bg-primary-color rounded-xl flex flex-row items-start justify-start hover:bg-cadetblue">
              <div className="relative text-xs tracking-[1px] font-semibold font-jost text-solid-white text-left inline-block min-w-[71px]">
                Testimonial
              </div>
            </button>
          </div>
          <h1 className="m-0 self-stretch relative text-inherit leading-[50px] font-bold font-inherit mq450:text-5xl mq450:leading-[30px] mq825:text-13xl mq825:leading-[40px]">
            Our Customers
          </h1>
        </div>
      </div>
      <div className="w-[1170px] flex flex-row items-start justify-between opacity-[0.6] gap-[20px] max-w-full mq1125:flex-wrap mq1125:justify-center">
        <div className="h-16 w-[167px] relative">
          <div className="absolute top-[0px] left-[0px] w-full h-full" />
          <img
            className="absolute top-[15px] left-[11px] w-[34.2px] h-[34.2px] object-contain hidden"
            alt=""
            src="/tvit-1--white@2x.png"
          />
          <img
            className="absolute top-[15px] left-[11px] w-[34.2px] h-[34.2px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/frame-711@2x.png"
          />
          <img
            className="absolute top-[23.9px] left-[55.9px] w-[92.1px] h-[15.2px] z-[1]"
            loading="lazy"
            alt=""
            src="/rotashow.svg"
          />
        </div>
        <div className="h-16 w-[166px] flex flex-row items-end justify-start py-3.5 px-[23px] box-border gap-[16px]">
          <div className="h-16 w-[167px] relative hidden" />
          <img
            className="h-9 w-9 relative object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/frame-712@2x.png"
          />
          <div className="h-6 flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[11.3px] box-border">
            <img
              className="self-stretch h-[12.7px] relative max-w-full overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/waves.svg"
            />
          </div>
        </div>
        <div className="h-16 w-[167px] relative">
          <div className="absolute top-[0px] left-[0px] w-full h-full" />
          <img
            className="absolute top-[15px] left-[15px] w-[34.2px] h-[34.2px] object-contain hidden"
            alt=""
            src="/tvit-1--white1@2x.png"
          />
          <img
            className="absolute top-[15px] left-[15px] w-[34.2px] h-[34.2px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/frame-711-1@2x.png"
          />
          <img
            className="absolute top-[23.9px] left-[59.9px] w-[92.1px] h-[15.2px] z-[1]"
            loading="lazy"
            alt=""
            src="/rotashow.svg"
          />
        </div>
        <div className="h-16 w-[167px] relative">
          <div className="absolute top-[0px] left-[0px] w-full h-full" />
          <img
            className="absolute top-[16px] left-[13px] w-8 h-8 object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/frame-710@2x.png"
          />
          <img
            className="absolute top-[23px] left-[54px] w-[99.6px] h-[17.6px] z-[1]"
            loading="lazy"
            alt=""
            src="/travelers.svg"
          />
        </div>
        <div className="h-16 w-[166px] relative">
          <div className="absolute top-[0px] left-[0px] w-full h-full" />
          <img
            className="absolute top-[13px] left-[6px] w-[37px] h-[37px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/frame-709@2x.png"
          />
          <img
            className="absolute top-[19px] left-[55px] w-[105.5px] h-[25.8px] z-[1]"
            loading="lazy"
            alt=""
            src="/goldlines.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurCustomers;
