import React from 'react';
import ReactDOM from 'react-dom';

//LISTA BASICA
// function Listando(props) {
//     const valores = props.valores;
//     const lista = valores.map((valores, index) =>
//         //react pede que todo item de um array ou iterator tenha uma chave única
//         //usar index como chave pode gerar futuras tretas, o recomendado é que cada item do arrya tenha um id para ser usado como chave (key={valores.id})
//         //a chave deve ficar no contexto da lista, não do item
//         //a chava não é passada para o componente React, logo se precisar dela é preciso passa-lá de maneira explícita
//         <li key={index}>{valores}</li>
//     );
//     return (
//         <ul>{lista}</ul>
//     );
// }
// const valores = [1, 2, 3, 4, 5];

//DUAS LISTAS COM MESMAS KEYS
//fazendo a função componente com todo seu código em JSX
function Blog(props) {
    return (
        <div>
            <ul>
                {props.posts.map((post) =>
                    <li key={post.id}>
                        {post.title}
                    </li>
                )}
            </ul>
            <hr />
            {props.posts.map((post) =>
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            )}
        </div>
    );
}

const posts = [
    { id: 1, title: 'Olá caio', content: 'CAIO' },
    { id: 2, title: 'Neymar', content: 'uau' }
];
ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('root')
);