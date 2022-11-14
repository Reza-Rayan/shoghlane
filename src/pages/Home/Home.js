import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import axios from "axios";
//adding components
import Search from "../../components/search/Search";
import HeadTitle from "../../components/head-title/HeadTitle";
import AdCart from "../../components/ad-cart/AdCart";
import CoCard from "../../components/co-card/CoCard";
import FaqCard from "../../components/faq-card/FaqCard";
//adding icons
import adsIcon from "../../assets/icons/ads.png";
import companies from "../../assets/icons/medal.png";
import arrow from "../../assets/icons/arrow.png";
import view from "../../assets/icons/moreview.png";
//adding image
import digikala from "../../assets/digikala.png";
import mollasadra from "../../assets/mollasadra.png";
import kalaoma from "../../assets/kalaoma.png";
import snap from "../../assets/snap.png";
import torob from "../../assets/torob.png";

const Home = () => {
  const [ad, setAd] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const URL = axios.get("http://localhost:8000/api/products");
  useEffect(() => {
    URL.then((response) => {
      setAd(response.data.slice(0, 8));
    });
  });
  let ads = ad.map((item) => {
    return (
      <AdCart
        key={item._id}
        title={item.title}
        Image={item.image}
        job={item.job}
        price={item.price}
      />
    );
  });

  const limitShowHandler = () => {
    setShowMore(!showMore);
    URL.then((response)=>{
      setAd(response.data.substring(250))
    })
  };

  return (
    <main>
      <section className="search-box pb-8">
        <div className="text-center mt-6">
          <h2 className=" text-3xl">
            به وبسایت <strong> شغلانه </strong> خوش آمدید
          </h2>
          <p className="mt-4 text-sm">
            شغل مورد نظر خود را جستجو کنید
            <span className=" text-gray-600 text-sm font-light">
              ( بیش از 50,000 آگهی)
            </span>
          </p>
          <div className="mt-8 search-container bg-gray-500  mx-auto py-2 shadow-lg">
            <Search />
          </div>
        </div>
      </section>
      <div className="text-center mt-2 ">
        <Link
          className="bg-gray-500 text-white px-4 py-1 text-sm rounded-lg shadow-lg main-bg-hover"
          to="/ads"
        >
          مشاهده تمامی آگهی ها
        </Link>
      </div>

      {/* first section of ads */}
      <section className="container mx-auto  mt-10 mb-10 ">
        <HeadTitle title="آخرین آگهی های استخدام" titleSvg={adsIcon} />
        <div className="mt-4 container mx-auto grid grid-cols-4 gap-2 ad-container">
          {ads}
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="main-bg py-2 px-4 text-sm rounded-lg shadow-xl"
            onClick={limitShowHandler}
          >
            {showMore ? " جمع کردن " : "مشاهده بیشتر "}
            <img src={arrow} className=" inline-block mr-2 mb-1" width={10} />
          </button>
        </div>
      </section>

      <section className="container mx-auto  mt-10 mb-10 ">
        <HeadTitle
          title="شرکت های معتبر در حال همکاری با شغلانه"
          titleSvg={companies}
        />
        <div className="mt-4 container mx-auto grid grid-cols-6 ad-container componies-row ">
          <CoCard image={digikala} />
          <CoCard image={mollasadra} />
          <CoCard image={kalaoma} />
          <CoCard image={snap} />
          <CoCard image={torob} />
          <CoCard image={torob} />
        </div>
      </section>

      {/* blog section */}

      <div className="flex flex-row container mx-auto gap-6 blog-ads-row">
        <div className="text-center  blog-box text-white  basis-2/3 py-8 mb-6 rounded-lg shadow-lg overflow-hidden">
          <h2 className=" text-xl font-medium">از وبلاگ شغلانه دیدن کنید</h2>
          <p className="text-sm mt-3 ">
            کلی مطالب جالب و دوست داشتنی اینجا هست
          </p>
          <Link
            to="/blog"
            className=" border  py-2 px-6 mt-6 inline-block rounded-md second-bg-hover hover:border-transparent transition-all"
          >
            مشاهده وبلاگ
          </Link>
        </div>
        <div className="ads-home mb-3 basis-1/3 flex justify-center text-2xl rounded-md shadow-lg">
          تبلیغات
        </div>
      </div>

      {/* faq section */}
      <section className="faq-home py-6 rounded-xl">
        <div className="container mx-auto " style={{ width: "70%" }}>
          <h2 className="faq-title pb-2">
            <span className=" z-10 pb-2">سوالات متداول</span>
          </h2>

          <div className="mt-4">
            <FaqCard />
            <FaqCard />
            <FaqCard />
            <FaqCard />
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            to={"/faq"}
            className="text-center inline-block py-2 px-4 rounded-lg text-sm main-bg shadow-lg"
          >
            مشاهده بیشتر
          </Link>
        </div>
      </section>

      {/* second section of ads */}

      <section className="mt-4 mb-4 container mx-auto">
        <HeadTitle title="آخرین آگهی های استخدام" titleSvg={view} />
        <div className="mt-4 container mx-auto grid grid-cols-4 gap-2 ad-container">
          {ads}
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="main-bg py-2 px-4 text-sm rounded-lg shadow-xl"
            onClick={limitShowHandler}
          >
            {showMore ? " جمع کردن " : "مشاهده بیشتر "}
            <img src={arrow} className=" inline-block mr-2 mb-1" width={10} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
