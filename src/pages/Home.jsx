import { useContext } from "react";
import { Fileuploadcontext } from "../contexts/FileUloaderContext";

export default function Home() {
  const { data } = useContext(Fileuploadcontext);
  console.log(data);
  return (
    <div className="px-24  mt-12 ">
      <h1 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
        General Stats
      </h1>
      <div className="conts grid grid-cols-2 gap-4 justify-start w-1/2">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Current Ratio
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {data.CurrentRatio}
          </p>
        </div>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Debt Ratio
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {data.DebtRatio}{" "}
          </p>
        </div>{" "}
      </div>
    </div>
  );
}
