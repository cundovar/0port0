import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import clsx from 'clsx';
import { StyledEngineProvider } from '@mui/material';

export  function OutlinedButtons({ text, onClick, isActive,sx,href,target,rel }) {
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


  export  function ButtonNavBar({className,text,isActive,onClick}){
    const buttonClass=clsx(className)
    return(
        <StyledEngineProvider injectFirst>
        <Button sx={{color:"wheat"}}
        variant="text"
        isActive={isActive}
        onClick={onClick}
        className={buttonClass}
        > {text}
        </Button>
        </StyledEngineProvider>
    )
  }