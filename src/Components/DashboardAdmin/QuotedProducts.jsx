// import React from 'react'

// const QuotedProducts = () => {
//   return (
//     <div>
//       Quoted
//     </div>
//   )
// }

// export default QuotedProducts


import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import QuoteDetail from "./QuoteDetail";

const QuotedProducts = () => {
  const stats = [
    { label: "Return Requested", value: 150, percentage: 75 },
    { label: "Return Approved", value: 120, percentage: 60 },
    { label: "Return PickedUp", value: 90, percentage: -11 },
    { label: "Refund Processed", value: 20, percentage: 50 },
  ];

  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleEditProduct = () => {
    setShowEditPopup(true);
  };

  const quotes = [
    {
      id: 234,
      thumbnail: "Metrogyl",
      name: "Product A3",
      status: "Sent to Seller",
      bulk: "4",
      created: "22-08-12",
      updated: "22-08-12",
    },
    {
      id: 430,
      thumbnail: "Metrogyl",
      name: "Product A4",
      status: "Sent to Seller",
      bulk: "6",
      created: "22-08-12",
      updated: "22-08-12",
    },
  ];

  return (
    <div className="relative bg-gray-100 w-[calc(100%-288px)] h-full flex justify-center items-center ">
      <div className=" w-[95%] h-full mt-8">
        <div className=" flex justify-between">
          <p className="text-2xl text-blue-900 font-medium">
            {" "}
            All Quoted Products{" "}
          </p>
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
                  <th className="border-b-2 py-4 min-w-36 pl-4 text-left">
                    Product Id
                  </th>
                  <th className="border-b-2 min-w-36 text-left">
                    Thumbnail
                  </th>
                  <th className="border-b-2 min-w-36 text-left">Name</th>
                  <th className="border-b-2 min-w-36 text-left">Status</th>
                  <th className="border-b-2 min-w-36 text-left">Bulk Order Quantity</th>
                  <th className="border-b-2 min-w-36 text-left">Created At</th>
                  <th className="border-b-2 min-w-36 text-left">Updated At</th>
                </tr>
              </thead>
              <tbody>
                {quotes.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="text-gray-600 text-lg py-4 px-2">
                      We couldn't find any records
                    </td>
                  </tr>
                ) : (
                  quotes.map((quoted, index) => (
                    <tr key={index}>
                      <td className="border-b-2 py-4 min-w-36 pl-4 text-left">
                        {quoted.id}
                      </td>
                      <td className="border-b-2 min-w-36 text-left">
                        {quoted.thumbnail}
                      </td>
                      <td className="border-b-2 min-w-36 text-left">
                        {quoted.name}
                      </td>
                      <td className="border-b-2 min-w-36 text-left">
                        {quoted.status}
                      </td>
                      <td
                        className="border-b-2 min-w-36 text-left cursor-pointer">
                        {quoted.bulk}
                      </td>
                      <td
                        className="border-b-2 min-w-36 text-left cursor-pointer">
                        {quoted.created}
                      </td><td
                        className="border-b-2 min-w-36 text-left cursor-pointer">
                        {quoted.updated}
                      </td>
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

export default QuotedProducts;
