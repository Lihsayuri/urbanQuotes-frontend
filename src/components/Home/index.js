import { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";
import Typical from 'react-typical';


function flip(event){
	var element = event.currentTarget;
	if (element.className === "card") {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};

function Home() {

    const [quotes, setQuotes] = useState(""); // Remova o array de notes que existia na versão anterior
    const [autor, setAutor] = useState(""); // Remova o array de notes que existia na versão anterior
    const [tags, setTags] = useState([]);

    const loadData = () => {
        axios
        .get("https://powerful-gorge-57473.herokuapp.com/api/quotes")
        .then((res) => {
            setQuotes(res.data.frase);
            setAutor(res.data.autor);
            setTags(res.data.tags);
            console.log("ESSE É O RES.DATA: ", res.data);
            console.log("ESSE É O RES.FRASE ", res.data['frase']);
        });
    }

    useEffect(() => {
        loadData();
        console.log("ESSE É O QUOTES: ", quotes);
    }, []);

    return (
        <div className="App">

        <div className="slogan">
            <p> Frases para {" "} 
            
            <Typical 
                loop ={Infinity}
                wrapper="b"
                steps={[
                    'motivar o seu dia  🤗' ,6000,
                    'ou talvez não... 😰',6000,
                    'rir ou gargalhar! 😂 ', 6000,
                    'chorar 😭',6000,
                    'ficar bravo 😡', 6000,
                    'sentir muitas emoções! 🤯', 6000
                ]}
                />
            </p>
        </div>

        <button className="btn" onClick={() => loadData()}>
            Sortear frase
        </button>    

        <br/>
        
        <div className="card" > 
            <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <h3 className="card-title"> {quotes} </h3>
                    <h4 className="card-title"> {autor}</h4>
                </div>
        
                <div className="flip-card-back">
                <div className="card-content">
                    <p> 
                    {tags.map((tag) => (
                        <li className="tags">{tag}</li>
                    ))} 
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div> 
        </div>
    );
}

export default Home;
