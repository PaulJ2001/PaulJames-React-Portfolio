import React from "react";
import Image from "next/image";
import profileImg from "../public/ProfileImg.jpg";

const Banner = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center"></div>
                <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold text-blue-800 dark:text-white">
                    Paul James
                </h1>
                <h2 className="text-2xl lg:text-4xl text-blue-900 dark:text-white">
                    Developer and IT specialist
                </h2>
                <p className="text-xl lg:text-2xl mb-6 text-blue-950 dark:text-white">
                    22 Year old Computer Scientist with an interest in IT hardware
                    and backend development
                </p>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-blue-950 w-[250px] h-[250x] lg:w-[400px] lg:h-[400px] relative">
                    <Image src={profileImg} alt="ProfileImg" 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " 
                    width={300} height={300}
                    />
                </div>
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
