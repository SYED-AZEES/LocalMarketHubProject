// Expanded shop data with different categories and 10 products each
const shops = [
    {
        name: "Clothing Boutique",
        description: "Trendy and stylish clothing for all ages.",
        location: "456 Tech Blvd, Gadget Town",
        imageUrl: "Clothing Boutique.jpg",
        products: [
            { name: "Blue Denim Jacket", price: "$50", imageUrl: "clothing/Blue Denim Jacket.jpg" },
            { name: "Casual White T-Shirt", price: "$20", imageUrl: "clothing/Casual White T-Shirt.jpg" },
            { name: "Black Skinny Jeans", price: "$40", imageUrl: "clothing/Black Skinny Jeans.jpg" },
            { name: "Floral Summer Dress", price: "$35", imageUrl: "clothing/Floral Summer Dress.jpg" },
            { name: "Leather Jacket", price: "$80", imageUrl: "clothing/Leather Jacket.jpg" },
            { name: "Red Hoodie", price: "$30", imageUrl: "clothing/Red Hoodie.jpg" },
            { name: "Cargo Pants", price: "$45", imageUrl: "clothing/Cargo Pants.jpg" },
            { name: "Winter Coat", price: "$90", imageUrl: "clothing/Winter Coat.jpg" },
            { name: "Striped Shirt", price: "$25", imageUrl: "clothing/Striped Shirt.jpg" },
            { name: "Sports Shorts", price: "$15", imageUrl: "clothing/Sports Shorts.jpg" }
        ]
    },
    {
        name: "Electronics Hub",
        description: "Latest gadgets and electronics at the best prices.",
        location: "123 Style St, Fashion City",
        imageUrl: "elec.jpg",
        products: [
            { name: "Smartphone X1", price: "$699", imageUrl: "Electronics/Smartphone X1.jpg" },
            { name: "Wireless Earbuds", price: "$59", imageUrl: "Electronics/Wireless Earbuds.jpg" },
            { name: "4K Television", price: "$500", imageUrl: "Electronics/4K Television.jpg" },
            { name: "Laptop Pro", price: "$999", imageUrl: "Electronics/Laptop Pro.jpg" },
            { name: "Smart Watch", price: "$199", imageUrl: "Electronics/Smart Watch.jpg" },
            { name: "Gaming Console", price: "$299", imageUrl: "Electronics/Gaming Console.jpg" },
            { name: "Bluetooth Speaker", price: "$49", imageUrl: "Electronics/Bluetooth Speaker.jpg" },
            { name: "Tablet S3", price: "$249", imageUrl: "Electronics/Tablet S3.jpg" },
            { name: "Digital Camera", price: "$399", imageUrl: "Electronics/Digital Camera.jpg" },
            { name: "Drone Mini", price: "$129", imageUrl: "Electronics/Drone Mini.jpg" }
        ]
    },
    {
        name: "Grocery Mart",
        description: "Fresh groceries delivered to your doorstep.",
        location: "123 Style St, Hyderabad gachhibowli",
        imageUrl: "Grocery Mart.jpg",
        products: [
            { name: "Organic Apples", price: "$2 per lb", imageUrl: "Grocery/Organic Apples.jpg" },
            { name: "Carrots", price: "$1 per lb", imageUrl: "Grocery/Carrots.jpg" },
            { name: "Farm Fresh Eggs", price: "$3 per dozen", imageUrl: "Grocery/Farm Fresh Eggs.jpg" },
            { name: "Organic Milk", price: "$4 per gallon", imageUrl: "Grocery/Organic Milk.jpg" },
            { name: "Broccoli", price: "$1.5 each", imageUrl: "Grocery/Broccoli.jpg" },
            { name: "Chicken Breasts", price: "$5 per lb", imageUrl: "Grocery/Chicken Breasts.jpg" },
            { name: "Whole Grain Bread", price: "$3", imageUrl: "Grocery/Whole Grain Bread.jpg" },
            { name: "Spinach", price: "$2 per bunch", imageUrl: "Grocery/Spinach.jpg" },
            { name: "Bananas", price: "$0.5 each", imageUrl: "Grocery/Bananas.jpg" },
            { name: "Potatoes", price: "$1 per lb", imageUrl: "Grocery/Potatoes.jpg" }
        ]
    },
    {
        name: "Bookstore",
        description: "Books of all genres for book lovers.",
        location: "123 Style St, Madanapalle Angallu",
        imageUrl: "book.jpg",
        products: [
            { name: "Mystery Novel", price: "$12", imageUrl: "Bookstore/Mystery Novel.jpg" },
            { name: "Science Fiction Book", price: "$15", imageUrl: "Bookstore/Science Fiction Book.jpg" },
            { name: "Historical Fiction", price: "$10", imageUrl: "Bookstore/Historical Fiction.jpg" },
            { name: "Self-Help Guide", price: "$8", imageUrl: "Bookstore/Self-Help Guide.jpg" },
            { name: "Cookbook", price: "$20", imageUrl: "Bookstore/Cookbook.jpg" },
            { name: "Biography", price: "$18", imageUrl: "Bookstore/Biography.jpg" },
            { name: "Fantasy Series", price: "$25", imageUrl: "Bookstore/Fantasy Series.jpg" },
            { name: "Graphic Novel", price: "$14", imageUrl: "Bookstore/Graphic Novel.jpg" },
            { name: "Thriller", price: "$11", imageUrl: "Bookstore/Thriller.jpg" },
            { name: "Classic Literature", price: "$9", imageUrl: "Bookstore/Classic Literature.jpg" }
        ]
    },
    // Add more shops similarly
];

