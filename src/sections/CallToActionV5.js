import React from "react";

const CallToActionV5 = () => {
  return (
    <section className="w-full flex flex-wrap md:justify-center bg-white py-xl px-md md:px-lg font-sans text-primary">
      <div className="w-full max-w-5xl m-auto">
        <p className="hds-copy mb-xs md:mb-sm">Great updates</p>
        <div className="flex justify-between flex-wrap md:flex-no-wrap">
          <h4 className="mb-sm md:mb-0 max-w-3xl hds-title__medium font-black">
            Color choices are not included, different values in color can be
            represented in.
          </h4>
          <button type="button" className="md:ml-sm">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-secondary"
            >
              <rect
                width="56"
                height="56"
                rx="28"
                fill="#E7C962"
                className="fill-current"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.8417 22.5084C32.2973 22.0528 33.036 22.0528 33.4916 22.5084L38.1576 27.1744L38.1583 27.1751C38.2702 27.2869 38.3545 27.4158 38.4115 27.5534C38.4685 27.691 38.5 27.8418 38.5 28C38.5 28.1576 38.4687 28.3078 38.4121 28.445C38.384 28.5131 38.3493 28.5791 38.3077 28.642C38.265 28.7066 38.2152 28.768 38.1583 28.825L38.1576 28.8257L33.4916 33.4916C33.036 33.9472 32.2973 33.9472 31.8417 33.4916C31.3861 33.036 31.3861 32.2973 31.8417 31.8417L34.5168 29.1667H18.6667C18.0223 29.1667 17.5 28.6443 17.5 28C17.5 27.3557 18.0223 26.8334 18.6667 26.8334H34.5168L31.8417 24.1583C31.3861 23.7027 31.3861 22.964 31.8417 22.5084Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
export default CallToActionV5;
