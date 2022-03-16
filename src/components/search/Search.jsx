import React, { useEffect } from "react";
import axios from "axios";

import data from "../../data.json";
import "./style.css";

export default function Search(props) {
    useEffect(() => {
        var input = document.getElementById("inputCidade");
        var form = document.getElementById("form");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const cidade = input.value.toLowerCase();

            axios
                .get(
                    `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${data.API_KEY}&units=metric`
                )
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
