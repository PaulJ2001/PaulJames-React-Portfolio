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
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
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
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
        Get in Touch
          {/* Let&apos;s Connect */}
        </h5>
        <div className="mt-12">
  <a href="https://www.dropbox.com/scl/fi/td3qrg3uyk92boflyu0u0/PaulJames_English_IT_Resume_PDFVersion.pdf?dl=1">
    <button className="bg-primary-500 border border-white hover:bg-primary-600 hover:border-primary-600 text-white font-medium py-2.5 px-5 rounded-lg">
      Download My CV
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
        {/* {emailSubmitted ? (
            <div className="notification">
            <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
          </div>
          ) : ( */}
        {/* {showNotification && (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        )} */}
        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              htmlFor="user_name"
              className="text-white block mb-2 text-sm font-medium"
            >
              Name
            </label>
            <input
              name="user_name"
              type="text"
              id="user_name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Email
            </label>
            <input
              name="user_email"
              type="email"
              id="user_email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="youremail@email.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="user_subject"
              type="text"
              id="user_subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter subject"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
        {/* )} */}
        {showNotification && (
          <div className="fixed bottom-0 right-0 mb-8 mr-8 bg-green-500 text-white py-2 px-4 rounded-lg">
            Email sent successfully!
          </div>
        )}
      </div>
    </section>
  );
};

export default EmailSection;

// const EmailSection = () => {
//   const [emailSubmitted, setEmailSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = {
//       email: e.target.email.value,
//       subject: e.target.subject.value,
//       message: e.target.message.value,
//     };
//     const JSONdata = JSON.stringify(data);
//     const endpoint = "/api/send";

//     // Form the request for sending data to the server.
//     const options = {
//       // The method is POST because we are sending data.
//       method: "POST",
//       // Tell the server we're sending JSON.
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // Body of the request is the JSON data we created above.
//       body: JSONdata,
//     };

//     const response = await fetch(endpoint, options);
//     const resData = await response.json();

//     if (response.status === 200) {
//       console.log("Message sent.");
//       setEmailSubmitted(true);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
//     >
//       <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
//       <div className="z-10">
//         <h5 className="text-xl font-bold text-white my-2">
//           Let&apos;s Connect
//         </h5>
//         {/* <p className="text-[#ADB7BE] mb-4 max-w-md">
//           {" "}
//           I&apos;m currently looking for new opportunities, my inbox is always
//           open. Whether you have a question or just want to say hi, I&apos;ll
//           try my best to get back to you!
//         </p> */}
//         <div className="socials flex flex-row gap-2">
//           {/* <Link href="github.com">
//             <Image src={GithubIcon} alt="Github Icon" />
//           </Link>
//           <Link href="linkedin.com">
//             <Image src={LinkedinIcon} alt="Linkedin Icon" />
//           </Link> */}
//           <div className="py-10 mt-12 text-3xl items-center justify-between md:text-5xl flex flex-wrap lg:flex-row lg:flex-wrap text-white dark:text-blue-950 ">
//               <a
//                 href="https://github.com/PaulJ2001"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <AiFillGithub />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/paul-james-pj/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <AiFillLinkedin />
//               </a>
//               <a
//                 href="https://www.youtube.com/channel/UCl6mxqMh5pGKK9s1uBc9cZg"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <AiFillYoutube />
//               </a>
//               <a
//                 href="https://www.facebook.com/people/Paul-James/pfbid0xtf45Lwydsoue93UPHuCBzHXoNX9NuNhc2ggoGeZg8bAYMtYL7hnEgncS7EopTyVl/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <AiFillFacebook />
//               </a>
//               <a
//                 href="https://www.instagram.com/pauljamespj2001/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <AiFillInstagram />
//               </a>
//               <a
//                 href="https://twitter.com/PaulJam43765527"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <AiFillTwitterCircle />
//               </a>
//               {/* <FontAwesomeIcon icon={faSquareXTwitter} /> */}
//             </div>
//         </div>
//       </div>
//       <div>
//         {emailSubmitted ? (
//           <p className="text-green-500 text-sm mt-2">
//             Email sent successfully!
//           </p>
//         ) : (
//           <form className="flex flex-col" onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label
//                 htmlFor="email"
//                 className="text-white block mb-2 text-sm font-medium"
//               >
//                 Your email
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 id="email"
//                 required
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="youremail@email.com"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="subject"
//                 className="text-white block text-sm mb-2 font-medium"
//               >
//                 Subject
//               </label>
//               <input
//                 name="subject"
//                 type="text"
//                 id="subject"
//                 required
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Just saying hi"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="message"
//                 className="text-white block text-sm mb-2 font-medium"
//               >
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Let's talk about..."
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
//             >
//               Send Message
//             </button>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// };

// export default EmailSection;
