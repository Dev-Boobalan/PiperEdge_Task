let prodVal = [
	{
        "id": 1,
        "name": "test product 1",
        "price": 12.50,
        "tags": ["TRADE A", "ice"],
		   "vendor":"Vendor 5",
		    "discount" : 0
    },
    {
        "id": 2,
        "name": "test product 2",
        "price": 42.50,
        "tags": ["TRADE B", "ice2"],
		  "vendor":"Vendor 4",
		  "discount" : 0
    },
    {
        "id": 3,
        "name": "test product 3",
        "price": 200.00,
        "tags": ["TRADE C", "test"],
		  "vendor":"Vendor 3",
		  "discount" : 3
    },
    {
        "id": 4,
        "name": "test product 4",
        "price": 52.50,
        "tags": ["TRADE C", "test"],
		"vendor":"Vendor 2",
		"discount" : 0
    },
    {
        "id": 5,
        "name": "test product 5",
        "price": 712.50,
        "tags": ["TRADE D", "test"],
		  "vendor":"Vendor 1",
		  "discount" : 0
    },
    {
        "id": 6,
        "name": "test product 6",
        "price": 17.00,
        "tags": ["TRADE A", "test"],
		  "vendor":"Vendor 3",
		  "discount" : 12
    },
    {
        "id": 7,
        "name": "test product 7",
        "price": 55.00,
        "tags": ["TRADE A", "test"],
		  "vendor":"Vendor 3",
		  "discount" : 12
    },
    {
        "id": 8,
        "name": "test product 11",
        "price": 37.00,
        "tags": ["TRADE D", "test"],
		"vendor":"Vendor 4",
		"discount" : 12
    },
    {
        "id": 9,
        "name": "test product 9",
        "price": 82.00,
        "tags": ["TRADE C", "test"],
		"vendor":"Vendor 4",
		"discount" : 34
    },
    {
        "id": 10,
        "name": "test product 10",
        "price": 52.00,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 2",
		"discount" : 25
    },
    {
        "id": 11,
        "name": "test product 22",
        "price": 102.00,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 1",
		"discount" : 25
		
    },
    {
        "id": 12,
        "name": "test product 457",
        "price": 172.50,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 4",
		"discount" : 0
    },
    {
        "id": 13,
        "name": "test product 15",
        "price": 100.00,
        "tags": ["TRADE D", "test"],
		"vendor":"Vendor 5",
		"discount" : 12
    },
    {
        "id": 14,
        "name": "test product 33",
        "price": 99.50,
        "tags": ["TRADE D", "test"],
		"vendor":"Vendor 5",
		"discount" : 12
    },
    {
        "id": 15,
        "name": "test product 85",
        "price": 87.50,
        "tags": ["TRADE A", "test"],
		"vendor":"Vendor 5",
		"discount" : 0
    },
    {
        "id": 16,
        "name": "test product 63",
        "price": 57.00,
        "tags": ["TRADE A", "test"],
		"vendor":"Vendor 1",
		"discount" : 29
    },
    {
        "id": 17,
        "name": "test product 74",
        "price": 10.00,
        "tags": ["TRADE C", "test"],
		"vendor":"Vendor 2",
		"discount" : 0
    },
    {
        "id": 18,
        "name": "test product 102",
        "price": 412.50,
        "tags": ["TRADE D", "test"],
		"vendor":"Vendor 3",
		"discount" : 56
    },
    {
        "id": 19,
        "name": "test product 358",
        "price": 112.50,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 4",
		"discount" : 0
    },
    {
        "id": 20,
        "name": "test product 568",
        "price": 102.00,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 5",
		"discount" : 15
    },
    {
        "id": 21,
        "name": "test product 475",
        "price": 52.00,
        "tags": ["TRADE A", "test"],
		"vendor":"Vendor 3",
		"discount" : 12
    },
    {
        "id": 22,
        "name": "test product 28",
        "price": 32.00,
        "tags": ["TRADE C", "test"],
		"vendor":"Vendor 2",
		"discount" : 0
    },
    {
        "id": 23,
        "name": "test product 1405",
        "price": 12.00,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 4",
		"discount" : 0
    },
    {
        "id": 24,
        "name": "test product 389",
        "price": 584.50,
        "tags": ["TRADE D", "test"],
		"vendor":"Vendor 1",
		"discount" : 0
    },
    {
        "id": 25,
        "name": "test product 555",
        "price": 67.00,
        "tags": ["TRADE D", "test"],
		"vendor":"Vendor 5",
    "discount" : 30

    },
    {
        "id": 26,
        "name": "test product 444",
        "price": 132.50,
        "tags": ["TRADE A", "test"],
		"vendor":"Vendor 5",
		"discount" : 0
    },
    {
        "id": 27,
        "name": "test product 333",
        "price": 42.50,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 2",
		"discount" : 0
    }


]

// For product table

