


import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import ProductFields from "./ProductFields";

const Return = () => {
  const stats = [
    { label: "Return Requested", value: 150, percentage: 75 },
    { label: "Return Approved", value: 120, percentage: 60 },
    { label: "Return PickedUp", value: 90, percentage: -11 },
    { label: "Refund Processed", value: 20, percentage: 50 },
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [category, setCategory] = useState("");
  const [productType, setProductType] = useState("");
  const [showDetailPopup, setShowDetailPopup] = useState(false);

  const handleAddNewProductClick = () => {
    setShowDetailPopup(true);
  };

  const handleContinueClick = () => {
    console.log("Category:", category);
    console.log("Product Type:", productType);
    setShowDetailPopup(true);
  };

  // Assuming this is your data array
  const records = [];

  return (
    <div className="relative bg-gray-100 w-[calc(100%-288px)] h-full flex justify-center items-center ">
      <div className=" w-[95%] h-full mt-8">
        <div className=" flex justify-between">
          <p className="text-2xl text-blue-900 font-medium">
            {" "}
            Returns{" "}
          </p>
          <div
            className="flex items-center bg-blue-900 p-2 rounded-lg text-white text-[20px] cursor-pointer"
            onClick={handleAddNewProductClick}
          >
            <FiPlus />
            {/* <button className="ml-1"> Add Review</button> */}
          </div>

          {showDetailPopup && (
            <div className="absolute inset-0 flex items-center justify-center overflow-scroll bg-gray-100 ">
              <ProductFields />
            </div>
          )}
        </div>

        <div className="flex my-4 -ml-8 justify-around items-center p-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 h-32 w-72  border rounded-lg shadow-lg flex justify-between items-center bg-white"
            >
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div className="text-[17px] text-gray-700 font-normal">
                    {stat.label}
                  </div>
                  <div className="menu-icon">
                    <CiMenuKebab />
                  </div>
                </div>
                <div className="flex justify-between mt-2 items-center">
                  <div className="text-3xl font-semibold">{stat.value}</div>
                  <div
                    className={`text-sm ${
                      stat.percentage > 0 ? "bg-green-400" : "bg-red-400"
                    } p-2 rounded-lg`}
                  >
                    ↑ {stat.percentage} %
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <div className="flex justify-end">
            <button className="bg-green-300 p-2">Filter</button>
            <select className="ml-2">
              <option>Columns</option>
            </select>
          </div>

          <div className="overflow-x-scroll w-full mt-4 font-sans">
            <table className="rounded-lg bg-white w-full">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="border-b-2 py-4 min-w-36 pl-4 text-left">Created At</th>
                  <th className="border-b-2 min-w-36 text-left">RMA Id</th>
                  <th className="border-b-2 min-w-36 text-left">Order Ref</th>
                  <th className="border-b-2 min-w-36 text-left">Customer Name</th>
                  <th className="border-b-2 min-w-36 text-left">RMA Status</th>
                  <th className="border-b-2 min-w-36 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {records.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="text-gray-600 text-lg py-4 px-2">
                      We couldn't find any records
                    </td>
                  </tr>
                ) : (
                  records.map((record, index) => (
                    <tr key={index}>
                      {/* Replace these with actual record fields */}
                      <td className="border-b-2 py-4 min-w-36 pl-4 text-left">{record.id}</td>
                      <td className="border-b-2 min-w-36 text-left">{record.priceRating}</td>
                      <td className="border-b-2 min-w-36 text-left">{record.valueRating}</td>
                      <td className="border-b-2 min-w-36 text-left">{record.qualityRating}</td>
                      <td className="border-b-2 min-w-36 text-left">{record.feedReview}</td>
                      <td className="border-b-2 min-w-36 text-left">{record.customerName}</td>
                      <td className="border-b-2 min-w-36 text-left">{record.status}</td>
                      <td className="border-b-2 min-w-36 text-left">{record.created}</td>
                      <td className="border-b-2 min-w-36 text-left">{record.action}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Return;
