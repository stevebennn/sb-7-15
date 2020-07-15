import React from "react";

const CallToActionV2 = () => {
  return (
    <section className="w-full flex flex-wrap md:justify-center text-left md:text-center bg-white py-xl px-md md:px-lg font-sans text-primary">
      <div className="w-full max-w-xl m-auto">
        <h4 className="mb-sm hds-title__large font-black">
          Blueprint Wireframe
        </h4>
        <p className="mb-sm hds-copy text-left md:text-center leading-8">
          Since wire-frame renderings are relatively simple and fast to
          calculate, they are often used in cases where.
        </p>
        <button className="mb-sm hds-btn hds-btn__primary" type="button">
          Try
        </button>
        <p className="hds-legal">Since wire-frame renderings</p>
      </div>
    </section>
  );
};
export default CallToActionV2;
