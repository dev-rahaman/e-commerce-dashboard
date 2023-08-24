import PageName from "@/components/PageName";
import Image from "next/image";
import React from "react";
const products = [
  {
    id: "12fdsfew4",
    image: "/productImage.jpg",
    category: "Electronics",
    amount: "$299.99",
    status: "Processing",
    rating: 4.5,
  },
  {
    id: "124fdsfew4",
    image: "/productImage.jpg",
    category: "Clothing",
    amount: "$49.99",
    status: "Shipped",
    rating: 3.8,
  },
  {
    id: "12fdsfew4",
    image: "/productImage.jpg",
    category: "Electronics",
    amount: "$299.99",
    status: "Processing",
    rating: 4.5,
  },
  {
    id: "124fdsfew4",
    image: "/productImage.jpg",
    category: "Clothing",
    amount: "$49.99",
    status: "Shipped",
    rating: 3.8,
  },
  {
    id: "12fdsfew4",
    image: "/productImage.jpg",
    category: "Electronics",
    amount: "$299.99",
    status: "Processing",
    rating: 4.5,
  },
  {
    id: "124fdsfew4",
    image: "/productImage.jpg",
    category: "Clothing",
    amount: "$49.99",
    status: "Shipped",
    rating: 3.8,
  },
];

const Order = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
        <PageName name={"Orders"} />
        <div className="lg:grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center justify-between h-24 rounded text-white bg-[#497cf1] p-3 dark:bg-gray-800">
            <div>
              <h3 className="font-extrabold">Completed Orders</h3>
              <Image
                src={"/shippingOrder.png"}
                width={50}
                height={50}
                alt="shipping order"
              />
            </div>
            <h3 className="text-4xl text-center font-bold">202</h3>
          </div>
          <div className="flex items-center justify-between h-24 rounded text-white bg-[#ba2bf7] p-3 dark:bg-gray-800">
            <div>
              <h3 className="font-extrabold">Pending Orders</h3>
              <Image
                src={"/activeOrder.png"}
                width={50}
                height={50}
                alt="shipping order"
              />
            </div>
            <h3 className="text-4xl text-center font-bold">20</h3>
          </div>
          <div className="flex items-center justify-between h-24 rounded text-white bg-[#497cf1] p-3 dark:bg-gray-800">
            <div>
              <h3 className="font-extrabold">Canceled Orders</h3>
              <Image
                src={"/shippingOrder.png"}
                width={50}
                height={50}
                alt="shipping order"
              />
            </div>
            <h3 className="text-4xl text-center font-bold">02</h3>
          </div>
        </div>

        {/* product list  */}
        <div className="bg-[#031123] rounded text-white container mx-auto p-4">
          <table className="w-full border-collapse ">
            <thead>
              <tr>
                <th className="p-2">ID</th>
                <th className="p-2">PRODUCT</th>
                <th className="p-2">CATEGORY</th>
                <th className="p-2">AMOUNT</th>
                <th className="p-2">STATUS</th>
                <th className="p-2">RATING</th>
                <th className="p-2">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {products.slice(0, 5).map((product) => (
                <tr key={product.id} className="border-b h-[100px]">
                  <td className="p-2">{product.id}</td>
                  <td className="p-2">
                    <Image
                      width={20}
                      height={20}
                      src={product.image}
                      alt={`Product ${product.id}`}
                      className="h-16 w-16 object-cover rounded-md"
                    />
                  </td>
                  <td className=" p-2">{product.category}</td>
                  <td className=" p-2">{product.amount}</td>
                  <td className=" p-2">{product.status}</td>
                  <td className=" p-2">{product.rating}</td>
                  <td className=" p-2 ">
                    <div className="flex justify-between">
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
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
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
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <thead>
              <tr>
                <th className=" p-2 ">ID</th>
                <th className="p-2">PRODUCT</th>
                <th className="p-2">CATEGORY</th>
                <th className="p-2">AMOUNT</th>
                <th className="p-2">STATUS</th>
                <th className="p-2">RATING</th>
                <th className="p-2">ACTION</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
