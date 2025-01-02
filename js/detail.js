let foodData = {
    items: [
        {
            id: "pizza-margherita",
            name: "Margherita Pizza",
            price: 300,
            description: "Fresh tomatoes, mozzarella, basil, and olive oil",
            image: "../img/pizza1.jpg",
            category: "pizza"
        },
        {
            id: "pepperoni-pizza",
            name: "Pepperoni Pizza",
            price: 270,
            description: "Classic pepperoni with mozzarella and tomato sauce",
            image: "../img/pizza2.jpeg",
            category: "pizza"
        },
        {
            id: "hawaiian-pizza",
            name: "Hawaiian Pizza",
            price: 290,
            description: "Ham, pineapple, mozzarella, and tomato sauce",
            image: "../img/pizza3.jpg",
            category: "pizza"
        },
        {
            id: "burger",
            name: "Burger",
            price: 75,
            description: "a burger with cheese, mozzarella, and tomato sauce inside",
            image: "../img/burger.jpg",
            category: "burger"
        },
        {
            id: "milk-tea",
            name: "Milk Tea",
            price: 55,
            description: "a milk tea with a lot of sugar",
            image: "../img/MilkTea.jpg",
            category: "drink"
        },
        {
            id: "bolognese",
            name: "Bolognese",
            price: 150,
            description: "a bolognese with a lot of meat",
            image: "../img/bolognese.png",
            category: "pasta"
        },
        {
            id: "tiramisu",
            name: "Tiramisu",
            price: 80,
            description: "a tiramisu with a pizza shape",
            image: "../img/tiramisu.jpg",
            category: "desert"
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const product = foodData.items.find(item => item.id === productId);

    if (product) {
        document.querySelector('.product-image img').src = product.image;
        document.querySelector('.product-info h1').textContent = product.name;
        document.querySelector('.price').textContent = `$${product.price}`;
        document.querySelector('.description p').textContent = product.description;

        const crustSection = document.querySelector('.options h3:first-child');
        const crustOptions = document.querySelector('.crust-options');
        
        if (product.category !== 'pizza') {
            crustSection.style.display = 'none';
            crustOptions.style.display = 'none';
        }
    }

    const minusBtn = document.querySelector('.qty-btn.minus');
    const plusBtn = document.querySelector('.qty-btn.plus');
    const qtyInput = document.querySelector('.quantity input');

    minusBtn.addEventListener('click', () => {
        const currentValue = parseInt(qtyInput.value);
        if (currentValue > 1) {
            qtyInput.value = currentValue - 1;
        }
    });

    plusBtn.addEventListener('click', () => {
        const currentValue = parseInt(qtyInput.value);
        qtyInput.value = currentValue + 1;
    });

    // Options buttons functionality
    const crustButtons = document.querySelectorAll('.crust-options .option-btn');
    crustButtons.forEach(button => {
        button.addEventListener('click', () => {
            crustButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    const sizeButtons = document.querySelectorAll('.size-options .option-btn');
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});