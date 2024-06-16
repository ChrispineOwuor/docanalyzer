import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex w-full h-12 items-center px-24 justify-between mt-4">
        <NavLink
          to="/"
          className="text-2xl mb-2  font-bold tracking-tight text-gray-900"
        >
          Analyser .Inc
        </NavLink>
        ;
        <NavLink
          to="/upload"
          className="mb-2 text-xl font-[300] bg-blue-700 text-white rounded-lg px-2 py-1  tracking-tight "
        >
          Add File
        </NavLink>
        ;
      </div>
    </>
  );
}
