import React from "react";
import "./flipcardStyle.css";

function Flipcard({name,job,text,avatar}){
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={avatar} alt="Avatar" style={{width:300, height:300}}/>
        </div>
        <div class="flip-card-back">
          <h1>{name}</h1>
          <p>{job}</p>
          <p>{text}</p>
        </div>
        </div>
    </div>
   
  );
}

export default Flipcard;
