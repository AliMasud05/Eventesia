"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import logo from "../../../public/logo.png";
import {
  AiOutlineAlignLeft,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import axios from "axios";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 3,
    title: "Services",
    url: "/service",
  },
  {
    id: 2,
    title: "Feedback",
    url: "/feedback",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState('user');
  const [loading, setLoading] = useState(true); 
  const session = useSession();
  const user = session?.data;
  const email = user?.user?.email;
 //console.log(email);

  useEffect(() => {
    const fetchData = async () => {
      if (email) {
        try {
          const apiUrl = `http://localhost:3000/api/auth/register?email=${email}`;
          const response = await axios.get(apiUrl);
          setUserRole(response?.data[0].role || ''); 
          
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [email]);


  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="fixed top-0 w-full h-24 scroll-m-2 shadow-xl bg-white text-black z-40">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width="205"
            height="75"
            className="cursor-pointer pt-6"
          />
        </Link>
        <div className="flex items-center">
          <ul className="hidden items-start sm:flex">
           
          {session.status === "authenticated" && (
            <>
              {userRole === "admin" && (
                <li>
                  <Link
                    key="admin-dashboard"
                    href="/dashboard/admin"
                    className={`${styles.link} mx-2 hover:bg-gray-700 hover:text-white p-2 rounded-md`}
                  >
                    Admin Dashboard
                  </Link>
                </li>
              )}
              {userRole === "user" && (
                <li>
                  <Link
                    key="user-dashboard"
                    href="/dashboard/userdashboard"
                      className={`${styles.link} mx-2 hover:bg-gray-700 hover:text-white p-2 rounded-md`}
                  >
                    User Dashboard
                  </Link>
                </li>
              )}
            </>
          )}
        
            {links.map((link) => (
              <li>
                <Link
                  key={link.id}
                  href={link.url}
                  className={`${styles.link} mx-2 hover:bg-gray-700 hover:text-white p-2  rounded-md`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          
           </ul>
          <li className="list-none">
            {session.status === "authenticated" ? (
              <>
                {" "}
                <button className={`${styles.logout} `} onClick={signOut}>
                  Logout
                </button>
              </>
            ) : (
              <>
                {" "}
                <button className={styles.logout}>
                  <Link href="/dashboard/login">login</Link>
                </button>
              </>
            )}
          </li>
        </div>

        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineAlignLeft size={25} />
        </div>
        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className=" flex justify-end items-center w-ful">
            <div onClick={handleNav} className=" cursor-pointer">
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div>
            <ul className="flex flex-col py-4">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  className={`${styles.link} mx-2`}
                >
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
          <div className=" flex flex-row justify-around pt-10 items-center">
            <AiOutlineInstagram size={30} className="cursor-pointer" />
            <AiOutlineFacebook size={30} className="cursor-pointer" />
            <AiOutlineTwitter size={30} className="cursor-pointer" />
          </div>
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width="205"
              height="75"
              className="cursor-pointer mt-6 pt-6"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
