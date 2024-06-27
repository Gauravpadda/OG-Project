import React, { useState } from "react";
import "./Button.css"
const Button = ({title}) => {
    
    return (
        <div class="container">
      <button className="w-fit h-10 border-white rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{title}</button>
    </div>
    );
};
export default Button;