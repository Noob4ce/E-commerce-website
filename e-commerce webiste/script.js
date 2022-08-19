//Classes Section

//Shoes Class - All in our group
class shoes{
    constructor (
      id, modelname, gender, brand, type, color, price, imageurl, quantity, size 
    ) {
        this.id = id; 
        this.modelname = modelname; 
        this.gender = gender;
        this.brand = brand;
        this.type = type;
        this.color = color;
        this.price = price;
        this.imageurl = imageurl;
        this.quantity = quantity;
        this.size = size;
    }
  };




// userInfo
class user {
    constructor (
       name, password
    ) {
//         this.ID = ID;
//         this.email = email;
        this.name = name;
        this.password = password;
//         this.card = card;
//         this.address = address;
    };
};






//var shoesList = []; Mario commented this line

//Shoes's Array - All in our group
shoesList = [
    shoes1 = new shoes(10001,'SuperRep Go', 'Men', 'Nike', 'Sports', 'Green', '150', 'images/shoe10001.png', '', ''),
    shoes2 = new shoes(10002,'Kyrie 7', 'Men', 'Nike', 'Sports', 'Black', '130', 'images/shoe10002.png', '', ''),
    shoes3 = new shoes(10003,'Rovux Geneva', 'Men', 'K-Swiss', 'Sports', 'Blue', '100', 'images/shoe10003.png', '', ''),
    shoes4 = new shoes(10004,'Lace-Up 01', 'Men', 'UGG', 'Boots', 'Brown', '80', 'images/shoe10004.png', '', ''),
    shoes5 = new shoes(10005,'Ultra Slim', 'Men', 'UGG', 'Boots', 'Black', '90', 'images/shoe10005.png', '', ''),
    shoes6 = new shoes(10006,"O'Neil", 'Men', 'Cleanline', 'Boots', 'Brown', '120', 'images/shoe10006.png', '', ''),
    shoes7 = new shoes(10007,"Lace-Up K12", 'Men', 'Wengie', 'Casual', 'Black', '60', 'images/shoe10007.png', '', ''),
    shoes8 = new shoes(10008,"Lace-Up D5", 'Men', 'UGG', 'Casual', 'Black', '75', 'images/shoe10008.png', '', ''),
    shoes9 = new shoes(10009,"Railar", 'Men', 'UGG', 'Casual', 'Black', '80', 'images/shoe10009.png', '', ''),
    shoes10 = new shoes(10010,"Women's 574", 'Women', 'New Balance', 'Sports', 'Blue', '200', 'images/shoe10010.png', '', ''),
    shoes11 = new shoes(10011,"PUMA Womens X", 'Women', 'Karl Lagerfeld Cali', 'Sports', 'Pink', '190', 'images/shoe10011.png', '', ''),
    shoes12 = new shoes(10012,"B22", 'Women', 'K-Swiss', 'Sports', 'Cream', '90', 'images/shoe10012.png', '', ''),
    shoes13 = new shoes(10013,"I20", 'Women', 'Eddie', 'Boots', 'Black', '90', 'images/shoe10013.png', '', ''),
    shoes14 = new shoes(10014,"K-6", 'Women', 'UGG', 'Boots', 'Black', '80', 'images/shoe10014.png', '', ''),
    shoes15 = new shoes(10015,"I05", 'Women', 'Eddie', 'Boots', 'Black', '120', 'images/shoe10015.png', '', ''),
    shoes16 = new shoes(10016,"ANNY105", 'Women', 'Stuart Weitzman', 'Heels', 'Cream', '300', 'images/shoe10016.png', '', ''),
    shoes17 = new shoes(10017,"Nearlynude", 'Women', 'Stuart Weitzman', 'Heels', 'Poudre blush pink', '250', 'images/shoe10017.png', '', ''),
    shoes18 = new shoes(10018,"Anastasia", 'Women', 'Stuart Weitzman', 'Heels', 'Cream', '220', 'images/shoe10018.png', '', '')
  
  ];

// Size########################################################################################

// Highlighted on clicked size box and push the value to an array --- Zaibing
function selectSize (id){
    if(size.length != 0){
        let s = size[0];
        document.querySelector((document.querySelector(s)).style.border = 'thin solid #c5c5c5');
        size = [];
    }
    let currentSize = '#' + id;
    size.push(currentSize);
    document.querySelector((document.querySelector(currentSize)).style.border = 'thin solid black');
};




// order########################################################################

var cartItems = [];

var size = [];

