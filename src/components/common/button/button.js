import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import clsx from 'clsx';
import { StyledEngineProvider } from '@mui/material';

export  function OutlinedButtons({ text, onClick, isActive,sx }) {
    return (
      <Stack direction="row" spacing={2}>
        {/* Utilisation de la prop isActive pour conditionnellement appliquer la classe "font-bold" */}
        <Button
          sx={sx}
          variant="text"
          onClick={onClick}
          className={` ${isActive ? "font-bold" : ""}`}
          
          
        >
          {text}
        </Button>
      </Stack>
    );
  }


  export  function ButtonNavBar({className,text,onClick}){
    const buttonClass=clsx(className)
    return(
        <StyledEngineProvider injectFirst>
        <Button sx={{color:"wheat"}}
        variant="text"
        onClick={onClick}
        className={buttonClass}
        > {text}
        </Button>
        </StyledEngineProvider>
    )
  }