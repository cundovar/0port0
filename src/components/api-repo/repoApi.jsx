import React from 'react';
import GitHubCalendar from 'react-github-calendar';


const ApiRepo  = () => {
 

  return (
    <div>
      <h2>Mon calendrier de contributions GitHub</h2>
      <GitHubCalendar username="cundovar" years={[2023, 2024]} />
      <p>Vous pouvez consulter mon profil GitHub pour plus de détails sur mes projets et contributions.</p>
     
    </div>
  );
};

export default ApiRepo ;
