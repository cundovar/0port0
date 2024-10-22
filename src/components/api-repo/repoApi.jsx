
import React from 'react';

import GitHubCalendar from 'react-github-calendar';

const ApiRepo = ({ username }) => {

  const theme = {
    light: ["transparent", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
    dark: ["transparent", "#4c566a", "#81a1c1", "#88c0d0", "#eceff4"]
  };
  return (
    <div>
      <h2 className='text-center mb-3' >GitHub</h2>
     <div className='  bg-white bg-opacity-20 flex p-2 rounded-3xl shadow-xl justify-center'>
        <GitHubCalendar blockSize={7}  username={username} theme={theme} />

     </div>
    
    </div>
  );
};

export default ApiRepo;
