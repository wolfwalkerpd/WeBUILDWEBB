import React, { useEffect, useContext } from "react";
import { LanguageContext } from "../api/language-context";
import "../packages/style.css";
interface End {}
interface LanguageContextType {
  langswitch: boolean;
  setLangswitch: (langswitch: boolean) => void;
}
const Footer: React.FC<End> = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".fadeAnimation");
    hiddenElements.forEach((el) => observer.observe(el));
    const hiddenTitle = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    const hiddentext = document.querySelectorAll(".fadetext");
    hiddentext.forEach((el1) => hiddenTitle.observe(el1));
    const hiddenTitleMotion = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("motion_show");
        } else {
          entry.target.classList.remove("motion_show");
        }
      });
    });
    const hiddentextMotion = document.querySelectorAll(".motion_hid");
    hiddentextMotion.forEach((el1) => hiddenTitleMotion.observe(el1));
  }, []);
  const { langswitch } = useContext(
    LanguageContext
  ) as LanguageContextType;
  return (
    <footer className="footer footer-center bg-slate-800 text-base-100 p-4">
      <aside>
        {langswitch ? (
          <p>
            droits d'auteur © {new Date().getFullYear()} - Tous droits réservés
            par ACME Industries Ltd
          </p>
        ) : (
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        )}
      </aside>
    </footer>
  );
};

export default Footer;
