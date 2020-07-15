import React from "react";

const CallToAction = () => {
  return (
    <div className="relative w-full m-auto bg-priamry text-white py-lg  md:py-lg ">
      <div className="z-10 max-w-sm md:max-w-5xl mx-auto flex flex-wrap md:flex-no-wrap relative items-center">
        <div className="p-sm xl:px-0 pb-md max-w-lg md:mr-md lg:mr-lg">
          <h3 className="font-bold hds-title__medium mb-xs lg:mb-xs">
            Some Other cool message message
          </h3>
          <p className="hds-copy leading-8">
            here is my client specific body copy
          </p>
        </div>

        <div className="grid p-sm bg-white text-black rounded-md max-w-lg md:mr-sm">
          <h4 className="font-bold hds-title__small leading-8 mb-sm text-center">
            Create new account
          </h4>
          <p className="text-lg leading-8 text-center mb-sm md:mb-8">
            The goal is to facilitate usability and efficiency as much as
            possible.
          </p>
          <div className="mb-xs text-lg leading-8 border border-gray-400 border-solid rounded-md flex items-center justify-between">
            <svg
              className="ml-6 mr-3"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 20C18 16.25 12.7823 16.8695 12 14.7507V14C14.8335 14 18 13 18 13C16.5195 11.7677 17.0055 2.78225 11.9633 2.78225C11.9633 2.78225 11.283 2 10.4033 2C4.23975 2 5.59375 11.692 4 13C4 13 6.153 14 9.00075 14V14.7507C8.21775 16.8695 4 16.25 4 20H18Z"
              />
            </svg>
            <input
              type="text"
              className="py-3 pr-6 w-full rounded-md"
              placeholder="Name"
            />
          </div>
          <div className="mb-xs text-lg leading-8 border border-gray-400 border-solid rounded-md flex items-center justify-between">
            <svg
              className="ml-6 mr-3"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 5.33795L10.3356 12.7474C10.7145 13.0842 11.2855 13.0842 11.6644 12.7474L20 5.33795V17C20 17.5523 19.5523 18 19 18H3C2.44772 18 2 17.5523 2 17V5.33795ZM3.5052 4H18.4948L11 10.662L3.5052 4Z"
              />
            </svg>
            <input
              type="text"
              className="py-3 pr-6 w-full rounded-md"
              placeholder="Email"
            />
          </div>
          <div className="mb-sm text-lg leading-8 border border-gray-400 border-solid rounded-md flex items-center justify-between">
            <svg
              className="ml-6 mr-3"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 7V9H16V7C16 4.23853 13.7615 2 11 2C8.23853 2 6 4.23853 6 7V9H8V7C8 5.34314 9.34314 4 11 4C12.6569 4 14 5.34314 14 7ZM4 11C4 10.4478 4.44775 10 5 10H17C17.5522 10 18 10.4478 18 11V19C18 19.5522 17.5522 20 17 20H5C4.44775 20 4 19.5522 4 19V11ZM10 14C10 13.4478 10.4478 13 11 13C11.5522 13 12 13.4478 12 14V16C12 16.5522 11.5522 17 11 17C10.4478 17 10 16.5522 10 16V14Z"
              />
            </svg>
            <input
              type="text"
              className="py-3 pr-6 w-full rounded-md"
              placeholder="Password"
            />
          </div>
          <button className="hds-btn hds-btn__primary max-w-full">
            Register Now
          </button>
        </div>
      </div>

      <div className="absolute z-0 w-full md:w-4/6 h-screen md:h-full bg-primary inset-0" />
    </div>
  );
};
export default CallToAction;
