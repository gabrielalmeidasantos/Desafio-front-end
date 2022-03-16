import React, {useState} from "react";
import Section from "../section/Section";
import Search from "../search/Search";

import "./style.css"

export default function Container(){
    const [PrevisaoDoTempo, SetPrevisaoDoTempo] = useState([]);

    if (PrevisaoDoTempo.length === 0) {
        return(
            <div className="container">
                <Search SetPrevisaoDoTempo={SetPrevisaoDoTempo}/>
            </div>
        )
    }

    return(
        <div className="container">
            <Search SetPrevisaoDoTempo={SetPrevisaoDoTempo}/>
            <Section PrevisaoDoTempo={PrevisaoDoTempo} />
        </div>
    )
}