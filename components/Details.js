import React from "react";

function Details({ rowData }) {
  console.log(rowData);
  return (
    <details className="p-3 my-2" style={{ background: "#111111" }}>
      <summary>{rowData?.name}</summary>
      <table className="w-full mt-4 border-solid">
        <tr>
          <th className=" text-left p-3 ">#</th>
          <th className=" p-3 text-left">Problem</th>
          <th className=" p-3 text-left">Leetcode</th>
        </tr>
        {rowData?.questions?.map((item, index) => (
          <tr>
            <td className="p-3">{index + 1}</td>
            <td className="p-3">{item?.title}</td>
            <td className="p-3">
              <a href={item?.leetcodeLink} target="_blank" className="text-cyan-500">
                Link
              </a>
            </td>
          </tr>
        ))}
      </table>
    </details>
  );
}

export default Details;
