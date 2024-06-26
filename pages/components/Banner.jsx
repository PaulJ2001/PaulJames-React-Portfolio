"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'; 

import Link from "next/link";

const Banner = () => {
  const { t } = useTranslation();
    return (
        <section className="lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
              <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-bold">
              {/* Hello, I&apos;m Paul{" "} */}
              Paul James
                {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                  Hello, I&apos;m{" "}
                </span>
                <br></br>
                
                <TypeAnimation
                  sequence={[
                    "Paul James",
                    1000,
                    "Web Developer",
                    1000,
                    "Backend Developed",
                    1000,
                    "IT service",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                /> */}
              </h1>
              <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              {t('banner.subtitle')}
              
              </p>
              {/* <div>
                <Link
                  href="/#contact"
                  className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                >
                  Hire Me
                </Link>
                <Link
                  href="/"
                  className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                >
                  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                    Download My CV
                  </span>
                </Link>
              </div> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
              <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                <Image
                  src="/images/atlas-background.jpg" 
                  alt="hero image"
                  className=" rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  width={300}
                  height={300}
                />
              </div>
            </motion.div>
          </div>
        </section>
    );
};

export default Banner;


{/* <section>
<div className="text-center p-10 py-10 ">
  <h2 className="text-5xl py-2 text-blue-950 font-medium md:text-7xl   lg:text-9xl dark:text-white">
    Paul James
  </h2>
  <h3 className="text-2xl py-2 md:text-4xl dark:text-white">
    Developer and IT specialist
  </h3>
  <p className="text-md py-5 leading-8 md:text-xl max-w-xl mx-auto dark:text-white">
    22 Year old Computer Scientist with an interest in IT hardware
    and backend development
  </p>
  <LocaleContext.Provider value={{ locale, setLocale }}>
    <Suspense fallback={<Loading />}>
      <div className="dark:text-white">
        <Welcome />
      </div>
    </Suspense>
  </LocaleContext.Provider>
</div>
<div className="relative mx-auto bg-gradient-to-b w-80 h-80 mt-5 mb-5 rounded-full overflow-hidden md:h-96 md:w-96">
  {/* <Image src={profileImg} alt="Web Image 1" layout="fill" objectFit="cover" /> */}
