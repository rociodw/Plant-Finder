import React from "react";
import CloseButton from "react-bootstrap/CloseButton";

function Filtro({ filtrar, estado, cambiarEstado, close }) {
    const tipos = ["all", "indoor", "edible", "poisonous"];

    return (
        <>
            {estado && (
                <div className="componente-filtro">
                    <div className="filtro" onChange={filtrar}>
                        <CloseButton onClick={close} className="close" />

                        {tipos.map((tipo) => (
                            <div key={tipo} className="contenedor-filtro">
                                <input 
                                    className="input-filtro"
                                    key={tipo}
                                    type="radio"
                                    value={tipo}
                                    name="tipo"
                                    id={tipo}
                                    
                                />{" "}
                                <label for={tipo} className="filtro-label">{tipo}</label>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default Filtro;


