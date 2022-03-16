import React, { useEffect } from "react";
import axios from "axios";
import "./style.css";

export default function Search(props) {
    useEffect(() => {
        var input = document.getElementById("inputCidade");
        var form = document.getElementById("form");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const cidade = input.value.toLowerCase();
            const API_KEY = "1ccde1651998b9a52b2630ecdeb54d1e";

            axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric`)
            .then((response) => {
                if (response.status === 404) {
                    console.log(response.message);
                    return;
                }
                props.SetPrevisaoDoTempo(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        });
    }, [props]);

    return (
        <>
            <form className="form" id="form">
                <input
                    type="text"
                    id="inputCidade"
                    placeholder="Cidade"
                    required
                />
                <button>Pesquisar</button>
            </form>
        </>
    );
}
