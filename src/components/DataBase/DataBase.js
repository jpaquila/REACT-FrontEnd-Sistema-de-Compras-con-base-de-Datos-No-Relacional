//array de objetos 
import imagenGalaxia from "../../Assets/Galaxia.jpg"
import imagenConstitucion from "../../Assets/constitucion.jpg"
import imagenIntrepida from "../../Assets/Intrepida.jpg"

const Naves = [
    {
        id: 1,
        imagen: imagenGalaxia,
        clase: "Galaxia",
        nombre: "USS Enterprise-D",
        tripulantes: 1300,
        capitan: "Jean Luc Picard",
        armamento: ["Phasers", "Torpedos de fotones"],
        descripcion: "La Enterprise-D fue construida en los astilleros de Utopia Planitia en la órbita de Marte en el Sistema Solar. Su construcción fue supervisada por el Comandante Orfil Quinteros. La Dra. Leah Brahms fue responsable del diseño de buena parte del sistema de propulsión de la Enterprise. La USS Enterprise NCC- 1701 - D era una nave Clase Galaxy y el buque insignia de la Flota Estelar.\n Quinta nave con el nombre de Enterprise, fue comandada por el Capitán Jean - Luc Picard. Con un total de 42 cubiertas, la Enterprise - D tenía una longitud doble y ocho veces el espacio interior de las naves de Clase Constitution del siglo anterior.Llevaba un conjunto de tripulación y pasajeros de 1, 012 personas.Sus dimensiones eran: 137.5 metros de altura, 467 metros de anchura y 641 metros de longitud."

    },
    {
        id: 2,
        imagen: imagenIntrepida,
        clase: "Intrepida",
        nombre: "USS Voyager",
        tripulantes: 152,
        capitan: "Katerin Janeway",
        armamento: ["Phasers", "Torpedos de fotones", "Torpedos Quánticos"],
        descripcion: "Nave al mando de la Capitán Kathryn Janeway, comisionada en el año 2371. En su primera misión, la nave partió hacia las Tierras Baldías, donde una semana antes había desaparecido una nave Maquis al mando de Chakotay, con el Teniente Tuvok en ella como agente encubierto. Al poco de llegar ahí, la nave también desapareció y se consideró perdida durante cuatro años, hasta que una transmisión recibida en la USS Prometheus estableció que la Capitán Janeway y su tripulación estaban varados en el Cuadrante Delta, luchando para volver a casa."
    },
    {
        id: 3,
        imagen: imagenConstitucion,
        clase: "Constitución",
        nombre: "USS Enterprise-A",
        tripulantes: 109,
        capitan: "James T. Kirk",
        armamento: ["Phasers", "Torpedos de fotones"],
        descripcion: "El USS Enterprise (NCC-1701) es una nave espacial de Clase Constitution botada en el año 2245, y es considerada la nave más emblemática de la Flota Estelar del Siglo XXIII. En sus cuarenta años de servicio, en los cuales se incluyen varias mejoras y un par de rediseños mayores, esta nave tomó parte de varios primeros contactos con otras especies, conflictos militares y viajes en el tiempo."
    }]


const obtenerNaves = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Naves)
        reject(err => console.log(err))
    }, 2000)
})


export default obtenerNaves

