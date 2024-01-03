"use client";
import { useState } from "react";

const myData = [
  { id: 1, name: "select 1" },
  { id: 2, name: "select 2" },
  { id: 3, name: "select 3" },
];
export default function Home() {
  const [inputValue, setInputValue] = useState("");
  console.log("inputValue", inputValue);
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <SelectorComponents
        setInputValue={setInputValue}
        name="fronSize"
        data={myData}
      />
    </div>
  );
}

const SelectorComponents = ({ data, className, name, setInputValue }) => {
  const [openOption, setOpenOption] = useState(false);
  const [selected, setSelected] = useState(null);
  return (
    <div className={`${className} relative`}>
      <input
        onClick={() => {
          setOpenOption(!openOption);
        }}
        placeholder="Select a value"
        value={selected?.name}
        className={`${
          openOption ? "rounded-t-md" : "rounded-md"
        } bg-gray-200 cursor-pointer outline-none px-3 py-2`}
        readOnly
      />
      <div className="absolute overflow-hidden bg-gray-200 w-full top-full rounded-b-md">
        {data?.map((item, i) => (
          <div
            key={item.id}
            onClick={() => {
              setSelected(item);
              setInputValue(item?.name);
              setOpenOption(false);
            }}
            className={`text-gray-500 py-1 px-3 hover:bg-gray-300 cursor-pointer ${
              openOption ? "m-0" : "-m-20"
            } duration-200`}
          >
            {item?.name}
          </div>
        ))}
      </div>
    </div>
  );
};
