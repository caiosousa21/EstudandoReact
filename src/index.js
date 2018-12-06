import React from 'react';
import ReactDOM from 'react-dom';

//classes componentes tem features como local state e métodos de ciclo de vida
class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.timer = setInterval(
                ()=>this.tick(),
                1000
            );
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Olá novamente</h1>
                <h2>Agora são{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
);