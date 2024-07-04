import React, {
  useState,
  createContext,
  useContext,
  useMemo,
  useEffect,
} from "react";
import Page from "./pages/pages";
import "./App.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Button from "@mui/material/Button";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NightlightRoundRoundedIcon from "@mui/icons-material/NightlightRoundRounded";
import { Link, BrowserRouter as Router, useLocation } from "react-router-dom"; // Correction ici
import ArticleIcon from "@mui/icons-material/Article";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomeIcon from "@mui/icons-material/Home";
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function AppContent() {
  const { toggleColorMode, mode } = useContext(ColorModeContext);
  const location = useLocation();

  return (
    <div className="2xl:p-20 p-2 max-sm:p-0 max-sm:pl-2 max-sm:pr-2 max-xl:h-full  xl:h-screen">
      <Page />
      {/* Bouton de basculement */}
      <div className=" absolute fixed p-0 bottom-0 max-lg:hidden  2xl:bottom-20 max-sm:border max-sm:p-1  z-30 cursor-pointer">
        <Button onClick={toggleColorMode}>
          {mode === "dark" ? (
            <LightModeRoundedIcon fontSize="medium" />
          ) : (
            <NightlightRoundRoundedIcon fontSize="medium" />
          )}
        </Button>
      </div>

      <div className=" xl:hidden fixed p-0 bottom-0 items-center justify-around w-full flex max-sm:left-0 rounded-tr-2xl rounded-tl-2xl 2xl:bottom-20  max-sm:p-1 backdrop-blur-xl z-30 cursor-pointer">
        <div
          className={`flex justify-center items-center w-5/6  space-x-2 ${
            location.pathname === "/cv" ? "text-gray-950" : ""
          }`}
        >
          <Link
            k
            className={`w-1/4  flex flex-col justify-center  items-center ${
              location.pathname === "/apropos" && mode === "light"
                ? "bg-cyan-300 rounded-lg"
                : ""
            } ${
              location.pathname === "/apropos" && mode === "dark"
                ? "bg-cyan-600 rounded-lg"
                : ""
            }`}
            to="/apropos"
          >
            <HomeIcon />
            <p className="">a propos</p>
          </Link>

          <Link
            className={`w-1/4  flex flex-col justify-center  items-center ${
              location.pathname === "/portfolio" && mode === "light"
                ? "bg-cyan-300 rounded-lg"
                : ""
            } ${
              location.pathname === "/portfolio" && mode === "dark"
                ? "bg-cyan-600 rounded-lg"
                : ""
            }`}
            to="/portfolio"
          >
            <PhotoSizeSelectActualIcon />
            <p> portfolio</p>
          </Link>

          <Link
            to="/cv"
            className={`w-1/4  flex flex-col justify-center  items-center ${
              location.pathname === "/cv" && mode === "light"
                ? "bg-cyan-300 rounded-lg"
                : ""
            } ${
              location.pathname === "/cv" && mode === "dark"
                ? "bg-cyan-600 rounded-lg"
                : ""
            }`}
          >
            <ArticleIcon className="  " />
            CV
          </Link>

          <Link
            to="/contact"
            className={`w-1/4  flex flex-col justify-center  items-center ${
              location.pathname === "/contact" && mode === "light"
                ? "bg-cyan-300 rounded-lg"
                : ""
            } ${
              location.pathname === "/contact" && mode === "dark"
                ? "bg-cyan-600 rounded-lg"
                : ""
            }`}
          >
            <ContactMailIcon />
            <p>Contact</p>
          </Link>
        </div>

        <Button onClick={toggleColorMode}>
          {mode === "dark" ? (
            <LightModeRoundedIcon fontSize="medium" />
          ) : (
            <NightlightRoundRoundedIcon fontSize="medium" />
          )}
        </Button>
      </div>
    </div>
  );
}

function App() {
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const handleChange = (e) => {
      setMode(e.matches ? "dark" : "light");
    };

    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    darkModeQuery.addEventListener("change", handleChange);

    return () => {
      darkModeQuery.removeEventListener("change", handleChange);
    };
  }, []);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AppContent />
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
