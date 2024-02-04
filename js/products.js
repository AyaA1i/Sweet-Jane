let allProducts = document.querySelector('.allProducts');
let Storedproducts = [
  {
      id:1,
      title: "Swizzels Double",
      price: "0.13 dollar",
      category:"Lollipop",
      imageUrl : "../media/1.jpg" ,
      quantity : 0
  },
  {
      id:2,
      title: "Swizzels Single",
      price: "0.13 dollar",
      category:"Lollipop",
      imageUrl : "../media/2.jpg",
      quantity : 0
  },
  {
      id:3,
      title: "Crazy Candy Factory",
      price: "0.38 dollar",
      category:"Lollipop",
      imageUrl : "../media/4.jpg",
      quantity : 0
  },
  {
      id:4,
      title: "Vidal Traffic Light",
      price: "0.13 dollar",
      category:"Lollipop",
      imageUrl : "../media/3.jpg",
      quantity : 0
  },
  {
      id:5,
      title: "Bristows Toffee",
      price: "1.38 dollar",
      category:"Bonbon",
      imageUrl : "../media/5.jpg",
      quantity : 0
  },
  {
    id:6,
    title: "Bristows Toffee",
    price: "1.38 dollar",
    category:"Bonbon",
    imageUrl : "../media/6.jpg",
    quantity : 0
  },
  {
      id:7,
      title: "Bristows Lemon",
      price: "1.13 dollar",
      category:"Bonbon",
      imageUrl : "../media/7.jpg",
      quantity : 0
  },
  {
      id:8,
      title: "Bristows Bubblegum",
      price: "1.13 dollar",
      category:"Bonbon",
      imageUrl : "../media/8.jpg",
      quantity : 0
  },
  {
      id:9,
      title: "Werther Original",
      price: "1.06 dollar",
      category:"Toffee",
      imageUrl : "../media/9.jpg",
      quantity : 0
  },
  {
      id:10,
      title: "Butterkist Crunchy",
      price: "1.06 dollar",
      category:"Toffee",
      imageUrl : "../media/10.jpg",
      quantity : 0
  },
  {
      id:11,
      title: "Werther Original",
      price: "1.06 dollar",
      category:"Toffee",
      imageUrl : "../media/11.jpg",
      quantity : 1
  },
  {
      id:12,
      title: "Sugar Free Werther",
      price: "1.06 dollar",
      category:"Toffee",
      imageUrl : "../media/12.jpg",
      quantity : 0
  },
  {
      id:13,
      title: "Bristows Blue",
      price: "1.13 dollar",
      category:"Bonbon",
      imageUrl : "../media/13.jpg",
      quantity : 0
  },
  {
      id:14,
      title: "Vimto Bonbons",
      price: "1.13 dollar",
      category:"Bonbon",
      imageUrl : "../media/14.jpg",
      quantity : 0
  },
  {
      id:15,
      title: "Chewits Strawberry",
      price: "1.13 dollar",
      category:"Bonbon",
      imageUrl : "../media/15.jpg",
      quantity : 0
  },
  {
      id:16,
      title: "Chewits Blue",
      price:"1.13 dollar",
      category:"Bonbon",
      imageUrl : "../media/16.jpg",
      quantity : 0
  }
]
function drawItems() {
  let rows = "";
  for (let i = 0; i < 4; i++) {
    let cols = "";
    for (let j = 0; j < 4; j++) {
      let index = i * 4 + j;
      if (index < Storedproducts.length) {
        let item = Storedproducts[index];
        cols +=
          `
        <div class="col">
          <div class="card" style="width: 16rem;">
            <img src="${item.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text price">Price : ${item.price}</p>
              <p class="card-text category">Category : ${item.category}</p>
              <div class="productActions">
                <a href="#" class="btn btn-primary addToCartBtn" onclick="addProductToCart(${item.id})" id="btn${item.id}">Add To Cart</a>
                <i class="fa-solid fa-heart icon" id="heart"></i>
              </div>
            </div>
          </div>
        </div>
        `;
      }
    }
    rows += `<div class="row">${cols}</div>`;
  }
    allProducts.innerHTML = rows;
}

drawItems();

let addedItems = localStorage.getItem('ProductsInCart') ? 
JSON.parse(localStorage.getItem('ProductsInCart')) : [];

