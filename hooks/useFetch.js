import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((respuesta) => respuesta.json())
            .then((respuesta) => setData(respuesta))
            .catch((err) => console.error(`No se hizo la peticion al servidor, error: ${err}`))
    }, [url])

    return (
        data
    )
}

export default useFetch;