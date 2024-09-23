import React, { useEffect, useContext } from "react";
import { LanguageContext } from "../api/language-context";
import "./style.css";

interface steps {}

interface LanguageContextType {
  langswitch: boolean;
  setLangswitch: (langswitch: boolean) => void;
}

const AllSteps: React.FC<steps> = () => {
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
    <div className=" mb-20 mt-10">
      <div className=" text-center">
        <h4 className=" text-xl text-slate-600 tracking-[10px] font-light fadeAnimation sm:delay-500 xl:delay-[0.5s]">
          {langswitch ? "Processus de travail" : "Work process"}
        </h4>
        <h3 className=" text-5xl font-light pb-3 translate-x-0">
          {langswitch ? "Nous suivons les étapes" : "We Follow Steps"}
        </h3>
      </div>
      <div className=" grid md:grid-cols-2 xl:grid-cols-4">
        <div className=" py-4 bg-slate-800 text-white rounded-md relative my-5 sm:mx-5 h-28 shadow-2xl delay-[0.4s] sm:px-4 fadeAnimation motion_hid">
          <div className=" bg-[white] text-slate-950 rounded-xl w-16 absolute -left-4">
            <h4 className=" text-xl text-center text-slate-800 -left-6 shadow-2xl">
              {langswitch ? "Étape" : "Step"}{" "}
              <span className=" text-slate- block text-black">01</span>
            </h4>
          </div>
          <div className="mx-16">
            <h3 className=" text-2xl font-light text-center">
              {langswitch ? "Discussion" : "Discussion"}
            </h3>
            <h4 className=" text-center">
              <i className="las la-comments text-6xl"></i>
            </h4>
          </div>
        </div>
        <div className="relative py-4 bg-slate-800 text-white rounded-md my-5 h-28 md:mt-44 sm:mx-5 delay-[0.6s] shadow-2xl fadeAnimation motion_hid">
          <div className=" bg-[white] text-slate-950 rounded-xl w-16 h-14 absolute -left-4">
            <h4 className=" text-xl text-center text-slate-800 -left-6 shadow-2xl">
              {langswitch ? "Étape" : "Step"}
              <span className=" text-slate- block text-black">02</span>
            </h4>
          </div>
          <div className="mx-16">
            <h3 className=" text-2xl font-light text-center">
              {langswitch ? "Concept" : "Concept"}
            </h3>
            <h4 className="text-center">
              <i className="las la-lightbulb text-6xl"></i>
            </h4>
          </div>
        </div>
        <div className=" py-4 bg-slate-800 text-white rounded-md relative sm:px-6 my-5 sm:mx-5 h-28 shadow-2xl delay-[0.8s] fadeAnimation motion_hid">
          <div className=" bg-[white] text-slate-950 rounded-xl w-16 h-14 absolute -left-4">
            <h4 className=" text-xl text-center text-slate-800 -left-6 shadow-2xl">
              {langswitch ? "Étape" : "Step"}
              <span className=" text-slate- block text-black">03</span>
            </h4>
          </div>
          <div className="mx-16">
            <h3 className=" text-2xl font-light text-center">
              {langswitch ? "créer" : "Create"}
            </h3>
            <h4 className="text-center">
              <i className="las la-cog text-6xl"></i>
            </h4>
          </div>
        </div>
        <div className=" py-4 bg-slate-800 text-white rounded-md relative sm:px-4 my-5 h-28 md:mt-44 sm:mx-5 shadow-2xl delay-[1s] fadeAnimation motion_hid">
          <div className=" bg-[white] text-slate-950 rounded-xl w-16 h-14 absolute -left-4">
            <h4 className=" text-xl text-center text-slate-800 -left-6 shadow-2xl">
              {langswitch ? "Étape" : "Step"}
              <span className=" text-slate- block text-black">04</span>
            </h4>
          </div>
          <div className="mx-16">
            <h3 className=" text-2xl font-light text-center">
              {langswitch ? "Finalisé" : "Finalized"}
            </h3>
            <h4 className=" text-center">
              <i className="las la-smile text-6xl"></i>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllSteps;
