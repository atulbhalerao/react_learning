import { render } from '@testing-library/react'
import React, { useState } from 'react'

function FunComponent()
{
    const [var_name, fun_name ] = useState(0);

    const increamentCount = () =>{
       fun_name(prevState =>  prevState + 1);
    }
    render()
    {
       return (
        <div>
            <button onClick={ ()=> fun_name(var_name + 1) }>Count {var_name}</button>
            <button onClick={ increamentCount }>Count {var_name}</button>
        </div>
       )
    }
    
}

export default  FunComponent;