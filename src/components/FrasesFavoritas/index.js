import React from 'react'
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Formulario from '../Formulario';
import Home from '../Home';
import Quote from '../Quote';
import axios from "axios";
import Suasfrases from '../Suasfrases';
// import "./index.css";


function FrasesFavoritas() {
      const [quotes, setQuotes] = useState([]);

  
      // const loadData = () => {
      //   axios
      //     .get("http://127.0.0.1:8000/api/FrasesFavoritas")
      //     .then((res) => {
      //     setQuotes(res.data)
      //     // console.log(res.data)
      //   });
      // }
    
      // useEffect(() => {
      //   loadData();
      // }, []);
  
      return (
        <div className="App">
          <Routes>
              <Route path="/suasfrases" element={<Suasfrases />} />
              <Route path="/" element={<Home />} />
          </Routes>

          <div>
              <p> Veja as suas frases favoritas  &#128526; </p> <br/>
          </div>


          {quotes.map((quote) => (
            <Quote key={`quote__${quote.id}`} autor={quote.autor}>
              {quote.frase}
              {quote.tags.map(({tag}) => (
                <p>{tag} </p>
              ))}
            </Quote>
          ))}
      </div>

      );
  }


export default FrasesFavoritas

// map((anObjectMapped, index) => {
//   return (
//       <p key={`${anObjectMapped.name}_{anObjectMapped.email}`}>
//           {anObjectMapped.name} - {anObjectMapped.email}
//       </p>
//   );
// })