import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import clsx from "clsx";
import { StyledEngineProvider } from "@mui/material";
import { ColorModeContext } from "../../../App";
import { useTheme } from "@mui/material/styles";
import PropTypes from 'prop-types';
export function OutlinedButtons({
  text,
  onClick,
  isActive,
  sx,
  href,
  target,
  rel,
}) {
  return (
    <StyledEngineProvider injectFirst>
      <Button
        sx={sx}
        variant="text"
        onClick={onClick}
        className={` ${isActive ? "font-bold" : ""}`}
        href={href}
        target={target}
        rel={rel}
      >
        {text}
      </Button>
    </StyledEngineProvider>
  );
}
/**
 * composant bouton
 */
export function ButtonNavBar({ className, text, onClick,size }) {
  const { mode } = useContext(ColorModeContext);
  const theme = useTheme();
  const buttonClass = clsx(className, {
    // Utilisez les classes de couleurs de Material-UI en fonction du mode
    "MuiButton-textPrimary": mode === "light",
    "MuiButton-textSecondary": mode === "dark",
  });
  return (
    <StyledEngineProvider injectFirst>
      <Button
        sx={{ opacity: "100"  }}
        variant="text"
        onClick={onClick}
        className={buttonClass }
      >
        {" "}
        {text}
      </Button>
    </StyledEngineProvider>
  );
}




export function ButtonAccueilCOntact() {
  return (
    <button className="group relative hover:opacity-100 overflow-hidden rounded-[8px] borderbg-transparent px-4">
      <span className="relative inline-flex border p-5 bg-cyan-400 rounded-lg">
        <span className="text-4xl duration-700  [transition-delay:0.02s] group-hover:[transform:rotateY(360deg)]">
          C
        </span>
        <span className="text-4xl duration-700 [transition-delay:0.04s] group-hover:[transform:rotateY(360deg)]">
          O
        </span>
        <span className="text-4xl duration-700 [transition-delay:0.06s] group-hover:[transform:rotateY(360deg)]">
          N
        </span>
        <span className="text-4xl duration-700 [transition-delay:0.08s] group-hover:[transform:rotateY(360deg)]">
          T
        </span>
        <span className="text-4xl duration-700 [transition-delay:0.10s] group-hover:[transform:rotateY(360deg)]">
          A
        </span>
        <span className="text-4xl duration-700 [transition-delay:0.12s] group-hover:[transform:rotateY(360deg)]"></span>
        <span className="duration-700 text-4xl [transition-delay:0.14s] group-hover:[transform:rotateY(360deg)]">
          C
        </span>
        <span className="text-4xl duration-700 [transition-delay:0.16s] group-hover:[transform:rotateY(360deg)]">
          T
        </span>
      </span>
    </button>
  );
}
export function ButtonAccueilPorfolio() {
  return (
    <button className="group relative hover:opacity-100 overflow-hidden rounded-[8px] borderbg-transparent px-4">
      <span className="relative inline-flex border p-5 bg-cyan-400 rounded-lg">
        <span className="text-4xl duration-700  rounded-lg [transition-delay:0.02s] group-hover:[transform:rotateY(360deg)]">
          P
        </span>
        <span className="text-4xl first-line:rounded-lg duration-700 [transition-delay:0.04s] group-hover:[transform:rotateY(360deg)]">
          O
        </span>
        <span className="text-4xl   duration-700 [transition-delay:0.06s] group-hover:[transform:rotateY(360deg)]">
          R
        </span>
        <span className="text-4xl   duration-700 [transition-delay:0.08s] group-hover:[transform:rotateY(360deg)]">
          T
        </span>
        <span className="text-4xl duration-700 [transition-delay:0.10s] group-hover:[transform:rotateY(360deg)]">
          F
        </span>
        <span className="text-4xl duration-700 [transition-delay:0.12s] group-hover:[transform:rotateY(360deg)]">
          O
        </span>
        <span className="duration-700 text-4xl [transition-delay:0.14s] group-hover:[transform:rotateY(360deg)]">
          L
        </span>
        <span className="text-4xl duration-700 [transition-delay:0.16s] group-hover:[transform:rotateY(360deg)]">
          I
        </span>
        <span className="text-4xl duration-700 [transition-delay:0.18s] group-hover:[transform:rotateY(360deg)]">
          O
        </span>
      </span>
    </button>
  );
}
export function ButtonAccueilApropos() {
  return (
    <button className=" group relative hover:opacity-100 overflow-hidden rounded-[8px] borderbg-transparent px-4">
      <span className="relative inline-flex border p-5 bg-cyan-400 rounded-lg">
        <span className="text-4xl duration-700 [transition-delay:0.02s] group-hover:[transform:rotateY(360deg)]">
          A
        </span>
        <span className="text-4xl duration-700 [transition-delay:0.04s] group-hover:[transform:rotateY(360deg)]">
          &nbsp;
        </span>
        <span className="text-4xl duration-700 [transition-delay:0.06s] group-hover:[transform:rotateY(360deg)]">
          P
        </span>
        <span className="text-4xl duration-700 [transition-delay:0.08s] group-hover:[transform:rotateY(360deg)]">
          R
        </span>
        <span className="text-4xl duration-700 [transition-delay:0.10s] group-hover:[transform:rotateY(360deg)]">
          O
        </span>
        <span className="text-4xl duration-700 [transition-delay:0.12s] group-hover:[transform:rotateY(360deg)]">
          P
        </span>
        <span className="duration-700 text-4xl [transition-delay:0.14s] group-hover:[transform:rotateY(360deg)]">
          O
        </span>
        <span className="text-4xl duration-700 [transition-delay:0.16s] group-hover:[transform:rotateY(360deg)]">
          S
        </span>
        <span className="text-4xl duration-700 [transition-delay:0.18s] group-hover:[transform:rotateY(360deg)]"></span>
      </span>
    </button>
  );
}

