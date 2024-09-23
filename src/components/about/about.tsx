import { FlipWords } from "../ui/flip-words";
("use client");
import "../packages/style.css";

import React, { useEffect, useContext } from "react";
import { LanguageContext } from "../api/language-context";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
interface Knowledge {}
interface LanguageContextType {
  langswitch: boolean;
  setLangswitch: (langswitch: boolean) => void;
}
const About: React.FC<Knowledge> = () => {
  const words = ["Terms", "News", "FAQs"];
  const wordsFrench = ["Termes", "Nouvelles", "FAQs"];
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
    <section className=" bg-slate-900 text-white h-auto py-7 ">
      <h2 className="2sm:text-3xl sm:text-4xl lg:text-5xl text-center translate-x-0">
        {langswitch ? "À propos de nous" : "About us"}
      </h2>
      <h3 className="2sm:text-xl sm:text-2xl lg:text-4xl font-light text-center mt-2 md:mt-5 fadeAnimation delay-[0.3s] tracking-wide text-[#ccc]">
        {langswitch ? "Apprenez grâce à notre" : "Learn through our"}
        <FlipWords
          words={langswitch ? wordsFrench : words}
          className=" text-white"
        />
      </h3>
      <div className=" lg:flex lg:px-10 mt-10">
        <div className=" text-center 2sm:px-4 sm:px-20 2sm:py-5 lg:py-0 lg:px-6 xl:px-10 w-full font sm:delay-[0.4s] md:delay-0 fadeAnimation">
          <h4 className="text-7xl font-light cursor-pointer mb-3">
            <i className="las la-lock"></i>
          </h4>
          <span className=" text-lg lg:text-xl xl:text-2xl">
            {langswitch
              ? "Approuvé par +100 clients"
              : "Trusted by +100 customer"}
          </span>
          <p className=" text-[#ccc] mt-2 text-sm lg:text-base xl:text-lg leading-7 tracking-wide">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            deserunt consequatur vitae voluptate totam aut explicabo
            consequuntur eligendi minus ea labore officia harum impedit
            consectetur, tenetur repellendus aperiam? Doloribus, eveniet.
          </p>
        </div>
        <div className=" text-center 2sm:px-4 sm:px-20 2sm:py-5 lg:py-0 lg:px-10 w-full font fadeAnimation sm:delay-[0.6s] md:delay-100">
          <h4 className="text-7xl font-light cursor-pointer mb-3">
            <i className="las la-suitcase"></i>
          </h4>
          <span className="text-lg lg:text-xl xl:text-2xl">
            {langswitch ? "Plus de +50 projets" : "More than +50 projects"}
          </span>
          <p className=" text-[#ccc] mt-2 text-sm lg:text-base xl:text-lg leading-7 tracking-wide">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            deserunt consequatur vitae voluptate totam aut explicabo
            consequuntur eligendi minus ea labore officia harum impedit
            consectetur, tenetur repellendus aperiam? Doloribus, eveniet.
          </p>
        </div>
        <div className=" text-center 2sm:px-4 sm:px-20 2sm:py-5 lg:py-0 lg:px-10 w-full font fadeAnimation delay-[0.8s] md:delay-200">
          <h4 className="text-7xl font-light cursor-pointer mb-3">
            <i className="las la-lightbulb"></i>
          </h4>
          <span className="text-lg lg:text-xl xl:text-2xl">
            {langswitch
              ? "Première idée dans la ville de Qom"
              : "First idea in city of Qom"}
          </span>
          <p className=" text-[#ccc] mt-2 text-sm lg:text-base xl:text-lg leading-7 tracking-wide">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            deserunt consequatur vitae voluptate totam aut explicabo
            consequuntur eligendi minus ea labore officia harum impedit
            consectetur, tenetur repellendus aperiam? Doloribus, eveniet.
          </p>
        </div>
      </div>
      {/* slide */}
      <div className=" mt-20">
        <div className="h-[20rem] rounded-md flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        <div className="h-[20rem] rounded-md flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};
const testimonials = [
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi deserunt consequatur vitae voluptate totam aut explicabo consequuntur eligendi minus ea labore officia harum impeditconsectetur, tenetur repellendus aperiam? Doloribus, eveniet.",
    name: "Unknown",
    title: "Private project",
  },
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi deserunt consequatur vitae voluptate totam aut explicabo consequuntur eligendi minus ea labore officia harum impeditconsectetur, tenetur repellendus aperiam? Doloribus, eveniet.",
    name: "Unknown",
    title: "Private project",
  },
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi deserunt consequatur vitae voluptate totam aut explicabo consequuntur eligendi minus ea labore officia harum impeditconsectetur, tenetur repellendus aperiam? Doloribus, eveniet.",
    name: "Unknown",
    title: "Private project",
  },
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi deserunt consequatur vitae voluptate totam aut explicabo consequuntur eligendi minus ea labore officia harum impeditconsectetur, tenetur repellendus aperiam? Doloribus, eveniet.",
    name: "Unknown",
    title: "Private project",
  },
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi deserunt consequatur vitae voluptate totam aut explicabo consequuntur eligendi minus ea labore officia harum impeditconsectetur, tenetur repellendus aperiam? Doloribus, eveniet.",
    name: "Unknown",
    title: "Private project",
  },
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi deserunt consequatur vitae voluptate totam aut explicabo consequuntur eligendi minus ea labore officia harum impeditconsectetur, tenetur repellendus aperiam? Doloribus, eveniet.",
    name: "Unknown",
    title: "Private project",
  },
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi deserunt consequatur vitae voluptate totam aut explicabo consequuntur eligendi minus ea labore officia harum impeditconsectetur, tenetur repellendus aperiam? Doloribus, eveniet.",
    name: "Unknown",
    title: "Private project",
  },
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi deserunt consequatur vitae voluptate totam aut explicabo consequuntur eligendi minus ea labore officia harum impeditconsectetur, tenetur repellendus aperiam? Doloribus, eveniet.",
    name: "Unknown",
    title: "Private project",
  },
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi deserunt consequatur vitae voluptate totam aut explicabo consequuntur eligendi minus ea labore officia harum impeditconsectetur, tenetur repellendus aperiam? Doloribus, eveniet.",
    name: "Unknown",
    title: "Private project",
  },
  {
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi deserunt consequatur vitae voluptate totam aut explicabo consequuntur eligendi minus ea labore officia harum impeditconsectetur, tenetur repellendus aperiam? Doloribus, eveniet.",
    name: "Unknown",
    title: "Private project",
  },
];
export default About;