let addProd = prodVal.map((item) => {
  let divOne = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.textContent = `${item.id}`;
  let td2 = document.createElement("td")
  td2.textContent = `${item.name}`;
  let td3 = document.createElement("td")
  td3.textContent = `${item.price}`;
  let td4 = document.createElement("td")
  td4.textContent = `${item.tags[0]}, ${item.tags[1]}`;
  let td5 = document.createElement("td")
  td5.textContent = `${item.vendor}`;
  let td6 = document.createElement("td")
  td6.className = 'prod_table_row_cart'
  td6.textContent = 'Add to cart';
  divOne.append(td1, td2, td3, td4, td5, td6);
  document.addEventListener('DOMContentLoaded', () => {
    let tBody = document.querySelector('.prod_table_row')
    tBody.append(divOne);
    
  })
  
})

//For all functions
document.addEventListener('DOMContentLoaded', () => {
  let cartBtn = document.querySelectorAll(".prod_table_row_cart");
  for (let i = 0; i < cartBtn.length; i++) {
    cartBtn[i].addEventListener('click', () => {
              setItems1(prodVal[i]);
              shoppingCart()
              removeCart()
              totalWhileAdd()
      })

  }
  //reoerder the values
  function setItems1(prodVal) {
      prodVal['org_price'] = prodVal['price'];
      prodVal['discounted_price'] = (prodVal['price'] - ((prodVal['discount']/100)*prodVal['price']));
      delete prodVal.tags;
      let cartItems = prodVal;
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));
      console.log(prodVal);
    }
})
//For shopping table
let shopingCart = [];
function shoppingCart() {
  let totalProd = localStorage.getItem('productsInCart');
  let lastObj = [];
  totalProd = JSON.parse(totalProd);
  lastObj.push(totalProd);
  shopingCart.push(totalProd);
  console.log(lastObj);
  const cartAdd = lastObj.map((item) => {
    let divOne = document.createElement("tr");
    divOne.className = 'shop_table_row';
    let td1 = document.createElement("td");
        td1.className ='id';
    td1.textContent = `${shopingCart.length}`;
    let td2 = document.createElement("td")
    td2.textContent = `${item.name}`;
    let td3 = document.createElement("td")
    td3.textContent = `${item.org_price}`;
    let td4 = document.createElement("td")
    td4.textContent = `${item.discount}`;
    let td5 = document.createElement("td")
    td5.className = 'Final_price'
    td5.textContent = `${item.discounted_price}`;
    let td6 = document.createElement("td")
    td6.textContent = `${item.vendor}`;
    let td7 = document.createElement("td")
    td7.className = 'shop_table_row_cart'
    td7.textContent = 'remove cart';
    divOne.append(td1, td2, td3, td4, td5, td6, td7);
    let shopCart = document.querySelector(".shop_table_body");
    shopCart.append(divOne);
  })
}
//FUnction for removing cart
function removeCart() {
  let remRow = document.querySelectorAll('.shop_table_row');
  for (let i = 0; i < remRow.length; i++) {
    remRow[i].addEventListener("click", (e)=>{
      let delItem = e.target.parentNode.children[0].innerText;
      remRow[i].remove();
      changerIdOrder();  
      console.log(delItem);
      for (let l = 0; l < shopingCart.length; l++) {
        if(shopingCart[l].length == delItem){
          shopingCart[l].remove();  
          console.log(shopingCart[l]);
        }        
      }
      totalWhileRemove()
    })
    
  }
}

let totalCost = document.querySelector('.total_price')
function totalWhileAdd() {
  let finalPrice = document.querySelectorAll('.Final_price');
    let totalVal = 0;
    console.log(finalPrice);
    for (let m = 0; m < finalPrice.length; m++) {
      console.log(parseInt(finalPrice[m].innerText));
      totalVal = (totalVal + parseFloat(finalPrice[m].innerText));
      totalCost.textContent = `Total Price: Rs. ${totalVal}/-`;      
  }
  } 
  //function for Calculating total value while adding cart   
function totalWhileRemove() {
  let finalPrice = document.querySelectorAll('.Final_price');
  let totalVal = 0;
  console.log(finalPrice);
  defaultTotal()
  for (let m = 0; m < finalPrice.length; m++) {
    console.log(parseInt(finalPrice[m].innerText));
    totalVal = (totalVal + parseFloat(finalPrice[m].innerText));
    totalCost.textContent = `Total Price: Rs. ${totalVal}/-`;      
}
}
//function for default total value
function defaultTotal() {
  let finalPrice = document.querySelectorAll('.Final_price');
  let totalVal = 0;
  console.log(finalPrice.length);
 if (finalPrice.length==0)  {
    totalCost.textContent = 'Total Price: Rs. 00';      
} 
}
defaultTotal()


//function for changing the id after removing the item form the shopping cart
function changerIdOrder(){
  let id = document.querySelectorAll('.id');
  if (id.length>1) {
    for (let n = 0; n < id.length; n++) {
      id[n].innerText = n+1;      
    }
  }
}
