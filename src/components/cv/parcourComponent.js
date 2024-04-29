import React from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const Parcour = ({ date, titre, text, text2, text3,lien,text4,text5,text6 }) => {
  return (
    <div className="flex w-full  max-sm:flex-col">
      <div className="w-1/6  max-sm:w-full max-sm:flex max-sm:justify-center text-orange-500">
        <p className="">{date}</p>
      </div>
      <div className="5/6 pb-2 max-sm:w-full space-y-2 ">
        <p className="font-black text-lg">{titre}</p>
        <p>{text} </p>
        <p> <a href={lien} targer="_blank">{text4}  </a> </p>
        <ul>
            {text2  ? (
          <li>
                
                <p> <ArrowRightIcon/> {text2}</p>
          </li>
            ):null}
     
            {text3  ? (
          <li>
                
                <p> <ArrowRightIcon/> {text3}</p>
          </li>
            ):null}
        
            {text5 ? (
          <li>
                
                <p> <ArrowRightIcon/> {text5}</p>
          </li>
            ):null}
       
            {text6  ? (
          <li>
                
                <p> <ArrowRightIcon/> {text6}</p>
          </li>
            ):null}
          
        </ul>
      </div>
    </div>
  );
};

export default Parcour;
