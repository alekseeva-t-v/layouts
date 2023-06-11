/**
 * Компонент отвечающий за вывод товаров магазина в виде карточек. Родительский компонент Store
 *
 * @param {object} props.cards Массив списка товаров
 */
const CardsView = (props) => {
  const { cards } = props;

  const ShopCard = cards.map((item, index) => {
    return (
      <div className="shop-card" key={index}>
        <div className="title">{item.name}</div>
        <div className="desc">{item.color}</div>
        <div className="slider">
          <figure>
            <img src={item.img} alt={item.name} />
          </figure>
        </div>

        <div className="price-wrapper">
          <div className="price">${item.price}</div>
          <button className="btn">Add to cart</button>
        </div>
      </div>
    );
  });

  return <div className="cards">{ShopCard}</div>;
};

export default CardsView;
