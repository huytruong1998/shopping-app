var initialState = [
  {
    id: 1,
    name: "Iphone 7",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-hh-600x600.jpg",
    description: "Made in China",
    price: 40,
    inventory: 10,
    rating: 4
  },
  {
    id: 2,
    name: "Samsung galaxy S7",
    image:
      "https://images.samsung.com/is/image/samsung/in-galaxy-s7-g930fd-sm-g930fzduins-000000001-front-gold?$PD_GALLERY_JPG$",
    description: "Made in Mars",
    price: 400,
    inventory: 5,
    rating: 3
  },
  {
    id: 3,
    name: "Iphone X",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600-600x600.jpg",
    description: "Made in Vietnam",
    price: 12,
    inventory: 2,
    rating: 5
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
