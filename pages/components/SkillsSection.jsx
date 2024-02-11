import React from "react";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center text-white font-bold mb-8">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
            <SkillCategory
              title="IT Languages, Frameworks & Scripting"
              skills={[
                "Proficient: SQL, Java, Swift, HTML, Angular, React, CSS, JS, C#",
                "Familiar: ASP.NET, Python, AJAX, PHP, C++, NodeJS",
              ]}
            />
          </div>
          <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
            <SkillCategory
              title="IT Tools"
              skills={[
                "Eclipse Netbeans, MS Visual Studio, Postman",
                "Lucidchart, XCode, PyCharm, Jira",
                "Figma, Spring, IntelliJ IDEA, Git, Github, Docker",
              ]}
            />
          </div>
          <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
            <SkillCategory
              title="Database Management"
              skills={["MS SQL Server, Postgre SQL, MySQL, MongoDB"]}
            />
          </div>
          {/* <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
            <SkillCategory
              title="Operating Systems"
              skills={["Windows 11/10", "Linux (on Windows Virtual Machine)", "macOS"]}
            />
          </div> */}
          <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
            <SkillCategory
              title="Interpersonal Skills"
              skills={["Work Ethic", "Active Listening", "Teamwork", "Adaptability"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <ul className="text-white">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSection;

//   return (
//     <section className="py-16 bg-[#121212]">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl text-center text-white font-bold mb-8">
//           My Skills
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-[#181818] p-6 rounded-lg">
//             <h3 className="text-xl font-semibold text-white mb-4">
//               Proficient
//             </h3>
//             <ul className="text-white">
//               <li>SQL</li>
//               <li>Java</li>
//               <li>Swift</li>
//               <li>HTML</li>
//               <li>Angular</li>
//               <li>React</li>
//               <li>CSS</li>
//               <li>JS</li>
//               <li>C#</li>
//             </ul>
//           </div>
//           <div className="bg-[#181818] p-6 rounded-lg">
//             <h3 className="text-xl font-semibold text-white mb-4">Familiar</h3>
//             <ul className="text-white">
//               <li>ASP.NET</li>
//               <li>Python</li>
//               <li>AJAX</li>
//               <li>PHP</li>
//               <li>C++</li>
//               <li>NodeJS</li>
//             </ul>
//           </div>
//           <div className="bg-[#181818] p-6 rounded-lg">
//             <h3 className="text-xl font-semibold text-white mb-4">Tools</h3>
//             <ul className="text-white">
//               <li>Eclipse Netbeans</li>
//               <li>MS Visual Studio</li>
//               <li>Postman</li>
//               <li>Lucidchart</li>
//               <li>XCode</li>
//               <li>PyCharm</li>
//               <li>Jira</li>
//               <li>Figma</li>
//               <li>Spring</li>
//               <li>IntelliJ IDEA</li>
//               <li>Git</li>
//               <li>Github</li>
//               <li>Docker</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

