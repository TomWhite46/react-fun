import { useEffect, useState } from "react";
import axios from 'axios';

const Films = ({searchTerm=""}) => {

    const [filmData, setFilmData] = useState("");

    useEffect(() => {
        if(searchTerm==="") {
            setFilmData("");
        } else {
            axios.get('http://www.omdbapi.com/?apikey=140a3585&t=' + searchTerm)
                .then(({data}) => {
                    setFilmData(data);
                    console.log(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [searchTerm]);

    
    if(filmData==="") {
        return <></>
    } else {
        return (
            <>
                <h3>{filmData.Title} ({filmData.Year}, rated {filmData.Rated})</h3>
                <p>{filmData.Genre}</p>
                <p>{filmData.Plot}</p>
                <img src={filmData.Poster} alt="The poster"></img>
            </>
        )
    }
    
};

export default Films;