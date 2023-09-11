"use client";
import Recaptcha from "@/components/Recaptcha";
import Image from "next/image";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div class="p-4 sm:ml-64">
      <div class="p-4 border-gray-200  rounded-lg dark:border-gray-700">
        <div className="flex justify-around items-center">
          <div className="flex items-center dark:bg-gray-800 p-10 h-[300px] w-[500px] rounded bg-[#16193a]">
            <form>
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
                  className="mt-1 px-3 py-2 w-[400px] border rounded-md"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="productTitle"
                  className="block text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="text"
                  id="productTitle"
                  className="mt-1 px-3 py-2 w-full border rounded-md outline-none"
                  placeholder="Password"
                  required
                />
              </div>
              <Recaptcha />
            </form>
          </div>
          <div>
            <Image src={"/login.webp"} width={500} height={500} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
