import React from 'react';
import ReactDOM from 'react-dom';

function Actionlink(){
    function handleClick(e){
        e.preventDefault();
        console.log('link clickado');
    }
    return(
        <a href="#" onClick={handleClick}>
            Clickme  
        </a>
    );
}

ReactDOM.render(
    Actionlink(),
    document.getElementById('root')
);