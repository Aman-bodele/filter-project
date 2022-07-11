console.log("Hello Everyone");

products = [
  {
    id: 1,
    name: "Maggie-noodles",
    price: 10,
    category: "Food",
    quantity: 150,
    pic: "https://thumbnail.imgbin.com/4/14/1/imgbin-instant-noodle-indian-cuisine-maggi-noodles-masala-chai-igRkdh75u3RtnBw5b2TjAA9bL_t.jpg",
  },
  {
    id: 2,
    name: "Cocacola",
    price: 40,
    category: "Drink",
    quantity: 200,
    pic: "https://toppng.com/uploads/preview/coca-cola-11528343217zyw9fkytbo.png",
  },
  {
    id: 3,
    name: "Amul-Cheese",
    price: 90,
    category: "Dairy",
    quantity: 30,
    pic: "https://w7.pngwing.com/pngs/374/199/png-transparent-processed-cheese-milk-amul-cheese-spread-milk-food-cheese-curd.png",
  },
  {
    id: 4,
    name: "String energy drink",
    price: 70,
    category: "Drink",
    quantity: 50,
    pic: "https://toppng.com/uploads/preview/sting-energy-drink-cambodia-115632243261skitygv1l.png",
  },
  {
    id: 5,
    name: "Go cheese",
    price: 120,
    category: "Dairy",
    quantity: 22,
    pic: "http://www.gocheese.in/wp-content/uploads/2018/11/1-1.png",
  },
];

function displayData(arr) {
  document.getElementById("data").innerHTML = "";
  arr.forEach((product, index) => {
    let row = document.createElement("tr");

    let numberTD = document.createElement("td");
    numberTD.append(index + 1);

    let nameTD = document.createElement("td");
    nameTD.append(product.name);

    let priceTD = document.createElement("td");
    priceTD.append(product.price);

    let categoryTD = document.createElement("td");
    categoryTD.append(product.category);

    let quantityTD = document.createElement("td");
    quantityTD.append(product.quantity);

    let picTD = document.createElement("td");
    let proPic = document.createElement("img");
    proPic.setAttribute("src", product.pic);
    picTD.appendChild(proPic);

    row.appendChild(numberTD);
    row.appendChild(nameTD);
    row.appendChild(priceTD);
    row.appendChild(categoryTD);
    row.appendChild(quantityTD);
    row.appendChild(picTD);

    document.getElementById("data").appendChild(row);
  });
}

displayData(products);

let filterStatus = false;
function openFilterSection() {
  if (filterStatus === false) {
    document.getElementById("filter_box").style.marginLeft = "0px";
    filterStatus = true;
  } else {
    document.getElementById("filter_box").style.marginLeft = "-25%";
    filterStatus = false;
  }
}

let filters = {
  category: null,
  quantity: null,
  minPrice: null,
  maxPrice: null,
};

function setFilters(property, value) {
  if (value !== "") {
    filters[property] = value;

    if (property === "minPrice") {
      document.getElementById("maxPrice").min = Number(value) + 1;
      document.getElementById("lowMaxPriceLabel").innerText = Number(value) + 1;
    }
  } else {
    filters[property] = null;
  }

  //   console.log(filters);
}

function filter() {
  let filterData = products;
  if (filters.category !== null) {
    filterData = products.filter((product, index) => {
      return product.category.toUpperCase() === filters.category.toUpperCase();
    });
  }

  if (filters.quantity !== null) {
    filterData = filterData.filter((product, index) => {
      return product.quantity <= filters.quantity;
    });
  }
  if (filters.minPrice !== null) {
    filterData = filterData.filter((product, index) => {
      return Number(filters.minPrice) <= product.price;
    });
  }
  if (filters.maxPrice !== null) {
    filterData = filterData.filter((product, index) => {
      return Number(filters.maxPrice) >= product.price;
    });
  }

  displayData(filterData);
}

function refresh(property, value) {
  document.getElementById("select").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("minPrice").value = "0";
  document.getElementById("maxPrice").value = "0";
  document.getElementById("lowMaxPriceLabel").innerText = "0";
  displayData(products);
}
