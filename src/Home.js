import { Component } from "react";
import Cabecalho from "./Header";
import './Home.css'
import Rodape from "./Rodape";
import slide from "./img/slide.jpg"
import CardProduto from "./components/cardProduto/CardProduto";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { listarProdutos: [] };
    }

    onCarregamentoProdutoFalhou(erro) {
        console.log(erro);
    }

    componentDidMount() {
        fetch("http://localhost:8080/produto")
            .then(response => response.json(), this.onCarregamentoProdutoFalhou)
            .then(json => this.setState({ listarProdutos: json }), this.onCarregamentoProdutoFalhou);
    }

    render() {
        var tituloPagina = "Home";

        return (

            <article>
                <Cabecalho titulo={tituloPagina} cliqueBotao={this.cliqueBotao} />
                <section class='container-flex'>
                    <div class="bloco-texto">
                        <h3>Ajude o Algorítimo a ser mais certeiro</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna.
                            Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur.
                            Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus
                            vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad
                            litora torquent per conubia nostra,
                            per inceptos himenaeos.
                        </p>
                    </div>
                    <div class="bloco-form">
                        <form>
                            <label for="name">Nome: </label>
                            <input class="input-form" type="text" name="name" id="nome" />
                            <label for="email">E-mail: </label>
                            <input class="input-form" type="text" name="email" id="email" />
                            <label for="cpf">CPF</label>
                            <input class="input-form" type="text" name="cpf" id="cpf" />
                            <div class="radio-inline">
                                <input type="radio" name="genero" value="masculino" id="masculino" />
                                <label for="masculino">Masculino</label>
                                <input type="radio" name="genero" value="feminino" id="feminino" />
                                <label for="feminino">Feminino</label>
                            </div>
                            <button id="enviar" type="submit">Enviar</button>
                        </form>
                    </div>
                </section>
                <section id="produtos" class="container">
                    <h2><span>Sua seleção Especial</span></h2>
                        <div class="row justify-content-center text-center">
                            {
                                this.state.listarProdutos.map(function (produto) {
                                    return (<CardProduto produto={produto} />)
                                })
                            }

                        </div>
                </section>
                <section class="container" id="compartilhe">
                    <h2><span>Compartilhe a Novidade</span></h2>
                    <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
                    <form id="formCompartilhe">
                        <div class="input-compartilhe">
                            <div class="form-box">
                                <label id="nomeCompartilhe">Nome do seu amigo: </label>
                                <input class="input-form" type="text" id="nomeCompartilhe"></input>
                            </div>
                            <div class="form-box">
                                <label id="emailCompartilhe">E-mail</label>
                                <input class="input-form" type="email" id="emailCompartilhe"></input>
                            </div>
                        </div>
                        <div class="d-flex-center">
                            <button type="submit" class="btnCompartilhe">Enviar Agora</button>
                        </div>
                    </form>
                </section>


                {/**/}
                <Rodape />
            </article>
        );
    }

}