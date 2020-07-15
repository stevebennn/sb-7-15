import React from "react";

const ProductDetailV1 = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-10 md:gap-12 max-w-6xl mx-auto md:px-4 md:pt-16 pb-8 text-primary">
      <div className="col-span-6 mb-6 md:mb-0">
        <div className="relative block">
          <div className="relative flex justify-between items-center mb-xs md:mb-sm w-full pb-3/4 bg-primary rounded-md overflow-hidden">
            <img
              className="h-full top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
          </div>
          <button
            className="absolute hidden md:block z-1 ml-xs top-1/2 left-0"
            style={{ top: "calc(50% - 24px)" }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="48"
                height="48"
                rx="24"
                fill="white"
                className="text-white fill-current"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.2929 30.7071C26.6834 31.0976 27.3166 31.0976 27.7071 30.7071C28.0976 30.3166 28.0976 29.6834 27.7071 29.2929L22.4142 24L27.7071 18.7071C28.0976 18.3166 28.0976 17.6834 27.7071 17.2929C27.3166 16.9024 26.6834 16.9024 26.2929 17.2929L20.2929 23.2929C19.9024 23.6834 19.9024 24.3166 20.2929 24.7071L26.2929 30.7071Z"
                fill="#1B202B"
                className="text-primary fill-current"
              />
            </svg>
          </button>
          <button
            className="absolute right-0 hidden md:block z-1 mr-xs"
            style={{ top: "calc(50% - 24px)" }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="48"
                height="48"
                rx="24"
                fill="white"
                className="text-white fill-current"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.7071 17.2929C21.3166 16.9024 20.6834 16.9024 20.2929 17.2929C19.9024 17.6834 19.9024 18.3166 20.2929 18.7071L25.5858 24L20.2929 29.2929C19.9024 29.6834 19.9024 30.3166 20.2929 30.7071C20.6834 31.0976 21.3166 31.0976 21.7071 30.7071L27.7071 24.7071C28.0976 24.3166 28.0976 23.6834 27.7071 23.2929L21.7071 17.2929Z"
                fill="#1B202B"
                className="text-primary fill-current"
              />
            </svg>
          </button>
        </div>
        <div className="flex px-4 sm:px-12 md:px-0">
          <div className="relative mr-2 md:mr-5 w-20 md:w-24 h-20 md:h-24 bg-primary rounded-md overflow-hidden">
            <img
              className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
          </div>

          <div className="relative mr-2 md:mr-5 w-20 md:w-24 h-20 md:h-24 bg-primary rounded-md overflow-hidden">
            <img
              className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
          </div>

          <div className=" relative mr-2 md:mr-5 w-20 md:w-24 h-20 md:h-24 bg-primary rounded-md overflow-hidden">
            <img
              className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-span-4 px-4 sm:px-12 md:px-0">
        <h4 className="mb-sm hds-title__large font-black">
          Symbolic content Symbolic
        </h4>
        <div className="flex mb-xs">
          <div className="flex mr-xs">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5133 2.38645L13.4409 8.36859L19.4637 8.44168C19.982 8.448 20.1965 9.14025 19.7808 9.46424L14.9487 13.234L16.7436 19.2611C16.8978 19.7798 16.3366 20.2071 15.9136 19.8929L11.0003 16.2405L6.08645 19.8922C5.66405 20.2064 5.1022 19.7784 5.25641 19.2604L7.05126 13.2333L2.21917 9.46353C1.80348 9.13955 2.01803 8.4473 2.5363 8.44098L8.55915 8.36789L10.4867 2.38574C10.653 1.8713 11.3476 1.8713 11.5133 2.38645Z"
                fill="#1B202B"
                className="fill-current"
              />
            </svg>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5133 2.38645L13.4409 8.36859L19.4637 8.44168C19.982 8.448 20.1965 9.14025 19.7808 9.46424L14.9487 13.234L16.7436 19.2611C16.8978 19.7798 16.3366 20.2071 15.9136 19.8929L11.0003 16.2405L6.08645 19.8922C5.66405 20.2064 5.1022 19.7784 5.25641 19.2604L7.05126 13.2333L2.21917 9.46353C1.80348 9.13955 2.01803 8.4473 2.5363 8.44098L8.55915 8.36789L10.4867 2.38574C10.653 1.8713 11.3476 1.8713 11.5133 2.38645Z"
                fill="#1B202B"
                className="fill-current"
              />
            </svg>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5133 2.38645L13.4409 8.36859L19.4637 8.44168C19.982 8.448 20.1965 9.14025 19.7808 9.46424L14.9487 13.234L16.7436 19.2611C16.8978 19.7798 16.3366 20.2071 15.9136 19.8929L11.0003 16.2405L6.08645 19.8922C5.66405 20.2064 5.1022 19.7784 5.25641 19.2604L7.05126 13.2333L2.21917 9.46353C1.80348 9.13955 2.01803 8.4473 2.5363 8.44098L8.55915 8.36789L10.4867 2.38574C10.653 1.8713 11.3476 1.8713 11.5133 2.38645Z"
                fill="#1B202B"
                className="fill-current"
              />
            </svg>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5133 2.38645L13.4409 8.36859L19.4637 8.44168C19.982 8.448 20.1965 9.14025 19.7808 9.46424L14.9487 13.234L16.7436 19.2611C16.8978 19.7798 16.3366 20.2071 15.9136 19.8929L11.0003 16.2405L6.08645 19.8922C5.66405 20.2064 5.1022 19.7784 5.25641 19.2604L7.05126 13.2333L2.21917 9.46353C1.80348 9.13955 2.01803 8.4473 2.5363 8.44098L8.55915 8.36789L10.4867 2.38574C10.653 1.8713 11.3476 1.8713 11.5133 2.38645Z"
                fill="#1B202B"
                className="fill-current"
              />
            </svg>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9784 10.351L10.9999 7.31436L10.0216 10.3503L6.65958 10.3911L9.35763 12.496L8.41168 15.6725L11.0005 13.7486L13.588 15.6721L12.6424 12.4967L15.3404 10.3918L11.9784 10.351ZM19.4637 8.44168C19.982 8.448 20.1965 9.14025 19.7808 9.46424L19.4481 9.72379L14.9487 13.234L16.7436 19.2611C16.8978 19.7798 16.3366 20.2071 15.9136 19.8929L11.0003 16.2405L6.45603 19.6176L6.08645 19.8922C5.66405 20.2064 5.1022 19.7784 5.25641 19.2604L7.05126 13.2333L2.55195 9.72315L2.21917 9.46353C1.80348 9.13955 2.01803 8.4473 2.5363 8.44098L8.55915 8.36789L10.4867 2.38574C10.653 1.8713 11.3476 1.8713 11.5133 2.38645L13.4409 8.36859L19.4637 8.44168Z"
                fill="#1B202B"
                className="fill-current"
              />
            </svg>
          </div>
          <p className="hds-legal leading-6">12 Reviews</p>
        </div>
        <p className="mb-xs md:mb-sm text-4xl font-black">$423</p>
        <p className="mb-sm hds-copy">
          High fidelity wireframes include more real content, specific
          typography choices, and information on image dimensions.
        </p>

        <div className="mb-xs">
          <p className="mb-xs hds-copy leading-8">Size</p>
          <div className="flex">
            <button className="flex justify-center items-center mr-xs w-12 h-12 border rounded-md">
              <span className="hds-legal font-bold">28</span>
            </button>
            <button className="flex justify-center items-center mr-xs w-12 h-12 border rounded-md">
              <span className="hds-legal font-bold">30</span>
            </button>
            <button className="flex justify-center items-center mr-xs w-12 h-12 border rounded-md">
              <span className="hds-legal font-bold">32</span>
            </button>
            <button className="flex justify-center items-center mr-xs w-12 h-12 border rounded-md">
              <span className="hds-legal font-bold">34</span>
            </button>
            <button className="flex justify-center items-center mr-xs w-12 h-12 border rounded-md">
              <span className="hds-legal font-bold">36</span>
            </button>
          </div>
        </div>

        <div className="mb-md">
          <p className="mb-xs hds-copy leading-8">Colors</p>
          <div className="flex">
            <button className="relative flex justify-center items-center mr-xs w-12 h-12 bg-primary rounded-md">
              <img
                className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0 rounded-md"
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt=""
              />
            </button>
            <button className="relative flex justify-center items-center mr-xs w-12 h-12 bg-primary rounded-md">
              <img
                className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0 rounded-md"
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt=""
              />
            </button>
            <button className="relative flex justify-center items-center mr-xs w-12 h-12 bg-primary rounded-md">
              <img
                className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0 rounded-md"
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt=""
              />
            </button>
          </div>
        </div>

        <div className="flex items-center mb-sm">
          <div className="flex mr-xs border rounded-md">
            <input className="p-2 w-12 rounded-md text-lg leading-8 text-center" />
            <div className="flex flex-col justify-center w-12 border-l">
              <button className="flex justify-center items-center h-full border-b">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.92724 9.06307C2.66097 9.32934 2.66097 9.76104 2.92724 10.0273C3.19351 10.2936 3.62521 10.2936 3.89148 10.0273L7.50027 6.41851L11.1091 10.0273C11.3753 10.2936 11.807 10.2936 12.0733 10.0273C12.3395 9.76104 12.3395 9.32934 12.0733 9.06307L7.98239 4.97216C7.71612 4.70589 7.28442 4.70589 7.01815 4.97216L2.92724 9.06307Z"
                    fill="#1B202B"
                    className="fill-current"
                  />
                </svg>
              </button>
              <button className="flex justify-center items-center h-full">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.0733 5.9364C12.3395 5.67013 12.3395 5.23843 12.0733 4.97216C11.807 4.70589 11.3753 4.70589 11.1091 4.97216L7.50027 8.58095L3.89148 4.97216C3.62521 4.70589 3.19351 4.70589 2.92724 4.97216C2.66097 5.23843 2.66097 5.67013 2.92724 5.9364L7.01815 10.0273C7.28442 10.2936 7.71612 10.2936 7.98239 10.0273L12.0733 5.9364Z"
                    fill="#1B202B"
                    className="fill-current"
                  />
                </svg>
              </button>
            </div>
          </div>

          <button className="hds-btn hds-btn__primary" type="button">
            Add To Cart
          </button>
        </div>

        <div>
          <p className="mb-xs text-base leading-6">Share This</p>
          <div className="flex">
            <a href="/builder" target="_blank" className="mr-2">
              <div className="w-8 h-8 bg-primary rounded-full" />
            </a>
            <a href="/builder" target="_blank" className="mr-2">
              <div className="w-8 h-8 bg-primary rounded-full" />
            </a>
            <a href="/builder" target="_blank" className="mr-2">
              <div className="w-8 h-8 bg-primary rounded-full" />
            </a>
            <a href="/builder" target="_blank" className="mr-2">
              <div className="w-8 h-8 bg-primary rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailV1;
