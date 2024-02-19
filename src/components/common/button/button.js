import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import clsx from 'clsx';
import { StyledEngineProvider } from '@mui/material';
import { ColorModeContext } from '../../../App';
import { useTheme } from '@mui/material/styles';




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


  export  function ButtonNavBar({className,text,onClick}){

    const { mode } = useContext(ColorModeContext);
const theme = useTheme();
    const buttonClass = clsx(className, {
        // Utilisez les classes de couleurs de Material-UI en fonction du mode
        'MuiButton-textPrimary': mode === 'light',
        'MuiButton-textSecondary': mode === 'dark',
      });
    return(
        <StyledEngineProvider injectFirst>
        <Button sx={{opacity:"100"}}
        variant="text"
      
        onClick={onClick}
        className={buttonClass}
        > {text}
        </Button>
        </StyledEngineProvider>
    )
  }