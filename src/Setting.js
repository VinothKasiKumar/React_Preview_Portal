 

import Logic from "./Logic"; 
import React, { useEffect, useState } from "react";

const Setting = () => { 
   const  [data, setData] = useState(); 

    const getData = async () => { 
        try{
          const res = await fetch('https://sheet.best/api/sheets/e98999af-caad-42c7-9612-7a2dd0320427');
          const data = await res.json();
          setData(data); 
        }catch(error){
          console.log(error);
        }
      }
    
      useEffect(() => {
        getData();
      },[]) 
        let Logins = [
            {id: '1', userName: 'Test', password: 'Test'}
        ]; 
         
      
    return <div> 
        {data?.map((item) => (<Logic key={item.Id}  uName={item.Login} uPass={item.Pass}/> ))}        
    </div>
};
export default Setting;