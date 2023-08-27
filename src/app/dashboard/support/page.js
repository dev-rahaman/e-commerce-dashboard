import SupportAccordion from "@/components/SupportAccordion";
import UsersAccordion from "@/components/UsersAccordion";
import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 rounded-lg dark:border-gray-700">
        <div className="lg:grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center justify-between h-24 rounded text-white bg-[#497cf1] p-3 dark:bg-gray-800">
            <div>
              <h3 className="font-extrabold">Request for Help This Month </h3>
              <Image
                src={"/question.png"}
                width={50}
                height={50}
                alt="shipping order"
                className="opacity-10"
              />
            </div>
            <h3 className="text-4xl text-center font-bold">202</h3>
          </div>
          <div className="flex items-center justify-between h-24 rounded text-white bg-[#ba2bf7] p-3 dark:bg-gray-800">
            <div>
              <h3 className="font-extrabold">Pending Help</h3>
              <Image
                src={"/shippingOrder.png"}
                width={50}
                height={50}
                alt="shipping order"
              />
            </div>
            <h3 className="text-4xl text-center font-bold">02</h3>
          </div>
          <div className="flex items-center justify-between h-24 rounded text-white bg-[#497cf1] p-3 dark:bg-gray-800">
            <div>
              <h3 className="font-extrabold">Completed Help</h3>
              <Image
                src={"/activeOrder.png"}
                width={50}
                height={50}
                alt="shipping order"
              />
            </div>
            <h3 className="text-4xl text-center font-bold">200</h3>
          </div>
        </div>
        <div className="bg-[#212130]">
          <SupportAccordion
            subject={"Login Security Issues"}
            email={"support@gmail.com"}
            name={"Abur Rahaman Sultany"}
            id={"f12djs23lfojf344566"}
            content={
              "Build websites even faster with components on top of Tailwind CSS Build websites even faster with components on top of Tailwind CSS Build websites even faster with components on top of Tailwind CSS Build websites even faster with components on top of Tailwind CSS"
            }
          />
          <SupportAccordion
            subject={"Product Buy"}
            email={"support@gmail.com"}
            name={"Abur Rahaman Sultany"}
            id={"f12djs23lfojf344566"}
            content={
              "Build websites even faster with components on top of Tailwind CSS Build websites even faster with components on top of Tailwind CSS Build websites even faster with components on top of Tailwind CSS Build websites even faster with components on top of Tailwind CSS"
            }
          />
          <SupportAccordion
            subject={"Payment Issues"}
            email={"support@gmail.com"}
            name={"Abur Rahaman Sultany"}
            id={"f12djs23lfojf344566"}
            content={
              "Build websites even faster with components on top of Tailwind CSS Build websites even faster with components on top of Tailwind CSS Build websites even faster with components on top of Tailwind CSS Build websites even faster with components on top of Tailwind CSS"
            }
          />
          <SupportAccordion
            subject={"Message Issues"}
            email={"support@gmail.com"}
            name={"Abur Rahaman Sultany"}
            id={"f12djs23lfojf344566"}
            content={
              "Build websites even faster with components on top of Tailwind CSS Build websites even faster with components on top of Tailwind CSS Build websites even faster with components on top of Tailwind CSS Build websites even faster with components on top of Tailwind CSS"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
