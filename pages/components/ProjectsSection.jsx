
"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Paul James Portfolio",
    description: "This personal portfolio you are currently browsing is a my own personal portfolio. It is a "+
    "font-end only web app built using Nextjs and React that I completed by myself after following a few online tutorials for NextJs. " +
    "It was completed in the space of around 2 weeks and I like to think of it as an extension of my CV with a more personal element. " + 
    "It is an ongoing project that is regularly updated and maintained." +
    ""
    ,
    image: "/images/projects/pauljames-portfolio.png",
    tag: ["All"],
    gitUrl: "https://github.com/PaulJ2001/PaulJames-React-Portfolio",
    // previewUrl: "/",
    // presentationUrl: "/",
  },
  {
    id: 2,
    title: "Veterinarian PetClinic",
    description: "Petclinic is a Full-stack multi-section, multi-year project developed and worked on by Champlain College - St. Lambert Computer Science students like myself." + 
    "The project has around 30 or more yearly student contributors every fall semester. I was part of authentication functionality in a group of 6 students." +
    " One of the key additions I did was redoing the logout functionality and session handling. The multi-layered web application catered to both veterinarians and pet owners, " + 
    "offering services such as scheduling and booking appointments, alongside authentication and mailing services. " +
    " The project utilized Java, Spring Boot, " + 
    "AngularJS, SQL, and other tools like Jacoco and Docker. As well as Agile and Scrum methodologies",
    image: "/images/projects/PetClinic_Icon.png",
    tag: ["All"],
    gitUrl: "https://github.com/cgerard321/champlain_petclinic",
    // previewUrl: "/",
    // presentationUrl: "/",
  },
  {
    id: 3,
    title: "Rabia Patel Art",
    description: "This project involved the development of a comprehensive 3-layered e-commerce web application in a team of 4. You can press on the eye icon above to visit the web site " +
    "The team consisted of myself, my sister Dahlia James, William Chalifoux who did the most difficult tasks and Henna Cheung who was a great help with our documentation " + 
    "Key features included a shopping cart, a gallery, details page, as well as a contact page with a commission request option and various user roles such as user, artist, and admin account, all with secure" +
    "authentication. The checkout process was facilitated through Square, a third-party payment service, and the application also " +
    "integrated email services.The Technologies employed included " +
    "Java, Spring Boot, React, MySQL, and various tools such as Jira, Docker, and Git. Agile and Scrum methodologies guided the project's " +
    "development.",
    image: "/images/projects/RabiaPatelArt_Icon.png",
    tag: ["All"],
    gitUrl: "https://github.com/swafit/RabiaPatelArt",
    previewUrl: "http://www.rabiapatelart.com/",
    // presentationUrl: "/",
  },
  {
    id: 4,
    title: "Home Invasion Detector",
    description: "Developed collaboratively in a team of 3, this project focused on creating a security device using Arduino Nano-based technology. " +
    "Equipped with motion and sound sensors for precise intrusion detection, the device was built with components such as the KY-037 Sound Detection " +
    "Sensor and PIR Motion Sensor. The project utilized Python for programming, with PyCharm as the development environment, and employed MongoDB for " +
    "data storage. This project demonstrated the team's proficiency in hardware integration and IoT development methodologies.",
    image: "/images/projects/HomeInvasion_Icon1.png",
    tag: ["All"],
    gitUrl: "https://github.com/dufourmax1738/IOT_Project_Home_Invasion",
    // previewUrl: "/",
    // presentationUrl: "/",
  },
  {
    id: 5,
    title: "GeoApp",
    description: "This is a fun little apple XCode application for people to learn and quiz their knowledge on a wide variety of the nations in the world " +
    "This was created as a final project for an IOS mobile development course during my time at Champlain College St-Lambert. The project is not accessible the app store as I don't intend on getting the required certifications for it " +
    "But there is a linked video of me demonstrating the app if your curious to see it in action" +
    "" 
    ,
    image: "/images/projects/GeoAppIcon.png",
    tag: ["All"],
    gitUrl: "https://github.com/PaulJ2001/GeoApp_IOS_XCode",
    // previewUrl: "/",
    presentationUrl: "https://youtu.be/Vc1bIL9Vr5A?si=tA1lODJtt5Hvhe5y",
  },
  {
    id: 6,
    title: "AdventureLytical Coin Rush",
    description: "AdventureLytical Coin Rush is a simple and fun 2D platformer developed in Winter 2022 as a final project for a unity game development course. It was developed using Unity's Developing environment and involved a team of 4" +
     " consisting of myself, my sister Dahlia, Kamilah Raaniya Hatteea, and Brandon Lévis. The goal" +
    "of the game was to reach the end of the 3 levels without falling off the map or touching any of " +
    "the lethal spikes. The player also had the option to collect Coins throughout the levels. The game is not available anywhere" +
    " but the repository is there and a video demonstration of the game is available if you click the play button icon above." +
    "" 
    
    ,
    image: "/images/projects/AdventureLytical_Icon.png",
    tag: ["All", "Gaming"],
    gitUrl: "https://github.com/PaulJ2001/AdventureLytical_Coin-Rush_Unity_FinalProject",
    // previewUrl: "/",
    presentationUrl: "https://youtu.be/ufiKodBnbhY?si=NaArTvS5VzeAeOg8",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            // initial="initial"
            // animate={isInView ? "animate" : "initial"}
            // transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              presentationUrl={project.presentationUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default ProjectsSection;




// const ProjectsSection = () => {
//   const [tag, setTag] = useState("All");
//   const [numCols, setNumCols] = useState(3); // Initialize with 3 columns
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const handleTagChange = (newTag) => {
//     setTag(newTag);
//   };

//   const filteredProjects = projectsData.filter((project) =>
//     project.tag.includes(tag)
//   );

//   const cardVariants = {
//     initial: { y: 50, opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       // Recalculate the number of columns based on the window width
//       setNumCols(window.innerWidth < 640 ? 1 : 3);
//     };

//     // Call handleResize initially to set the initial number of columns
//     handleResize();

//     // Listen for resize events and update numCols accordingly
//     window.addEventListener("resize", handleResize);

//     // Cleanup function to remove the resize event listener
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []); // Empty dependency array ensures the effect runs only once

//   return (
//     <section id="projects">
//       <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
//         My Projects
//       </h2>
//       <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
//         <ProjectTag
//           onClick={handleTagChange}
//           name="All"
//           isSelected={tag === "All"}
//         />
//         {/* Add other ProjectTag components here */}
//       </div>
//       <ul
//         ref={ref}
//         className={`grid md:grid-cols-${numCols} gap-8 md:gap-12`}
//       >
//         {filteredProjects.map((project, index) => (
//           <motion.li
//             key={index}
//             variants={cardVariants}
//             initial="initial"
//             animate={isInView ? "animate" : "initial"}
//             transition={{ duration: 0.3, delay: index * 0.4 }}
//           >
//             <ProjectCard
//               key={project.id}
//               title={project.title}
//               description={project.description}
//               imgUrl={project.image}
//               gitUrl={project.gitUrl}
//             />
//           </motion.li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default ProjectsSection;
