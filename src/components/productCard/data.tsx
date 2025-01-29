
import React from 'react';
import ProductCard from './productCard';

const ProductList = () => {
  const products = [
    {
      id: 1,
      discount: '-40%',
      imageUrl: '/assets/flashSale/p1.png',
      title: 'HAVIT HV-G92 Gamepad',
      price: '$120',
      originalPrice: '$160',
      rating: 5,
      reviews: 88,
    },
    {
        id: 2,
        discount: '-35%',
        imageUrl: '/assets/flashSale/p2.png',
        title: 'AK-900 Wired Keyboard',
        price: '$960',
        originalPrice: '$1160',
        rating: 4,
        reviews: 75,
      },
      {
        id: 3,
        discount: '-30%',
        imageUrl: '/assets/flashSale/p3.png',
        title: 'IPS LCD Gaming Monitor',
        price: '$370',
        originalPrice: '$400',
        rating: 5,
        reviews: 99,
      },
      {
        id: 4,
        discount: '-25%',
        imageUrl: '/assets/flashSale/p4.png',
        title: 'S-Series Comfort Chair',
        price: '$375',
        originalPrice: '$400',
        rating: 5,
        reviews: 99,
      },
    // Add more products as needed
  ];

  return (
    <div className='flex flex-wrap gap-4'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

  