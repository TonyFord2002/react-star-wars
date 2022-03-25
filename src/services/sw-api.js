

export default function Starship(){
    return(
        fetch('https://swapi.dev/api/starships/')
        .then((res)=>res.json())
    )}