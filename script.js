let items = [
    {
        name: 'Brand Earphones',
        price: 30,
        image: 'http://lorempixel.com/200/200/technics/1'
    },
    {
        name: 'Brand Laptop',
        price: 330,
        image: 'http://lorempixel.com/200/200/technics/2'
    },
    {
        name: 'Brand TV Screen',
        price: 430,
        image: 'http://lorempixel.com/200/200/technics/3'
    },
    {
        name: 'Brand Tablet',
        price: 230,
        image: 'http://lorempixel.com/200/200/technics/4'
    },
]

// To enable "Buy Item" functionality, create cart array (which is empty at the beginning)
// Then add i as argument to items.forEach loop (that responds to item[i])
// Also, add input field for numbers (quantity of user selected item), and create 'inputChange' function

let cart = [];

let list = document.querySelector('#items');

items.forEach((item, i) => {
    list.innerHTML += `<li>
    <div>Name: ${item.name}</div>
    <div>Price: $${item.price}</div>
    <image src="${item.image}" />
    <input type="number" placeholder="quantity" onchange='inputChange(${i}, "${item.name}", "${item.price}", "${item.image}")'/>
    <button>Buy Item</button>
    </li>
    `
});

function showCart() {
    let cartItems = document.querySelector('#cart');
    cartItems.innerHTML = '';

    cart.forEach((item, i) => {
        cartItems.innerHTML += `<li>
        <div>Name: ${item.name}</div>
        <div>Quantity: ${item.quantity}</div>
        <image src="${item.image}" />
        </li>`
    })
};

function inputChange(i, name, price, image) {
    // console.log('I wanted to buy the', i, 'item named', name, 'that costs $', price);
    let listItem = document.querySelectorAll('li')[i];

    // input.value gives chosen quantity of selected item
    let input = listItem.querySelector('input');

    let button = listItem.querySelector('button');
    button.onclick = function () {
        cart.push({
            quantity: input.value,
            name: name,
            price: price,
            image: image
        });
        // console.log(cart);
        showCart();
    };
}