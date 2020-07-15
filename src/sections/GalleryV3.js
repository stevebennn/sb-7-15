import React from "react";

const GalleryV3 = () => {
  return (
    <div className=" w-full hds-section__v-spacing bg-white">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="min-h-88 bg-primary " />
        <div className="min-h-88 bg-primary sm:col-span-2 row-start-1 md:col-start-2" />
        <div className="min-h-88 sm:col-span-2 bg-primary row-start-4 sm:row-start-3 md:row-start-2 " />
        <div className="min-h-88 bg-primary" />
      </div>
    </div>
  );
};

export default GalleryV3;
