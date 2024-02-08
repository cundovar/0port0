import React, { useState, createContext, useContext, useMemo } from 'react';
import Page from './pages/pages';
import './App.css';
import AnimationSVG from './components/animation/animationHome';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Button from '@mui/material/Button';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NightlightRoundRoundedIcon from '@mui/icons-material/NightlightRoundRounded';
 export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function AppContent() {
  const { toggleColorMode, mode } = useContext(ColorModeContext);

  return (
    <div className="2xl:p-20 p-2  h-screen">
      <Page />
      {/* Bouton de basculement */}
      <div className=' absolute p-0 bottom-4  2xl:bottom-20  z-30 cursor-pointer'>

      <Button onClick={toggleColorMode} >
        {mode === 'dark' ? <LightModeRoundedIcon fontSize='small'/> : <NightlightRoundRoundedIcon fontSize='small'/>}
      </Button>
      </div>
    </div>
  );
}

function App() {
  const [mode, setMode] = useState('dark');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContent />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
