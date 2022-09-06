import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch.js"


const DataBaseStarWars = () => {
    const [url, setUrl] = useState("https://swapi.py4e.com/api/starships/?page=1")
    const { data } = useFetch(url)


    const [pagina, setPagina] = useState(2)

    const incrementarPagina = () => {
        setPagina(pagina + 1);
        const urlActualizada = url.substring(0, url.length - 1); //eliminamos el ultimo valor del String
        setUrl(`${urlActualizada}${pagina}`)

    }

    const decrementarPagina = () => {
        setPagina(pagina - 1)
    }


    return (
        <div>
            <div className="starWars">
                <h3>BASE DE DATOS DE NAVES DE STAR WARS</h3>
                <button onClick={decrementarPagina}>ANTERIOR</button>
                <button onClick={incrementarPagina}>SIGUIENTE</button>
            </div>

            {data.map((nave) => (
                <p>Nombre Nave: {nave.name}</p>

            ))}
        </div>

    )
}

export default DataBaseStarWars;