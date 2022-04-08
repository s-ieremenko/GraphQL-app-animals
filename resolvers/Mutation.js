const { v4 } = require('uuid');

const Mutation = {
  addAnimal: (parent, {
    image,
    title,
    rating,
    price,
    description,
    slug,
    stock,
    onSale,
    category
  }, { animals }) => {
    let newAnimal = {
      id: v4(),
      image,
      title,
      rating,
      price,
      description,
      slug,
      stock,
      onSale,
      category
    };
    animals.push(newAnimal);

    return newAnimal;
  },
  removeAnimal: (parent, { id }, { animals }) => {
    let index = animals.findIndex(animal => animal.id === id);
    animals.splice(index, 1);
    return true;
  },
  updateAnimal: (parent, {
    id,
    image,
    title,
    rating,
    price,
    description,
    slug,
    stock,
    onSale,
    category
  }, { animals }) => {
    let animal = animals.find(animal => animal.id === id);
    animal.title = title;
    return animal;

  }

};

module.exports = Mutation;

// type Animal {
//   id: ID!
//       image: String!
//       title: String!
//       rating: Float!
//       price: String!
//       description: [String!]!
//       slug: String!
//       stock: Int!
//       onSale: Boolean
//   category: Category
// }