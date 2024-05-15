"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { useTranslation } from 'react-i18next'; 
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const { t, i18n } = useTranslation();
  const form = useRef();
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_rkjvxdk",
        "template_m43grqc",
        form.current,
        "tvP0gYCgD3eSic_lv"
      );

      form.current.reset();

      setEmailSubmitted(true);
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">
        {t('emailSection.hook')}
          {/* Let&apos;s Connect */}
        </h5>
        <div className="mt-12">
        <a href={i18n.language === 'fr' ? "https://www.dropbox.com/scl/fi/pf7soi838w8524d6j10y6/PaulJames_IT_Technician_Resume_Fr_PDF.pdf?rlkey=rc899a5gyllitfbfm6rkrpyqv&dl=1" : "https://www.dropbox.com/scl/fi/td3qrg3uyk92boflyu0u0/PaulJames_English_IT_Resume_PDFVersion.pdf?dl=1"}>
  {/* <a href="https://www.dropbox.com/scl/fi/td3qrg3uyk92boflyu0u0/PaulJames_English_IT_Resume_PDFVersion.pdf?dl=1"> */}
    <button className="bg-primary-500 border border-white hover:bg-primary-600 hover:border-primary-600 text-white font-medium py-2.5 px-5 rounded-lg">
      {t('emailSection.cvDownloadLabel')}
    </button>
  </a>
</div>
<div className="socials flex flex-row gap-2"> 
  <div className="py-10 mt-12 text-3xl items-center justify-between md:text-5xl flex flex-wrap lg:flex-row lg:flex-wrap text-white dark:text-blue-950 ">
            <a
              href="https://github.com/PaulJ2001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/paul-james-pj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://www.youtube.com/channel/UCl6mxqMh5pGKK9s1uBc9cZg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillYoutube />
            </a>
            <a
              href="https://www.facebook.com/people/Paul-James/pfbid0xtf45Lwydsoue93UPHuCBzHXoNX9NuNhc2ggoGeZg8bAYMtYL7hnEgncS7EopTyVl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://www.instagram.com/pauljamespj2001/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://twitter.com/PaulJam43765527"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>
      </div>
      <div>
        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              htmlFor="user_name"
              className="text-white block mb-2 text-sm font-medium"
            >
              {t('emailSection.nameLabel')}
            </label>
            <input
              name="user_name"
              type="text"
              id="user_name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder= {t('emailSection.namePlaceholder')}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              {t('emailSection.emailLabel')}

            </label>
            <input
              name="user_email"
              type="email"
              id="user_email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder= {t('emailSection.emailPlaceholder')}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              {t('emailSection.subjectLabel')}
            </label>
            <input
              name="user_subject"
              type="text"
              id="user_subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder= {t('emailSection.subjectPlaceholder')}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              {t('emailSection.messageLabel')}
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder= {t('emailSection.messagePlaceholder')}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary-500 border border-white hover:bg-primary-600 hover:border-primary-600 text-white font-medium py-2.5 px-5 rounded-lg"
          >
            {t('emailSection.sendEmailLabel')}
          </button>
        </form>
        {showNotification && (
          <div className="fixed bottom-0 right-0 mb-8 mr-8 bg-green-500 text-white py-2 px-4 rounded-lg">
            {t('emailSection.sentNotificationMsg')}
          </div>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
