const Footer = () => {
  return (
    <div className="w-[1170px] flex flex-row items-start justify-between max-w-full gap-[20px] z-[1] text-left text-13xl text-solid-white font-jost mq1125:flex-wrap">
      <div className="w-[756.5px] flex flex-col items-start justify-start pt-[47px] px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq825:flex-wrap">
          <div className="w-[374px] flex flex-col items-start justify-start gap-[10px] min-w-[374px] max-w-full mq450:min-w-full mq825:flex-1">
            <h1 className="m-0 relative text-inherit leading-[40px] font-semibold font-inherit inline-block min-w-[100px] mq450:text-lgi mq450:leading-[24px] mq825:text-7xl mq825:leading-[32px]">
              Soroor
            </h1>
            <div className="self-stretch relative text-sm leading-[24px]">
              We wish you a wonderful experience with Soroor. May our products
              and services bring beauty, joy, and inspiration to your life.
            </div>
          </div>
          <div className="h-28 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[234px] text-xl text-primary-color mq825:flex-1">
            <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
              <b className="relative mq450:text-base">
                Have you any questions?
              </b>
              <div className="flex-1 flex flex-row items-start justify-start gap-[14px] text-base text-solid-white">
                <img
                  className="h-10 w-10 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/claritytalkbubblesline.svg"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="flex flex-col items-start justify-start gap-[7px]">
                    <div className="relative whitespace-nowrap">
                      +44 123 456 7890
                    </div>
                    <div className="relative whitespace-nowrap">
                      example@email.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[216px] flex flex-col items-start justify-start gap-[24px] text-base">
        <b className="relative text-xl inline-block font-title-header-5-bold text-primary-color min-w-[125px] mq450:text-base">
          Follow us on
        </b>
        <div className="flex-1 flex flex-row items-start justify-start gap-[15px]">
          <img
            className="h-[22px] w-[22px] relative"
            alt=""
            src="/facebook.svg"
          />
          <div className="relative font-medium inline-block min-w-[68px]">
            Facebook
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-[15px]">
          <img
            className="h-[22px] w-[22px] relative object-contain"
            alt=""
            src="/twitter@2x.png"
          />
          <div className="relative font-medium inline-block min-w-[47px]">
            Twitter
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[15px]">
          <div className="h-[23px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
            <img
              className="w-[22px] h-[22px] relative"
              alt=""
              src="/linkedin.svg"
            />
          </div>
          <div className="relative font-medium inline-block min-w-[60px]">
            LinkedIn
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[15px]">
          <div className="h-6 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <img
              className="w-[22px] h-[22px] relative"
              alt=""
              src="/insta.svg"
            />
          </div>
          <div className="relative font-medium inline-block min-w-[69px]">
            Instagram
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
