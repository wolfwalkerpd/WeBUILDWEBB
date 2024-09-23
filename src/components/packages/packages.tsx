import React, { useEffect, useContext } from "react";
import AllSteps from "./steps";
import { LanguageContext } from "../api/language-context";
import { CardItem, CardContainer, CardBody } from "../ui/3d-card";
// const img = "./images/images.jpeg";
const img = "../../images/1.jpeg";
import "./style.css";

interface OrderPackage {}
interface LanguageContextType {
  langswitch: boolean;
  setLangswitch: (langswitch: boolean) => void;
}
const Packages: React.FC<OrderPackage> = () => {
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
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show1");
        }
      });
    });
    const hiddentext1 = document.querySelectorAll(".hid1");
    hiddentext1.forEach((el1) => observer1.observe(el1));
  }, []);

  const { langswitch } = useContext(
    LanguageContext
  ) as LanguageContextType;

  return (
    <section className=" bg-[#eee] h-auto pt-7 pb-3 px-10">
      <AllSteps />
      <div className="fadeAnimation delay-[0.8s]">
        <h2 className=" text-center text-4xl">
          {langswitch ? "Commandez votre forfait" : "Order Your Package"}
        </h2>
        <div className=" lg:columns-3">
          <CardContainer className="inter-var hid1">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white">
                {langswitch ? "Basique" : "Basic"}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {langswitch
                  ? "Il s'agit d'un package de base qui libère l'expérience de la page Web"
                  : "This is a basic package which unleash experience of web page"}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img src={img} />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                  {langswitch ? "Continuer →" : "Continue →"}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                  {langswitch ? "s'inscrire" : "Sign up"}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var hid1">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white">
                {langswitch ? "Normale" : "Normal"}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {langswitch
                  ? "Il s'agit d'un package normal avec lequel vous pouvez créer une page Web simple mais efficace"
                  : "This is a normal package which you can make a simple but effcient webpage"}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img src={img} />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                  {langswitch ? "Continuer →" : "Continue →"}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                  {langswitch ? "s'inscrire" : "Sign up"}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var hid1">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white">
                {langswitch ? "Prime" : "Premium"}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {langswitch
                  ? "Il s'agit d'un package premium dans lequel vous retrouverez la véritable puissance du site Web."
                  : "This is a premium package in which you'll find true power of website."}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img src={img} />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                  {langswitch ? "Continuer →" : "Continue →"}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                  {langswitch ? "s'inscrire" : "Sign up"}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
};

export default Packages;
