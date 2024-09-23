import React, { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../api/language-context";
import "./style.css";

interface NavLightProps {
  scroll: number;
  modxxl: number;
  modxl: number;
  modlg: number;
  modmd: number;
  modsm: number;
  modssm: number;
}
interface LanguageContextType {
  langswitch: boolean;
  setLangswitch: (langswitch: boolean) => void;
}
const NavLight: React.FC<NavLightProps> = (props) => {
  const [isSticky, setIsSticky] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  //false = english, true = french
  const { langswitch, setLangswitch } = useContext(
    LanguageContext
  ) as LanguageContextType;

  useEffect(() => {
    console.log(langswitch);
  }, [langswitch]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > props.scroll) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props.scroll]);

  useEffect(() => {
    const scrollEffect = () => {
      const bg_select = document.querySelector(".bg_changer");
      const scrollY = window.scrollY;
      const widthWindow = window.innerWidth;
      console.log(widthWindow);
      if (1426 <= widthWindow) {
        if (scrollY > props.modxxl) {
          setColorChange(true);
          bg_select?.classList.add("bg-[rgba(255,255,255,0.2)]");
          bg_select?.classList.remove("bg-slate-800");
        } else {
          setColorChange(false);
          bg_select?.classList.remove("bg-[rgba(255,255,255,0.2)]");
          bg_select?.classList.add("bg-slate-800");
        }
      } else if (1280 <= widthWindow) {
        if (scrollY > props.modxl) {
          setColorChange(true);
          bg_select?.classList.add("bg-[rgba(255,255,255,0.2)]");
          bg_select?.classList.remove("bg-slate-800");
        } else {
          setColorChange(false);
          bg_select?.classList.remove("bg-[rgba(255,255,255,0.2)]");
          bg_select?.classList.add("bg-slate-800");
        }
      } else if (1024 <= widthWindow) {
        if (scrollY > props.modlg) {
          setColorChange(true);
          bg_select?.classList.add("bg-[rgba(255,255,255,0.2)]");
          bg_select?.classList.remove("bg-slate-800");
        } else {
          setColorChange(false);
          bg_select?.classList.remove("bg-[rgba(255,255,255,0.2)]");
          bg_select?.classList.add("bg-slate-800");
        }
      } else if (768 <= widthWindow) {
        if (scrollY > props.modmd) {
          setColorChange(true);
          bg_select?.classList.add("bg-[rgba(255,255,255,0.2)]");
          bg_select?.classList.remove("bg-slate-800");
        } else {
          setColorChange(false);
          bg_select?.classList.remove("bg-[rgba(255,255,255,0.2)]");
          bg_select?.classList.add("bg-slate-800");
        }
      } else if (640 <= widthWindow) {
        if (scrollY > props.modsm) {
          setColorChange(true);
          bg_select?.classList.add("bg-[rgba(255,255,255,0.2)]");
          bg_select?.classList.remove("bg-slate-800");
        } else {
          setColorChange(false);
          bg_select?.classList.remove("bg-[rgba(255,255,255,0.2)]");
          bg_select?.classList.add("bg-slate-800");
        }
      } else {
        if (scrollY > props.modssm) {
          setColorChange(true);
          bg_select?.classList.add("bg-[rgba(255,255,255,0.2)]");
          bg_select?.classList.remove("bg-slate-800");
        } else {
          setColorChange(false);
          bg_select?.classList.remove("bg-[rgba(255,255,255,0.2)]");
          bg_select?.classList.add("bg-slate-800");
        }
      }
    };
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, [props.scroll]);

  return (
    <nav
      className={`2sm:px-5 sm:px-12 py-6 relative overflow-visible grid grid-cols-8 header text-white bg_changer bg-slate-800  ${
        isSticky ? "sticky animate-slide-down" : ""
      } ${colorChange ? "" : ""}  `}
      style={
        {
          position: isSticky ? "fixed" : "relative",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
        } as React.CSSProperties
      }>
      <div className="2sm:col-span-4 sm:col-span-6 md:col-span-6 lg:col-span-2 text-2xl flex items-center text-white">
        <span>Logo</span>
      </div>
      <div
        className="col-span-3 text-lg lg:flex items-center space-x-12 justify-center 2sm:hidden font-semibold text-slate-300"
        id="navbar-default">
        <a href="#" className="text-xl text-white">
          {langswitch ? "Maison" : "Home"}
        </a>
        <a
          href="#"
          className="text-xl Navbar_text_hover hover:text-white transition-all">
          {langswitch ? "Emballer" : "Packages"}
        </a>
        <a
          href="#"
          className="text-xl Navbar_text_hover hover:text-white transition-all">
          Contact
        </a>
        <a
          href="#"
          className="text-xl Navbar_text_hover hover:text-white transition-all">
          {langswitch ? "propos" : "About"}
        </a>
      </div>
      <div className=" 2sm:col-span-4 sm:col-span-2 md:col-span-2 2sm:block lg:hidden">
        <div className="dropdown dropdown-bottom dropdown-end relative mr-3">
          <div tabIndex={0} role="button" className="btn float-right">
            <i className="las la-globe text-2xl"></i>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content items-center justify-center menu bg-white rounded-box z-[1] w-32 p-2 shadow text-black">
            <li>
              <button
                onClick={() => {
                  setLangswitch(true);
                }}>
                Français
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setLangswitch(false);
                }}>
                English
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-bottom dropdown-end relative">
          <div tabIndex={0} role="button" className="btn float-right">
            <i className="las la-bars text-3xl"></i>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content items-center justify-center menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-black">
            <li>
              <a>{langswitch ? "Maison" : "Home"}</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>{langswitch ? "À propos" : "About"}</a>
            </li>
            <li>
              <a>{langswitch ? "Emballer" : "Packages"}</a>
            </li>
            <ul className="">
              <a href="#" className=" hover:text-[#555] text-xl mx-2">
                <i className="lab la-whatsapp"></i>
              </a>
              <a href="#" className=" hover:text-[#555] text-xl mx-2">
                <i className="lab la-telegram"></i>
              </a>
              <a
                href="#"
                className=" hover:text-[#555] text-xl -rotate-90 mx-2">
                <i className="las la-phone"></i>
              </a>
            </ul>
          </ul>
        </div>
      </div>
      <div className="col-span-3 lg:flex items-center 2sm:hidden">
        <div className="space-x-3 block pl-20 border-r-2 pr-4">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-primary m-1 hover:text-white bg-[#eee] text-[#333]">
              <i className="las la-globe text-2xl"></i>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box bg-white text-black z-[100] w-52 p-2 shadow">
              <li>
                <button
                  onClick={() => {
                    setLangswitch(true);
                  }}>
                  Français
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setLangswitch(false);
                  }}>
                  English
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-lg flex items-center space-x-5 pl-5">
          <a href="#" className=" hover:text-[#ccc] text-4xl">
            <i className="lab la-whatsapp"></i>
          </a>
          <a href="#" className=" hover:text-[#ccc] text-4xl">
            <i className="lab la-telegram"></i>
          </a>
          <a href="#" className=" hover:text-[#ccc] text-4xl -rotate-90">
            <i className="las la-phone"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavLight;
