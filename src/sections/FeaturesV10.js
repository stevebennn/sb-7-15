import React from "react";

const FeatureV10 = () => {
  return (
    <div className="bg-white text-primary p-sm sm:px-md md:py-lg xl:py-xl xl:pl-0 flex flex-wrap xl:flex-no-wrap">
      {/* <!--   <div style='min-height:22rem' className='bg-black w-full rounded-md mb-8 md:mb-16 xl:mb-0 max-w-lg xl:mr-32 min-h-full'> </div>  --> */}
      <div className="w-full mb-8 md:mb-16 xl:mb-0 max-w-lg xl:mr-32">
        <div className="relative pb-3/4 bg-primary rounded-md overflow-hidden">
          <img
            className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt=""
          />
        </div>
      </div>
      <div className="max-w-2xl md:mx-auto xl:mx-0">
        <p className="leading-8 hds-copy mb-xs lg:mb-sm">Actual images</p>
        <h3 className="hds-title__medium font-black mb-sm xl:mb-md">
          Unlike low wireframes, high fidelity wireframes can
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:col-gap-md xl:col-gap-lg xl:mr-md">
          <div className="mb-sm xl:mb-md">
            <h4 className="leading-8 hds-copy font-bold mb-sm">Yellow</h4>
            <p className="leading-8 hds-copy">
              The navigation design should communicate the relationship between
              the links it contains{" "}
            </p>
          </div>
          <div className="mb-sm">
            <h4 className="leading-8 font-bold hds-copy mb-sm">Yellow</h4>
            <p className="leading-8 hds-copy">
              The navigation design should communicate the relationship between
              the links it contains{" "}
            </p>
          </div>
          <div className="mb-sm">
            <h4 className="leading-8 font-bold hds-copy mb-sm">Yellow</h4>
            <p className="leading-8 hds-copy">
              The navigation design should communicate the relationship between
              the links it contains{" "}
            </p>
          </div>
          <div className="mb-sm">
            <h4 className="leading-8 font-bold hds-copy mb-sm">Yellow</h4>
            <p className="leading-8 hds-copy">
              The navigation design should communicate the relationship between
              the links it contains{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeatureV10;
