
import NavLight from "./components/navLight/navLight";
import Home from "./components/home/home";
import Packages from "./components/packages/packages";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { LanguageProvider } from "./components/api/language-context";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LanguageProvider>
                <NavLight
                  scroll={2300}
                  modxxl={3600}
                  modlg={4900}
                  modxl={4500}
                  modmd={5900}
                  modsm={6300}
                  modssm={6700}
                />
                <Home />
                <Packages />
                <Contact />
                <About />
                <Footer />
              </LanguageProvider>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
