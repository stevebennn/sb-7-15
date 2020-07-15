import React from "react";

const HeroV1 = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="px-6 py-32 bg-gray-900 text-white">
        <div className="max-w-md mx-auto text-center md:text-left">
          <h4 className="mb-1 text-4xl md:text-5xl font-black">
            Simple Process For The Reproduction of Any Document
          </h4>
          <p className="mb-12 text-lg leading-8">
            Wireframes can be pencil drawings or sketches on whiteboard, or they
            can be
          </p>
          <button
            className="mb-8 md:mb-20 py-4 px-12 bg-white rounded-md text-xl font-bold text-gray-900"
            type="button"
          >
            Button
          </button>
          <div className="flex justify-center md:hidden">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-2 text-white"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
                fill="white"
                className="fill-current"
              />
            </svg>

            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-2 text-white"
            >
              <path
                d="M7.5 4C7.5 5.933 5.933 7.5 4 7.5C2.067 7.5 0.5 5.933 0.5 4C0.5 2.067 2.067 0.5 4 0.5C5.933 0.5 7.5 2.067 7.5 4Z"
                stroke="#DBDEE7"
                className="stroke-current"
              />
            </svg>

            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-2 text-white"
            >
              <path
                d="M7.5 4C7.5 5.933 5.933 7.5 4 7.5C2.067 7.5 0.5 5.933 0.5 4C0.5 2.067 2.067 0.5 4 0.5C5.933 0.5 7.5 2.067 7.5 4Z"
                stroke="#DBDEE7"
                className="stroke-current"
              />
            </svg>
          </div>
          <div className="hidden md:flex">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-5 text-white"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.70711 15.7071C7.31658 16.0976 6.68342 16.0976 6.29289 15.7071L2.29348 11.7077L2.29289 11.7071C2.19702 11.6112 2.12468 11.5007 2.07588 11.3828C2.02699 11.2649 2 11.1356 2 11C2 10.865 2.02677 10.7362 2.0753 10.6186C2.09935 10.5602 2.12917 10.5037 2.16475 10.4498C2.20137 10.3943 2.24408 10.3417 2.29289 10.2929L2.29348 10.2923L6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L5.41421 10H19C19.5523 10 20 10.4477 20 11C20 11.5523 19.5523 12 19 12H5.41421L7.70711 14.2929C8.09763 14.6834 8.09763 15.3166 7.70711 15.7071Z"
                fill="white"
                className="fill-current"
              />
            </svg>

            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.2929 6.29289C14.6834 5.90237 15.3166 5.90237 15.7071 6.29289L19.7065 10.2923L19.7071 10.2929C19.803 10.3888 19.8753 10.4993 19.9241 10.6172C19.973 10.7351 20 10.8644 20 11C20 11.135 19.9732 11.2639 19.9247 11.3814C19.9006 11.4398 19.8708 11.4963 19.8352 11.5502C19.7986 11.6057 19.7559 11.6583 19.7071 11.7071L19.7065 11.7077L15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071C13.9024 15.3166 13.9024 14.6834 14.2929 14.2929L16.5858 12H3C2.44771 12 2 11.5523 2 11C2 10.4477 2.44771 10 3 10H16.5858L14.2929 7.70711C13.9024 7.31658 13.9024 6.68342 14.2929 6.29289Z"
                fill="white"
                className="fill-current"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="hidden md:block bg-white" />
    </section>
  );
};

export default HeroV1;
