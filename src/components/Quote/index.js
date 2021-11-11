import React from "react";
import "./index.css";

export default function Quote(props) {
  return (
    <div className="card_quote"> 
    <label class="flipCard" for="flipCard"></label>
    <input type="checkbox" id="flipCard" hidden />
    <div className="flip-card_quote">
    <div className="flip-card_quote-inner">
        <div className="flip-card_quote-front">
        <div className="container_title">
            <h3 className="card_quote-title"> {props.frase} </h3>
            <h4 className="card_quote-title"> {props.autor}</h4>
        </div>
        </div>

        <div className="flip-card_quote-back">
        <div className="card_quote-content">
            <p> 
            {props.children.map((tag) => (
               <li className="tags_quote">{tag}</li>
            ))} 
            {/* {tags} */}
            </p>
        </div>
        </div>
    </div>
    </div>
</div> 
  );
}