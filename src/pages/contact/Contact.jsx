import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const Contact = () => {
  
  return (
    <div>
      <Navbar />
      {/* contact body start  from https://tailwinduikit.com/components/marketing/page_section/contact*/}
      <div className="max-w-screen overflow-x-hidden font-poppins h-screen sm:mb-[-10%]">
        <div className="bg-gradient-to-b from-blue-500/60 to-emerald-500/60 h-96 w-full">
          <div className="md:px-20 px-4 py-8"></div>
          <div className="w-full flex items-center justify-center my-12">
            <div className="absolute top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
              <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                Let’s chat and get a quote!
              </p>
              <div className="md:flex items-center mt-12">
                <div className="md:w-72 flex flex-col">
                  <label className="text-base font-semibold leading-none text-gray-800">
                    Name
                  </label>
                  <input
                    tabIndex={0}
                    arial-label="Please input name"
                    type="name"
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                    placeholder="Please input  name"
                  />
                </div>
                <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="text-base font-semibold leading-none text-gray-800">
                    Email Address
                  </label>
                  <input
                    tabIndex={0}
                    arial-label="Please input email address"
                    type="name"
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                    placeholder="Please input email address"
                  />
                </div>
              </div>
              <div className="md:flex items-center mt-8">
                <div className="md:w-72 flex flex-col">
                  <label className="text-base font-semibold leading-none text-gray-800">
                    Company name
                  </label>
                  <input
                    tabIndex={0}
                    arial-label="Please input company name"
                    type="name"
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                    placeholder="Please input company name"
                  />
                </div>
                <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="text-base font-semibold leading-none text-gray-800">
                    Country
                  </label>
                  <input
                    tabIndex={0}
                    arial-label="Please input country name"
                    type="name"
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                    placeholder="Please input country name"
                  />
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col mt-8">
                  <label className="text-base font-semibold leading-none text-gray-800">
                    Message
                  </label>
                  <textarea
                    tabIndex={0}
                    aria-label="leave a message"
                    type="name"
                    className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                    defaultValue={""}
                  />
                </div>
              </div>
              <p className="text-xs leading-3 text-gray-600 mt-4">
                By clicking submit you agree to our terms of service, privacy
                policy and how we use data as stated
              </p>
              <div className="flex items-center justify-center w-full">
                <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* nwesletterr from https://flowbite.com/blocks/marketing/newsletter/ */}
      <section class="bg-indigo-400/60">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-md sm:text-center">
            <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl ">
              Sign up for our newsletter
            </h2>
            <p class="mx-auto mb-8 max-w-2xl  text-gray-800 md:mb-12 sm:text-xl ">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
            <form action="#">
              <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div class="relative w-full">
                  <label
                    for="email"
                    class="hidden mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email address
                  </label>
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      class="w-5 h-5 text-gray-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    class="block p-3 pl-10 w-full text-sm text-gray-900 bg-blue-200/80 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg placeholder-black  "
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    class="py-3 px-5 w-full text-sm font-medium text-center text-black rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 
                      bg-blue-300/30 hover:bg-blue-400/40 focus:ring-blue-500"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer ">
                We care about the protection of your data.{" "}
                <a
                  href="#"
                  class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* nwesletterr end from https://flowbite.com/blocks/marketing/newsletter/ */}

      {/* contact body end */}
      <Footer />
    </div>
  );
};

export default Contact;
