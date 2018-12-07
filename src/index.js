import React from 'react';
import ReactDOM from 'react-dom';

class MeuForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {valor: '', valor1:'Nome: ', sabor:'caio', texto:'Isso não faz nada.'};
        this.handleChange = this.handleChange;
        this.handleSubmit = this.handleSubmit;
    }

    handleChange=(e)=>{
        this.setState({valor: e.target.value});
    }

    handleSubmit=(e)=>{
        alert('CAIO: ' + this.state.sabor);
        this.setState({valor1: this.state.valor});
        this.setState({sabor: this.state.sabor});
        e.preventDefault();
    }

    mudaSabor=(e)=>{
        this.setState({sabor: e.target.value});
    }

    
    //JSX obrigatoriamente precisa de um event handler no onChange do elemento, se não o elemento é inmutável
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    {this.state.valor1}
                    <br/>
                    <input type='text' value={this.state.valor} onChange={this.handleChange}/>
                    <br/>
                    <select value={this.state.sabor} onChange={this.mudaSabor}>
                        <option value='neymar'>Ney</option>
                        <option value='uau'>...</option>
                        <option value='caio'>CAIO</option>
                    </select>
                    <br/>
                    <textarea value={this.state.texto}/>
                </label>
                <br/>
                <input type='submit' value='Submit'/>
            </form>    
        );
    }
}



ReactDOM.render(
    <MeuForm />,
    document.getElementById('root')
);