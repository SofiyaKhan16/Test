// import React from 'react';

// const Dashboard = () => {
//   return (
//     <div className="p-4 flex-grow bg-gray-100" >
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="p-4 bg-white shadow rounded">
//           <h2 className="font-bold text-lg mb-2">Order Status</h2>
//           <ul>
//             <li>Pending: 10</li>
//             <li>Processing: 5</li>
//             <li>Complete: 20</li>
//           </ul>
//         </div>
//         <div className="p-4 bg-white shadow rounded">
//           <h2 className="font-bold text-lg mb-2">Products</h2>
//           <ul>
//             <li>Total Products: 50</li>
//             <li>Out of Stock: 10</li>
//           </ul>
//         </div>
//         <div className="p-4 bg-white shadow rounded">
//           <h2 className="font-bold text-lg mb-2">Customers</h2>
//           <ul>
//             <li>Total Customers: 100</li>
//             <li>New Customers: 5</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// import React from "react";

// const Earnings = () => {
//   return (
//     <div className="bg-gray-100 w-[calc(100%-288px)] h-full justify-center items-center">
//         <div className=" w-[95%] h-full mt-8">
//           <div className=" flex ">
//             <p className="text-2xl text-gray-800 font-medium"> 
//               Earnings
//             </p>
            
//           </div>
//         </div>
//     </div>
//   );
// };

// export default Earnings;

import React from "react";
import { CiMenuKebab } from "react-icons/ci";

import EarningsChart from "./EarningChart";

const Dashboard = () => {
  const stats = [
    { label: "Orders", value: 2420, percentage: 20 },
    { label: "Total Amount ", value: 3843, percentage: 25 },
    { label: "Total Earnings ", value: 1700, percentage: -1 },
    { label: "Admin Comission", value: "$2530", percentage: 17 },
  ];
  const data = [
    {
      interval: "Sep 14, 2021",
      orders: 2,
      totalAmount: "$20.68",
      totalEarning: "$19.41",
      totalDiscountAmount: "$0.00",
      adminCommission: "$1.27",
    },
  ];

  return (
    <div className=" pl-2 bg-gray-100 w-[calc(100%-288px)] h-full justify-center items-center">
      <div className=" w-[95%] h-full ">
        <div className=" flex justify-between">
          <p className="text-2xl text-blue-900 font-medium">Home</p>
        </div>
        <div className=" flex my-4 -ml-8 justify-around items-center p-4">
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
                    className={`text-sm 
                     ${
                       stat.percentage > 0 ? " bg-green-400" : " bg-red-400"
                     } p-2 rounded-lg`}>
                    ↑ {stat.percentage} %
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between p-8">
          <div className=" flex justify-center w-[80%] bg-gray-100">
            <EarningsChart />
          </div>
        </div>
        <div>
          {/* <div className="flex flex-row justify-between">
            <div>Latest Earnings</div>
            <div className="flex flex-row gap-6">
              <div>filter icon</div>
              <div>
                {" "}
                <select className="h-fit py-1">
                  <option>Intervals </option>
                  <option>Orders</option>
                  <option>Total Amount </option>
                  <option>Total Earnings </option>
                  <option>Total Discounts Amount </option>
                  <option>Admin Comission </option>
                </select>
              </div>
            </div>
          </div> */}

          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Latest Orders</h2>
            <table className="min-w-full bg-white   border-gray-200">
              <thead className="bg-blue-900 text-white">
                <tr>
                  {/* <th className="py-2  px-4 border-b">Interval</th> */}
                  <th className="py-2 px-4 border-b border-gray-200">Orders</th>
                  <th className="py-2 px-4 border-b border-gray-200">
                    Total Amount
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200">
                    Total Earning
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200">
                    Total Discount Amount
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200">
                    Admin Commission
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <>
                    <tr key={index}>
                      {/* <td className="pl-20 px-4 border-b border-gray-200">
                        {item.interval}
                      </td> */}
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.orders}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.totalAmount}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.totalEarning}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.totalDiscountAmount}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.adminCommission}
                      </td>
                    </tr>
                    <tr key={index}>
                      {/* <td className="pl-20 px-4 border-b border-gray-200">
                        {item.interval}
                      </td> */}
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.orders}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.totalAmount}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.totalEarning}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.totalDiscountAmount}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.adminCommission}
                      </td>
                    </tr>
                    <tr key={index}>
                      {/* <td className="pl-20 px-4 border-b border-gray-200">
                        {item.interval}
                      </td> */}
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.orders}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.totalAmount}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.totalEarning}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.totalDiscountAmount}
                      </td>
                      <td className="pl-20 px-4 border-b border-gray-200">
                        {item.adminCommission}
                      </td>
                    </tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
