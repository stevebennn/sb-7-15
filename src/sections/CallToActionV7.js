import React from "react";

const CallToActionV7 = () => {
  return (
    <section className="w-full font-sans grid grid-cols-1 sm:grid-cols-2">
      <div className="md:flex md:flex-row md:justify-end px-sm pt-sm pb-md md:px-lg md:py-xl bg-primary text-white">
        <div className="md:w-64">
          <h4 className="mb-xs md:mb-sm hds-title__medium font-black">
            Stragedy
          </h4>
          <p className="mb-sm md:mb-md hds-copy leading-8">
            Wireframes can be pencil drawings or sketches on whiteboard, or they
            can be
          </p>
          <button
            className="hds-btn bg-white font-bold text-primary"
            type="button"
          >
            View
          </button>
        </div>
      </div>

      <div className="md:flex md:flex-row md:justify-start px-sm pt-sm pb-md md:px-lg md:py-xl bg-white text-primary">
        <div className="md:w-64">
          <h4 className="mb-xs md:mb-sm hds-title__medium font-black">
            Stragedy
          </h4>
          <p className="mb-sm md:mb-md hds-copy leading-8">
            Wireframes can be pencil drawings or sketches on whiteboard, or they
            can be
          </p>
          <button className="hds-btn hds-btn__primary font-bold" type="button">
            View
          </button>
        </div>
      </div>
    </section>
  );
};
export default CallToActionV7;
