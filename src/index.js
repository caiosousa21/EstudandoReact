import React from 'react';
import ReactDOM from 'react-dom';

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick;
        this.handleLogoutClick = this.handleLogoutClick;
        this.state = {isLoggedIn:false};
    }

    handleLoginClick=()=>{
        this.setState({isLoggedIn:true});
    }

    handleLogoutClick=()=>{
        this.setState({isLoggedIn:false});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        }else{
            button = <LoginButton onClick={this.handleLoginClick}/>
        }

        return(
            <div>
                <Receber isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
}

function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

function BemVindoU(props) {
    const caio = props.caio;
    return <h1>Bem Vindo {caio}!</h1>;
}

function BemVindoV() {
    return <h1>Registre-se</h1>;
}
function Receber(props) {
    const isLoggedIn = props.isLoggedIn;
    const caio = props.caio;
    if (isLoggedIn) {
        console.log(props);
        return <BemVindoU caio={caio} />;
    }
    return <BemVindoV />;
}

ReactDOM.render(
    <LoginControl/>,
    document.getElementById('root')
);