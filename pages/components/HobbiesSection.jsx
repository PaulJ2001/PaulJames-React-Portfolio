import React from "react";
import Image from "next/image";
import HobbyItem from "./HobbyItem";
import { useTranslation } from "react-i18next";

const HobbiesSection = () => {
  const { t } = useTranslation();
    return (
      <section id="hobbies" className="py-16 bg-[#121212]">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div className="md:order-2">
            <Image src="/images/pc-setup.jpg" width={1000} height={1000} />
          </div>
          <div className="mt-4">
            <h2 className="text-4xl text-white font-bold mb-8">{t('hobbiesSection.title')}</h2>
            <HobbyItem
              title={t('hobbiesSection.hobbyName1')}
              description={t('hobbiesSection.hobbyDescription1')}
            />
            <HobbyItem
             title={t('hobbiesSection.hobbyName2')}
             description={t('hobbiesSection.hobbyDescription2')}
            />
            <HobbyItem
              title={t('hobbiesSection.hobbyName3')}
              description={t('hobbiesSection.hobbyDescription3')}
            />
          </div>
        </div>
      </section>
    );
  };

export default HobbiesSection;