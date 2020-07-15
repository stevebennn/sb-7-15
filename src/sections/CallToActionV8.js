import React from "react";

const CallToActionV8 = () => {
  return (
    <section className="w-full p-sm md:py-xl md:pl-lg md:pr-0 font-sans text-primary">
      <div className="md:flex md:justify-between md:items-center">
        <div className="md:mr-lg max-w-lg">
          <h4 className="mb-xs md:mb-sm hds-title__medium font-black">
            Information elements should be arranged in
          </h4>
          <p className="mb-sm md:mb-0 hds-copy leading-8">
            Wireframes can be pencil drawings or sketches on whiteboard, or they
            can be
          </p>
        </div>
        {/* <!--     <div className="w-full md:max-w-xl h-80 sm:h-112 md:h-152 bg-gray-900 rounded-md"></div> --> */}
        <div className="w-full md:max-w-xl">
          <div className="relative pb-3/4 bg-primary rounded-md overflow-hidden">
            <img
              className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToActionV8;
