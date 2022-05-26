const name = "Maria";
const userAge = 20;

const user = {
  name,
  age: userAge,
  location: "Manaus",
};

console.log(user);

const product = {
  label: "Red notebook",
  prices: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2,
};

// const { label: productLabel, stock, rating = 5 } = product;
// console.log(productLabel, stock, rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
