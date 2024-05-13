import React from "react";
import { useTranslation } from 'react-i18next'; 

const SkillsSection = () => {
  const { t } = useTranslation();

  const SkillCategory = ({ title, skills }) => {
    return (
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <ul className="text-white">
          {skills.map((skill, index) => ( <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  return (
    <section id="skills" className="py-16 bg-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center text-white font-bold mb-8">
          {t('skillsSection.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
            <SkillCategory
              title= {t('skillsSection.languagesFrameworksTitle').split(', ')}
              skills={[
                ...t('skillsSection.languagesFrameworksProficient').split(', '),
                ...t('skillsSection.languagesFrameworksFamiliar').split(', ')
              ]}
            />
          </div>
          <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
            <SkillCategory
              title= {t('skillsSection.itToolsTitle').split(', ')}
              skills={
                t('skillsSection.itToolsList').split(', ')}
            />
          </div>
          <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
            <SkillCategory
              title= {t('skillsSection.dbManagementTitle').split(', ')}
              skills={t('skillsSection.dbManagementList').split(', ')}
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
              title= {t('skillsSection.interpersonalSkillsTitle').split(', ')}
              skills={t('skillsSection.interpersonalSkillsList').split(', ')}
            />
          </div>
          <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
            <SkillCategory
              title={t('skillsSection.financeAccountingTitle').split(', ')}
              skills= {t('skillsSection.financeAccountingList').split(', ')}
                      
              />
            </div>
            <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
              <SkillCategory
                title= {t('skillsSection.itSupportTitle').split(', ')}
                skills={
                  t('skillsSection.itSupportList').split(', ')
                  }
                />
              </div>
        </div>
      </div>
    </section>
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

