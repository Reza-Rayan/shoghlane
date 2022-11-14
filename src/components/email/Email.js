import React from "react";
import './Email.css'
import icon from "../../assets/icons/send.png";

const Email = () => {
  return (
    <form className="email">
      <input
        className="inline-block  bg-gray-300 text-gray-700 text-sm py-2 pl-6 pr-1  rounded-lg shadow-md"
        type="mail"
        placeholder="ایمیل خود را وارد کنید..."
      />
      <button
        type="button"
        className="inline-block second-bg p-2  mx-1 rounded-lg hover:border-white hover:bg-transparent"
      >
       <img src={icon} width={20} className='object-contain mx-auto' />
      </button>
    </form>
  );
};

export default Email;
