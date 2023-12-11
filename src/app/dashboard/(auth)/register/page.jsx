"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Register = () => {
  const [formData, setFormData] = useState({
    role: 'user',
    name: '',
    contact: '',
    gender: 'GENDER',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false); 

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    




  


    try {
      console.log(formData);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 201) {
        router.push("/dashboard/login?success=Account has been created");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong.");
      console.log(err);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
   
   <div className="w-[500px] mx-auto my-32">
  <div className="content">
        <Image
          src="https://res.cloudinary.com/debbsefe/image/upload/f_auto,c_fill,dpr_auto,e_grayscale/image_fz7n7w.webp"  
         width={500}
         height={500}
         style={{width:'490px',height:'300px'}}
          alt="Picture of the author"
        
        />

    <h1 className="form-title">Register Here</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Role"
            value={formData.role}
            readOnly
            className="text-slate-500 px-5 text-center font-serif text-2xl bg-slate-600"
          />
          <input
            type="text"
            placeholder="NAME"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <div className="beside">
            <input
              type="number"
              placeholder="PHONE NUMBER"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="GENDER">GENDER</option>
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
              <option value="NON-BINARY">NON-BINARY</option>
            </select>
          </div>
          <input
            type="email"
            placeholder="EMAIL ADDRESS"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="PASSWORD"
            name="password"
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
             required 

            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="CONFIRM PASSWORD"
            name="confirmPassword"
            value={formData.confirmPassword}
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" 
            required 
            onChange={handleChange}
          />
         
          <button className="bg-red-500 text-xl font-medium py-1 px-2 my-2 rounded-sm text-white">
            Register
          </button>
          {error && <p>{error}</p>}
        </form>
  </div>
</div>



  );
};

export default Register;
