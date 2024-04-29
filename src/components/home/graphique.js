import React, { useState } from "react";
import {
  CategoryScale,
  Chart as Chartjs,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ButtonNavBar } from "../common/button/button";


Chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend

 
);
Chartjs.defaults.font.size = 15;
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: " ",

        font: {
          size: 15,
        },
      },
    },
    title: {
      display: true,
      text: "Ma progression en graphique",
      color:"",
      font: {
        size: 20,
      },
    },
  },
  scales: {
    y: {
      display: false, // pour cacher l'axe Y
    },
    x: {
      grid: {
        display: false, // pour cacher la grille
      },
      ticks: {
        color: "",  // Changer la couleur des labels de l'axe des x en blanc
        font: {
          size: 15,
        },
      },
    },
  },
};

const labels = [
  "avant bootcamp",
  "bootcamp",
  "après bootcamp",
  "to continue...",
  
]

const frameworkData = {
  labels,
  datasets: [
    {
      label: "react",
      data: [, 0, 10, 70],
      borderColor: "rgb(133, 193, 233)",
      backgroundColor: "rgb(133, 193, 233)",
      
    },
    {
      label: "symfony",
      data: [, 0, 20, 30],
      borderColor: "rgb(175, 122, 197)",
      backgroundColor: "rgb(175, 122, 197)",
    },
    {
      label: "wordpress",
      data: [, 0, 15, 50],
      borderColor: "rgb(247, 220, 111  )",
      backgroundColor: "rgb(247, 220, 111  )",
    },
  ],
};

const languageData = {
  labels,
  datasets: [
    {
      label: "css",
      data: [10, 20, 30, 80],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132)",
      tension: 0.5,
    },
    {
      label: "javascript",
      data: [5, 10, 30, 70],
      borderColor: "rgb(241, 196, 15)",
      backgroundColor: "rgb(241, 196, 15)",
      tension: 0.5,
      
    },
    {
      label: "php",
      data: [, 0, 30, 40],
      borderColor: "rgb(142, 68, 173 )",
      backgroundColor: "rgb(142, 68, 173 )",
      tension: 0.5,
    },
  ],
};

const diversData = {
  labels,
  datasets: [
    {
      label: "clean code",
      data: [, , 0, 30],
      borderColor: "rgb(72, 201, 176)",
      backgroundColor: "rgb(72, 201, 176)",
      tension: 0.8,
    },
    {
      label: "accessibilité",
      data: [, , 0, 15],
      borderColor: "rgb(255, 160, 122)",
      backgroundColor: "rgb(255, 160, 122)",
      tension: 0.8,
    },
    {
      label: "SEO",
      data: [, , 0, 20],
      borderColor: "rgb(93, 109, 126 )",
      backgroundColor: "rgb(93, 109, 126 )",
      tension: 0.8,
    },
    {
      label: "",
      data: [, , 0, 100],
      borderColor: "rgb( 255, 255, 255,0)",
      backgroundColor: "rgb( 255, 255, 255,0)",
      tension: 0.8,
    },
  ],
};

export function ProgressBar() {
  const [currentData, setCurrentData] = useState(languageData);

  const handleButtonFramework = () => {
    setCurrentData(frameworkData);
  };

  const handleButtonLanguage = () => {
    setCurrentData(languageData);
  };

  const handleButtonDivers = () => {
    setCurrentData(diversData);
  };
  return (
    < div className="opacity-70 max-sm:hidden">

      <Line options={options} data={currentData} />


      <div className="mt-10  flex justify-center items-center">
    
        
        <ButtonNavBar text="Languages" onClick={handleButtonLanguage}/>
        <ButtonNavBar text="Framework" onClick={handleButtonFramework}/>
        <ButtonNavBar text="Divers" onClick={handleButtonDivers}/>
      </div>

    </div>
  );
}
