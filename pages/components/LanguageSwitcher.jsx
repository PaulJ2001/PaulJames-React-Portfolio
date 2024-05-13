// import React from 'react'
// import { useTranslation } from 'react-i18next';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGlobe } from '@fortawesome/free-solid-svg-icons'

// function LanguageSwitcher() {
//     const { i18n } = useTranslation()

//     const handleChangeLanguage = (e) => {
//         const selectedLanguage = e.target.value;
//         i18n.changeLanguage(selectedLanguage);
//     };


//     return (
//         <div className="nav-link" style={{fontSize: "18px", color: "white"}}>
//             {/* <FontAwesomeIcon icon={faGlobe} className="mr-2" style={{color: "white", marginRight: "5px"}} /> */}
//             <select
//                 className="playfair-display"
//                 value={i18n.language}
//                 onChange={handleChangeLanguage}
//                 style={{
//                     padding: "",
//                     borderRadius: "5px",
//                     border: "1px solid #ced4da",
//                     fontSize: "16px",
//                     cursor: "pointer",
//                     backgroundColor: "#ffffff",
//                     color: "#000000",
//                 }}
//             >
//                 <option value="en">EN</option>
//                 <option value="fr">FR</option>
//             </select>
//         </div>
//     )
// }

// export default LanguageSwitcher