import React from "react";
import Link from "next/link";

function PathComponent({ sequence, heading, summary, link }) {
  return (
    <div>
      <div
        className="mx-auto mt-6 h-40 bg-gradient-to-b from-gray-900 to-blue-500"
        style={{ width: "1px" }}
      ></div>
      <div className="mx-auto text-center justify-center flex flex-col rounded-full w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-700">
        <span className="text-xl font-normal">{sequence}</span>
      </div>
      <div className="text-center mt-4">
        <Link href={link}>
          <h2 className="cursor-pointer font-black bg-gradient-to-r from-cyan-600 to-blue-500 text-transparent bg-clip-text text-xl">
            {heading}
          </h2>
        </Link>
        <span className="text-sm">{summary}</span>
      </div>
    </div>
  );
}

export default PathComponent;
