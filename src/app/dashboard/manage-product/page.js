import Image from "next/image";
import React from "react";
const items = [
  {
    image: "/productImage.jpg",
    name: "Product A",
    stock: 10,
    price: 29.99,
    type: "Simple",
    rating: 4.5,
  },
  {
    image: "/productImage.jpg",
    name: "Product B",
    stock: 5,
    price: 19.95,
    type: "Gorgias",
    rating: 3.8,
  },
  {
    image: "/productImage.jpg",
    name: "Product C",
    stock: 0,
    price: 9.99,
    type: "Simple",
    rating: 4.2,
  },
  {
    image: "/productImage.jpg",
    name: "Product C",
    stock: 0,
    price: 9.99,
    type: "Simple",
    rating: 4.2,
  },
  {
    image: "/productImage.jpg",
    name: "Product C",
    stock: 0,
    price: 9.99,
    type: "Simple",
    rating: 4.2,
  },
  {
    image: "/productImage.jpg",
    name: "Product C",
    stock: 0,
    price: 9.99,
    type: "Simple",
    rating: 4.2,
  },
  {
    image: "/productImage.jpg",
    name: "Product C",
    stock: 0,
    price: 9.99,
    type: "Simple",
    rating: 4.2,
  },
  {
    image: "/productImage.jpg",
    name: "Product C",
    stock: 0,
    price: 9.99,
    type: "Simple",
    rating: 4.2,
  },
  {
    image: "/productImage.jpg",
    name: "Product C",
    stock: 0,
    price: 9.99,
    type: "Simple",
    rating: 4.2,
  },
];

const ManageProduct = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-white dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="text-white custom-hover">
                <th scope="col" className="px-6 py-3">
                  image
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  stock
                </th>
                <th scope="col" className="px-6 py-3">
                  price
                </th>
                <th scope="col" className="px-6 py-3">
                  type
                </th>
                <th scope="col" className="px-6 py-3">
                  rating
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <Image
                        src={item.image}
                        width={50}
                        height={50}
                        alt="item-images"
                      ></Image>
                    </th>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.stock}</td>
                    <td className="px-6 py-4">$ {item.price}</td>
                    <td className="px-6 py-4">$ {item.rating}</td>
                    <td className="px-6 py-4">$ {item.rating}</td>
                    <td className="px-6 py-4 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        />
                      </svg>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
