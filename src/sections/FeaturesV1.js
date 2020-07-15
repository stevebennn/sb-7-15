import React from "react";

const FeaturesV1 = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white hds-section__v-spacing hds-section__h-spacing grid grid-cols-2 gap-4 font-sans">
      <div className="max-w-sm col-span-2 md:col-span-1 mb-xl sm:mb-0 font-black hds-title__large text-primary">
        <p className="my-sm opacity-25">Fast reply</p>
        <p className="my-sm">Full service</p>
        <p className="my-sm opacity-25">Online support</p>
        <p className="my-sm opacity-25">Free trial</p>
      </div>
      <div className="max-w-sm px-xs row-start-2 md:row-start-1 col-span-2 sm:col-span-1 col-start-1 sm:col-start-2 text-primary">
        <svg
          className="block pb-sm mt-xs w-12 text-primary"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className="fill-current"
            width="56"
            height="56"
            rx="28"
            fill="#1B202B"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38.1842 26.6459L36.9678 26.4118C36.2515 26.2741 35.6646 25.7868 35.3986 25.1074C35.1318 24.4288 35.2302 23.6724 35.6618 23.0841L36.4257 22.0422C36.5392 21.8878 36.5225 21.6732 36.3868 21.5374L34.7372 19.8878C34.6053 19.7559 34.3983 19.7361 34.244 19.8407L33.2181 20.5353C32.8642 20.7748 32.4567 20.9016 32.0386 20.9016C30.9835 20.9016 30.102 20.1468 29.9413 19.1061L29.745 17.8294C29.7165 17.64 29.5532 17.5 29.3611 17.5H27.0278C26.8415 17.5 26.6809 17.6326 26.6459 17.8158L26.3437 19.3873C26.1524 20.3824 25.2758 21.1046 24.2604 21.1046C23.8424 21.1046 23.4341 20.9782 23.0809 20.7387L21.756 19.8411C21.6016 19.7369 21.3947 19.7563 21.2629 19.8882L19.6128 21.5378C19.4771 21.6736 19.4608 21.8878 19.5739 22.043L20.3377 23.0848C20.769 23.6728 20.8674 24.4292 20.601 25.1082C20.3342 25.7868 19.7478 26.2745 19.0314 26.4122L17.815 26.6463C17.6322 26.6809 17.5 26.8415 17.5 27.0278V29.3611C17.5 29.5528 17.64 29.7162 17.8298 29.7453L19.1065 29.9417C19.8271 30.0525 20.4318 30.5177 20.7231 31.1862C21.0148 31.855 20.9448 32.6145 20.5357 33.2185L19.8411 34.2443C19.7365 34.3983 19.7563 34.6057 19.8882 34.7375L21.5378 36.3872C21.6736 36.5225 21.8874 36.54 22.0426 36.426L23.0844 35.6623C23.4516 35.3932 23.8817 35.2505 24.3277 35.2505C25.3439 35.2505 26.2204 35.9727 26.4118 36.9678L26.6459 38.1846C26.6809 38.3673 26.8415 38.5 27.0278 38.5H29.3611C29.5532 38.5 29.7162 38.36 29.7453 38.1702L29.8833 37.2723C30.0646 36.0932 31.0761 35.4764 31.9818 35.4764C32.4275 35.4764 32.8568 35.6187 33.2247 35.8886L33.9573 36.4257C34.1125 36.5396 34.3268 36.5221 34.4622 36.3868L36.1118 34.7372C36.2437 34.6053 36.2635 34.3983 36.1588 34.244L35.4643 33.2181C35.0552 32.6142 34.9852 31.8547 35.2768 31.1858C35.5685 30.5173 36.1728 30.0522 36.8935 29.9413L38.1702 29.745C38.36 29.7162 38.5 29.5528 38.5 29.3611V27.0278C38.5 26.8415 38.3678 26.6809 38.1842 26.6459ZM31.5 28.1944C31.5 30.0172 30.0172 31.5 28.1944 31.5C26.3717 31.5 24.8889 30.0172 24.8889 28.1944C24.8889 26.3717 26.3717 24.8889 28.1944 24.8889C30.0172 24.8889 31.5 26.3717 31.5 28.1944Z"
            fill="white"
          />
        </svg>
        <p className="pb-sm hds-copy leading-9">Since wire-frame renderings</p>
        <p className="hds-legal leading-8">
          Since wire-frame renderings are relatively simple and fast to
          calculate, they are often used in cases where a high screen
        </p>
      </div>
    </div>
  );
};

export default FeaturesV1;
