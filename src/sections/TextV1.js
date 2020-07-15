import React from "react";

const TextV1 = () => {
  return (
    <div className="w-full bg-white text-primary hds-section__v-spacing">
      <div className="max-w-6xl mx-auto px-sm lg:px-md grid">
        <div className="max-w-sm mb-sm mr-xs">
          <h4 className="font-black hds-title__large mb-sm">
            High fidelity wireframes
          </h4>
          <p className="leading-6 hds-legal">
            The navigation design should communicate the relationship the links
            it contains so that users{" "}
          </p>
        </div>
        <div className="md:col-start-2 max-w-xl mb-sm">
          <p className="leading-8 hds-copy mb-sm">
            High fidelity wireframes include more real content, specific
            typography choices, and information on image dimensions. Unlike low
            fidelity wireframes, high fidelity wireframes can include actual
            images. Color choices are not included, but different values in
            color can be represented in grayscale.
          </p>
          <p className="leading-8 hds-copy">
            High fidelity wireframes include more real content, specific
            typography choices, and information on image{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TextV1;