// Populate shop section with shop cards
const shopContainer = document.getElementById('shopContainer');
const productSection = document.getElementById('productSection');
const productContainer = document.getElementById('productContainer');

shops.forEach(shop => {
    const shopCard = document.createElement('div');
    shopCard.classList.add('shop-card');
    shopCard.innerHTML = `
        <img src="${shop.imageUrl}" alt="${shop.name}">
        <h3>${shop.name}</h3>
        <p>${shop.description}</p>
        <p>${shop.location}</p>

        <button onclick="showProducts('${shop.name}')">Visit Shop</button>
    `;
    shopContainer.appendChild(shopCard);
});

// Function to display products of a selected shop
function showProducts(shopName) {
    // Clear previous products
    productContainer.innerHTML = '';
    
    // Find the selected shop's data
    const selectedShop = shops.find(shop => shop.name === shopName);
    
    // Populate product container with products from the selected shop
    selectedShop.products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h4>${selectedShop.name}</h4> <!-- Display the shop name on each product -->
            <img src="${product.imageUrl}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>${product.price}</p>
            <button onclick="orderProduct('${product.name}', '${selectedShop.name}')">Order</button>
        `;
        productContainer.appendChild(productCard);
    });
    
    // Display the product section
    productSection.style.display = 'block';
}

// Function to handle order action
function orderProduct(productName, shopName) {
    alert(`Order placed for: ${productName} from ${shopName}`);
}
let selectedProductName = '';
let selectedShopName = '';

// Function to display products of a selected shop
function showProducts(shopName) {
    productContainer.innerHTML = '';
    const selectedShop = shops.find(shop => shop.name === shopName);
    
    selectedShop.products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h4 >${selectedShop.name}</h4>
            <img src="${product.imageUrl}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>${product.price}</p>
            <button onclick="openOrderForm('${product.name}', '${selectedShop.name}')">Order</button>
        `;
        productContainer.appendChild(productCard);
    });
    productSection.style.display = 'block';
}

// Function to open the order form
function openOrderForm(productName, shopName) {
    selectedProductName = productName;
    selectedShopName = shopName;

    document.getElementById('orderProductName').textContent = `Product: ${productName} from ${shopName}`;
    document.getElementById('orderFormModal').style.display = 'flex';
}

