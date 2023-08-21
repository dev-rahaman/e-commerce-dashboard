import LineChartExample from "@/components/BiaxialLineChart";
import PieChartComponent from "@/components/PieChart";
import UsersAccordion from "@/components/UsersAccordion";
import Visitor from "@/components/Visitor";
import BarChartSimple from "@/components/cart";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div class="p-4 sm:ml-64">
      <div class="p-4 border-gray-200 rounded-lg dark:border-gray-700">
        <div class="lg:grid grid-cols-3 gap-4 mb-4">
          <div class="flex items-center justify-between h-24 rounded text-white bg-[#497cf1] p-3 dark:bg-gray-800">
            <div>
              <h3 className="font-extrabold">Shipped orders</h3>
              <Image
                src={"/shippingOrder.png"}
                width={50}
                height={50}
                alt="shipping order"
              />
            </div>
            <h3 className="text-4xl text-center font-bold">202</h3>
          </div>
          <div class="flex items-center justify-between h-24 rounded text-white bg-[#ba2bf7] p-3 dark:bg-gray-800">
            <div>
              <h3 className="font-extrabold">Pending orders</h3>
              <Image
                src={"/activeOrder.png"}
                width={50}
                height={50}
                alt="shipping order"
              />
            </div>
            <h3 className="text-4xl text-center font-bold">02</h3>
          </div>
          <div class="flex items-center justify-between h-24 rounded text-white bg-[#497cf1] p-3 dark:bg-gray-800">
            <div>
              <h3 className="font-extrabold">New orders</h3>
              <Image
                src={"/shippingOrder.png"}
                width={50}
                height={50}
                alt="shipping order"
              />
            </div>
            <h3 className="text-4xl text-center font-bold">202</h3>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-4 ">
          <div class="  rounded bg-[#212130] dark:bg-gray-800">
            <h2 className="text-white my-5  text-4xl text-center font-bold">
              To Days Sales
            </h2>
            <BarChartSimple />
          </div>
          <div class="  rounded bg-[#212130] dark:bg-gray-800">
            <h2 className="text-white my-5  text-4xl text-center font-bold">
              Recent Activity
            </h2>
            <LineChartExample />
          </div>
        </div>
        <div class="grid grid-cols-2 justify-items-center">
          <div class="dark:bg-gray-800">
            <PieChartComponent />
            <Visitor />
          </div>
          <div class="bg-gray-50 dark:bg-gray-800">
            <UsersAccordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
