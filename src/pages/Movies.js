import React from "react";
import { useGlobalContext } from "./Context";

const Movies = () => {
    const {movie} = useGlobalContext();
    return <>
        {
            movie.map((curMovie) =>{
                return(
                    <div>
                        <h1>{curMovie.Title}</h1>
                    </div>
                );
            })
        }
    </>
};

export default Movies;