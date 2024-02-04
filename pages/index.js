import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Image from "next/image";
import profileImg from "../public/ProfileImg.jpg";
import atlasIcon from "../public/AtlasBackground.jpg"
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import {useState} from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faSquareXTwitter} from "@fortawesome/free-brands-svg-icons";
// import deved from '../public/dev-ed-wave.png';
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Paul James Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bf-white px-10 md:px-20 lg-px-40 dark:bg-black">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between md:text-3xl">
            <Image src={atlasIcon} alt="Web Image 1" className="w-10 h-10 rounded-full md:h-20 md:w-20"/>
            <h1 className="text-xl font-burtons md:text-3xl dark:text-white">
              Paul James Portfolio
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill 
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl md:text-3xl dark:text-white" />
              </li>
              <li>
                <a
                  className="  bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* <div className="text-center p-10 py-10 "> */}
          <div className="text-center p-10 py-10 ">
            <h2 className="text-5xl py-2 text-blue-950 font-medium md:text-8xl dark:text-white">
              Paul James
            </h2>
            <h3 className="text-2xl py-2 md:text-4xl dark:text-white">
              Developer and IT specialist
            </h3>
            <p className="text-md py-5 leading-8 md:text-xl max-w-xl mx-auto dark:text-white">
              22 Year old Computer Scientist with an interest in IT hardware and
              backend development
            </p>
          </div>

          <div className="relative mx-auto bg-gradient-to-b w-80 h-80 mt-5 mb-5 rounded-full overflow-hidden md:h-96 md:w-96">
            {/* <Image src={profileImg} alt="Web Image 1" layout="fill" objectFit="cover" /> */}
            <Image src={profileImg} alt="Web Image 1" />
          </div>
          <section>
            <div>
              <h3 className="text-3xl py-1 md:text-4xl dark:text-white">About Me</h3>
              <p className="text-md py-2 leading-8 text-gray-80 dark:text-white">
                Ever since my youth I have always had a fascination with
                computers and working with and understanding them. This
                encouraged me to purse my education in computer science. I have
                taken the time to work with devices for example assembling and
                building my own personalized computer. I have a plethera of
                experience working in group and individual coding and building
                applications.
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Skills</h3>
                <p className="py-2 dark:text-white">
                  Throughout my ongoing education and field-experience and
                  learned a wide variety of IT Skills:
                </p>
                <h4 className="py-4 dark:text-white">Languages and Frameworks I use:</h4>
                <p className="text-gray-800 py-1 dark:text-white">Java</p>
                <p className="text-gray-800 py-1 dark:text-white">Java</p>
                <p className="text-gray-800 py-1 dark:text-white">Java</p>
                <p className="text-gray-800 py-1 dark:text-white">Java</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <h3 className="text-lg font-medium pt-8 pb-2 ">Skills</h3>
                <p className="py-2">
                  Throughout my ongoing education and field-experience and
                  learned a wide variety of IT Skills:
                </p>
                <h4 className="py-4">Languages and Frameworks I use:</h4>
                <p className="text-gray-800 py-1">Java</p>
                <p className="text-gray-800 py-1">Java</p>
                <p className="text-gray-800 py-1">Java</p>
                <p className="text-gray-800 py-1">Java</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <h3 className="text-lg font-medium pt-8 pb-2">Skills</h3>
                <p className="py-2">
                  Throughout my ongoing education and field-experience and
                  learned a wide variety of IT Skills:
                </p>
                <h4 className="py-4">Languages and Frameworks I use:</h4>
                <p className="text-gray-800 py-1">Java</p>
                <p className="text-gray-800 py-1">Java</p>
                <p className="text-gray-800 py-1">Java</p>
                <p className="text-gray-800 py-1">Java</p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className="text-3xl py-1">Projects</h3>
              <p className="text-md py-2 leading-8 text-gray-80">
                Ever since my youth I have always had a fascination with
                computers and working with and understanding them. This
                encouraged me to purse my education in computer science. I have
                taken the time to work with devices for example assembling and
                building my own personalized computer. I have a plethera of
                experience working in group and individual coding and building
                applications.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image
                  src={web1}
                  alt="Web Image 1"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web2}
                  alt="Web Image 1"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web3}
                  alt="Web Image 1"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web4}
                  alt="Web Image 1"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web5}
                  alt="Web Image 1"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web6}
                  alt="Web Image 1"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
            </div>
          </section>
          <section>
            <div className="text-5xl flex justify-center gap-16 py-3 text-teal-600 pt-20">
              <AiFillGithub />
              <AiFillLinkedin />
              <AiFillYoutube />
              <AiFillFacebook />
              <AiFillInstagram />
              <AiFillTwitterCircle />
              {/* <FontAwesomeIcon icon={faSquareXTwitter} /> */}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}