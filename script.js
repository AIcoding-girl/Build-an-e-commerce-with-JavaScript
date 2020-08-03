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