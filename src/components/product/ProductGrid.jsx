import { useBasket } from 'hooks';
import PropType from 'prop-types';
import React from 'react';
import ProductItem from './ProductItem';

const ProductGrid = ({ products }) => {
  const { addToBasket, isItemOnBasket } = useBasket();

  return (
    <div className="product-grid">
      {products.length === 0 ? new Array(6).fill({}).map((product, index) => (
        <ProductItem
          key={`product-skeleton ${index}`}
          product={product}
        />
      )) : products.map((product) => (
        <ProductItem
          key={product.id}
          isItemOnBasket={isItemOnBasket}
          addToBasket={addToBasket}
          product={product}
        />
      ))}
    </div>
  );
};

ProductGrid.propTypes = {
  products: PropType.array.isRequired
};

export default ProductGrid;
