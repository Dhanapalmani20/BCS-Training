const orders = [
  {
    id: 1,
    dishName: "Burger",
    category: "Fast Food",
    chef: "John Doe",
    ratings: [5, 4, 5],
  },
  {
    id: 2,
    dishName: "Pizza",
    category: "Italian",
    chef: "Jane Smith",
    ratings: [4, 3, 5],
  },
  {
    id: 3,
    dishName: "Sushi",
    category: "Japanese",
    chef: "Tom Brown",
    ratings: [5, 5, 4],
  },
  {
    id: 4,
    dishName: "Salad",
    category: "Healthy",
    chef: "Alice Green",
    ratings: [3, 4, 5],
  },
  {
    id: 5,
    dishName: "Pasta",
    category: "Italian",
    chef: "Gowtam Tinnanuri",
    ratings: [4, 4, 5],
  },
];

const moreOrders = [
  {
    id: 6,
    dishName: "Tacos",
    category: "Mexican",
    chef: "Carlos Ruiz",
    ratings: [4, 5, 4],
  },
  {
    id: 7,
    dishName: "Ramen",
    category: "Japanese",
    chef: "Yuki Tanaka",
    ratings: [5, 4, 5],
  },
];
const getHighRatedDishes = (orders, moreOrders) => {
  return orders
    .filter((order) => order.ratings.some((rating) => rating < moreOrders))
    .map((orders) => orders.id);
};

// const Order = (orders, moreOrders = []) => {
//   return orders.map(
//     (order) => `${order.id}: ${order.ratings}: ${order.dishName}`
//   );
// };

console.log(getHighRatedDishes(orders));
// Burger, Sushi, Pasta

console.log(getHighRatedDishes(orders, moreOrders));
// Burger, Sushi, Pasta, Tacos, Ramen

console.log(getHighRatedDishes([], moreOrders));
// Tacos, Ramen
