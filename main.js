let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name:'ashvagandha',
        tag:'Ashva',
        price:95,
        inCart:0,
    },

    {
        name:'boswellia',
        tag:'bos',
        price:836,
        inCart:0,

    },

    {
        name:'brahmi',
        tag:'Brahmi',
        price:138,
        inCart:0,
    },

    {
        name:'cumin',
        tag:'Cumin',
        price:209,
        inCart:0,
    },

    {
        name:'keshking',
        tag:'Kesh',
        price:330,
        inCart:0,
    },

    {
        name:'medimix',
        tag:'Medimix',
        price:26.04,
        inCart:0,
    },

    {
        name:'kapiva',
        tag:'amla',
        price:198,
        inCart:0,
    },

    {
        name:'boroline',
        tag:'boro',
        price:38,
        inCart:0,
    },

    {
        name:'chyawanprash',
        tag:'dabur',
        price:285,
        inCart:0,
    },

    {
        name:'septilin',
        tag:'septilin',
        price:135,
        inCart:0,
    },

    {
        name:'cystonetable',
        tag:'cystone',
        price:125,
        inCart:0,
    },

    {
        name:'cystonesyrup',
        tag:'syrup',
        price:150,
        inCart:0,
    },

    {
        name:'pediasure',
        tag:'pedia',
        price:506.85,
        inCart:0,
    },

    {
        name:'himalayababypowder',
        tag:'baby',
        price:63,
        inCart:0,
    },

    {
        name:'sebamedbabysoap',
        tag:'sebamed',
        price:265,
        inCart:0,
    },

    {
        name:'whisper',
        tag:'whisper',
        price:133,
        inCart:0,
    },
    {
        name:'himalayababyoil',
        tag:'oil',
        price:89,
        inCart:0,
    },
    {
        name:'cerelac',
        tag:'cerelac',
        price:220,
        inCart:0,
    },
    {
        name:'babyshampoo',
        tag:'shampoo',
        price:300,
        inCart:0,
    },

    {
        name:'motherhorlicks',
        tag:'horlicks',
        price:498.75,
        inCart:0,
    },
    {
        name:'protinex',
        tag:'protinex',
        price:523.50,
        inCart:0,
    },
    {
        name:'biooil',
        tag:'bio',
        price:160,
        inCart:0,
    },
    {
        name:'pampers',
        tag:'pampers',
        price:740,
        inCart:0,
    },
    {
        name:'daburlaltel',
        tag:'lal',
        price:166.25,
        inCart:0,
    },
    {
        name:'sugarfreegoldpellets',
        tag:'sugar',
        price:232.50,
        inCart:0,
    },
    {
        name:'ensurediabetescare',
        tag:'ensure',
        price:680,
        inCart:0,
    },
    {
        name:'sugarfreegoldtablet',
        tag:'gold',
        price:130,
        inCart:0,
    },
    {
        name:'diabecon',
        tag:'diabecon',
        price:110,
        inCart:0,
    },
    {
        name:'daburhoney',
        tag:'honey',
        price:355,
        inCart:0,
    },
    {
        name:'bgr34',
        tag:'bgr',
        price:597,
        inCart:0,
    },
    {
        name:'accucheck',
        tag:'accu',
        price:1359,
        inCart:0,
    },
    {
        name:'accucheckstrip',
        tag:'chek',
        price:750,
        inCart:0,
    },
    {
        name:'bgr34packof2',
        tag:'BGR',
        price:590,
        inCart:0,
    },
    {
        name:'tulsigreentea',
        tag:'tea',
        price:140,
        inCart:0,
    },
    {
        name:'madhurakshak',
        tag:'madhu',
        price:157,
        inCart:0,
    },
    {
        name:'sugarfreenature',
        tag:'free',
        price:150,
        inCart:0,
    },
    {
        name:'dettol',
        tag:'dettol',
        price:175,
        inCart:0,
    },
    {
        name:'preganews',
        tag:'prega',
        price:53,
        inCart:0,
    },
    {
        name:'omron',
        tag:'bp',
        price:2552,
        inCart:0,
    },
    {
        name:'bandaid',
        tag:'jj',
        price:240,
        inCart:0,
    },
    {
        name:'accusure',
        tag:'accsure',
        price:975,
        inCart:0,
    },
    {
        name:'tulips',
        tag:'tulip',
        price:30,
        inCart:0,
    },
    {
        name:'oximeter',
        tag:'pulse',
        price:1110,
        inCart:0,
    },
    {
        name:'hrk',
        tag:'hrk',
        price:1200,
        inCart:0,
    },

    {
        name:'beurerinfraredlamp',
        tag:'lamp',
        price:4420,
        inCart:0,
    },
    {
        name:'omronnec25s',
        tag:'nebu',
        price:2354,
        inCart:0,
    },
    {
        name:'burnol',
        tag:'burnol',
        price:53,
        inCart:0,
    },
    {
        name:'avagardhandrub',
        tag:'3m',
        price:550,
        inCart:0,
    }
];

for(let i=0; i< carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if( productNumbers ) {
        document.querySelector('.cartnum').textContent = productNumbers;
    }
}

function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if( action ) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.cartnum').textContent = productNumbers - 1;
        console.log("action running");
    } else if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cartnum').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cartnum').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        let currentProduct = product.tag;
    
        if( cartItems[currentProduct] == undefined ) {
            cartItems = {
                ...cartItems,
                [currentProduct]: product
            }
        } 
        cartItems[currentProduct].inCart += 1;

    } else {
        product.inCart = 1;
        cartItems = { 
            [product.tag]: product
        };
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost( product, action ) {
    let cart = localStorage.getItem("totalCost");

    if( action) {
        cart = parseInt(cart);

        localStorage.setItem("totalCost", cart - product.price);
    } else if(cart != null) {
        
        cart = parseInt(cart);
        localStorage.setItem("totalCost", cart + product.price);
    
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let cart = localStorage.getItem("totalCost");
    cart = parseInt(cart);

    let productContainer = document.querySelector('.products');
    
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map( (item, index) => {
            productContainer.innerHTML += 
            `<div class="product"><ion-icon name="close-circle"></ion-icon><img src="./images/${item.tag}.png" />
                <span class="sm-hide">${item.name}</span>
            </div>
            <div class="price sm-hide">$${item.price},00</div>
            <div class="quantity">
                <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
                    <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
            </div>
            <div class="total">$${item.inCart * item.price},00</div>`;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">$${cart},00</h4>
            </div>`

        deleteButtons();
        manageQuantity();
    }
}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    for(let i=0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            if( cartItems[currentProduct].inCart > 1 ) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    console.log(cartItems);

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'').trim();
           
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCartNumbers();
        })
    }
}

onLoadCartNumbers();
displayCart();
