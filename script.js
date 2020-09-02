let items = [
    {
        name: 'Brand Earphones',
        price: 30,
        image:'http://lorempixel.com/200/200/technics/1'
    },
    {
        name: 'Brand Laptop',
        price: 330,
        image:'http://lorempixel.com/200/200/technics/2'
    },
    {
        name: 'Brand TV Screen',
        price: 430,
        image:'http://lorempixel.com/200/200/technics/3'
    },
    {
        name: 'Brand Tablet',
        price: 230,
        image:'http://lorempixel.com/200/200/technics/4'
    },
]

let cart = [];

let list = document.querySelector('ul');

items.forEach((item, i) => {
    list.innerHTML += `<li>
    <div>Name: ${item.name}</div>
    <div>Price: $${item.price}</div>
    <image src="${item.image}" />
    <button>Buy Item</button>
    </li>
    `
});