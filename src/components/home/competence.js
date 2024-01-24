import React from "react";
import tekno from "../../classObject/tekno/objectTekno";


const Competence=()=>{
    


    return(
        <div className="flex h-full w-full border items-center justify-center">

            <div>
                <div className=" h-1/2">
                     <ul className="flex space-x-5">
                        <li>technologies</li>
                        <li>graphique</li>
                     </ul>
                </div>
                <div className=" bg-red-400 h-96 w-96  overflow-x-scroll ">
                    <div className="w-full flex scroll-x-container ">
                         {tekno && tekno.map((items)=>(
                            <div  key={items.id} className=" tekno-item w-96 h-full border">
                                <p>{items.titre}</p>
                                <p>{items.l1}</p>
                                <p>{items.l2}</p>
                                <p>{items.l3}</p>
                                <p>{items.l4}</p>
                                <p>{items.l5}</p>
                                <p>{items.l6}</p>
                            </div>

))}

                            </div>
                                
                                                                                                     
                </div>
            </div>

            
        </div>
    )
}

export default Competence