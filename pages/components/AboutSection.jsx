"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { useTranslation } from 'react-i18next'; 
// import './languageConfig';

const AboutSection = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const TAB_DATA = [
    {
      title: t('aboutSection.skillsTitle'),
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Java</li>
          <li>React</li>
          <li>MySql</li>
        </ul>
      ),
    },
    {
      title: t('aboutSection.educationTitle'),
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>{t('aboutSection.educationChamplain')}</li>
          <li>{t('aboutSection.educationHeritage')}</li>
        </ul>
      ),
    },
  ];

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/profile-img.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{t('aboutSection.title')}</h2>
          <p className="text-base lg:text-lg">
          {t('aboutSection.aboutContent')} 
            
          </p>
          <div className="flex flex-row justify-start mt-8">
          <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