let carticon = document.querySelector('#cartIcon');
let cartproducts = document.querySelector('.cartProducts');
let products = document.querySelector('.products');
let cartCounter = document.querySelector('.cartCounter');
carticon.addEventListener('click' , function(event){
  event.preventDefault();
  if(cartproducts.style.display === "block" || parseInt(cartCounter.innerHTML) == 0 )
  {
    cartproducts.style.display = "none";
  }
  else
  {
    cartproducts.style.display = "block"
  }
})
function addProductToCart(productID){
  let choosenItem = Storedproducts.find((item) => item.id === productID);
  Storedproducts.find((item) => item.id === productID).quantity++;
  let chosenBtn = document.querySelector(`#btn${choosenItem.id}`);
  if(chosenBtn.innerHTML == "Add To Cart"){
    let sumQ = 0;
    cartCounter.style.display = "block";
    addedItems = [...addedItems , choosenItem];
    products.innerHTML = "";
    addedItems.forEach(function(Item){
      sumQ += Item.quantity;
      products.innerHTML += 
      `
      <li><a class="dropdown-item" href="#" id="item${Item.id}">
      <span>${Item.title}</span>
      <span><i class="fas fa-plus sign plus" onclick="addProduct(${Item.id})"></i></span>
      <span><i class="fas fa-minus sign minus" onclick="removeProduct(${Item.id})"></i></span>
      <span class="countitems">${Item.quantity}</span>
      </a></li>
      `
    })
    cartCounter.innerHTML = sumQ;
    localStorage.setItem('ProductsInCart' , JSON.stringify(addedItems));
  }
  else{
    let removedItem = document.querySelector(`#item${choosenItem.id}`);
    cartCounter.innerHTML = parseInt(cartCounter.innerHTML) - choosenItem.quantity;
    removedItem.parentNode.innerHTML = "";
    if(parseInt(cartCounter.innerHTML) == 0){
      cartCounter.style.display = "none";
      cartproducts.style.display = "none";
    }
    addedItems = addedItems.filter((item) => item.id !== choosenItem.id);
    localStorage.setItem('ProductsInCart' , JSON.stringify(addedItems));
    
  }
}

function removeProduct(productID){
  let choosenItem = document.querySelector(`#item${productID} .countitems`)
  Storedproducts.find((item) => item.id === productID).quantity--;
  localStorage.setItem('ProductsInCart' , JSON.stringify(addedItems));
  if(parseInt(choosenItem.innerHTML) == 1){
    addedItems = addedItems.filter((item) => item.id !== productID);
    localStorage.setItem('ProductsInCart' , JSON.stringify(addedItems));
    let chosenBtn = document.querySelector(`#btn${productID}`);
    chosenBtn.style.backgroundColor = "#DF065D";
    chosenBtn.innerHTML = "Add To Cart";
    choosenItem.parentElement.innerHTML = "";
  }
  choosenItem.innerHTML = parseInt(choosenItem.innerHTML) - 1;
  cartCounter.innerHTML = parseInt(cartCounter.innerHTML) - 1;
  if(parseInt(cartCounter.innerHTML) == 0){
    cartCounter.style.display = "none";
    cartproducts.style.display = "none";
  }
}

function addProduct(productID){
  let choosenItem = document.querySelector(`#item${productID} .countitems`)
  Storedproducts.find((item) => item.id === productID).quantity++;
  localStorage.setItem('ProductsInCart' , JSON.stringify(addedItems));
  choosenItem.innerHTML = parseInt(choosenItem.innerHTML) + 1;
  cartCounter.innerHTML = parseInt(cartCounter.innerHTML) + 1;

}

const heartIcons = document.querySelectorAll('#heart');

heartIcons.forEach(function (heartIcon) {
  heartIcon.addEventListener('click', function() {
    if (heartIcon.style.color === 'gray' || heartIcon.style.color === '') {
      heartIcon.style.color = 'red';
    } else {
      heartIcon.style.color = 'gray';
    }
  });
});



let addToCartBtns = document.querySelectorAll('.addToCartBtn');
addToCartBtns.forEach(function(addToCartBtn){
  let productID = parseInt(addToCartBtn.id.replace('btn', ''));
  let choosenItem = addedItems.find((item) => item.id === productID);
  console.log(choosenItem)
  if (choosenItem != null && choosenItem.quantity !=0) {
    addToCartBtn.style.backgroundColor = "#a60546";
    addToCartBtn.innerHTML = "Remove From Cart";
  }
  addToCartBtn.addEventListener('click',function(event){
  event.preventDefault();

  if(addToCartBtn.innerHTML == "Add To Cart" )
  {
    addToCartBtn.style.backgroundColor = "#a60546" ;
    addToCartBtn.innerHTML = "Remove From Cart";
  }
  else
  {
    addToCartBtn.style.backgroundColor = "#DF065D";
    addToCartBtn.innerHTML = "Add To Cart";
  }
})
})


if(addedItems.length != 0){
  cartCounter.style.display = "block";
  let sumQ = 0;
  addedItems.forEach(function(Item){
    sumQ += Item.quantity;
    products.innerHTML += 
    `
    <li><a class="dropdown-item" href="#" id="item${Item.id}">
    <span>${Item.title}</span>
    <span><i class="fas fa-plus sign plus" onclick="addProduct(${Item.id})"></i></span>
    <span><i class="fas fa-minus sign minus" onclick="removeProduct(${Item.id})"></i></span>
    <span class="countitems">${Item.quantity}</span>
    </a></li>
    `
  })
  cartCounter.innerHTML = sumQ;
}