// Zaibing
function displayCart() {
    document.querySelector('#cart').style.display = 'block'
    let shoesId = document.querySelector('#id').textContent 
    let shoes = shoesList.find(s => s.id == shoesId);
    cartItems.push(shoes)
    updateCart();
    cartCheck();
    displayTotal();
    cartItems = [];
};


// update cart to localstorage    ---Zaibing
function updateCart(){
  let currentCart = cartItems;
  console.log(currentCart);
  let retrived = localStorage.getItem('cart');
  if (retrived == ''){
      localStorage.setItem("cart", JSON.stringify(currentCart));
    } else if(typeof retrived === 'object'){
      currentCart.push(retrived);
      localStorage.setItem("cart", JSON.stringify(currentCart));
    }
    else if (Array.isArray(JSON.parse(retrived))) {
      retrived = JSON.parse(retrived);
        combined = retrived.concat(currentCart);
        localStorage.setItem("cart", JSON.stringify(combined));
    };
};


// check cart slot  ----Zaibing

function cartCheck(){
  let retrived = localStorage.getItem('cart')
  let icon = document.querySelector('#cartIcon')
  if (retrived != ''){
    icon.src = './images/icons/bag-check-fill.svg'
  } else {
    icon.src = './images/icons/bag.svg'
  };
};



// Zaibing
function cartInitialization (){
  let l = localStorage.getItem('cart');
  if (l === null){
      localStorage.setItem('cart', '');
  };
};

// Zaibing
function closeCart() {
    document.querySelector('#cart').style.display = 'none'
};

//Function to display the total price of all products in the cart - Mario
function displayTotal(){

  //here we get the cart items
  const cartArray = JSON.parse(localStorage.getItem("cart")) || [];
  var total = 0;
  for (let b of cartArray){
      //total of the purchase
      total += parseInt(b.price);
  }
  document.querySelector('#total').textContent = "Total: " + total;
}

//Function to display all products in the cart - Mario
function displayFinalCart(){
  console.log("entro");
  //NOT READY YET !!!!!!
  //here we get the cart items
  const cartArray = JSON.parse(localStorage.getItem("cart")) || [];
  var total = 0;

  const block = document.querySelector('#checkoutBlock');
  for (let b of cartArray){
      //item box
      const list = document.createElement('div');
      list.className = "itemBox";
      //product image
      const divimg = document.createElement('div');
      divimg.className = "cartImg"
      const image = document.createElement('img');
      image.src = b.imageurl
      //product text
      const divtext = document.createElement('div');
      divtext.className = "cartText"
      const brand = document.createElement('h4');
      brand.textContent = b.brand;
      const model = document.createElement('h3');
      model.textContent = b.modelname;
      const price = document.createElement('h3');
      price.textContent = "Price: " + b.price;
      //construct DOM
      divimg.appendChild(image);
      divtext.appendChild(brand);
      divtext.appendChild(model);
      divtext.appendChild(price);
      
      list.appendChild(divimg);
      list.appendChild(divtext);
      block.appendChild(list);
  }

  

  for (let b of cartArray){
      //total of the purchase
      total += parseInt(b.price);
  }
  
  document.querySelector('#totalPurchase').textContent = "Total: " + total;
}

function displayOrders() {
    const topper = document.querySelector('#orderTopper');
    const newH1 = document.createElement('h1');
    newH1.textContent = orders.orderID;
    topper.appendChild(newH1);

    const addressPara = document.createElement('p');
    const totalPara = document.createElement('p');
    addressPara.textContent = 'Ship to: ' + orders.address;
    totalPara.textContent = 'Total: ' + orders.total + '$';

    
    topper.appendChild(addressPara);
    topper.appendChild(totalPara);
};







// Login###########################################################################


// Turn on the switch by passing current userInfo to it  ---Zaibing
function loginStatusOn(u) {
    localStorage.setItem("loginStatus", JSON.stringify(u));
    loginCheck ();
};


// Turn off the switch by eliminating current userInfo  ---Zaibing
function logout() {
    localStorage.setItem("loginStatus", '');
    loginStatus = localStorage.getItem('loginStatus');
    loginCheck ();
};




// Check the login status to decide which elements should be displayed  ---Zaibing
function loginCheck (){
  let l = localStorage.getItem('loginStatus')
  if (l != '') {
    document.querySelector('#loginLink').removeAttribute("href");
      document.querySelector('#logIcon').src = './images/icons/person-check-fill.svg';
      document.querySelector('#logIcon').addEventListener("mouseover", function() {
        document.querySelector('#userMenu').style.visibility = "visible";  
    });
    document.querySelector('#userMenu').addEventListener("mouseover", function() {
      document.querySelector('#userMenu').style.visibility = "visible";  
  });
    document.querySelector('#userMenu').addEventListener("mouseout", function() {
      document.querySelector('#userMenu').style.visibility = "hidden";  
});        
  } else {
      document.querySelector('#loginLink').href = 'login.html';
      document.querySelector('#logIcon').src = './images/icons/person.svg';
  };   
};

