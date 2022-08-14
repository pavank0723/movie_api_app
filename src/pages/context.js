// context (warehouse -> All Data)
// Provider (Delivery Boy)
// Consumer or useContext() (Get Data)

import React, { useContext, useEffect, useState } from 'react';

export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = React.createContext();

// need to create a provider function
const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: "false", msg: "" });
    const [query, setQuery] = useState("avengers");

    const getMovies = async (url) => { //parameter
        setIsLoading(true);
        try {
            const reqData = await fetch(url);
            const resData = await reqData.json();
            console.log(resData);

            if (resData.Response === "True") {
                setIsLoading(false);
                setIsError({
                    show: "false",
                    msg: ""
                }
                )
                setMovie(resData.Search);
            } else {
                setIsError({
                    show: "true",
                    msg: resData.Error
                }
                )
            }
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        let waitTime = setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`); //Argument
        }, 600);

        return () => clearTimeout(waitTime);

    }, [query]);

    return <AppContext.Provider value={{ isLoading, isError, movie, query, setQuery }}>
        {children}
    </AppContext.Provider>
};

//Global custom hooks
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext };