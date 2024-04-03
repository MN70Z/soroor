import ButtonSignUp from "../components/Button";
import HeroSection from "../components/hero-section";
import Info from "../components/frame-component2";
import Pricing from "../components/data-aggregator";
import OurCustomers from "../components/clients01-desktop-dark";
import FrameComponent1 from "../components/frame-component1";
import Footer from "../components/frame-component";

const BrilworksPracticalTask = () => {
  return (
    <div className="w-full relative bg-dark-color overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[691px] box-border relative max-w-full mq450:pb-[292px] mq450:box-border mq825:pb-[449px] mq825:box-border">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(57,_131,_120,_0.1),_rgba(57,_131,_120,_0))]" />
          <header className="flex-1 overflow-hidden flex flex-row items-center justify-between py-[30px] px-[135px] box-border gap-[20px] max-w-full z-[1] text-left text-13xl text-solid-white font-jost mq450:pl-5 mq450:pr-5 mq450:box-border mq1125:pl-[67px] mq1125:pr-[67px] mq1125:box-border">
            <div className="flex flex-row items-center justify-start">
              <h1 className="m-0 relative text-inherit leading-[40px] font-semibold font-inherit inline-block min-w-[100px] whitespace-nowrap">
                Soroor
              </h1>
            </div>
            <div className="w-[520px] flex flex-row items-center justify-start gap-[40px] max-w-full text-sm mq825:hidden mq825:gap-[40px_20px]">
              <b className="relative leading-[18px] inline-block min-w-[39px]">
                Home
              </b>
              <b className="relative leading-[18px] inline-block min-w-[59px] whitespace-nowrap">
                About us
              </b>
              <b className="relative leading-[18px] inline-block min-w-[46px]">
                Pricing
              </b>
              <b className="relative leading-[18px] inline-block min-w-[50px]">
                Contact
              </b>
              <div className="w-[166px] flex flex-row items-start justify-start gap-[10px]">
                <ButtonSignUp />
                <button className="cursor-pointer py-2.5 px-3 bg-[transparent] flex-1 rounded-lg overflow-hidden flex flex-row items-center justify-center border-[2px] border-solid border-solid-white hover:bg-gainsboro-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-gainsboro-100">
                  <b className="relative text-sm leading-[18px] inline-block font-jost text-solid-white text-left min-w-[46px] whitespace-nowrap">
                    Sign In
                  </b>
                </button>
              </div>
            </div>
          </header>
        </div>
        <HeroSection />
      </section>
      <Info />
      <Pricing />
      <footer className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-base text-solid-white font-title-header-5-bold">
        <OurCustomers />
        <div className="self-stretch flex flex-col items-center justify-start pt-[370px] px-5 pb-[30px] box-border relative gap-[30px] max-w-full mt-[-370px] mq825:pb-5 mq825:box-border">
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(57,_131,_120,_0)_2.6%,_rgba(57,_131,_120,_0.1)_96.88%)]" />
          <FrameComponent1 />
          <Footer />
          <div className="w-[1170px] box-border flex flex-row items-start justify-center pt-[30px] px-5 pb-0 max-w-full z-[1] border-t-[1px] border-solid border-gray-400">
            <div className="relative">
              Copyright © 2022. Brilworks . All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BrilworksPracticalTask;
