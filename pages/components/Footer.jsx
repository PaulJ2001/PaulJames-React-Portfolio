import React from "react";
import Image from "next/image";
import { useTranslation } from 'react-i18next'; 

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
        <Image
            src="/images/atlas-background.jpg"
            className="rounded-full"
            width={50}
            height={50}
          ></Image>
          {/* LOGO */}

          </span>
        <p className="text-slate-600"> @pauljamesportfolio.com {currentYear} {t('footer.copyrightText')}. </p>
      </div>
    </footer>
  );
};

export default Footer;
