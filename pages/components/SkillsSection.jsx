import React from "react";
import { useTranslation } from 'react-i18next'; 

const SkillsSection = () => {
  const { t } = useTranslation();

  const SkillCategory = ({ title, skills }) => {
    const midpoint = Math.ceil(skills.length / 2);
    const leftColumn = skills.slice(0, midpoint);
    const rightColumn = skills.slice(midpoint);

    return (
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <div className="grid grid-cols-2 gap-4">
          <ul className="text-white">
            {leftColumn.map((skill, index) => (
              <li key={index}>
                <span className="inline-block mr-1">&#8226;</span>{skill}
              </li>
            ))}
          </ul>
          <ul className="text-white">
            {rightColumn.map((skill, index) => (
              <li key={index}>
                <span className="inline-block mr-1">&#8226;</span>{skill}
              </li>
            ))}
          </ul>
        </div>
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
              title= {t('skillsSection.languagesFrameworksTitle')}
              skills={[
                ...t('skillsSection.languagesFrameworksProficient').split(', '),
                ...t('skillsSection.languagesFrameworksFamiliar').split(', ')
              ]}
            />
          </div>
          <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
            <SkillCategory
              title= {t('skillsSection.itToolsTitle')}
              skills={t('skillsSection.itToolsList').split(', ')}
            />
          </div>
          <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
            <SkillCategory
              title= {t('skillsSection.dbManagementTitle')}
              skills={t('skillsSection.dbManagementList').split(', ')}
            />
          </div>
          <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
            <SkillCategory
              title= {t('skillsSection.interpersonalSkillsTitle')}
              skills={t('skillsSection.interpersonalSkillsList').split(', ')}
            />
          </div>
          <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
            <SkillCategory
              title={t('skillsSection.financeAccountingTitle')}
              skills= {t('skillsSection.financeAccountingList').split(', ')}
            />
          </div>
          <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
            <SkillCategory
              title= {t('skillsSection.itSupportTitle')}
              skills={t('skillsSection.itSupportList').split(', ')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;




// import React from "react";
// import { useTranslation } from 'react-i18next'; 

// const SkillsSection = () => {
//   const { t } = useTranslation();

//   const SkillCategory = ({ title, skills }) => {
//     return (
//       <div>
//         <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
//         <ul className="text-white">
//           {skills.map((skill, index) => ( <li key={index}>{skill}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   };
  
//   return (
//     <section id="skills" className="py-16 bg-[#121212]">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl text-center text-white font-bold mb-8">
//           {t('skillsSection.title')}
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
//             <SkillCategory
//               title= {t('skillsSection.languagesFrameworksTitle').split(', ')}
//               skills={[
//                 ...t('skillsSection.languagesFrameworksProficient').split(', '),
//                 ...t('skillsSection.languagesFrameworksFamiliar').split(', ')
//               ]}
//             />
//           </div>
//           <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
//             <SkillCategory
//               title= {t('skillsSection.itToolsTitle').split(', ')}
//               skills={
//                 t('skillsSection.itToolsList').split(', ')}
//             />
//           </div>
//           <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
//             <SkillCategory
//               title= {t('skillsSection.dbManagementTitle').split(', ')}
//               skills={t('skillsSection.dbManagementList').split(', ')}
//             />
//           </div>
//           <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
//             <SkillCategory
//               title= {t('skillsSection.interpersonalSkillsTitle').split(', ')}
//               skills={t('skillsSection.interpersonalSkillsList').split(', ')}
//             />
//           </div>
//           <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
//             <SkillCategory
//               title={t('skillsSection.financeAccountingTitle').split(', ')}
//               skills= {t('skillsSection.financeAccountingList').split(', ')}
//               />
//             </div>
//             <div className="bg-[#181818] p-6 rounded-lg flex flex-col">
//               <SkillCategory
//                 title= {t('skillsSection.itSupportTitle').split(', ')}
//                 skills={
//                   t('skillsSection.itSupportList').split(', ')
//                   }
//                 />
//               </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default SkillsSection;
