import React from "react";

const users = [
  {
    id: 1,
    productName: "John Doe",
    color: "White",
    category: "Laptop",
    price: "2250",
  },
  {
    id: 2,
    productName: "Jane Smith",
    color: "Black",
    category: "Desktop",
    price: "2541",
  },
  {
    id: 1,
    productName: "John Doe",
    color: "White",
    category: "Laptop",
    price: "2250",
  },
  {
    id: 1,
    productName: "John Doe",
    color: "White",
    category: "Laptop",
    price: "2250",
  },
  {
    id: 1,
    productName: "John Doe",
    color: "White",
    category: "Laptop",
    price: "2250",
  },
  {
    id: 1,
    productName: "John 6",
    color: "White",
    category: "Laptop",
    price: "2250",
  },
];

const Visitor = () => {
  return (
    <div className="user-listing relative overflow-x-auto mt-5">
      <h2 className="text-4xl text-center mb-3 font-bold">Recent Seel</h2>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {users.slice(0, 6).map((item, idx) => (
            <tr key={item.id} className={idx % 2 === 0 ? "bg-gray-200" : ""}>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.productName}
              </td>
              <td className="px-6 py-4">{item.color}</td>
              <td className="px-6 py-4">{item.category}</td>
              <td className="px-6 py-4">${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Visitor;
