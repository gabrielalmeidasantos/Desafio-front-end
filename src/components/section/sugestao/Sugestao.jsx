import React from "react";
import "./style.css";

export default function Sugestao(props) {
    if (props.Sugestoes.length === 0) {
        return <></>;
    }

    return (
        <>
            {props.Sugestoes.map((sugestao) => {
                if (
                    sugestao.suggested_weather_conditions ===
                    props.PrevisaoDoTempoAtual
                ) {
                    return (
                        <div className="sugestao" key={sugestao.id}>
                            <span className="atividade">
                                Atividade: {sugestao.activity_title}
                            </span>
                            <hr />
                            <span className="custo">
                                Custo:{" "}
                                {sugestao.requisites.cost
                                    ? sugestao.requisites.cost
                                    : "R$0"}
                            </span>
                            <hr />
                            <span className="participantes">
                                Participantes:{" "}
                                {sugestao.requisites.participants_number}
                            </span>
                            <hr />
                            <span className="local">
                                Local: {sugestao.suggested_location}
                            </span>
                        </div>
                    );
                } else {
                    return null;
                }
            })}
        </>
    );
}
