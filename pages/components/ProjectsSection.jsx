
"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useTranslation } from 'react-i18next'; 




const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useTranslation();

  const projectsData =  [
  
    {
      id: 1,
      title: t('projectsSection.petClinicTitle'),
      description: t('projectsSection.petClinicDescription'),
      image: "/images/projects/PetClinic_Icon.png",
      tag: ["All"],
      gitUrl: "https://github.com/cgerard321/champlain_petclinic",
      // previewUrl: "/",
      // presentationUrl: "/",
    },
    {
      id: 2,
      title: t('projectsSection.rpaTitle'),
      description: t('projectsSection.rpaDescription'),
      image: "/images/projects/WelcometoRabiaPatelArtFrench.png",
      tag: ["All"],
      gitUrl: "https://github.com/swafit/RabiaPatelArt",
      previewUrl: "http://www.rabiapatelart.com/",
      // presentationUrl: "/",
    },
    {
      id: 3,
      title: t('projectsSection.homeInvasionTitle'),
      description: t('projectsSection.homeInvasionDescription'),
      image: "/images/projects/HomeInvasion_Icon1.png",
      tag: ["All"],
      gitUrl: "https://github.com/dufourmax1738/IOT_Project_Home_Invasion",
      // previewUrl: "/",
      // presentationUrl: "/",
    },
    {
      id: 4,
      title: t('projectsSection.geoAppTitle'),
      description: t('projectsSection.geoAppDescription')
      ,
      image: "/images/projects/GeoAppIcon.png",
      tag: ["All"],
      gitUrl: "https://github.com/PaulJ2001/GeoApp_IOS_XCode",
      // previewUrl: "/",
      presentationUrl: "https://youtu.be/Vc1bIL9Vr5A?si=tA1lODJtt5Hvhe5y",
    },
    {
      id: 5,
      title: t('projectsSection.adventureLyticalTitle'),
      description: t('projectsSection.adventureLyticalDescription')
      ,
      image: "/images/projects/AdventureLytical_Icon.png",
      tag: ["All", "Gaming"],
      gitUrl: "https://github.com/PaulJ2001/AdventureLytical_Coin-Rush_Unity_FinalProject",
      // previewUrl: "/",
      presentationUrl: "https://youtu.be/ufiKodBnbhY?si=NaArTvS5VzeAeOg8",
    }
    /*{
      id: 6,
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
    }*/
  ];

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
