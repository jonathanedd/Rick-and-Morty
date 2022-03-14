import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({residenturl}) => {


    const [ resident , setResident ] = useState({})



    useEffect(() => {
        axios.get(residenturl)
            .then( res => setResident(res.data))
    }, [residenturl] )


    console.log(resident);
    return (
        <div className='resident-info'>
            <img src={resident.image} alt="" />
            <h3>{resident.name}</h3>
            <ul>
                <li><b>Status: </b> {resident.status} </li>
                <li><b>Origin: </b> {resident.origin?.name} </li>
                <li><b>Eposides: </b> { resident.episode?.length}</li>
            </ul>

            
            {/* {residenturl} */}
        </div>
    );
};

export default ResidentInfo;