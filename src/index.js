import React from 'react';
import ReactDOM from 'react-dom';

function Actionlink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('link clickado');
    }
    return (
        <a href="#" onClick={handleClick}>
            Clickme
        </a>
    );
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        this.handleClick = this.handleClick;
    }

    //bindando callback por campo de classe, se eu apenas chamasse a função eu deveria então bindar no construtor (this.handleClick.bind(this)) 
    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render() {
        return (
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'On' : 'Off'}
                </button>
        );
    }
}

ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
);