// Function to close the order form
function closeOrderForm() {
    document.getElementById('orderFormModal').style.display = 'none';
}

// Function to handle order submission
function submitOrder(event) {
    event.preventDefault();
    
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value;
    const phone = document.querySelector('#phone');

    alert(`Order confirmed!\nProduct: ${selectedProductName}\nShop: ${selectedShopName}\nQuantity: ${quantity}\nAddress: ${address}\nPhone No:${phone.value}`);

    // Clear form and close modal
    document.getElementById('orderForm').reset();
    closeOrderForm();
}
const searchBar=document.querySelector("input")
searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    document.querySelectorAll('.shop-card').forEach(shopCard => {
        const shopName = shopCard.querySelector('h3').textContent.toLowerCase();
        shopCard.style.backgroundColor = shopName.includes(searchTerm) && searchTerm !== '' ? '#4CAF55' : '';
    });
});
// Function to go back to the shop list
function backToShops() {
    productSection.style.display = 'none';
}

// Improved search functionality
searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    let matchesFound = false;

    document.querySelectorAll('.shop-card').forEach(shopCard => {
        const shopName = shopCard.querySelector('h3').textContent.toLowerCase();
        const isMatch = shopName.includes(searchTerm) && searchTerm !== '';
        
        shopCard.classList.toggle('highlight', isMatch);
        shopCard.style.display = isMatch || searchTerm === '' ? 'block' : 'none';
        
        if (isMatch) matchesFound = true;
    });

    if (!matchesFound && searchTerm !== '') {
        shopContainer.innerHTML = `<p style="color: #555; font-size: 1.2rem;">No shops found for "${searchTerm}"</p>`;
    } else if (searchTerm === '') {
        shopContainer.innerHTML = ''; // Recreate shop cards if search is cleared
        populateShops();
    }
});

// Ensure modal smoothly opens/closes
document.getElementById('orderFormModal').addEventListener('transitionend', () => {
    const modal = document.getElementById('orderFormModal');
    if (modal.style.display === 'none') modal.style.visibility = 'hidden';
});
function openOrderForm(productName, shopName) {
    selectedProductName = productName;
    selectedShopName = shopName;

    document.getElementById('orderProductName').textContent = `Product: ${productName} from ${shopName}`;
    const modal = document.getElementById('orderFormModal');
    modal.style.visibility = 'visible';
    modal.style.display = 'flex';
    modal.style.opacity = 1;
}
function closeOrderForm() {
    const modal = document.getElementById('orderFormModal');
    modal.style.opacity = 0;
    modal.style.display = 'none';
}

// Inline validation for order form
document.getElementById('orderForm').addEventListener('input', (e) => {
    const target = e.target;
    const errorMessage = document.createElement('span');
    errorMessage.style.color = 'red';
    errorMessage.style.fontSize = '0.9rem';

    if (target.id === 'quantity' && target.value <= 0) {
        errorMessage.textContent = 'Quantity must be at least 1.';
        target.insertAdjacentElement('afterend', errorMessage);
    } else if (target.id === 'phone' && !/^\d+$/.test(target.value)) {
        errorMessage.textContent = 'Phone number should only contain digits.';
        target.insertAdjacentElement('afterend', errorMessage);
    }
});
// Function to populate the shop container with shop cards
function populateShops() {
    shopContainer.innerHTML = ''; // Clear existing content

    shops.forEach(shop => {
        const shopCard = document.createElement('div');
        shopCard.classList.add('shop-card');
        shopCard.innerHTML = `
            <img src="${shop.imageUrl}" alt="${shop.name}">
            <h3>${shop.name}</h3>
            <p>${shop.description}</p>
            <p>${shop.location}</p>
            <button onclick="showProducts('${shop.name}')">Visit Shop</button>
        `;
        shopContainer.appendChild(shopCard);
    });
}



