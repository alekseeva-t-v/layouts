const ListView = (props) => {
  const { items } = props;

  const ShopItem = items.map((item, index) => {
    return (
      <div className="shop-item" key={index}>
        <div className="thumb">
          <figure>
            <img src={item.img} alt={item.name} />
          </figure>
        </div>
        <div className="title">{item.name}</div>
        <div className="desc">{item.color}</div>
        <div className="price">${item.price}</div>
        <button className="btn">Add to cart</button>
      </div>
    );
  });

  return <div className="items">{ShopItem}</div>;
};

export default ListView;
