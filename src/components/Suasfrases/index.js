import React from 'react'
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Formulario from '../Formulario';
import Typical from 'react-typical';
import Quote from '../Quote';
import axios from "axios";
import "./index.css";

// https://stormy-depths-56864.herokuapp.com/ | https://git.heroku.com/stormy-depths-56864.git

function Suasfrases() {
      const [quotes, setQuotes] = useState([]);

  
      const loadData = () => {
        axios
          .get("https://powerful-gorge-57473.herokuapp.com/api/minhasQuotes")
          .then((res) => {
          setQuotes(res.data)
          // console.log(res.data)
        });
      }
    
      useEffect(() => {
        loadData();
      }, []);
  
      
  
      return (
        <div className="App">
          <div>
              <p className="frase-inicial"> Poste também as suas frases... 
              <br/>
              <Typical className ="frase-obs"
                loop ={Infinity}
                wrapper="b"
                steps={[
                    'Lembre-se de separar as tags por vírgula.' ,3000
                ]}
                />
              </p>
          </div>

          <Formulario onSubmitFormulario={loadData}/>

          {quotes.map((quote) => (
            <Quote key={`quote__${quote.id}`} autor={quote.autor} frase={quote.frase}>
              {quote.tags.map(({tag}) => (
                <p> {tag} </p>
              ))}
            </Quote>
          ))}
      </div>

      );
  }


export default Suasfrases