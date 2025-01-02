let cartData = {
    items: [
        {
            name: "Margherita Pizza",
            price: 300,
            quantity: 1,
            image: "../img/pizza1.jpg"
        }
    ],
    getSubtotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const cart = document.querySelector('.cart');
    
    const cartPopup = document.createElement('div');
    cartPopup.className = 'cart-popup';
    
    function updateCartPopup() {
        cartPopup.innerHTML = `
            ${cartData.items.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name} <span class="remove-item">×</span></div>
                        <div class="cart-item-qty">Quantity: ${item.quantity}</div>
                        <div class="cart-item-price">$${item.price}</div>
                    </div>
                </div>
            `).join('')}
            <div class="cart-subtotal">
                Cart Subtotal: $${cartData.getSubtotal()}
            </div>
            <div class="cart-buttons">
                <a href="/html/cart.html"><button class="cart-btn">CART</button></a>
                <a href="/html/checkout.html"><button class="checkout-btn">CHECKOUT</button></a>
            </div>
        `;  
    }

    cart.appendChild(cartPopup);
    updateCartPopup();

    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    if (cartItemsContainer && cartCount && cartTotal) {
        cartItemsContainer.innerHTML = cartData.items.map(item => `
            <p>
                <div style="display: flex; align-items: center;">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-details" style="margin-left: 10px;">
                        <div>${item.name}</div> 
                        <div class="price">${item.price} NTD</div>
                    </div>
                </div>
            </p>
        `).join('');

        cartCount.textContent = `${cartData.items.length} items`;

        cartTotal.textContent = `${cartData.getSubtotal()} NTD`;
    }
});