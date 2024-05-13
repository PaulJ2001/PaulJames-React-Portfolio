
"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "../../outside-components/NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import '../../outside-components/languageConfig';
import { BsFillMoonStarsFill } from "react-icons/bs";



const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const handleChangeLanguage = (e) => {
      const selectedLanguage = e.target.value;
      i18n.changeLanguage(selectedLanguage);
  };

  return (
      <select
          className="playfair-display"
          value={i18n.language}
          onChange={handleChangeLanguage}
          style={{
              padding: "",
              borderRadius: "5px",
              border: "1px solid #ced4da",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#ffffff",
              color: "#000000",
          }}
      >
          <option value="en">EN</option>
          <option value="fr">FR</option>
      </select>
  );
};

const Navbar = ({
  //  lightMode, setLightMode 
  }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
   const {t} = useTranslation()

  
  const navLinks = [
    {
      title: t('navbar.about'),
      path: "#about",
    },
    {
      title: t('navbar.hobbies'),
      path: "#hobbies",
    },
    {
      title: t('navbar.experience'),
      path: "#experience",
    },
    {
      title: t('navbar.skills'),
      path: "#skills",
    },
    {
      title: t('navbar.projects'),
      path: "#projects",
    },
    {
      title: t('navbar.contact'),
      path: "#contact",
    }
  ];
  


  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          {/* LOGO */}
          <Image
            src="/images/atlas-background.jpg"
            className="rounded-full"
            width={50}
            height={50}
          ></Image>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        
        {/* <div>
          <BsFillMoonStarsFill
            onClick={() => setLightMode(!lightMode)}
            className={`cursor-pointer text-2xl md:text-5xl font-semibold ${
              lightMode ? "text-black" : "text-white"
            }`}
          />
        </div> */}

        <div>
          <LanguageSwitcher />
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
