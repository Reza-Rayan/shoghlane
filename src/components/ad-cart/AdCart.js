import React from "react";
import "./AdCart.css";
import { Link } from "react-router-dom";
import axios from "axios";

const AdCart = ({ title, Image, job, price, _id }) => {
  return (
    <Link
      to={`/advertise/${_id}`}
      className="ad-cart mx-auto mb-2 grid grid-cols-2 p-3 rounded-md bg-white content transition-all w-full "
    >
      <div className="flex-1  flex flex-col  justify-between">
        <h4 className="text-sm text-gray-700">{title}</h4>
        <p className="text-sm  text-gray-500 line-clamp-1">{job}</p>
        <strong className="price  pb-2"> {price} </strong>
      </div>
      <div className="flex-1 image flex align-middle">
        <img src={Image} className="mx-auto object-contain " width={100} />
      </div>
    </Link>
  );
};

export default AdCart;
