import PageName from "@/components/PageName";
import PieChartExample from "@/components/PieChartExample";
import PieChartTwo from "@/components/PieChartTwo";
import Image from "next/image";
import React from "react";

const Customers = () => {
  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700"></div>
        <PageName name={"Customers"} />
        <div class="lg:grid grid-cols-3 gap-4 mb-4">
          <div class="flex items-center justify-between h-24 rounded text-white bg-[#497cf1] p-3 dark:bg-gray-800">
            <div>
              <h3 className="font-extrabold">All Customers</h3>
              <Image
                src={"/shippingOrder.png"}
                width={50}
                height={50}
                alt="shipping order"
              />
            </div>
            <h3 className="text-4xl text-center font-bold">21502</h3>
          </div>
          <div class="flex items-center justify-between h-24 rounded text-white bg-[#ba2bf7] p-3 dark:bg-gray-800">
            <div>
              <h3 className="font-extrabold">Regular Customers</h3>
              <Image
                src={"/activeOrder.png"}
                width={50}
                height={50}
                alt="shipping order"
              />
            </div>
            <h3 className="text-4xl text-center font-bold">4802</h3>
          </div>
          <div class="flex items-center justify-between h-24 rounded text-white bg-[#497cf1] p-3 dark:bg-gray-800">
            <div>
              <h3 className="font-extrabold">New Customers</h3>
              <Image
                src={"/shippingOrder.png"}
                width={50}
                height={50}
                alt="shipping order"
              />
            </div>
            <h3 className="text-4xl text-center font-bold">2042</h3>
          </div>
        </div>

        <div class="flex items-center justify-center rounded bg-[#031123] dark:bg-gray-800">
          <PieChartExample />
          <PieChartTwo />
        </div>
      </div>
    </div>
  );
};

export default Customers;
