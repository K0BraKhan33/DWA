
//givem part 1
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

//given part 2
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Define a function to run Part 1 to 7
function runPart1to7() {
  console.warn('part 1');
  names.forEach(name => {
    console.log(name);
  });

  console.warn('part 2');
  names.forEach((name, index) => {
    console.log(`${name} (${provinces[index]})`);
  });

  console.warn('part 3');
  const uppercaseProvinces = provinces.map(province => province.toUpperCase());
  console.log(uppercaseProvinces);

  console.warn('part 4');
  const nameLengths = names.map(name => name.length);
  console.log(nameLengths);

  console.warn('part 5');
  const sortedProvinces = provinces.slice().sort();
  console.log(sortedProvinces);

  console.warn('part 6');
  const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
  console.log(filteredProvinces.length);

  console.warn('part 7');
  const containsS = names.map(name => name.includes('S'));
  const provinceObject = names.reduce((result, name, index) => {
    result[name] = containsS[index] ? provinces[index] : '';
    return result;
  }, {});
  console.log(provinceObject);
}

// Call the function to run Part 1 to 7
runPart1to7();

// Define a function to run Additional Part 1 to 6
function runAdditionalParts() {
  console.warn('part ad 1');
  products.forEach(product => {
    console.log(product.product);
  });

  console.warn('part ad 2');
  const filteredProducts = products.filter(product => product.product.length <= 5);
  console.log(filteredProducts)


  console.warn('part ad 3');
  const priceNumbers = products
    .filter(product => !isNaN(Number(product.price)))
    .map(product => Number(product.price));
  const totalPrice = priceNumbers.reduce((acc, price) => acc + price, 0);
  console.log(totalPrice);



  console.warn('part ad 4');
  const productNames = products.reduce((acc, product, index, array) => {
    if (index === array.length - 1) {
      return acc + product.product;
    } else {
      return acc + product.product + ', ';
    }
  }, '');
  console.log(productNames);


  console.warn('part ad 5');
  const highestAndLowest = products.reduce((result, product) => {
    const price = Number(product.price);
    if (isNaN(price)) return result;
    if (!result.highest || price > result.highest.price) {
      result.highest = { name: product.product, price };
    }
    if (!result.lowest || price < result.lowest.price) {
      result.lowest = { name: product.product, price };
    }
    return result;
  }, { highest: null, lowest: null });
  console.log(`Highest: ${highestAndLowest.highest.name}. Lowest: ${highestAndLowest.lowest.name}`);

  console.warn('part ad 6');
  const recreatedObject = products.map(product => {
    const updatedProduct = {};
    for (const key in product) {
      if (key === 'product') updatedProduct['name'] = product[key];
      else if (key === 'price') updatedProduct['cost'] = product[key];
      else updatedProduct[key] = product[key];
    }
    return updatedProduct;
  });
  console.log(recreatedObject);


  

  
  
}

// Call the function to run Additional Part 1 to 6
runAdditionalParts();
