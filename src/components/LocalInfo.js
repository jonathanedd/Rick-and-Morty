import React from 'react';

const LocalInfo = ({name, type, dimension,  population}) => {
    return (
        <div className='local-info'>
            <p><b>Name: </b> {name}</p>
            <p><b>Type: </b> {type} </p>
            <p><b>Dimension: </b> {dimension} </p>
            <p><b>Population: </b> {population} </p>
        </div>
    );
};

export default LocalInfo;