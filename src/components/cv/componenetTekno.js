import React from "react";




const ComponenentTekno=({object})=>{

    return(
<>

          <div className="flex flex-wrap   items-center justify-center" >
        {object && object.map((item,index)=>(
        <div className="p-3 bg-amber-300 flex m-2 items-center justify-center shadow-xl rounded-2xl" key={index} >
            <p className="">{item.text}</p>
          </div>

        
))}
        </div>

</>
    
    )
}

export default ComponenentTekno