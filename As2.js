/*AIMAN ARIF BIN ADNAN aari436
INFOSYS 280 AS2
*/
const PRODUCTS = {

    "brocoli": {
      "key": "brocoli",
      "name": "Brocoli",
      "imageURL": "https://cdn.jsdelivr.net/gh/josecarlosgt/infosys280/broccoli.jpg",
      "keywords": ["vegetable", "diet", "food", "fresh", "green"],
      "price": 4
    },
    "grapes": {
      "name": "Grapes",
      "key": "grapes",
      "imageURL": "https://cdn.jsdelivr.net/gh/josecarlosgt/infosys280/grape.jpg",
      "keywords": ["food", "fresh", "fruit", "green"],
      "price": 5
    },
    "strawberries": {
      "name": "Strawberries",
      "key": "strawberries",
      "imageURL": "https://cdn.jsdelivr.net/gh/josecarlosgt/infosys280/strawberry.jpg",
      "keywords": ["food", "fresh", "fruit", "breakfast"],
      "price": 6
    },
    "cheese": {
      "name": "Cheese",
      "key": "cheese",
      "imageURL": "https://cdn.jsdelivr.net/gh/josecarlosgt/infosys280/cheese2.png",
      "keywords": ["dairy", "breakfast", "food"],
      "price": 5
    },
    "yogurt": {
      "name": "Yogurt",
      "key": "yogurt",
      "imageURL": "https://cdn.jsdelivr.net/gh/josecarlosgt/infosys280/yoghurt.png",
      "keywords": ["dairy", "food", "breakfast"],
      "price": 3
    },
    "toothpaste": {
      "name": "Toothpaste",
      "key": "toothpaste",
      "imageURL": "https://cdn.jsdelivr.net/gh/josecarlosgt/infosys280/toothpaste.png",
      "keywords": ["dental", "hygiene"],
      "price": 10
    },
    "shampoo": {
      "name": "Shampoo",
      "key": "shampoo",
      "imageURL": "https://cdn.jsdelivr.net/gh/josecarlosgt/infosys280/shampoo.png",
      "keywords": ["hair", "hygiene"],
      "price": 15
    },
    "soap": {
      "name": "Soap",
      "key": "soap",
      "imageURL": "https://cdn.jsdelivr.net/gh/josecarlosgt/infosys280/soap.jpg",
      "keywords": ["body", "hygiene"],
      "price": 2
    },
    "wine": {
      "name": "Wine",
      "key": "wine",
      "imageURL": "https://cdn.jsdelivr.net/gh/josecarlosgt/infosys280/wine.png",
      "keywords": ["alcohol", "bar", "beverage"],
      "price": 12
    },
    "napkins": {
      "name": "Napkins",
      "key": "baby",
      "imageURL": "https://cdn.jsdelivr.net/gh/josecarlosgt/infosys280/napkin.png",
      "keywords": ["bar", "table"],
      "price": 4
    }
  }


const SHOPPING_DATA = {
  searchResults: [],
  cart: [],
};

function search() {
  let query = $("#searchBox").val();
  query = query.toLowerCase().trim();

  SHOPPING_DATA.searchResults = [];
  for (let key in PRODUCTS) {
    let product = PRODUCTS[key];
    let searchProduct = product.name.toLowerCase();
    let productKey = product.key.trim();
    if (searchProduct == query || productKey.includes(query)) {
      SHOPPING_DATA.searchResults.push(product);
  }
  displaySearchResults();
}
}

function generateItemHTML(product, onClickCallback = false) {
  let productItem = $("#searchResults") ;

  let prodImage = product.imageURL;
  let prodName = product.name;
  let prodPrice = product.price

  productItem = $("<li><img src='" + prodImage + "'/></li>");
  productItem.append ();
  productItem.append("<figcaption>" + prodName + " $" + prodPrice + "</figcaption>");
  productItem.attr('id', product.key);

  if (onClickCallback)
  {$(productItem).on("click", addProduct);  }
  return productItem;
}



function displaySearchResults() {
  $("#searchResults").empty();

  for (let product of SHOPPING_DATA.searchResults) {
    let productItem = generateItemHTML(product, true);
    $("#searchResults").append(productItem);
  }
}

function addProduct() {
  let productKey = $(this).attr("id");
  SHOPPING_DATA.cart.push(PRODUCTS[productKey]);
  displayCart();

 }

 function removeProduct() {
  let productKey = $(this).attr("id");
  SHOPPING_DATA.cart.pop(PRODUCTS[productKey]);
  displayCart();

  product.on("click", removeProduct);
 }

function displayCart() {
  $("#Cart").empty();

  for (let product of SHOPPING_DATA.cart) {
    let productItem = generateItemHTML(product);
    $("#Cart").append(productItem);

  }
    $("#Cart").on("click", removeProduct);
}

function init() {
  $("#search").on("click", search);
}
init();
