let countval = 0;

let products = [
  {
    id: 1,
    name: "Black Tshirt",
    size: "L",
    color: "Black",
    price: 1200,
    image: src= "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/6832954/2018/12/17/2d5e2f48-c654-40bd-892e-e521dbb50f141545041427513-HRX-by-Hrithik-Roshan-Men-Black-Printed-Round-Neck-T-shirt-6-1.jpg",
    description: "Men Black Printed Round Neck T-shirt",
  },
  {
    id: 2,
    name: "Black Backpack",
    size: "20L",
    color: "Black",
    price: 900,
    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9377255/2019/6/11/65107ed4-a208-4bb2-baaa-ae4d809f3f801560257829396-HRX-by-Hrithik-Roshan-Unisex-Backpacks-9251560257828275-1.jpg",
    description: "Unisex Blue & Black Graphic Print Backpack",
  },

  {
    id: 3,
    name: "Men Jacket",
    size: "M",
    color: "Navy Blue",
    price: 1000,
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9570153/2019/9/20/27c4f139-a380-49ad-bd81-27f648573f601568981892900-HRX-by-Hrithik-Roshan-Men-Jackets-4751568981889966-1.jpg",
    description: "Men Navy Blue Solid Sporty Jacket",
  },

  {
    id: 4,
    name: "Outdoor Jacket",
    size: "M",
    color: "Olive Green",
    price: 3000,
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11953234/2020/9/17/c3511aa0-45e3-4423-b19c-1d63f093137c1600327118972-HRX-by-Hrithik-Roshan-Women-Jackets-8861600327116864-1.jpg" ,
    description: "Women Olive Green Solid Outdoor Jacket",
  },

  {
    id: 5,
    name: "joggers",
    size: "L",
    color: " Grayish Blue",
    price: 1300,
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2332161/2018/3/9/11520573505320-HRX-by-Hrithik-Roshan-Women-Navy-Blue-Solid-Joggers-6061520573505178-2.jpg",
    description: "Women Navy Blue Swedish Pop Solid Joggers",
  },

  {
    id: 6,
    name: "Bomber",
    size: "L",
    color: "Burgundy",
    price: 2000,
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4453310/2018/10/29/8a47f259-1add-44ff-adc7-3eecffd632a21540801449749-HRX-by-Hrithik-Roshan-Men-Burgundy-Solid-Bomber-8401540801449543-1.jpg",
    description: "Men Burgundy Solid Long sleeves Bomber",
  },
  {
     id: 7,
    name: "Running Shoes",
    size: "M",
    color: "White",
    price: 5000,
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10539800/2020/1/8/4d69725e-8a6c-42d5-89a6-e5688e85516b1578483510841-HRX-by-Hrithik-Roshan-Men-White-Mesh-N-Flux-Running-Shoes-46-2.jpg",
    description: "Men White Mesh N-Flux Running Shoes",
  },
  {
     id: 8,
    name: "Track Pants",
    size: "M",
    color: "Olive Green",
    price: 1800,
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11640790/2020/9/17/a5306d9f-88de-42d0-a959-5047eeaf56211600335930323-HRX-by-Hrithik-Roshan-Men-Olive-Green-Solid-Training-Track-P-1.jpg",
    description: "Men Olive Green Solid Training Track Pants",
  },
  {
     id: 9,
    name: "Running Shoes",
    size: "UK 8",
    color: "Dark Black",
    price: 2999,
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10539814/2020/1/16/ea9ac3ea-2c3d-4259-affb-22020c0a72421579173475686-HRX-by-Hrithik-Roshan-Women-Black-Mesh-N-Flux-Running-Shoes--1.jpg",
    description: "Women Black Mesh N-Flux Running Shoes",
  },
  
  {
     id: 10,
    name: "Earbud",
    size: "",
    color: "Glaxy Blue",
    price: 3500,
    image: "https://rukminim1.flixcart.com/image/416/416/kbgu1e80/headphone/g/4/t/x-drops-9g-1-hrx-original-imafssyzchdbg7et.jpeg",
    description: "HRX X-Drops 9G with Quick Touch Technology Bluetooth Headset",
  },
  {
     id: 11,
    name: "Perfume",
    size: "200ml",
    color: "Orange",
    price: 800,
    image: "https://images-na.ssl-images-amazon.com/images/I/41dJmf-VljL.jpg",
    description: "HRX PLAY Men's No Gas Only Perfume Body Spray with Fruity, Floral ",
  },
  {
     id: 12,
    name: "Smartwatch",
    size: "",
    color: "Mate Black",
    price: 1300,
    image: "https://cdn.pricebaba.com/prod/images/product/fitness-tracker/46019/xiaomi-mi-band-hrx-edition-xxl-326130.jpg",
    description: "Xiaomi Mi Band HRX Edition",
  },

];

cart=[];

 function displayProduct(productData, targetid){
  let productString="";
  let buttonDis = "Add To Cart"
 let funToCall = "addToCart";
 console.log(funToCall);
  if( targetid == "cart") {
  funToCall = "removeFromCart";
  buttonDis = "Remove From Cart"
  } 
  productData.forEach(function(product, index) {
   let { id, name, image, color, description, price, size } = product;
 
   productString += ` <div class="product">
        <div class="prodimg">
          <img src="${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="${funToCall}(${index})">${buttonDis}</button>
        </p>
      </div>`;
    });
console.log('productString');


  document.getElementById(targetid).innerHTML=productString;
}
displayProduct(products, "productwrapper");

function searchProduct() {
  let searchValue = document.getElementById('search').value;
  let searchedProducts = products.filter(function(product){
    let searchString= product.name+" "+product.color+" "+product.description;
    return searchString.toUpperCase().indexOf(searchValue.toUpperCase())!= -1;

  });
  displayProduct(searchedProducts, "productwrapper");


}


function updateCount(){
  document.getElementById("count").innerHTML = countval;
}
function addToCart(index) {
   // console.log("hello");

   let check = true;
   check = checkduplicate(index)
   if(check)
  { cart.push(products[index]);
   displayProduct(cart, "cart");
   countval++;
   updateCount();
 } 
 }

function removeFromCart(index) {

   cart.splice(index, 1);
   displayProduct(cart, "cart");
   countval--;
   updateCount();
 }
function checkduplicate(index){
  let flag = cart.filter(val => val.id == products[index].id);
  console.log(cart.id);
   if(flag != 0)
  {
    alert("Same Product Already in Cart !");
  return false;
} 
else{
  return true;
  }
}



function filterprod()
    {
       let min = document.getElementById("min").value;
 let max = document.getElementById("max").value;
      console.log(min);
     let res = products.filter((val) => val.price >= min && val.price <= max);
     displayProduct(res, "productwrapper");
    }


