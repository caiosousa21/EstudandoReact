import React from 'react';
import ReactDOM from 'react-dom';

//components são modularização de elementos 
//function component, recebe uma propriedade na entrada e retorna um elemento React
//componentes começam com letras maiúsculas
//components devem agir como funçoes puras(não alterar seu input)
function BemVindo(props){
    return (
        <h1>
            Olá {props.name}
        </h1>
    );
}
//class component, literalmente a mesma coisa, mas classes tem outras features 
class BienVenido extends React.Component{
    render(){
        return <h1>Olá, {this.props.name}</h1>;
    }
}

function App() {
    return (
      <div>
        <BemVindo name="Caio" />
        <BemVindo name="Ronaldo" />
        <BemVindo name="Neymar" />
      </div>
    );
  }

ReactDOM.render(<App/>, document.getElementById('root'));