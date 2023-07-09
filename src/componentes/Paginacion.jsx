import React from "react";

function Paginacion({anterior, actual, siguiente, total}) {
    return (
        <div className="contenedor-paginacion">
            <button 
                className={actual==1?"nopag":"pag"}
                onClick={anterior}
                disabled={actual == 1 ? true : false}>
                 &lt;
            </button>
            <span className="num-pag">{actual}</span>
            <button
                className={actual==total?"nopag":"pag"}
                onClick={siguiente}
                disabled={actual == total ? true : false}>
                &gt;
            </button>
        </div>
    );
}

export default Paginacion;
