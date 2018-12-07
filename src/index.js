import React from 'react';
import ReactDOM from 'react-dom';



function BordaChique(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function Dialogo(props) {
    return (
        <BordaChique color='blue'>
            <h1 className='Dialog=title'>
                {props.title}
            </h1>
            <p className='Dialog-message'>
                {props.message}
            </p>
            {props.children}
        </BordaChique>
    );
}

// function DialogoBemV(){
//     return(
//         <Dialogo
//             title='Bem vindo'
//             message='Obrigado pela visita'
//         />
//     );
// }

class DialogoInscricao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: '' };
    }
    render() {
        return (
            <Dialogo
                title='Bem vindo'
                message='Obrigado pela visita'>
                <input
                    value={this.state.login}
                    onChange={this. handleChange} />
                <button
                    onClick={this.handleInscricao}>
                    Me inscrever
            </button>
            </Dialogo>
        );
    }

    handleChange=(e)=> {
        this.setState({login: e.target.value});
    }
    handleInscricao=()=> {
        alert(`Bem vindo ${this.state.login}!`);
    }
}


//exemplo de componente quebrado
// function Separa(props){
//     return(
//         <div className='Separa'>
//             <div className='Separa-esquerda'>
//                 {props.left};
//             </div>
//             <div className='Separa-direita'>
//                 {props.direita};
//             </div>
//         </div>
//     );
// }

// function App(){
//     return(
//         <Separa
//             esquerda={
//                 <Contatos/>
//             }        
//             direita={
//                 <Chat/>
//             }/>
//     );
// }

ReactDOM.render(
    <DialogoInscricao />,
    document.getElementById('root')
);



