import PageName from "@/components/PageName";

const page = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
        <PageName name={"Edit Product"} />
      </div>
    </div>
  );
};

export default page;
