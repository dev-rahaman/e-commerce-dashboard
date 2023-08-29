"use client";
import PageName from "@/components/PageName";
import { Select } from "flowbite-react";

const Customers = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
        <PageName name={"Add Product"} />
        <div className="lg:grid grid-cols-2 gap-10 mt-10">
          <div className="dark:bg-gray-800 p-10 rounded bg-[#16193a]">
            <for>
              <div className="mb-4">
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-white"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  className="mt-1 px-3 py-2 w-full border rounded-md"
                  placeholder="Enter product name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="productTitle"
                  className="block text-sm font-medium text-white"
                >
                  Product Title
                </label>
                <input
                  type="text"
                  id="productTitle"
                  className="mt-1 px-3 py-2 w-full border rounded-md outline-none"
                  placeholder="Enter product title"
                  required
                />
              </div>
            </for>
          </div>

          <div className="lg:mt-0 mt-5 p-10 rounded  bg-[#212130]">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-white"
                >
                  Price
                </label>
                <input
                  type="text"
                  id="productName"
                  className="mt-1 px-3 py-2 w-full border rounded-md"
                  placeholder="Enter Price"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="productTitle"
                  className="block text-sm font-medium text-white"
                >
                  Quantity
                </label>
                <input
                  type="text"
                  id="productTitle"
                  className="mt-1 px-3 py-2 w-full border rounded-md outline-none"
                  placeholder="Enter Quantity"
                  required
                />
              </div>
            </form>
          </div>
        </div>

        {/* Center  */}
        <div className="lg:grid grid-cols-2 gap-10 mt-10 items-center">
          <div className="dark:bg-gray-800 p-10 rounded bg-[#212130]">
            <h3 className="text-4xl font-bold text-white">Product Colors</h3>
            <form className="flex h-48 items-center">
              <div>
                <div>
                  <input type="checkbox" id="red" className="text-red-600" />
                  <label
                    htmlFor="red"
                    className="inline-block m-3 text-sm font-medium text-white"
                  >
                    Red
                  </label>
                </div>
                <div className="gap-2">
                  <input type="checkbox" id="aqua" className="text-green-400" />
                  <label
                    htmlFor="aqua"
                    className="inline-block m-3 text-sm font-medium text-white"
                  >
                    Green
                  </label>
                </div>
              </div>
              <div>
                <div>
                  <input
                    type="checkbox"
                    id="yellow"
                    className="text-yellow-300"
                  />
                  <label
                    htmlFor="yellow"
                    className="inline-block m-3 text-sm font-medium text-white"
                  >
                    Yellow
                  </label>
                </div>
                <div className="gap-2">
                  <input type="checkbox" id="white" className="text-white" />
                  <label
                    htmlFor="white"
                    className="inline-block m-3 text-sm font-medium text-white"
                  >
                    white
                  </label>
                </div>
              </div>
              <div>
                <div>
                  <input type="checkbox" id="pink" className="text-pink-400" />
                  <label
                    htmlFor="pink"
                    className="inline-block m-3 text-sm font-medium text-white"
                  >
                    Pink
                  </label>
                </div>
                <div className="gap-2">
                  <input
                    type="checkbox"
                    id="purple"
                    className="text-purple-600"
                  />
                  <label
                    htmlFor="purple"
                    className="inline-block m-3 text-sm font-medium text-white"
                  >
                    Purple
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="lg:mt-0 mt-5 p-10 rounded bg-[#16193a]">
            <form>
              <label
                htmlFor="productDescription"
                className="block text-sm font-medium text-white"
              >
                Product Description
              </label>
              <textarea
                id="productDescription"
                className="mt-1 h-48 px-3 py-3 w-full border rounded-md resize-none"
                placeholder="Enter product description"
                required
              />
            </form>
          </div>
        </div>

        {/* Gallery  Section */}
        <div className="lg:grid grid-cols-2 h-48  gap-10 mt-10 items-center">
          <div className="dark:bg-gray-800 p-10 rounded bg-[#16193a]">
            <h3 className="text-4xl font-bold text-white mb-5">Gallery</h3>
            <form className="flex gap-3">
              <label
                htmlFor="choiceFile"
                className="cursor-pointer border border-dashed w-[100px] h-[100px] rounded flex  items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </label>
              <input
                type="file"
                id="choiceFile"
                className="hidden text-white mt-5 border cursor-pointer border-dashed  bg-[#00193b]  rounded"
              />{" "}
              <label
                htmlFor="choiceFile"
                className="cursor-pointer border border-dashed w-[100px] h-[100px] rounded flex  items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </label>
              <input
                type="file"
                id="choiceFile"
                className="hidden text-white mt-5 border cursor-pointer border-dashed  bg-[#00193b]  rounded"
              />{" "}
              <label
                htmlFor="choiceFile"
                className="cursor-pointer border border-dashed w-[100px] h-[100px] rounded flex  items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </label>
              <input
                type="file"
                id="choiceFile"
                className="hidden text-white mt-5 border cursor-pointer border-dashed  bg-[#00193b]  rounded"
              />
            </form>
          </div>

          {/* Category */}
          <div className="lg:mt-0 mt-5 p-10 h-[240px] rounded bg-[#212130]">
            <h3 className="text-4xl font-bold text-white">Category</h3>
            <form>
              <Select name="cars" id="cars" className="mt-5">
                <option value="volvo">Select Category</option>
                <option value="saab">Desktop</option>
                <option value="mercedes">Laptop</option>
                <option value="audi">Mobile</option>
                <option value="audi">Clock</option>
                <option value="audi">Tablet</option>
              </Select>
            </form>
          </div>
        </div>
        {/* <Button className="w-full mt-10 bg-[#212130] ">Add Product</Button> */}
      </div>
    </div>
  );
};

export default Customers;
{
  /* <PieChartExample />
          <PieChartTwo /> */
}
