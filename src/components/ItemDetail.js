export default function ItemDetail({ name, img, price, description }) {
    return (
      <>
          <img src={img} alt=""/>
          <h2>{name}</h2>
          <p>
              <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/1/10/Gold.png/18px-Gold.png" alt=""/>
              {price}g</p>
          <p>{description}</p>
      </>
    );
  }