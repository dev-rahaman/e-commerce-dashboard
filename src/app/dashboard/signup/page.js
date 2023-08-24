"use client";
import PageName from "@/components/PageName";
import { Button, Select } from "flowbite-react";
import Image from "next/image";
import React, { useState } from "react";

const Signup = () => {
  const [productName, setProductName] = useState("");
  const [productTitle, setProductTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any actions with the form data, like submitting to a server
    console.log("Product Name:", productName);
    console.log("Product Title:", productTitle);
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-gray-200  rounded-lg dark:border-gray-700">
        <PageName name={"Sign Up"} />
        {/* <div className="flex items-center justify-center">
          <Image src={"/signup.webp"} width={300} height={300} alt="" />
        </div> */}
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div className="dark:bg-gray-800 p-10 rounded bg-[#16193a]">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="productName"
                  className="mt-1 px-3 py-2 w-full border rounded-md"
                  placeholder=" First Name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="productTitle"
                  className="block text-sm font-medium text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="productTitle"
                  className="mt-1 px-3 py-2 w-full border rounded-md outline-none"
                  placeholder="Last Name"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                  required
                />
              </div>
            </form>
          </div>

          <div className=" p-10 rounded  bg-[#212130]">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="productName"
                  className="mt-1 px-3 py-2 w-full border rounded-md"
                  placeholder="Email"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="productTitle"
                  className="block text-sm font-medium text-white"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="productTitle"
                  className="mt-1 px-3 py-2 w-full border rounded-md outline-none"
                  placeholder="Phone Number"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                  required
                />
              </div>
            </form>
          </div>
        </div>

        {/* Center  */}
        <div className="grid grid-cols-2 gap-10 mt-10 items-center">
          <div className="dark:bg-gray-800 p-10 rounded bg-[#212130]">
            <h3 className="text-4xl font-bold text-white">Gender</h3>
            <form onSubmit={handleSubmit} className="flex h-48 items-center">
              <div>
                <div>
                  <input type="checkbox" id="red" className="text-red-600" />
                  <label
                    htmlFor="red"
                    className="inline-block m-3 text-sm font-medium text-white"
                  >
                    Mail
                  </label>
                </div>
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
                    Non Binary
                  </label>
                </div>
              </div>
              <div>
                <div className="gap-2">
                  <input type="checkbox" id="aqua" className="text-green-400" />
                  <label
                    htmlFor="aqua"
                    className="inline-block m-3 text-sm font-medium text-white"
                  >
                    Female
                  </label>
                </div>
                <div className="gap-2">
                  <input type="checkbox" id="white" className="text-green" />
                  <label
                    htmlFor="white"
                    className="inline-block m-3 text-sm font-medium text-white"
                  >
                    Other
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="p-10 rounded bg-[#16193a]">
            <form>
              <label
                htmlFor="productDescription"
                className="block text-sm font-medium text-white"
              >
                Description
              </label>
              <textarea
                id="productDescription"
                className="mt-1 h-48 px-3 py-3 w-full border rounded-md resize-none"
                placeholder="write something about yourself"
                required
              />
            </form>
          </div>
        </div>

        {/* Gallery  Section */}
        <div className="grid grid-cols-2 h-48  gap-10 mt-10 items-center">
          <div className="dark:bg-gray-800 p-10 rounded bg-[#16193a]">
            <h3 className="text-4xl font-bold text-white mb-5">Gallery</h3>
            <div className="flex justify-around">
              <form className="">
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
              <Image
                src={"/productImage.jpg"}
                alt="preview image"
                width={140}
                height={140}
                className="w-24 h-24 rounded"
              />
            </div>
          </div>

          {/* Category */}
          <div className="p-10 h-[240px] rounded bg-[#212130]">
            <h3 className="text-4xl font-bold text-white">Address</h3>
            <form>
              <div className="mb-4">
                <input
                  type="tel"
                  id="productTitle"
                  className="mt-1 px-3 mb-5 py-2 w-full border rounded-md outline-none"
                  placeholder="Address 1"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  id="productTitle"
                  className="mt-1 px-3 py-2 w-full border rounded-md outline-none"
                  placeholder="Address 2"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <Button className="w-1/3 rounded-full p-2 mt-20 bg-[#212130] ">
          Update Information
        </Button>
      </div>
    </div>
  );
};

export default Signup;
