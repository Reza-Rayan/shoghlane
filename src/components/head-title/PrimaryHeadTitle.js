import React from "react";

const PrimaryHeadTitle = ({ title }) => {
  return (
    <h2 className=" border-b-2 pb-1 mb-4 text-md mt-6">
      <span className=" border-purple-700 border-b-4 pb-1">{title}</span>
    </h2>
  );
};

export default PrimaryHeadTitle;
