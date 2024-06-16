import { useState } from "react";
import { useContext } from "react";
import { Fileuploadcontext } from "../contexts/FileUloaderContext";
import { useNavigate } from "react-router-dom";

const Uploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { setData } = useContext(Fileuploadcontext);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const Uploadfile = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please sect a file")
      return;
    }

    const formData = new FormData();
    formData.append("filename", selectedFile);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_KEY + "api/doc/"}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
        setData(data.file);
        navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full py-9 bg-gray-50 rounded-2xl border border-gray-300 gap-3 grid border-dashed">
      <div className="grid gap-1">
        <svg
          className="mx-auto"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
        <h2 className="text-center text-gray-400 text-xs leading-4">
          XLSX and PDF smaller than 15MB
        </h2>
      </div>
      <div className="grid gap-2">
        <h4 className="text-center text-gray-900 text-sm font-medium leading-snug">
          Drag and Drop your file here or
        </h4>
        <div className="flex items-center justify-center">
          <label>
            <input type="file" onChange={handleFileChange} hidden />
            <div className="flex w-40 h-9 px-2 flex-col text-xl hover:underline text-gray-900  font-semibold leading-4 items-center justify-center cursor-pointer ">
              Choose File
            </div>
          </label>
        </div>
        {selectedFile && (
          <div className="text-center text-sm text-gray-500 mt-2 flex flex-col ">
            <div>{selectedFile.name}</div>
          </div>
        )}
        <div className=" flex justify-center">
          {" "}
          <button
            onClick={Uploadfile}
            disabled={!selectedFile}
            className={`${
              !selectedFile
                ? "bg-gray-200 mb-2 mt-4 text-xl w-max font-[300]  text-white rounded-lg px-2 py-1  tracking-tight"
                : "bg-blue-700 mb-2 mt-4 text-xl w-max font-[300]  text-white rounded-lg px-2 py-1  tracking-tight "
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Uploader;
