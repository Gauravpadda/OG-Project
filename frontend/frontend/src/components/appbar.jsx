import { useState,useEffect } from "react";

export function Appbar(){
    const [activeUser,setActiveUser]=useState(null)
   
 
    return <div className=" flex flex-1 justify-between shadow-md w-full pl-4 pr-4 pt-1  h-12 ">
        <div className="text-center justify-center flex-1">
        <div className="mr-3 mt-2 text-xl text-white">Logo</div>
        </div>
        
        <div className="flex justify-end">
            <div className="hover:bg-slate-200 rounded-lg text-center justify-center">
            <div className="mr-3 mt-1 text-xl bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:bg-slate-200 ">Home </div>
            
            </div>
            <div className="bg-gray-400 rounded-full size-10 font-bold flex text-3xl justify-center"></div>
            
    </div>
    </div>
}