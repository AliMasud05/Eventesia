
'use client'
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
//import Button from "@/components/Button/Button";
import Link from "next/link";
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};


const Page = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);


  return (
    <div className="mt-32 pb-10 mb-10 w-full bg-[#d2d6de]">

      <div className="relative" style={{ height: "300px" }}>
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
          <h1 className="font-serif font-bold  text-[#F9F9E0]">
            Welcome To Eventsia
          </h1>
          <h1 className="font-serif font-bold text-[#F9F9E0]">
            <span className="text-[#F9F9E0]">CONNECT WITH US </span>
          </h1>
         
        </div>
        <div className="absolute inset-0 z-10">
          <Image
            src="https://i.ibb.co/2NVybW2/adrien-cesard-Hf-GEtmn-Rwu-E-unsplash.jpg"
            alt="Description of the new image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
      <div>
       
        <div>
       
          <section className="text-gray-600 body-font">
            <div className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section" id="contact-form">
              <div className="md:w-1/3 w-full">
                <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">Contact Us</h1>
                <p className="leading-relaxed text-xl text-gray-900">
                  We're here to assist you! If you have any questions or need assistance, please feel free to reach out to
                  us.
                  <br /><br />
                  You can also email us. Click here to reveal email address
                  <a href="https://veilmail.io/e/FkKh7o" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">https://veilmail.io/e/FkKh7o</a>
                </p>
                <p className="leading-relaxed text-xl text-gray-900 mt-8">
                  We use VeilMail.io to protect your email address from spam.
                </p>
                <span className="inline-flex mt-6 justify-center sm:justify-start">
                </span>
              </div>
              <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
                <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">Contact Form</h1>
                <form action="send-contact.php" method="post" id="submit-contact-form">
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="name" className="leading-7 py-4 text-lg text-gray-900">Your Name</label>
                      <input type="text" id="name" name="name" required className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out " />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="email" className="leading-7 py-4 text-lg text-gray-900">Your Email</label>
                      <input type="email" id="email" name="email" required className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out " />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="message" className="leading-7 py-4 text-lg text-gray-900">Your Message</label>
                      <textarea id="message" name="message" required className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out " defaultValue={""} />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button type="submit" className="flex text-white bg-gray-900 border-0 py-4 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha">
                      Send Message ✉
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>


          <div>
            {/* Your contact form or additional content goes here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;