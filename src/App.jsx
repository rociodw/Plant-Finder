import React, { useState, useEffect} from "react";
import Resultados from "./componentes/Resultados";
import Buscador from "./componentes/Buscador";
import Filtro from "./componentes/Filtro";
import Cabecera from "./componentes/Cabecera";
import "./app.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import imgfiltro from "./images/filtro.png";
import Paginacion from "./componentes/Paginacion";
import Up from "./componentes/Up";
import About from "./componentes/About";
import Introduccion from "./componentes/Introduccion";
import NoResultado from './componentes/NoResultado'


function App() {
    const [plant, setPlant] = useState([]);
    const [currentpage, setCurrentpage] = useState(1);
    const [totalpage, setTotalpage] = useState();
    const [filter, setFilter] = useState("all");
    const [type, setType] = useState("");
    const [showfilter, setShowfilter] = useState(false);
    const [showintro, setShowintro] = useState(true);
    const [noresult, setNoresult]=useState(false)

    let url = "";

    const next = () => {
        setCurrentpage(currentpage + 1);
    };
    const previous = () => {
        setCurrentpage(currentpage - 1);
    };
    const filtrado = (e) => {
        setFilter(e.target.value);
    };

    console.log(filter);
    const buscar = (e) => {
        setType(e.target.value);
    };

    console.log(totalpage)

    if (!type) {
        url = `https://perenual.com/api/species-list?page=${currentpage}&key=sk-eMnR64a82a225fa4b494&${filter}=1`;
    } else {
        url = `https://perenual.com/api/species-list?page=0&key=sk-eMnR64a82a225fa4b494&q=${type}&${filter}=1`;
    }

    const respuesta = async () => {
        const response = await fetch(url);
        const datos = await response.json();
        setPlant(datos.data);
        setCurrentpage(datos.current_page);
        setTotalpage(datos.last_page);
        if(datos.data==0){
            setNoresult(true)
        }else{
            setNoresult(false)
        }
    };

    useEffect(() => {
        respuesta();
    }, [url]);

    useEffect(() => {
        setTimeout(() => setShowintro(false), 3500);
    }, []);

    console.log(url);
    
    if(plant.length==0){
        console.log("sin resultado")
    }

    return (
        <>
            <Introduccion mostrar={showintro} />
            <div className="App">
                <header id="encabezado" className="d-flex align-items-center justify-content-center">
                    <div className="contenedor-cabecera">
                    <Cabecera/>

                        <Buscador search={buscar} texto={type} />
                        <button
                            className="btnfiltro"
                            onClick={() => setShowfilter(!showfilter)}>
                            <img className="imgfiltro" src={imgfiltro} alt="" />
                        </button>
                    </div>
                </header>

                <main>
                    <Filtro
                        estado={showfilter}
                        cambiarEstado={setShowfilter}
                        filtrar={filtrado}
                        close={() => setShowfilter(false)}
                    />
                    
                    <Container fluid>
                        <Row className="d-flex justify-content-around">
                            {plant.map((e) => (
                                <Resultados
                                    key={e.id}
                                    img={e.default_image.small_url}
                                    name={e.common_name}
                                    scientific_name={e.scientific_name}
                                    other_name={e.other_name[0]}
                                    cycle={e.cycle}
                                    sunlight={e.sunlight}
                                    watering={e.watering}
                                />
                            ))}
                        </Row>
                    </Container>
                    <NoResultado resultado={noresult}/>
                    <Paginacion
                        anterior={previous}
                        actual={currentpage}
                        siguiente={next}
                        total={totalpage}
                        
                    />
                </main>
                <Up/>
                <footer>
                    <About />
                </footer>
            </div>
        </>
    );
}

export default App;
