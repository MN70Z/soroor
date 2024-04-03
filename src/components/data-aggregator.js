import { useState } from "react";

const Pricing = () => {
  const [checkIconChecked, setCheckIconChecked] = useState(true);
  const [checkIcon1Checked, setCheckIcon1Checked] = useState(true);
  const [checkIcon2Checked, setCheckIcon2Checked] = useState(true);
  const [checkIcon3Checked, setCheckIcon3Checked] = useState(true);
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[100px] box-border max-w-full text-center text-21xl text-solid-white font-jost mq450:pb-[42px] mq450:box-border mq1125:pb-[65px] mq1125:box-border">
      <div className="w-[1033px] flex flex-col items-start justify-start gap-[36px] max-w-full mq825:gap-[18px_36px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="w-[179px] flex flex-col items-start justify-start gap-[10px]">
            <div className="flex flex-row items-start justify-start py-0 pr-[57px] pl-[57.5px]">
              <button className="cursor-pointer [border:none] py-[5px] px-[9px] bg-primary-color rounded-xl flex flex-row items-start justify-start hover:bg-cadetblue">
                <div className="relative text-xs tracking-[1px] font-semibold font-jost text-solid-white text-left inline-block min-w-[45px]">
                  Pricing
                </div>
              </button>
            </div>
            <h1 className="m-0 self-stretch relative text-inherit leading-[50px] font-bold font-inherit mq450:text-5xl mq450:leading-[30px] mq825:text-13xl mq825:leading-[40px]">
              Our Price
            </h1>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-6 text-xl">
          <div className="w-[1033px] relative leading-[33px] flex items-center justify-center mq450:text-base mq450:leading-[26px]">
            Explore our pricing and packages to find the perfect fit for your
            needs, with options to suit every budget and requirement.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-5xl">
          <div className="w-[747px] flex flex-row items-start justify-center max-w-full [row-gap:20px] mq825:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-[42px] px-0 pb-0 box-border min-w-[242px] max-w-full mq825:flex-1 mq825:pt-[27px] mq825:box-border">
              <div className="self-stretch rounded-tl-3xl rounded-tr-none rounded-br-none rounded-bl-3xl bg-gray-100 flex flex-col items-start justify-start py-16 px-12 gap-[40px] mq450:gap-[20px_40px] mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pt-[42px] mq825:pb-[42px] mq825:box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                  <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit inline-block min-w-[99px] mq450:text-lgi mq450:leading-[26px]">
                    Standard
                  </h3>
                  <div className="self-stretch h-0.5 relative bg-gray-200" />
                  <h1 className="m-0 relative text-21xl tracking-[-0.01em] leading-[48px] font-bold font-inherit inline-block min-w-[82px] mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
                    Free
                  </h1>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-sm">
                  <div className="self-stretch h-6 flex flex-row items-start justify-start gap-[8px]">
                    <input
                      className="accent-darkslategray m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      checked={checkIconChecked}
                      type="checkbox"
                      onChange={(event) =>
                        setCheckIconChecked(event.target.checked)
                      }
                    />
                    <div className="flex-1 relative leading-[24px]">
                      Create contact list
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-black">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
                      <div className="h-6 overflow-hidden flex flex-row items-start justify-start pt-px pb-0 pr-[3.5px] pl-[6.5px] box-border">
                        <div className="relative leading-[24px] inline-block min-w-[14px] whitespace-nowrap">
                          ❌
                        </div>
                      </div>
                      <div className="flex-1 relative leading-[24px] text-solid-white inline-block min-w-[93px]">{`Sending campaigns `}</div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
                      <div className="h-6 overflow-hidden flex flex-row items-start justify-start pt-0 pb-px pr-[2.5px] pl-[6.5px] box-border">
                        <div className="mt-[-1px] relative leading-[24px] inline-block min-w-[14px] whitespace-nowrap">
                          ❌
                        </div>
                      </div>
                      <div className="flex-1 relative leading-[24px] text-solid-white inline-block min-w-[93px]">
                        Tracking campaigns
                      </div>
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] py-3.5 px-5 bg-primary-color rounded-lg overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-cadetblue">
                  <b className="relative text-sm leading-[18px] inline-block font-josefin-sans text-solid-white text-left min-w-[81px]">
                    Get Staeted
                  </b>
                </button>
              </div>
            </div>
            <div className="flex-[0.7433] rounded-3xl bg-primary-color shadow-[0px_60px_80px_-44px_rgba(15,_34,_85,_0.12)] box-border overflow-hidden flex flex-col items-start justify-start py-24 px-[47px] gap-[40px] min-w-[243px] max-w-full border-[1px] border-solid border-solid-white mq450:gap-[20px_40px] mq450:pl-5 mq450:pr-5 mq450:box-border mq825:flex-1 mq825:pt-[62px] mq825:pb-[62px] mq825:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-start gap-[16px]">
                    <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit inline-block min-w-[95px] mq450:text-lgi mq450:leading-[26px]">
                      Premium
                    </h3>
                    <button className="cursor-pointer [border:none] py-1.5 px-2 bg-dark-color rounded flex flex-row items-start justify-start whitespace-nowrap hover:bg-dimgray">
                      <b className="relative text-xs leading-[12px] uppercase inline-block font-jost text-solid-white text-left min-w-[95px]">
                        most popular
                      </b>
                    </button>
                  </div>
                </div>
                <div className="self-stretch h-0.5 relative bg-gray-200" />
                <div className="flex flex-col items-start justify-start text-21xl">
                  <b className="relative tracking-[-0.01em] leading-[48px] whitespace-nowrap mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
                    99 SAR
                  </b>
                  <div className="relative text-xs leading-[20px] inline-block min-w-[53px]">
                    per month
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[104px] flex flex-col items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[16px] text-sm">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                  <input
                    className="accent-primary-color m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    checked={checkIcon1Checked}
                    type="checkbox"
                    onChange={(event) =>
                      setCheckIcon1Checked(event.target.checked)
                    }
                  />
                  <div className="flex-1 relative leading-[24px]">
                    Create contact list
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                  <input
                    className="accent-primary-color m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    checked={checkIcon2Checked}
                    type="checkbox"
                    onChange={(event) =>
                      setCheckIcon2Checked(event.target.checked)
                    }
                  />
                  <div className="flex-1 relative leading-[24px]">
                    Sending campaigns
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
                  <input
                    className="accent-primary-color m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    checked={checkIcon3Checked}
                    type="checkbox"
                    onChange={(event) =>
                      setCheckIcon3Checked(event.target.checked)
                    }
                  />
                  <div className="flex-1 relative leading-[24px]">
                    Tracking campaings
                  </div>
                </div>
              </div>
              <button className="cursor-pointer py-3.5 px-[19px] bg-primary-color rounded-lg overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-solid-white hover:bg-cadetblue hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
                <b className="relative text-sm leading-[18px] inline-block font-josefin-sans text-solid-white text-left min-w-[79px]">
                  Get Started
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
