import { useState,useEffect } from "react";

export function Appbar(){
    const [activeUser,setActiveUser]=useState(null)
   
 
    return <div className="flex justify-between shadow-md pl-4 pr-4 pt-1 bg-gray-500 h-12">
        <div className="mr-3 mt-1 text-xl">Logo</div>
        <div className="flex justify-end">
            <div className="mr-3 mt-1 text-xl">Home </div>
            <div className="bg-gray-400 rounded-full size-10 font-bold flex text-3xl justify-center"></div>
    </div>
    </div>
}