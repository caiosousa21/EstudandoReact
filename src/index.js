import React from 'react';
import ReactDOM from 'react-dom';

class MeuForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {valor: '', valor1:'Nome: '};
        this.handleChange = this.handleChange;
        this.handleSubmit = this.handleSubmit;
    }

    handleChange=(e)=>{
        this.setState({valor: e.target.value});
    }

    handleSubmit=(e)=>{
        alert('Entrada: ' + this.state.valor);
        this.setState({valor1: this.state.valor});
        e.preventDefault();
    }
    //JSX obrigatoriamente precisa de um event handler no onChange do form, se não o form é inmutável
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    {this.state.valor1}
                    <input type='text' value={this.state.valor} onChange={this.handleChange}/>
                </label>
                <input type='submit' value='Submit'/>
            </form>    
        );
    }
}

ReactDOM.render(
    <MeuForm />,
    document.getElementById('root')
);