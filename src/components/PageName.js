import React from "react";

const PageName = ({ name }) => {
  return (
    <div className="flex items-center text-white justify-between h-20 mb-4 rounded-lg bg-[#031123] dark:bg-gray-800 p-4">
      <p className="text-white text-4xl font-bold dark:text-gray-500  ">
        {name}
      </p>
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 art"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
        <h2 className="bg-[#00193b] text-white py-2 px-10 rounded">
          August 21, 2023 80:00 PM
        </h2>
      </div>
    </div>
  );
};

export default PageName;
