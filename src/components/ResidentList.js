import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ({ resident }) => {

    
    return (
        <div>
            {
                resident?.map( residents => (

                    < ResidentInfo residenturl= { residents } /> 
                    // <div > 
                    //     { residents }
                    // </div>
                ))
            }
        </div>
    );
};

export default ResidentList;