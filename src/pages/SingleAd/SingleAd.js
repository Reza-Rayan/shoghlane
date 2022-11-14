import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import image from "../../assets/mollasadra.png";

const SingleAd = () => {
  const { id } = useParams();
  const [ad, setAd] = useState([]);
  useEffect(() => {
    const sendRequest = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/products/${id}`
      );
      setAd(response.data);
    };
    sendRequest();
  }, [id]);

  return (
    <main className="container mx-auto mt-4">
      <section className="grid grid-cols-2 pb-3 border-b-2">
        <div>
          <h1 className="text-xl">
            <strong>نام شرکت:</strong>
            <span>{ad.title}</span>
          </h1>
          <div className="mt-12 text-sm ">
            <p className=" inline-block ml-5 border-l-2 pl-4">
              دسته بندی: سلام چطوری؟
            </p>
            <p className=" inline-block">
              تاریخ: <span>{ad.job}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <img src={image} width={100} />
        </div>
      </section>

      <div className="mt-3 grid grid-cols-3 shadow-lg p-4 rounded-lg text-sm">
        <div>
          <strong> مکان: </strong>
          <span>تهران، میدان انقلاب</span>
        </div>
        <div>
          <strong> مکان: </strong>
          <span>تهران، میدان انقلاب</span>
        </div>
        <div>
          <strong> حقوق مدنظر: </strong>
          <span> توافقی</span>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 shadow-lg p-4 rounded-lg text-sm">
        <div>
          <strong className="second-color"> مهارت ها :</strong>
          <span> تایپ اسکریپت , ریکت , HTML , Css</span>
        </div>
        <div>
          <strong> جنسیت: </strong>
          <span> مهم نیست </span>
        </div>
      </div>
    </main>
  );
};

export default SingleAd;
