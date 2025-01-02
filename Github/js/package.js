let packageData = {
    items: [
        {
            id: "deal1",
            name: "New Year Package",
            original: 1000,
            price: 719,
            description: "Happy New Year",
            image: "../img/deal1.png",
            category: "package"
        },
        {
            id: "deal2",
            name: "Christmas Package",
            original: 1500,
            price: 1288,
            description: "Merry Christmas",
            image: "../img/deal2.png",
            category: "package"
        },
        {
            id: "deal3",
            name: "Cheap & Happy Package",
            original: 354,
            price: 222,
            description: "A lot of fun and joy",
            image: "../img/deal3.png",
            category: "package"
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const packageId = urlParams.get('id');

    const package = packageData.items.find(item => item.id === packageId);

    if (package) {
        document.querySelector('.package-image img').src = package.image;
        document.querySelector('.package-title').textContent = package.name;
        document.querySelector('.original-price span').textContent = `$${package.original}`;
        document.querySelector('.package-price span').textContent = `$${package.price}` ;
        document.querySelector('.package-description p').textContent = package.description;
    }

    // Handle delivery option buttons
    const deliveryBtns = document.querySelectorAll('.delivery-btn');
    deliveryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            deliveryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});