//  !!!  Very Important: Create login status in localstorage if it doesn't exsist   ---Zaibing     
function loginInitialization (){
    let l = localStorage.getItem('loginStatus');
    if (l === null){
        localStorage.setItem('loginStatus', '');
    };
};




function validatePassword (p){
  if (p.length < 8 ) {
    return false;
  };
};


// Take the regirstration inputs and upload it to localstorage (Also log this user in)   ---Zaibing
function register() {

    let userList = [];
    let n = document.querySelector('#userName').value;
    let p = document.querySelector('#password').value;
    let u = new user(n, p);
    let valid = validatePassword(p);
    if (valid === false) {
      alert = document.querySelector('#rPasswordAlert');
      alert.textContent = 'Please enter a password with minimum 8-characters';
      return false;
    };
    let retrived = JSON.parse(localStorage.getItem('user'));
    if (retrived == null){
        userList.push(u);
        localStorage.setItem("user", JSON.stringify(userList));
        loginStatusOn(u);
        loginCheck();
        location.href = "index.html";
    }
    else if (Array.isArray(retrived)) {
        retrived.push(u)
        localStorage.setItem("user", JSON.stringify(retrived));
        loginStatusOn(u);
        loginCheck(); 
        location.href = "index.html";  
    };
};


// User inputs will be searched in localstorage, only matched info is allowed to login  ---Zaibing
function login(){
    let inputName = document.querySelector('#loginName').value;
    let inputPassword = document.querySelector('#loginPassword').value;
    let userData = JSON.parse(localStorage.getItem('user'));
    let foundUser = userData.find(u => u.name == inputName);
    if (foundUser == undefined) {
        let alert = document.querySelector('#lPasswordAlert');
        alert.textContent = ("Wrong user name or password");
    } else {
        if (foundUser.password == inputPassword){
            loginStatusOn(foundUser);
            loginCheck(); 
            location.href = "index.html";
        } else {
            let alert = document.querySelector('#lPasswordAlert');
            alert.textContent = ("Wrong user name or password");
        };
    };
};

function purchase (){
  localStorage.removeItem('cart');
  document.querySelector('#checkoutBlock').style.display = 'none';
  document.querySelector('#purchaseBox').style.display = 'none';
  document.querySelector('#thanks').style.display = 'block';
};



// Clear localstorage (admin use only)
function clearData (){
    localStorage.removeItem('user');
    localStorage.removeItem('loginStatus');
};

loginInitialization();

cartInitialization ();

loginCheck();

cartCheck();

//function for List Women Shoes in Women's section Web Page - Mario Ossa
function listWomenShoes(){
    const list = document.querySelector('#rightContent');
    for (let b of shoesList){
      if (b.gender == 'Women'){
        const product = document.createElement('div');
        const image = document.createElement('img');
        image.src = b.imageurl;
        image.id = b.id;
        const brand = document.createElement('p');
        brand.textContent = b.brand;
        const model = document.createElement('p');
        model.textContent = b.modelname;
        const price = document.createElement('p');//Add price -- natsasion
        price.textContent = "$ " + b.price;
        const reference = document.createElement('a');
        reference.href = "product.html?product="+b.id
        reference.appendChild(image);
        product.appendChild(reference);
        product.appendChild(brand);
        product.appendChild(model);
        product.appendChild(price);
        list.appendChild(product);
      }
    }
  };

