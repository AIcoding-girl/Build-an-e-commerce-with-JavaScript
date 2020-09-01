let items = [
    {
        name: 'Brand Earphones',
        price: 30,
        image: 'img/earphones.jpg'
    },
    {
        name: 'Brand Laptop',
        price: 330,
        image: 'img/laptop.jpg'
    },
    {
        name: 'Brand TV Screen',
        price: 430,
        image: 'img/screen.jpg'
    },
    {
        name: 'Brand Tablet',
        price: 230,
        image: 'img/tablet.jpg'
    },
]

let cart = [];

let list = document.querySelector('ul');

items.forEach((item, i) => {
    list.innerHTML += `<li>
    <div>Name: ${item.name}</div>
    <div>Price: $${item.price}</div>
    image src="${item.image}" />
    <input type="number" placeholder="quantity" onchange='inputChange(${i}, "${item.name}", ${item.price}>
    <button>Buy Item</button>
    <li>
    `
});