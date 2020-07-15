import React from "react";

const CallToActionV6 = () => {
  return (
    <section className="w-full py-xl px-md md:px-lg font-sans text-primary">
      <div className="w-full max-w-5xl m-auto flex justify-between flex-wrap items-center">
        {/* <!--     <div className="mb-xs md:mr-sm w-full h-80 sm:w-96 sm:h-96 md:w-112 md:h-112 bg-primary rounded-md"></div> --> */}
        <div className="mb-xs md:mr-sm w-full sm:w-96 md:w-112">
          <div className="relative pb-3/4 bg-primary rounded-md overflow-hidden">
            <img
              className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
          </div>
        </div>
        <div className="max-w-md">
          <h4 className="mb-sm md:mb-md hds-title__medium font-black">
            Wireframes can be pencil drawings on a whiteboard.
          </h4>
          <button className="hds-btn border border-primary" type="button">
            View
          </button>
        </div>
      </div>
    </section>
  );
};
export default CallToActionV6;
