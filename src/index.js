import React from 'react';
import ReactDOM from 'react-dom';

function VereditoEbulicao(props) {
    if (props.celsius >= 100) {
        return <p>Ponto de ebulição alcançado.</p>
    }
    return <p>Ainda não :c</p>
}

const nomeEscala = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperaturaEntrada extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange =(e)=>  {
        console.log(e);
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const escala = this.props.scale;
        return (
            <fieldset>
                <legend>Insira uma temperatura em {nomeEscala[escala]}: </legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}

function pCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function pFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function Converter(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculando extends React.Component {
    constructor(props){
        super(props);
        this.state = {temperature:'', scale:'c'}
    }

    handleCelsiusChange=(temperature)=>{
        this.setState({scale:'c', temperature});
    }

    handleFahrenheitChange=(temperature)=>{
        this.setState({scale:'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? Converter(temperature, pCelsius) : temperature; 
        const fahrenheit = scale === 'c' ? Converter(temperature, pFahrenheit) : temperature;

        return (
            <div>
                <TemperaturaEntrada
                    scale='c'
                    temperature={celsius}
                    onTemperatureChange = {this.handleCelsiusChange} />
                <TemperaturaEntrada
                    scale='f'
                    temperature={fahrenheit}
                    onTemperatureChange = {this.handleFahrenheitChange} />
                <VereditoEbulicao
                    celsius={parseFloat(celsius)}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Calculando />,
    document.getElementById('root')
);