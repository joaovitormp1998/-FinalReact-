import Cabecalho from "./Header";
import Rodape from "./Rodape";

function Sobre() {
    var tituloPagina = "Sobre"
    return (
        <article>
            <Cabecalho  titulo={tituloPagina}/>
            <section>
                <p>Essa é a página sobre do meu projeto</p>
            </section>
            <Rodape />
        </article>
    );

}

export default Sobre;