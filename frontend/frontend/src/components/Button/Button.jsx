import React, { useState } from "react";
import "./Button.css"
const Button = ({title}) => {
    
    return (
        <div class="container">
      <button className="w-fit h-10 pb-8 border-white rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-2xl bg-slate-400">{title}</button>
    </div>
    );
};
export default Button;