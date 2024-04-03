const HeroSection = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-between py-[120px] px-[135px] box-border max-w-full gap-[20px] z-[1] mt-[-691px] text-left text-xs text-solid-white font-jost mq825:pl-[33px] mq825:pr-[33px] mq825:pb-[78px] mq825:box-border mq1400:flex-wrap mq1400:pl-[67px] mq1400:pr-[67px] mq1400:box-border">
      <div className="w-[530px] flex flex-col items-start justify-start gap-[40px] min-w-[530px] max-w-full mq1125:min-w-full mq825:gap-[20px_40px] mq1400:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <div className="rounded-xl bg-primary-color flex flex-row items-start justify-start py-[5px] px-[9px]">
            <div className="relative tracking-[1px] font-semibold inline-block min-w-[61px]">
              Bussiness
            </div>
          </div>
          <b className="self-stretch relative text-37xl leading-[64px] mq450:text-15xl mq450:leading-[38px] mq825:text-26xl mq825:leading-[51px]">
            <p className="m-0">{`Every thing to grow `}</p>
            <p className="m-0">your invitations,</p>
            <p className="m-0">
              <span className="text-primary-color">–</span>
              <span> all in one place</span>
            </p>
          </b>
        </div>
        <div className="self-stretch relative text-xl leading-[32px] mq450:text-base mq450:leading-[26px]">
          Join us at Soroor, your one-stop destination for everything you need
          to grow your business. Discover a world of possibilities and unlock
          the tools, resources, and support to take your business to new
          heights. Let's embark on this journey together and create success, all
          in one place.
        </div>
        <button className="cursor-pointer [border:none] pt-3.5 px-5 pb-3 bg-primary-color h-[46px] rounded-lg overflow-hidden shrink-0 flex flex-row items-center justify-center box-border gap-[16px] whitespace-nowrap hover:bg-cadetblue">
          <b className="relative text-sm leading-[18px] inline-block font-josefin-sans text-solid-white text-left min-w-[54px]">
            Sign Up
          </b>
          <img className="h-[11px] w-4 relative" alt="" src="/line-1.svg" />
        </button>
      </div>
      <img
        className="h-[327px] w-[569px] relative object-cover max-w-full mq1400:flex-1"
        loading="lazy"
        alt=""
        src="/1@2x.png"
      />
    </div>
  );
};

export default HeroSection;
