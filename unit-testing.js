function addProduct(name, price) {
  validateProductData(name, price);

  const saveProduct = saveProduct(name, price);
  return saveProduct;
}

function validateProductData(name, price) {
  const inputIsValid = !isEmpty(name) && hasMinValue(price, 0);
  if (!inputIsValid) {
    throw new Error("Invalid input - product was not created.");
  }
}

function isEmpty(value) {
  return !value || value.trim();
}

function hasMinValue(value, minValue) {
  return value && value > minValue;
}

function saveProduct(name, price) {
  const product = {
    id: createRandomId(name),
    name: name,
    price: price,
  };
  database.insert("products", product);
  return product;
}

function createRandomId(name) {
  return name + "_" + Math.random().toString();
}

describe(function () {
  it("should create a product for valid names and prices", function () {
    const createdProduct = addProduct("Carpet", 19);
    expect(createdProduct).not.toBeUndefined();
  });

  it("should generate a product id that contains the product name", function () {
    const createdProduct = addProduct("Book", 19);
    expect(createdProduct.id).stringContaining("Book");
  });
});
