import axios from 'axios';
import React, { useState } from 'react';

const SearchBox = ({setLocalInfo}) => {



    const [ searchId , setSearchId ] = useState(' ');




    const searchInput = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${searchId}` )
            .then( res => setLocalInfo(res.data)); 
    };


    

    return (
        <div>
            <input 
                type="text" 
                onChange={e => 
                setSearchId(e.target.value)} 
                value={searchId} 
            />


            <button onClick={searchInput}> Search </button>
        </div>
    );
};

export default SearchBox;