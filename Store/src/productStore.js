// coffe: price_1N9qrjSFWUsq5XCigqARLgf3
// sunglaasses :
// camera : price_1N9quRSFWUsq5XCincyqtqdp

const productsArray = [
  {
    id: "price_1N9qrjSFWUsq5XCigqARLgf3",
    title: "Coffe",
    price: "4.99",
  },
  {
    id: "price_1N9qtDSFWUsq5XCiR0WOF59J",
    title: "Sunglasses",
    price: "3.99",
  },
  {
    id: "price_1N9quRSFWUsq5XCincyqtqdp",
    title: "Camera",
    price: "50.99",
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID:" + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
