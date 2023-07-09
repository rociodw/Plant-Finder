import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import imglogo from "../images/logo.png";

function Resultados({
    img,
    name,
    scientific_name,
    other_name,
    cycle,
    sunlight,
    watering
}) {
    return (
        <Col xs={10} sm={5} md={5} lg={3} className="cartela p-3 m-4">
            <Image className={img==null? "nofoto": "foto"}   src={img == null? imglogo : img} alt={name} fluid />
            <div>
                <h2 className="titulo">{name}</h2>
                <h3 className="cientifico">
                    <em>{scientific_name}</em>
                </h3>
                <div className="info">
                    <div>
                        {" "}
                        <dt>{other_name == undefined ? "" : "Other name:"}</dt>
                        <dd>{other_name}</dd>
                    </div>
                    <div>
                        {" "}
                        <dt>Cycle: </dt>
                        <dd>{cycle}</dd>
                    </div>
                    <div>
                        {" "}
                        <dt>Sunlight: </dt>
                        <dd className="sunlight">
                            {sunlight.length == 1
                                ? sunlight
                                : `${sunlight[0]} and ${sunlight[1]}`}
                        </dd>
                    </div>
                    <div>
                        <dt>Watering: </dt>
                        <dd>{watering}</dd>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default Resultados;
