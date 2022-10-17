import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="Products-item">
      <img src={`http://localhost:1337${product.attributes.image.data[0].attributes.url}`} alt={product.attributes.title} />
      <div className="Product-item-info">
        <h2>
          {product.attributes.title}
          <span>
          {' '}$
            {' '}
            {product.attributes.price}
          </span>
        </h2>
        <p>{product.attributes.descripction}</p>        
      </div>
      <button type="button" onClick={handleAddToCart(product.attributes)}>Comprar</button>
    </div>
  );
}

export default Product;