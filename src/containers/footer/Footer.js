import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
//adding components
import PrimaryHeadTitle from "../../components/head-title/PrimaryHeadTitle";
import FooterNav from "../../components/footer-nav/FooterNav";
import Email from "../../components/email/Email";
//adding images
import neshan from '../../assets/neshanemelli.png';
import zarin from '../../assets/zarinpal.png';
import etemad from '../../assets/enamad.png'

const Footer = () => {
  return (
    <footer className=" py-7 w-full main-bg mt-12 rounded-t-2xl">
      <section className="container mx-auto grid grid-cols-4 gap-10 footer ">
        {/* first column */}
        <div>
          <PrimaryHeadTitle title="لینک های میانبر" />
          <ul>
            <FooterNav text="صفحه اصلی" link={"/"} />
            <FooterNav text=" پشتیبانی " link={"/support"} />
            <FooterNav text=" آشنایی با ما  " link={"/about-us"} />
            <FooterNav text=" سوالات متداول " link={"/faq"} />
            <FooterNav text=" قوانین و مقررات " link={"/rules"} />
          </ul>
        </div>
        {/* second column */}
        <div>
          <PrimaryHeadTitle title=" کارجویان " />
          <ul>
            <FooterNav text=" ثبت نام کار جو " link={"/register-Job Seeker"} />
            <FooterNav text=" رزومه ساز آنلاین " link={"/cv-maker"} />
            <FooterNav text=" فرصت های شغلی من " link={"/rules"} />
          </ul>
        </div>
        {/* third column */}
        <div>
          <PrimaryHeadTitle title=" کارفرمایان " />
          <FooterNav text=" ثبت نام کارفرما" link={"/register-employer"} />
          <FooterNav text=" راهنمای ثبت آگهی " link={"/ads-register"} />
          <FooterNav text=" وبلاگ " link={"/blog"} />
        </div>
        {/* Fourth column */}
        <div>
          <span className="text-sm">عضویت در خبرنامه:</span>
          <div className="mt-3">
            <Email />
          </div>
          <div className="mt-3  grid grid-cols-3">
            <Link><img src={neshan} width={80} className="inline-block mx-auto" /></Link>
            <Link ><img src={zarin} width={58}  className="inline-block mx-auto" /></Link>
            <Link ><img src={etemad} width={76}  className="inline-block mx-auto " /></Link>
          </div>
        </div>
      </section>

    </footer>
  );
};

export default Footer;
