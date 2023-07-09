import React from "react";

function Introduccion({mostrar}) {
    return (
        <>
        {
            mostrar &&(
        <div className="introduccion">

            <h1>Plant <br/> Finder</h1>
            <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_fjtzesde.json"
                background="transparent"
                speed="3"
                autoplay></lottie-player>
        </div>)
        }
        </>
    );
}

export default Introduccion;
