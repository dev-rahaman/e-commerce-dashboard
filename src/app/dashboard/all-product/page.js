import PageName from "@/components/PageName";
import Image from "next/image";
import React from "react";

const cartItems = [
  {
    image: "https://via.placeholder.com/64",
    title: "LAIKOU Vitamin C Serum Brightening Antioxidant Remove Spots -17 ml",
    price: 19.99,
  },
  {
    image: "https://via.placeholder.com/64",
    title: "LAIKOU Vitamin C Serum Brightening Antioxidant Remove Spots -17 ml",
    price: 29.99,
  },
  {
    image: "https://via.placeholder.com/64",
    title:
      "LAIKOU Vitamin C Serum Brightening Antioxidant Remove Spots -17 ml LAIKOU Vitamin C Serum Brightening Antioxidant Remove Spots -17 ml",
    price: 14.99,
  },
  {
    image: "https://via.placeholder.com/64",
    title: "LAIKOU Vitamin C Serum Brightening Antioxidant Remove Spots -17 ml",
    price: 19.99,
  },
  {
    image: "https://via.placeholder.com/64",
    title: "LAIKOU Vitamin C Serum Brightening Antioxidant Remove Spots -17 ml",
    price: 29.99,
  },
  {
    image: "https://via.placeholder.com/64",
    title:
      "LAIKOU Vitamin C Serum Brightening Antioxidant Remove Spots -17 ml LAIKOU Vitamin C Serum Brightening Antioxidant Remove Spots -17 ml",
    price: 14.99,
  },
  {
    image: "https://via.placeholder.com/64",
    title: "LAIKOU Vitamin C Serum Brightening Antioxidant Remove Spots -17 ml",
    price: 19.99,
  },
  {
    image: "https://via.placeholder.com/64",
    title: "LAIKOU Vitamin C Serum Brightening Antioxidant Remove Spots -17 ml",
    price: 29.99,
  },
  {
    image: "https://via.placeholder.com/64",
    title: "LAIKOU Vitamin C Serum Brightening Antioxidant Remove Spots -17 ml",
    price: 29.99,
  },
  {
    image: "https://via.placeholder.com/64",
    title:
      "LAIKOU Vitamin C Serum Brightening Antioxidant Remove Spots -17 ml LAIKOU Vitamin C Serum Brightening Antioxidant Remove Spots -17 ml",
    price: 14.99,
  },
  {
    image: "https://via.placeholder.com/64",
    title: "LAIKOU Vitamin C Serum Brightening Antioxidant Remove Spots -17 ml",
    price: 19.99,
  },
  {
    image: "https://via.placeholder.com/64",
    title: "LAIKOU Vitamin C Serum Brightening Antioxidant Remove Spots -17 ml",
    price: 29.99,
  },
];

const AllProducts = () => {
  return (
    <div class="p-4 sm:ml-64">
      <PageName name={"All Product"} />
      <div class="flex flex-wrap justify-center gap-4 p-4 rounded-lg dark:border-gray-700">
        {cartItems.map((item) => (
          <>
            <div className="cursor-pointer flex items-center flex-col justify-center border p-4 mb-4 w-[200px] h-[300px]">
              <Image
                width={150}
                height={150}
                src="/productImage.jpg"
                alt="activeOrder"
                className="object-cover rounded"
              />
              <div className="ml-4 justify-center">
                <p className="">{item.title.slice(0, 50)}</p>
                <p className="font-semibold">${item.price}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
