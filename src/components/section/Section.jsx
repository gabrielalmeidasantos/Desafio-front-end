import React, { useState, useEffect } from "react";
import axios from "axios";
import Sugestao from "./sugestao/Sugestao";

import "../globalStyle.css";
import "./style.css";

export default function Section(props) {
    const [Sugestoes, SetSugestoes] = useState([]);
    
    useEffect(() => {
        axios
            .get(`https://raw.githubusercontent.com/probono-digital/DesafioTecnico/main/MOCK_DATA.json`)
            .then((response) => {
                if (response.status === 404) {
                    console.log(response.message);
                    return;
                }
                SetSugestoes(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    var icon = `http://openweathermap.org/img/w/${props.PrevisaoDoTempo.weather[0].icon}.png`;

    return (
        <section>
            <header className="header">
                <div className="head">
                    <span className="cidade">{props.PrevisaoDoTempo.name}</span>
                    <span className="icon">
                        <img id="wicon" src={icon} alt="Weather icon" />
                    </span>
                </div>
                <br />
                <br />
                <span className="temperatura-atual">
                    {parseInt(props.PrevisaoDoTempo.main.temp)}°C 
                    <span className="space"></span>
                    <span>
                     {props.PrevisaoDoTempo.weather[0].description}
                    </span>
                </span>
                <br />
                <br />
            </header>
            <main>
                <div className="min-max">
                    <span className="max">
                        Max: <span>{parseInt(props.PrevisaoDoTempo.main.temp_max)}</span>
                        °C
                    </span>
                    <span className="min">
                        Min: <span>{parseInt(props.PrevisaoDoTempo.main.temp_min)}</span>
                        °C
                    </span>
                </div>
                <div className="principal">
                    <div className="title-sugestoes">Sugestões</div>
                    <div className="sugestoes"> 
                        <Sugestao
                            PrevisaoDoTempoAtual={props.PrevisaoDoTempo.weather[0].main} 
                            Sugestoes={Sugestoes}
                        />
                    </div>
                </div>
            </main>
        </section>
    );
}
