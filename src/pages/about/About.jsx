import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import TeamImage from "../../images/Team/team1.png";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      //fire animation
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <>
      <Navbar />
      <div className="max-w-screen overflow-x-hidden font-poppins">
        {" "}
        <div className=" h-screen bg-gradient-to-b from-gray-100/10 to-gray-200/50 pt-20">
          <div className="mt-20">
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex justify-center text-center"
            >
              <h1 className="flex  justify-center  text-transparent font-extrabold bg-clip-text bg-gradient-to-r to-emerald-500 from-blue-500 text-[3rem]">
                Who are wee and whay are wee so good ?
              </h1>
            </motion.div>

            <div className="sm:flex sm:justify-between sm:mr-[10%] sm:ml-[10%] sm:mt-20 mt-10 ml-10 ">
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="sm:w-[50%] w-[90%] mb-10 sm:mb-0"
              >
                <img
                  className="rounded-2xl sm:taos:translate-x-[200px] sm:taos:opacity-0 sm:hover:-translate-y-2 sm:transition sm:ease-in-out duration-300 hover:drop-shadow-xl sm:mx-auto z-20  shadow-lg dark:dark:bg-gray-500"
                  src={TeamImage}
                />
              </motion.div>
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, x: 75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="sm:flex sm:justify-center text-center sm:mt-20"
              >
                <h1 className="text-xl sm:text-4xl sm:font-extrabold font-bold text-blue-500 ml-[-10%] sm:ml-0 mb-10 sm:mb-0">
                  "Wee are Inspired by Results and driven by Data"
                </h1>
              </motion.div>
            </div>

            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="block h-screen sm:justify-start justify-center text-center sm:text-start sm:ml-20 ml-0"
            >
              <p className="sm:flex justify-center text-3xl hidden ml-[-80%] mb-[-10%]  sm:mt-24">
                About us:
              </p>
              <p className="hidden sm:flex  border-y-2 py-4  border-y-indigo-900/30 font-semibold sm:ml-[7%] w-[70%]  sm:mt-36">
                Welcome to our site, where we specialize in empowering
                businesses to unlock their true potential and achieve
                unparalleled growth. With our expertise in advanced technology
                solutions, we provide the tools and knowledge necessary for
                organizations to make data-driven decisions, optimize
                operations, and drive innovation. Our personalized approach
                ensures that each business receives tailored solutions designed
                to address their specific objectives and challenges.
                <br /> <br /> By leveraging the latest advancements and
                continuous innovation, we pave the way for businesses to thrive
                in today's ever-evolving landscape. At our site, we believe that
                success lies in harnessing the power of technology and data to
                drive meaningful outcomes. Whether you're a small startup or a
                large enterprise, our comprehensive range of services and
                solutions is designed to meet your unique needs. <br /> <br />
                From advanced algorithms and powerful analytics capabilities to
                seamless technology integration and ongoing support from our
                trained personnel, we are dedicated to helping businesses grow
                and succeed. Join us on this transformative journey, and
                together, we will propel your business to new heights of
                success.{" "}
              </p>
              <p className="mt-32 text-lg font-semibold sm:hidden">About us:</p>
              <p className="flex sm:hidden mt-4 mx-6 ">
                Welcome to our site, where we specialize in empowering
                businesses to unlock their true potential and achieve
                unparalleled growth. With our expertise in advanced technology
                solutions, we provide the tools and knowledge necessary for
                organizations to make data-driven decisions, optimize
                operations, and drive innovation. Our personalized approach
                ensures that each business receives tailored solutions designed
                to address their specific objectives and challenges.
              </p>
              <div className="sm:hidden  bg-gradient-to-r flex justify-end mt-10 from-sky-500 to-indigo-500 h-[2px] w-[70%]"></div>
            </motion.div>
          </div>
        </div>
        {/* team block starts here from */}
        <div className="mt-[106%] sm:mt-0">
          <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-[2px] w-[70%]"></div>
          <div className="container flex justify-center mx-auto pt-16">
            <div>
              <p className="text-gray-500 text-lg text-center font-normal pb-3">
                OUR TEAM
              </p>
              <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                The Talented People Behind the Scenes that make it all Work!
              </h1>
            </div>
          </div>
          <div className="w-full bg-gray-100 px-10 pt-10">
            <div className="container mx-auto">
              <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                          alt
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Andres Berlin
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Chief Executive Officer
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        The CEO's role in raising a company's corporate IQ is to
                        establish an atmosphere that promotes knowledge sharing
                        and collaboration.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                          alt
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Silene Tokyo
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Product Design Head
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        The emphasis on innovation and technology in our
                        companies has resulted in a few of them establishing
                        global benchmarks in product design and development.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif"
                          alt
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Johnson Stone
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Manager Development
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Our services encompass the assessment and repair of
                        property damage caused by water, fire, smoke, or mold.
                        We can also be a part of the restoration.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg"
                          alt
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Dean Jones
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Principal Software Engineer
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        An avid open-source developer who loves to be creative
                        and inventive. I have 20 years of experience in the
                        field.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg"
                          alt
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Rachel Adams
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Product Design Head
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Product designer with interests in immersive computing
                        and XR, political ventures, and emerging technologies.
                        Able to take ideas and give them a life.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif"
                          alt
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Charles Keith
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        UX Designer
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        A UX designer is the voice of the customer. Our job is
                        to look beyond the business goals. We don't just
                        experience user interface but also questions it.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* team block ends here */}
        <div className="bg-gradient-to-r flex justify-end ml-[30%] from-sky-500 to-indigo-500 h-[2px] w-[70%]"></div>
        <div className="h-[40rem] sm:mt-20 mt-[20%] mb-20">
          <h1 className="flex justify-center font-extrabold text-4xl mt-10">
            Where to Find us
          </h1>
          <div className="flex justify-center mt-20" id="ieatmaps">
            <iframe
              className="w-[80%] h-[32rem]"
              src="https://maps.google.com/maps?q=Miami&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
