import { FaArrowTrendUp } from "react-icons/fa6";
import "./index.css";
import { data } from "./utils/constant.js";
function App() {
  const tableHeader = [
    "Rank",
    "Name",
    "Calmar Ratio",
    "Overall Profit",
    "Avg. Daily Profit",
    "Win %(Day)",
    "Price (Rs)",
    "Action",
  ];

  return (
    <div className="max-w-full min-h-screen flex justify-center  font-poppins my-10 sm:my-8">
      <div className=" h-screen w-full sm:w-11/12 flex flex-col items-center justify-center ">
        <h4 className="font-bold lg:text-5xl text-4xl  py-8 tracking-wider">
          Leaderboard
        </h4>
        <div
          className=" w-full h-screen border-2 rounded-lg px-4 py-4
        "
        >
          <div className="w-full lg:flex gap-4 space-y-4 lg:space-y-0 items-center justify-between">
            <h4 className="font-semibold text-3xl text-[#E27498]">
              Basic Backtest
            </h4>
            <div className="border-2 rounded-md px-0.5">
              <span className="  bg-gray-100 px-5 py-2 border-r-2">
                Slippage
              </span>
              <select name="" id="" className="px-5 py-2">
                <option value="">0 %</option>
                <option value="">0.5 %</option>
                <option value="">1 %</option>
              </select>
            </div>
          </div>

          <div className="relative overflow-x-auto py-3">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="w-full text-xs text-gray-700 uppercase border-b-2 border-gray-300 py-2">
                <tr>
                  {tableHeader.map((head) => (
                    <th
                      scope="col"
                      className=" md:px-6 py-2 text-base text-black "
                      key={head.id}
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {data.map((dataa, index) => (
                  <tr
                    className={`${
                      index % 2 !== 0 ? "bg-pink-200" : ""
                    } text-md`}
                    key={dataa.id}
                  >
                    <td className="md:px-6 px-2 py-4 font-semibold">
                      {dataa.id}
                    </td>
                    <td className="md:px-6 px-2 py-4">{dataa.name}</td>
                    <td className="md:px-6 px-2 py-4 ">
                      <div className="flex items-center  gap-2">
                        <FaArrowTrendUp className="text-green-700" />
                        {dataa.calmar_Ratio}
                      </div>
                    </td>
                    <td className="md:px-6 px-2 py-4">
                      {dataa.overall_Profit}
                    </td>
                    <td className="md:px-6 px-2 py-4">{dataa.avgProfit}</td>
                    <td className="md:px-6 px-2 py-4">{dataa.win}</td>
                    <td className="md:px-6 px-2 py-4">{dataa.price}</td>
                    <td className="md:px-6 px-2 py-4 ">
                      <button className="text-blue-600 font-semibold h-8 w-20 duration-500 hover:text-blue-800 ">
                        {dataa.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
