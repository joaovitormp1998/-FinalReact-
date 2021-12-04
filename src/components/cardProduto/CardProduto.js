function CardProduto({ produto }) {
  return (
    <div >
      <img src={produto.img}/>
      <div>
        <h5>{produto.name}</h5>
        <p>
          De R$<s>{produto.odPrice}</s>
        </p>
        <h5>Por R${produto.price}</h5>
        <p>
          <small>
            Ou em ate {produto.installments.qtd}x de{" "}
            {produto.installments.value} Sem Juros
          </small>
        </p><a>
        <button>Comprar</button>
        </a>
      </div>
    </div>
  );
}

export default CardProduto;
