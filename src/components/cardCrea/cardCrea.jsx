import React from "react";
import CardCrea from "../../classObject/cardCea/cardcea";
import integration from "../../classObject/portfolio/objectIntegrateur";
import { Fade, Skeleton, Stack } from "@mui/material";
const CardCrea1 = () => {
  return (

    <>
{ integration && integration.map((item)=>{


    
    <div
    key={item.id}
    className="flex  justify-end w-6/6 space-x-3 xl:visible lg:relative  cursor-pointer hover:opacity-100 opacity-80 max-md:opacity-100 max-md:space-y-5  "
    
  >
    <div className="w-2/3 opacity-70 hover:opacity-100 ">
  
      {item ? (
        <>
          <h2 className=" hover:opacity-100 xl:text-4xl lg:text-2xl max-md:text-xl">
            {item.titre}
          </h2>
          <p>{item.type}</p>
        </>
      ) : (
        <Skeleton
          animation="wave"
          variant="text"
          width={200}
        />
      )}
    </div>
    <div className="w-1/3 ">
      {item ? (
        <img
          className=" "
          src={item.imageSrc}
          alt={item.titre}
        />
      ) : (
        <Skeleton
          animation="wave"
          variant="rect"
          width={200}
          height={100}
        />
      )}
    </div>
  </div>
  })}
    </>
  );
};

export default CardCrea1;
