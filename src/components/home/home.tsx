import React from "react";
import { useEffect, useContext } from "react";
import { HeroParallax } from "../ui/Hero-parallax";
import { LanguageContext } from "../api/language-context";
import "./style.css";
interface Order {}
interface LanguageContextType {
  langswitch: boolean;
  setLangswitch: (langswitch: boolean) => void;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
const Home: React.FC<Order> = () => {
  const img_html = "https://webuildweb.co.in/img/tech/8.png";
  const img_php = "https://webuildweb.co.in/img/tech/6.png";
  const img_apple = "https://webuildweb.co.in/img/tech/1.png";
  const img_android = "https://webuildweb.co.in/img/tech/2.png";

  const { langswitch } = useContext(
    LanguageContext
  ) as LanguageContextType;

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

  return (
    <section>
      <HeroParallax products={products} />
      <div className=" my-20 2sm:px-4 sm:px-16 grid 2xl:grid-cols-4 md:grid-cols-2">
        <div className=" bg-slate-100 mx-4 text-center px-3 rounded-lg shadow-lg 2sm:py-5 sm:py-0 fadeAnimation 2sm:mt-10 sm:delay-[0.4s] md:delay-0 lg:mt-0 motion_hid 2xl:delay-[0.4s]">
          <img
            src={img_html}
            alt="html image"
            className=" mr-auto ml-auto block pt-3"
          />
          <h4 className=" text-xl font-medium">
            {langswitch ? "Conception De Sites Web" : "Web Design"}
          </h4>
          <p className=" leading-6 tracking-wide mt-3 pb-3 text-sm text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur fugiat vel architecto sequi quibusdam temporibus, error
            rerum nihil dolorum molestiae iusto similique quaerat facilis nemo
            libero? Voluptatem perferendis ab ducimus?
          </p>
        </div>
        <div className="2sm:mt-10 lg:mt-0 bg-slate-100 mx-4 text-center px-3 rounded-lg 2sm:py-5 sm:py-0 shadow-lg fadeAnimation sm:delay-[0.6s] lg:delay-300 2xl:delay-[0.6s] motion_hid">
          <img
            src={img_php}
            alt="php image"
            className=" mr-auto ml-auto block pt-3"
          />
          <h4 className=" text-xl font-medium">
            {langswitch ? "Développement Web" : "Web development"}
          </h4>
          <p className=" leading-6 tracking-wide mt-3 pb-3 text-sm text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur fugiat vel architecto sequi quibusdam temporibus, error
            rerum nihil dolorum molestiae iusto similique quaerat facilis nemo
            libero? Voluptatem perferendis ab ducimus?
          </p>
        </div>
        <div className=" bg-slate-100 mx-4 text-center px-3 rounded-lg shadow-lg 2sm:py-5 sm:py-0 fadeAnimation 2xl:delay-[0.8s] lg:delay-0 2sm:mt-10 sm:delay-[0.8s] 2xl:mt-0 motion_hid">
          <img
            src={img_apple}
            alt="ios image"
            className=" mr-auto ml-auto block pt-3"
          />
          <h4 className=" text-xl font-medium">{langswitch ? "Application Apple" : "Apple application"}</h4>
          <p className=" leading-6 tracking-wide mt-3 pb-3 text-sm text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur fugiat vel architecto sequi quibusdam temporibus, error
            rerum nihil dolorum molestiae iusto similique quaerat facilis nemo
            libero? Voluptatem perferendis ab ducimus?
          </p>
        </div>
        <div className=" bg-slate-100 text-center px-3 mx-4 rounded-lg shadow-lg 2sm:py-5 sm:py-0 fadeAnimation lg:delay-300 2xl:delay-[1s] lh\g:mt-10 sm:delay-[1s] 2sm:mt-10 2xl:mt-0 motion_hid">
          <img
            src={img_android}
            alt="android image"
            className="mr-auto ml-auto block pt-3"
          />
          <h4 className=" text-xl font-medium">{langswitch ? "Application Android" : "Android application"}</h4>
          <p className=" leading-6 tracking-wide mt-3 pb-3 text-sm text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur fugiat vel architecto sequi quibusdam temporibus, error
            rerum nihil dolorum molestiae iusto similique quaerat facilis nemo
            libero? Voluptatem perferendis ab ducimus?
          </p>
        </div>
      </div>
    </section>
  );
};
export default Home;
