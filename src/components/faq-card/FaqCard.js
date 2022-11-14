import React from "react";
import "./FaqCard.css";

const FaqCard = () => {
  return (
    <details className=" py-3 px-6 container mx-auto border rounded-3xl bg-gray-700 mb-3 faq-card  transition-transform cursor-pointer">
      <summary>چرا از سایت شغلانه برای استخدام شدن استفاده کنم؟</summary>
      <div className="text-sm mt-4 transition-transform leading-8 font-medium">
        شغلانه یک سیستم رایگان بوده که بسیار ساده کار می کند. آیا همین کافی
        نیست؟
        شغلانه یک سیستم رایگان بوده که بسیار ساده کار می کند. آیا همین کافی
        نیست؟
        شغلانه یک سیستم رایگان بوده که بسیار ساده کار می کند. آیا همین کافی
        نیست؟
        شغلانه یک سیستم رایگان بوده که بسیار ساده کار می کند. آیا همین کافی
        نیست؟
      </div>
    </details>
  );
};

export default FaqCard;
