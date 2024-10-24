
import { CircularProgress } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

import GitHubCalendar from 'react-github-calendar';

const ApiRepo = ({ username }) => {

  const {loading,setLoading}=useState(true)
  const calendarRef = useRef(null);  // Référence pour le calendrier
  // Utiliser un useEffect pour surveiller le rendu du calendrier
  useEffect(() => {
    const timer = setTimeout(() => {
 
        setLoading(false);  // Arrêter le chargement une fois que le calendrier est monté
      
    }, 2000);  // Petit délai pour s'assurer que le composant est monté

    return () => clearTimeout(timer); 
  },[] )// Ce useEffect est déclenché lorsque le ref est monté



  const theme = {
    light: ["transparent", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
    dark: ["transparent", "#4c566a", "#81a1c1", "#88c0d0", "#eceff4"]
  };
  return (
    <div>
      <h2 className='text-center mb-3' >GitHub</h2>
     <div className='  bg-white bg-opacity-20 flex p-2 rounded-3xl shadow-xl justify-center'>
      {loading ? (
<>
<CircularProgress />
</>
      ):(

        <GitHubCalendar blockSize={7}   ref={calendarRef} username={username} theme={theme} />
      )}

     </div>
    
    </div>
  );
};

export default ApiRepo;
