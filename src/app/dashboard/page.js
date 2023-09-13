"use client";
import LineChartExample from "@/components/BiaxialLineChart";
import PieChartComponent from "@/components/PieChart";
import UsersAccordion from "@/components/UsersAccordion";
import RecentSeel from "@/components/RecentSeel";
import BarChartSimple from "@/components/cart";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
        <div className="lg:grid grid-cols-3 mt-7 lg:mt-2 gap-4 mb-4">
          <div className="mb-5 flex items-center justify-between h-24 rounded text-white bg-[#497cf1] p-3 dark:bg-gray-800">
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
          <div className="mb-5 flex items-center justify-between h-24 rounded text-white bg-[#ba2bf7] p-3 dark:bg-gray-800">
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
          <div className="flex items-center justify-between h-24 rounded text-white bg-[#497cf1] p-3 dark:bg-gray-800">
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

        <div className="lg:grid grid-cols-2 gap-4 mb-4 ">
          <div className="  rounded bg-[#212130] dark:bg-gray-800">
            <h2 className="text-white my-5  text-4xl text-center font-bold">
              To Days Sales
            </h2>
            <BarChartSimple />
          </div>
          <div className="  rounded bg-[#212130] dark:bg-gray-800">
            <h2 className="text-white my-5  text-4xl text-center font-bold">
              Recent Activity
            </h2>
            <LineChartExample />
          </div>
        </div>

        <div className="lg:grid  grid-cols-2 gap-4 mb-4 ">
          <div className="rounded bg-[#212130] dark:bg-gray-800">
            <h2 className="text-white my-5  text-4xl text-center font-bold">
              To Days Sales
            </h2>
            <PieChartComponent />
          </div>
          <div className="h-[380px] lg:mt-0 mt-10 custom-scrollbar overflow-auto rounded bg-[#212130] dark:bg-gray-800">
            <h2 className="text-white my-5  text-4xl text-center font-bold">
              Request Support
            </h2>
            <UsersAccordion
              title={"What is E-Commerce?"}
              content={
                "E-commerce, short for electronic commerce, refers to the buying and selling of goods and services over the internet. It has revolutionized the way we shop, providing convenience, accessibility, and a global marketplace at our fingertips. E-commerce encompasses a wide range of online transactions, from purchasing products on online marketplaces to ordering groceries, booking travel accommodations, and subscribing to digital services. In the digital age, e-commerce has become an integral part of modern business strategies. With its ability to reach a vast audience, streamline transactions, and offer personalized shopping experiences, e-commerce has reshaped industries and consumer behaviors."
              }
            />
            <UsersAccordion
              title="Exploring Our E-Commerce Selection"
              content="We are excited to present a diverse range of products that cater to your needs and preferences. Our e-commerce platform offers a seamless shopping experience, allowing you to explore, choose, and purchase products from the comfort of your home."
            />
            <UsersAccordion
              title="Product Categories"
              content="To enhance your shopping journey, we've organized our products into various categories. Whether you're looking for the latest fashion trends, cutting-edge electronics, home essentials, or unique gifts, our selection has something for everyone."
            />
            <UsersAccordion
              title="Product Categories"
              content="To enhance your shopping journey, we've organized our products into various categories. Whether you're looking for the latest fashion trends, cutting-edge electronics, home essentials, or unique gifts, our selection has something for everyone."
            />
            <UsersAccordion
              title={"What is E-Commerce?"}
              content={
                "E-commerce, short for electronic commerce, refers to the buying and selling of goods and services over the internet. It has revolutionized the way we shop, providing convenience, accessibility, and a global marketplace at our fingertips. E-commerce encompasses a wide range of online transactions, from purchasing products on online marketplaces to ordering groceries, booking travel accommodations, and subscribing to digital services. In the digital age, e-commerce has become an integral part of modern business strategies. With its ability to reach a vast audience, streamline transactions, and offer personalized shopping experiences, e-commerce has reshaped industries and consumer behaviors."
              }
            />
            <UsersAccordion
              title="Exploring Our E-Commerce Selection"
              content="We are excited to present a diverse range of products that cater to your needs and preferences. Our e-commerce platform offers a seamless shopping experience, allowing you to explore, choose, and purchase products from the comfort of your home."
            />
            <UsersAccordion
              title="Product Categories"
              content="To enhance your shopping journey, we've organized our products into various categories. Whether you're looking for the latest fashion trends, cutting-edge electronics, home essentials, or unique gifts, our selection has something for everyone."
            />
            <UsersAccordion
              title="Product Categories"
              content="To enhance your shopping journey, we've organized our products into various categories. Whether you're looking for the latest fashion trends, cutting-edge electronics, home essentials, or unique gifts, our selection has something for everyone."
            />
            <UsersAccordion
              title={"What is E-Commerce?"}
              content={
                "E-commerce, short for electronic commerce, refers to the buying and selling of goods and services over the internet. It has revolutionized the way we shop, providing convenience, accessibility, and a global marketplace at our fingertips. E-commerce encompasses a wide range of online transactions, from purchasing products on online marketplaces to ordering groceries, booking travel accommodations, and subscribing to digital services. In the digital age, e-commerce has become an integral part of modern business strategies. With its ability to reach a vast audience, streamline transactions, and offer personalized shopping experiences, e-commerce has reshaped industries and consumer behaviors."
              }
            />
            <UsersAccordion
              title="Exploring Our E-Commerce Selection"
              content="We are excited to present a diverse range of products that cater to your needs and preferences. Our e-commerce platform offers a seamless shopping experience, allowing you to explore, choose, and purchase products from the comfort of your home."
            />
            <UsersAccordion
              title="Product Categories"
              content="To enhance your shopping journey, we've organized our products into various categories. Whether you're looking for the latest fashion trends, cutting-edge electronics, home essentials, or unique gifts, our selection has something for everyone."
            />
            <UsersAccordion
              title="Product Categories"
              content="To enhance your shopping journey, we've organized our products into various categories. Whether you're looking for the latest fashion trends, cutting-edge electronics, home essentials, or unique gifts, our selection has something for everyone."
            />
            <UsersAccordion
              title={"What is E-Commerce?"}
              content={
                "E-commerce, short for electronic commerce, refers to the buying and selling of goods and services over the internet. It has revolutionized the way we shop, providing convenience, accessibility, and a global marketplace at our fingertips. E-commerce encompasses a wide range of online transactions, from purchasing products on online marketplaces to ordering groceries, booking travel accommodations, and subscribing to digital services. In the digital age, e-commerce has become an integral part of modern business strategies. With its ability to reach a vast audience, streamline transactions, and offer personalized shopping experiences, e-commerce has reshaped industries and consumer behaviors."
              }
            />
            <UsersAccordion
              title="Exploring Our E-Commerce Selection"
              content="We are excited to present a diverse range of products that cater to your needs and preferences. Our e-commerce platform offers a seamless shopping experience, allowing you to explore, choose, and purchase products from the comfort of your home."
            />
            <UsersAccordion
              title="Product Categories"
              content="To enhance your shopping journey, we've organized our products into various categories. Whether you're looking for the latest fashion trends, cutting-edge electronics, home essentials, or unique gifts, our selection has something for everyone."
            />
            <UsersAccordion
              title="Product Categories"
              content="To enhance your shopping journey, we've organized our products into various categories. Whether you're looking for the latest fashion trends, cutting-edge electronics, home essentials, or unique gifts, our selection has something for everyone."
            />
          </div>
        </div>
        <div>
          <RecentSeel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
