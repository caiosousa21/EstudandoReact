import React from 'react';
import ReactDOM from 'react-dom';

function tick(){
    const element = (
        <div>
            <h1>Olá Caio,</h1>
            <h2>Agora são: {new Date().toLocaleTimeString()}.</h2>
        </div>
    );     
ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);



