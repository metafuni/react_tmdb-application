import React, { useState } from 'react';
import Logo from '../img/tmdb.svg';
import Autosuggest from 'react-autosuggest';
import Axios from 'axios';

const Search = ({ updateMovie }) => {

    //test code 
    const [searchText, setSearchText] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const API_key = '3ee3dd446b8afd003b08f596ade66996';

    return (
        <div className="search">

            {/* testcode */}
            <div>
                {/* <label htmlFor="movie">Movie</label> */}
                {/* <Autosuggest
                    inputProps={{
                        placeholder: "Search Movie Title...",
                        autoComplete: "",
                        name: "movie",
                        id: "movie",
                        value: searchText,
                        onChange: (e, { newValue }) => {
                            setSearchText(newValue);
                        }
                    }}
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={async ({ value }) => {
                        if (!value) {
                            setSuggestions([]);
                            return;
                        }
                        try {
                            // const result = await Axios(`https://restcountries.eu/rest/v2/name/${value}`);
                            const result = await Axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_key}&query=${value}`);
                            // result.data.results.map(el => console.log(el.title));
                            setSuggestions(result.data.results.map(el => ({
                                name: el.title,
                                id: el.id
                            })));
                            console.log(suggestions);
                        } catch (e) {
                            setSuggestions([]);
                        }
                    }}
                    onSuggestionsClearRequested={() => {
                        setSuggestions([]);
                    }}
                    onSuggestionSelected={(event, { suggestion, method }) => {
                        if (method === 'enter' || method === 'click') {
                            // event.preventDefault();
                            console.log('FETCH: ', suggestion.name + ' ID: ' + suggestion.id);
                        }
                        setSearchText(suggestion.name);
                    }}
                    // getSuggestionValue={({suggestion}) => suggestion.name}
                    getSuggestionValue={({ suggestion }) => suggestion}
                    renderSuggestion={suggestion => <div>{suggestion.name}</div>}
                /> */}
            </div>
            {/* end testcode */}

            <a href="https://www.themoviedb.org/?language=en-US" target="blank">
                <img src={Logo} alt="TMDB movie database website" width="180px"></img>
            </a>
            {/* <form className="search-form" onSubmit={updateMovie}>
                <input
                    type="text"
                    name="title"
                    placeholder="Search Movie Title ..."
                    id="title"
                />
            </form> */}
            {/* <form className="search-form" onSubmit={updateMovie}> */}
            <form className="search-form">
                <Autosuggest
                    inputProps={{
                        placeholder: "Search Movie Title...",
                        autoComplete: "",
                        name: "movie",
                        id: "movie",
                        value: searchText,
                        onChange: (e, { newValue }) => {
                            setSearchText(newValue);
                        }
                    }}
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={async ({ value }) => {
                        if (!value) {
                            setSuggestions([]);
                            return;
                        }
                        try {
                            // const result = await Axios(`https://restcountries.eu/rest/v2/name/${value}`);
                            const result = await Axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_key}&query=${value}`);
                            // result.data.results.map(el => console.log(el.title));
                            setSuggestions(result.data.results.map(el => ({
                                name: el.title,
                                id: el.id
                            })));
                            console.log(suggestions);
                        } catch (e) {
                            setSuggestions([]);
                        }
                    }}
                    onSuggestionsClearRequested={() => {
                        setSuggestions([]);
                    }}
                    onSuggestionSelected={(event, { suggestion, method }) => {
                        if (method === 'enter' || method === 'click') {
                            event.preventDefault();
                            console.log('FETCH');
                            console.log(suggestion.id);
                            updateMovie(suggestion.id);
                        }
                        setSearchText(suggestion.name);
                    }}
                    // getSuggestionValue={({suggestion}) => suggestion.name}
                    getSuggestionValue={({ suggestion }) => suggestion}
                    renderSuggestion={suggestion => <div>{suggestion.name}</div>}
                />
            </form>
        </div>
    )
};

export default Search;