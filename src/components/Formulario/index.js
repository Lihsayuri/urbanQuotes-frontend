import {useState} from "react";
import axios from "axios";

import "./index.css";
export default function Formulario(props){
    const [fraseQuote, setFrase] = useState("");
    const [autorQuote, setAutor] = useState("");
    const [tagQuote, setTag] = useState("");


    const fraseChanged = (event) =>{
        setFrase(event.target.value);
        console.log(event.target.value);
    }

    const autorChanged = (event) =>{
        setAutor(event.target.value);
        console.log(event.target.value);
    }

    const TagChanged = (event) =>{
        setTag(event.target.value);
        console.log(event.target.value);
    }

    const CreateQuote = (event) => {
        event.preventDefault();
        axios
            .post("https://powerful-gorge-57473.herokuapp.com/api/minhasQuotes", {frase:fraseQuote, autor:autorQuote, tags: tagQuote})
            .then((response) => {
                setFrase("");
                setAutor("");
                setTag("");
                props.onSubmitFormulario();
            });
    }

    return (
        <body>
            <form className="form-card" onSubmit={CreateQuote}>
                <textarea
                className="autoresize"
                name="frases"
                placeholder="Digite a frase..."
                onChange={fraseChanged}
                value={fraseQuote}
                ></textarea>
                <input
                className="form-card-title"
                type="text"
                name="autor"
                placeholder="Autor"
                value={autorQuote}
                onChange={autorChanged}
                />
                <input
                className="form-card-title"
                type="text"
                name="tags"
                placeholder="Tags"
                value={tagQuote}
                onChange={TagChanged}
                />

                <button className="btn_forms" type="submit">Criar</button>
            </form>
        </body>
    );
}