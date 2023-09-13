"use client";
import { AuthContext } from "@/AuthProvider/AuthProvider";

import {
  ChatIcon,
  DashboardIcon,
  DropdownIcon,
  InventoryIcon,
  MarketingIcon,
  OrderIcon,
  PaymentIcon,
  ProductsIcon,
  SupportIcon,
  UserIcon,
  VendorIcon,
} from "@/Icons/page";
import Link from "next/link";
import { useContext, useState } from "react";

export const Item = ({ menu, link, icon }) => {
  return (
    <ul>
      <li>
        <Link
          href={link}
          className="flex items-center w-full p-2 text-base hover:bg-gray-600 hover:text-white text-gray-200 transition duration-75 rounded-lg group"
        >
          <div className="me-2">{icon}</div>
          {menu}
        </Link>
      </li>
    </ul>
  );
};

const dropdown = [
  {
    title: "Products",
    icon: <ProductsIcon />,
    link: [
      { name: "Add Products", href: "/dashboard/add-product" },
      { name: "All Products", href: "/dashboard/all-product" },
      { name: "Manage Products", href: "/dashboard/manage-product" },
      { name: "Edit Products", href: "/dashboard/edit-product" },
    ],
  },
  {
    title: "Order Management",
    icon: <OrderIcon />,
    link: [
      { name: "All Order", href: "/dashboard/order" },
      { name: "Completed Order", href: "/dashboard/completed-order" },
      { name: "Cancel Order", href: "/dashboard/cancel-order" },
    ],
  },
  {
    title: "Users",
    icon: <UserIcon />,
    link: [
      { name: "All Users", href: "/dashboard" },
      { name: "Customers", href: "/dashboard/customers" },
      { name: "Reviews & Ratings", href: "/dashboard/customers" },
      { name: "support and communication", href: "/dashboard/customers" },
      { name: "Sign Up Users", href: "/dashboard/signup-users" },
    ],
  },
  {
    title: "Authentication",
    icon: <VendorIcon />,
    link: [
      { name: "Sign In", href: "/dashboard/signin" },
      { name: "Sign Up", href: "/dashboard/signup" },
      { name: "My Profile", href: "/dashboard/my-profile" },
    ],
  },
  {
    title: "Payment & Commission",
    icon: <PaymentIcon />,
    link: [
      { name: "Payment Processing", href: "/dashboard/signin" },
      { name: "Commission", href: "/dashboard/signup" },
      { name: "Payout Requests", href: "/dashboard/my-profile" },
    ],
  },
  {
    title: "Inventory Management",
    icon: <MarketingIcon />,
    link: [
      { name: "Stock tracking", href: "/dashboard/signin" },
      { name: "Low stock alerts", href: "/dashboard/signup" },
      { name: "Product variations", href: "/dashboard/my-profile" },
    ],
  },
  {
    title: "Marketing & Promotions",
    icon: <InventoryIcon />,
    link: [
      { name: "Discount & Coupon", href: "/dashboard/signin" },
      { name: "Product recommendations", href: "/dashboard/signup" },
      { name: "Email marketing", href: "/dashboard/my-profile" },
    ],
  },
  {
    title: "Categories",
    icon: <InventoryIcon />,
    link: [
      { name: "Discount & Coupon", href: "/dashboard/signin" },
      { name: "Product recommendations", href: "/dashboard/signup" },
      { name: "Email marketing", href: "/dashboard/my-profile" },
    ],
  },
  {
    title: "Vendor",
    icon: <VendorIcon />,
    link: [{ name: "Vendor", href: "/dashboard/vendors" }],
    link: [{ name: "Vendor verification", href: "/dashboard/vendors" }],
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState([]);
  const { showSidebar } = useContext(AuthContext);

  const handleOpen = (idx) => {
    const newOpenState = [...open];
    newOpenState[idx] = !newOpenState[idx];
    setOpen(newOpenState);
  };

  return (
    <aside
      className={`${showSidebar} pt-10 h-full pb-[50px] overflow-auto custom-scrollbar bg-[#16193a] fixed top-14 left-0 z-40 w-64 transition-transform sm:translate-x-0`}
    >
      <Item icon={<DashboardIcon />} menu={"Dashboard"} link={"/dashboard"} />
      <ul>
        {dropdown &&
          dropdown.map((item, idx) => (
            <li key={idx}>
              <button
                onClick={() => handleOpen(idx)}
                className="flex items-center w-full my-2 p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-400 dark:text-white dark:hover:bg-gray-700"
                aria-controls={`dropdown-example-${idx}`}
                data-collapse-toggle={`dropdown-example-${idx}`}
              >
                {item.icon}
                <span class="flex-1 ml-2 text-left whitespace-nowrap">
                  {item.title}
                </span>
                <DropdownIcon />
              </button>
              {open[idx] && (
                <div id={`dropdown-example-${idx}`}>
                  {item?.link?.map((linkItem, linkIdx) => (
                    <Link
                      href={linkItem.href}
                      className="flex items-center w-full p-2 ms-3 text-base hover:bg-gray-600 hover:text-white text-gray-200 transition duration-75 rounded-lg group"
                      key={linkIdx}
                    >
                      {linkItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
      </ul>
      <Item
        icon={<SupportIcon />}
        menu={"support"}
        link={"/dashboard/support"}
      />
      <Item icon={<ChatIcon />} menu={"Chat"} link={"/dashboard/chat"} />
    </aside>
  );
}
