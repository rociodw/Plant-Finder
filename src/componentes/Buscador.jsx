import React from "react";

function Buscador({texto, search}){

    return (
        <input
            value={texto}
            onChange={search}
            type="text"
            placeholder="Search"
            className="buscador"></input>
    );
}

export default Buscador;