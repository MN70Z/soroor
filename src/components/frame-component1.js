const FrameComponent1 = () => {
  return (
    <div className="w-[1170px] box-border flex flex-row items-start justify-between p-5 max-w-full gap-[20px] z-[2] text-left text-base text-solid-white font-jost border-t-[1px] border-solid border-gray-400 border-b-[1px] mq1125:flex-wrap">
      <div className="flex flex-row items-start justify-start gap-[42px] max-w-full mq825:flex-wrap mq825:gap-[42px_21px]">
        <div className="relative inline-block min-w-[41px]">Home</div>
        <div className="relative inline-block min-w-[62px]">About Us</div>
        <div className="relative inline-block min-w-[57px]">Services</div>
        <div className="relative inline-block min-w-[57px]">Portfolio</div>
        <div className="relative inline-block min-w-[38px]">News</div>
        <div className="relative inline-block min-w-[73px]">Contact Us</div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[41px] mq450:gap-[41px_20px]">
        <div className="relative">{`Terms & Conditions`}</div>
        <div className="relative inline-block min-w-[92px]">Privacy Policy</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
