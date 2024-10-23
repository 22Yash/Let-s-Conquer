import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Vidushika',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Tharuni',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike Soccer Football',
      slug: 'nike-soccer-football',
      category: 'Shoes',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality pair of shoes',
    },
    {
      //_id: '2',
      name: 'Adidas Soccer Football',
      slug: 'adidas-soccer-football',
      category: 'Shoes',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality pair of shoes',
    },
    {
      //_id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      //_id: '4',
      name: 'Adidas Fit Pant',
      slug: 'Adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality pair of shoes',
    },
  ],
};

export default data;