//function for list men shoes in Men's section Web Page - Mario Ossa
  function listMenShoes(){
    const list = document.querySelector('#rightContent');
    for (let b of shoesList){
      if (b.gender == 'Men'){
        const product = document.createElement('div');
        const image = document.createElement('img');
        image.src = b.imageurl;
        image.id = b.id;
        const brand = document.createElement('p');
        brand.textContent = b.brand;
        const model = document.createElement('p');
        model.textContent = b.modelname;
        const price = document.createElement('p');//Add price -- natsasion
        price.textContent = "$ " + b.price;
        const reference = document.createElement('a');
        reference.href = "product.html?product="+b.id
        reference.appendChild(image);
        product.appendChild(reference);
        product.appendChild(brand);
        product.appendChild(model);
        product.appendChild(price);
        list.appendChild(product);
      }
    }

  };

  function getWomenTrends(){
    var trend_qty = 0;
    const list = document.querySelector('#womenContainer');
    for (let b of shoesList){
      if (b.gender == 'Women' && trend_qty < 3){
        const product = document.createElement('div');
        const image = document.createElement('img');
        image.src = b.imageurl;
        image.id = b.id;
        const brand = document.createElement('h4');
        brand.textContent = b.brand;
        const model = document.createElement('h3');
        model.textContent = b.modelname;
        //Add price --natsasion
        const price = document.createElement('h3');
        price.textContent = "Price: $" + b.price;
        ////////////////////////
        const reference = document.createElement('a');
        reference.href = "product.html?product="+b.id
        reference.appendChild(image);
        product.appendChild(reference);
        product.appendChild(brand);
        product.appendChild(model);
        //Add price --natsasion
        product.appendChild(price);
        ////////////////////////////
        list.appendChild(product);
       trend_qty++;
      }
    }
  };

  function getMenTrends(){
    var trend_qty = 0;
    const list = document.querySelector('#menContainer');
    for (let b of shoesList){
      if (b.gender == 'Men' && trend_qty < 3){
        const product = document.createElement('div');
        const image = document.createElement('img');
        image.src = b.imageurl;
        image.id = b.id;
        const brand = document.createElement('h4');
        brand.textContent = b.brand;
        const model = document.createElement('h3');
        model.textContent = b.modelname;
        //Add price --natsasion
        const price = document.createElement('h3');
        price.textContent = "$ " + b.price;
        ////////////////////////
        const reference = document.createElement('a');
        reference.href = "product.html?product="+b.id
        reference.appendChild(image);
        product.appendChild(reference);
        product.appendChild(brand);
        product.appendChild(model);
        //Add price --natsasion
        product.appendChild(price);
        ////////////////////////////
        list.appendChild(product);
       trend_qty++;
      }
    }
  };

//function for list men shoes filtered in Men's section Web Page - Mario Ossa
function filterByType(item, genderFilter){
  document.querySelector('#rightContent').innerHTML = "";
  const list = document.querySelector('#rightContent');
  for (let b of shoesList){
    if (b.type == item && b.gender == genderFilter){
      const product = document.createElement('div');
      const image = document.createElement('img');
      image.src = b.imageurl;
      image.id = b.id;
      const brand = document.createElement('p');
      brand.textContent = b.brand;
      const model = document.createElement('p');
      model.textContent = b.modelname;
      const price = document.createElement('p');//Add price -- natsasion
      price.textContent = "$ " + b.price;
      const reference = document.createElement('a');
      reference.href = "product.html?product="+b.id
      reference.appendChild(image);
      product.appendChild(reference);
      product.appendChild(brand);
      product.appendChild(model);
      product.appendChild(price);
      list.appendChild(product);
    }
  }
};

//function for list men shoes filtered in Men's section Web Page - Mario Ossa
function filterByBrand(item, genderFilter){
  document.querySelector('#rightContent').innerHTML = "";
  const list = document.querySelector('#rightContent');
  for (let b of shoesList){
    if (b.brand == item && b.gender == genderFilter){
      const product = document.createElement('div');
      const image = document.createElement('img');
      image.src = b.imageurl;
      image.id = b.id;
      const brand = document.createElement('p');
      brand.textContent = b.brand;
      const model = document.createElement('p');
      model.textContent = b.modelname;
      const price = document.createElement('p');//Add price -- natsasion
      price.textContent = "$ " + b.price;
      const reference = document.createElement('a');
      reference.href = "product.html?product="+b.id
      reference.appendChild(image);
      product.appendChild(reference);
      product.appendChild(brand);
      product.appendChild(model);
      product.appendChild(price);
      list.appendChild(product);
    }
  }
};

//Function to get the id of the product that the customer clicked - Mario Ossa
function getId(){

    const Idvalue = window.location.search;

//Create Instance
    const urlParams = new URLSearchParams(Idvalue);

//We get the product id and we call the function that loads product details - Mario Ossa
    var product = urlParams.get('product');
    productPage(product);
}

//Function to show the details of the product that the customer clicked - Mario Ossa
function productPage(idInput){
  for (let b of shoesList){
    if (b.id == idInput){
      document.getElementById("imageurl").src = b.imageurl;
      document.getElementById("smallimage").src = b.imageurl;
      document.getElementById("imageurl").alt = b.modelname;
      document.querySelector('#modelname').textContent = b.modelname;
      document.querySelector('#gender').textContent = b.gender + "'s Shoes";
      document.querySelector('#price').textContent = b.price;
      document.querySelector('#brand').textContent = b.brand;
      document.querySelector('#id').textContent = b.id;
    }
  }
}


