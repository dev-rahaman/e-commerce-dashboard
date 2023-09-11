"use client";
import DropdownIcon from "@/components/DropdownIcon";
import Link from "next/link";
import { useState } from "react";

export const Item = ({ menu, link }) => {
  return (
    <ul>
      <li>
        <Link
          href={link}
          className="flex items-center w-full p-2   text-base hover:bg-gray-600 hover:text-white text-gray-200 transition duration-75 rounded-lg group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
          {menu}
        </Link>
      </li>
    </ul>
  );
};

const dropdown = [
  {
    title: "Products",
    link: [
      { name: "Add Products", href: "/dashboard/add-product" },
      { name: "All Products", href: "/dashboard/all-product" },
      { name: "Manage Products", href: "/dashboard/manage-product" },
      { name: "Edit Products", href: "/dashboard/edit-product" },
    ],
  },
  {
    title: "Order",
    link: [
      { name: "All Order", href: "/dashboard/order" },
      { name: "Completed Order", href: "/dashboard/completed-order" },
      { name: "Cancel Order", href: "/dashboard/cancel-order" },
    ],
  },
  {
    title: "Users",
    link: [
      { name: "All Users", href: "/dashboard" },
      { name: "Customers", href: "/dashboard/customers" },
      { name: "Sign Up Users", href: "/dashboard/signup-users" },
    ],
  },
  {
    title: "Authentication",
    link: [
      { name: "Sign In", href: "/dashboard/signin" },
      { name: "Sign Up", href: "/dashboard/signup" },
      { name: "My Profile", href: "/dashboard/my-profile" },
    ],
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState([]);

  const handleOpen = (idx) => {
    const newOpenState = [...open];
    newOpenState[idx] = !newOpenState[idx];
    setOpen(newOpenState);
  };

  return (
    <aside className="pt-10 h-full overflow-auto custom-scrollbar bg-[#16193a] fixed top-14 left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0">
      <ul>
        {dropdown &&
          dropdown.map((item, idx) => (
            <li key={idx}>
              <div
                onClick={() => handleOpen(idx)}
                className="flex items-center justify-between hover:bg-gray-600 w-full p-2 text-base hover:text-white text-gray-200 transition duration-75 rounded-lg group cursor-pointer"
                aria-controls={`dropdown-example-${idx}`}
                data-collapse-toggle={`dropdown-example-${idx}`}
              >
                {item.title}
                <DropdownIcon />
              </div>
              {open[idx] && (
                <ul id={`dropdown-example-${idx}`}>
                  {item?.link?.map((linkItem, linkIdx) => (
                    <Link
                      href={linkItem.href}
                      className="flex items-center w-full p-2 ms-3 text-base hover:bg-gray-600 hover:text-white text-gray-200 transition duration-75 rounded-lg group"
                      key={linkIdx}
                    >
                      {linkItem.name}
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
      <Item menu={"support"} link={"/dashboard/support"} />
    </aside>
  );
}
