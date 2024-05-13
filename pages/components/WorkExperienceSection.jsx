import React from "react";
import WorkExperienceItem from "./WorkExperienceItem";
import { useTranslation } from 'react-i18next'; 


const WorkExperienceSection = () => {
  const { t } = useTranslation();
  return (
    <section id="experience" className="py-16 bg-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center text-white font-bold mb-8">
         {t('workExperienceSection.workExpTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">

        <WorkExperienceItem
            title= {t('workExperienceSection.imerysPosition')}
            company= {t('workExperienceSection.imerysCompany')}
            duration= {t('workExperienceSection.imerysDuration')}
            responsibilities={[
              ...t('workExperienceSection.imerysResponsibilities').split(', '),
            ]}
          />
          <WorkExperienceItem
            title= {t('workExperienceSection.wiptecPosition')}
            company= {t('workExperienceSection.wiptecCompany')}
            duration= {t('workExperienceSection.wiptecDuration')}
            responsibilities={[
              ...t('workExperienceSection.wiptecResponsibilities').split(', '),
            ]}
          />
          <WorkExperienceItem
            title= {t('workExperienceSection.amzPosition')}
            company= {t('workExperienceSection.amzCompany')}
            duration= {t('workExperienceSection.amzDuration')}
            responsibilities={[
              ...t('workExperienceSection.amzResponsibilities').split(', '),
            ]}
          />
          <WorkExperienceItem
            title= {t('workExperienceSection.maxiPosition')}
            company= {t('workExperienceSection.maxiCompany')}
            duration= {t('workExperienceSection.maxiDuration')}
            responsibilities={[
              ...t('workExperienceSection.maxiResponsibilities').split(', '),
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;







// import React from "react";

// const WorkExperienceSection = () => {
//   return (
//     <section className="text-white" id="work-experience">
//       <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//         <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
//           <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
//           <div className="mb-8">
//             <h3 className="text-2xl font-bold">Warehouse Associate</h3>
//             <p className="text-lg italic">Wiptec Inc | 04/2023 - 08/2023</p>
//             <ul className="list-disc pl-6 mt-2">
//               <li>Offered mentorship and training to new entry-level hires.</li>
//               <li>Helped facilitate the resolution of communication challenges between English-speaking and French-speaking co-workers.</li>
//             </ul>
//           </div>
//           <div className="mb-8">
//             <h3 className="text-2xl font-bold">Warehouse Associate</h3>
//             <p className="text-lg italic">YUL5 Amazon |  11/2022 - 04/2023</p>
//             <ul className="list-disc pl-6 mt-2">
//               <li>Frequently collaborated in small, well-coordinated teams of 2-3 workers to handle the transportation of bulky packages.</li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-2xl font-bold">General Help Clerk</h3>
//             <p className="text-lg italic">Maxi Greenfield Park | 06/2022 - 11/2022</p>
//             <ul className="list-disc pl-6 mt-2">
//               <li>Contributed to handling challenging situations involving disruptive individuals in the parking lot, ensuring a safe and comfortable environment for potential clients and customers.</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkExperienceSection;
