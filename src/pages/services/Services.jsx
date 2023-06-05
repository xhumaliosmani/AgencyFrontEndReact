import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Features from "../../Features/Features";
import F1 from "../../images/Services/1.svg";
import F2 from "../../images/Services/2.svg";
import F3 from "../../images/Services/3.svg";
import F4 from "../../images/Services/4.svg";

const Services = () => {
  return (
    <div>
      <Navbar />
      {/* services start */}

      <div className="max-w-screen overflow-x-hidden font-poppins mt-10 ">
        <h1 className="sm:text-7xl text-transparent font-bold sm:font-extrabold bg-clip-text bg-gradient-to-r to-emerald-600 from-blue-400 text-3xl sm:mt-[8%] flex justify-center text-center">
          Our services that help you Grow!
        </h1>

        {/* the premade component from : https://tailwinduikit.com/components/marketing/page_section/feature*/}
        <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
          {/* Code block starts */}
          <div>
            <section className="max-w-8xl mx-auto container bg-white pt-16">
              <div>
                <div
                  role="contentinfo"
                  className="flex items-center flex-col px-4"
                >
                  <p
                    tabIndex={0}
                    className="focus:outline-none uppercase text-sm text-center text-gray-600 leading-4"
                  >
                    Start Today and
                  </p>
                  <hh1
                    tabIndex={0}
                    className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-[80%] pt-4"
                  >
                    Level UP your business &amp; Maximise your Company's Income
                    & Productivity
                  </hh1>
                </div>
                <div
                  tabIndex={0}
                  aria-label="group of cards"
                  className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4"
                >
                  <div
                    tabIndex={0}
                    aria-label="card 1"
                    className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                  >
                    <div className="w-20 h-20 relative mr-5">
                      <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute text-white bottom-0 left-0  rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img src={F1} alt="drawer" />
                      </div>
                    </div>
                    <div className="w-10/12">
                      <h2
                        tabIndex={0}
                        className="focus:outline-none text-lg font-bold leading-tight text-gray-800"
                      >
                        Always have a Clear Overview
                      </h2>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                      >
                        Always have a clear overview of what's going on with
                        your investments and how well everything is performing.
                        We Deliver a detailed performance report on Everything
                        Important!
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    aria-label="card 2"
                    className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                  >
                    <div className="w-20 h-20 relative mr-5">
                      <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute text-white bottom-0 left-0  rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img src={F2} alt="check" />
                      </div>
                    </div>
                    <div className="w-10/12">
                      <h2
                        tabIndex={0}
                        className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                      >
                        Always catch a Rising-Trend
                      </h2>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                      >
                        Never miss out on a rising trend that is hot in your
                        industry and that is performing well in businesses and
                        companies similar to yours. Sometimes this gets hard
                        with the evermore-increasing workload and thats why wee
                        use our Trained Professionals to help you always stay on
                        top of your game!
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    aria-label="card 3"
                    className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                  >
                    <div className="w-20 h-20 relative mr-5">
                      <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute text-white bottom-0 left-0  rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img src={F3} alt="html tag" />
                      </div>
                    </div>
                    <div className="w-10/12">
                      <h2
                        tabIndex={0}
                        className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                      >
                        Hit your Monthly mark! Every Month!
                      </h2>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                      >
                        We know how important hitting your monthly marks is,
                        this determines then the flow of work and the overall
                        performance of the company. This is why we use Advanced
                        algorithms and state of the art Technologies to help you
                        achieve this!
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    aria-label="card 4"
                    className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                  >
                    <div className="w-20 h-20 relative mr-5">
                      <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute text-white bottom-0 left-0  rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img src={F4} alt="monitor" />
                      </div>
                    </div>
                    <div className="w-10/12">
                      <h2
                        tabIndex={0}
                        className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                      >
                        Personalized and always on Track!
                      </h2>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                      >
                        Our solutions are always personalized and tailored
                        depending on your needs. This is why all of our clients
                        trust us so much and 70% stay with us for as long as 5+
                        Years.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Code block ends */}
        </div>

        {/* end premade component */}
      </div>

      {/* services end */}
      <Features />

      {/* stats code block from https://tailwinduikit.com/components/marketing/page_section/stat */}
      <>
        <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container">
          <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
            More Than 10 Years We Provide Services{" "}
            <br className="md:block hidden" />
            All over the World
          </h1>
          <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
            <img
              src="https://i.ibb.co/KjrPCyW/map.png"
              alt="world map image"
              className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden"
            />
            <img
              src="https://i.ibb.co/SXKj9Mf/map-bg.png"
              alt="mobile-image"
              className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0"
            />
            <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
              <p className="text-3xl font-semibold text-gray-800">1K+</p>
              <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
                Companies Helped
              </p>
            </div>
            <div className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
              <p className="text-3xl font-semibold text-gray-800">70%</p>
              <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
                Companies Purchase Again
              </p>
            </div>
            <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
              <p className="text-3xl font-semibold text-gray-800">25%</p>
              <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
                Average Performance Increase
              </p>
            </div>
          </div>
        </div>
      </>

      {/* end code block */}
      <Footer />
    </div>
  );
};

export default Services;
