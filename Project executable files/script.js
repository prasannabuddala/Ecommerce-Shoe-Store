const brands = {
    nikeItems: [
        {
            id: 1,
            name: 'sneakers-nike',
            source: "nike4.webp",
            description: "nike casuals",
            price: 6400,
        },
        {
            id: 2,
            name: 'boots-nike',
            source: "nike1.webp",
            description: "nike running",
            price: 5200,
        },
        {
            id: 3,
            name: 'formals-nike',
            source: "nike2.webp",
            description: "nike formals",
            price: 7800,
        },
        {
            id: 4,
            name: 'running-nike',
            source: "nike3.webp",
            description: "nike casuals",
            price: 5902,
        },
        {
            id: 5,
            name: 'running-nike',
            source: "nike5.webp",
            description: "nike running",
            price: 7100,
        }
    ],
    filaItems: [
        {
            id: 1,
            source: "fila1.jpg",
            description: "fila sneakers",
            price: 4800,
        },
        {
            id: 2,
            source: "fila2.jpg",
            description: "fila running",
            price: 6105,
        },
        {
            id: 3,
            source: "fila3.jpg",
            description: "fila casuals",
            price: 6988,
        },
        {
            id: 4,
            source: "fila4.jpg",
            description: "fila running",
            price: 2900,
        },
        {
            id: 5,
            source: "fila5.jpg",
            description: "fila running",
            price: 3500,
        },
        {
            id: 6,
            source: "fila6.jpg",
            description: "fila casuals",
            price: 7000,
        },
        {
            id: 7,
            source: "fila7.jpg",
            description: "fila casuals",
            price: 6500,
        }

    ],
    pumaItems: [
        {
            id: 1,
            source: "puma1.png",
            description: "puma sneakers",
            price: 6000,
        },
        {
            id: 2,
            source: "puma2.png",
            description: "puma running",
            price: 3433,
        },
        {
            id: 3,
            source: "puma3.png",
            description: "puma casuals",
            price: 4568,
        },
        {
            id: 4,
            source: "puma4.png",
            description: "puma running",
            price: 7500,
        },
        {
            id: 5,
            source: "puma5.png",
            description: "puma running",
            price: 5930,
        },
        {
            id: 6,
            source: "puma6.png",
            description: "puma casuals",
            price: 4003,
        },
        {
            id: 7,
            source: "puma7.png",
            description: "puma casuals",
            price: 4870,
        }
    ],
    adidasItems: [
        {
            id: 1,
            source: "a1.png",
            description: "adidas sneakers",
            price: 5005,
        },
        {
            id: 2,
            source: "a6.png",
            description: "adidas running",
            price: 5320,
        },
        {
            id: 3,
            source: "a2.png",
            description: "adidas casuals",
            price: 6120,
        },
        {
            id: 4,
            source: "a3.png",
            description: "adidas running",
            price: 6730,
        },
        {
            id: 5,
            source: "a4.png",
            description: "adidas casuals",
            price: 3202,
        },
        {
            id: 6,
            source: "a5.png",
            description: "adidas running",
            price: 4309,
        },
        {
            id: 7,
            source: "a7.png",
            description: "adidas running",
            price: 2100,
        }
    ]
};

function displayBrandedItems(brand) {
    const brandItems = brands[brand];
    if (!brandItems) {
        alert("Brand not found.");
        return;
    }
    let itemsContainer = document.getElementById("items-container");
    if (!itemsContainer) {
        itemsContainer = document.createElement("div");
        itemsContainer.id = "items-container";
        itemsContainer.classList.add("items-container");
    }

    itemsContainer.innerHTML = "";

    brandItems.forEach((item, index) => {
        const eachItem = document.createElement("div");
        eachItem.classList.add("each-item");
        const image = document.createElement("img");
        image.src = item.source;
        image.alt = item.source;
        image.classList.add("product-pic");
        const description = document.createElement("div");
        description.classList.add("prod-description");
        description.textContent = item.description;
        const price = document.createElement("div");
        price.classList.add("prod-price");
        const sym = document.createElement('span');
        sym.textContent = '\u20B9';
        const cost = document.createElement('span');
        cost.textContent = item.price;
        price.appendChild(sym);
        price.appendChild(cost);
        const shopBtn = document.createElement("button");
        shopBtn.classList.add("shop-btn");
        shopBtn.addEventListener("click", shopFunc);
        shopBtn.textContent = "shop";
        const addToCart = document.createElement("button");
        addToCart.classList.add("cart-btn");
        addToCart.textContent = "add to cart";
        addToCart.onclick = () => addToCartFunc(item);

        eachItem.appendChild(image);
        eachItem.appendChild(description);
        eachItem.appendChild(price);
        eachItem.appendChild(shopBtn);
        eachItem.appendChild(addToCart);

        itemsContainer.appendChild(eachItem);
    });
    const ref = document.querySelector(".section-wrapper-new");
    ref.parentNode.insertBefore(itemsContainer, ref.nextSibling);

}



//cart functionality

let cartArr = [];

const cart = document.querySelector(".cart");

function toggleCart(action) {
    const closeIcon = document.querySelector(".close-icon");
    if (action === "open") {
        cart.classList.add("active");
        // document.querySelector('.cart-total-section').style.right = 0;
        // document.querySelector('.cart-total-section').style.display = "flex";
        closeIcon.style.display = "block";
    } else if (action === "close") {
        // document.querySelector('.cart-total-section').style.display = "none";
        cart.classList.remove("active");
    }
}

const addToCartFunc = (item) => {
    cartArr.push(item);
    updateCartDisplay();
    saveToLocalStorage();
}

const updateCartDisplay = () => {
    const itemSection = document.querySelector('.cart-items-section');
    itemSection.innerHTML = "";
    if (cartArr.length === 0) {
        itemSection.textContent = "Cart is empty";
        document.querySelector('.cart-total-section').innerHTML = "nothing here";
    }
    else {
        cartArr.forEach((item, index) => {
            const itemContainer = document.createElement('div');
            itemContainer.classList.add('cart-item-container');
            const cartProductTitle = document.createElement('p');
            cartProductTitle.classList.add('cart-product-title');
            cartProductTitle.textContent = item.description;
            const cartProductPrice = document.createElement('p');
            cartProductPrice.classList.add('cart-product-price');
            cartProductPrice.textContent = item.price;
            const buyBtn = document.createElement("button");
            buyBtn.classList.add("shop-btn");
            buyBtn.textContent = "buy";
            buyBtn.onclick = () => shopFunc();
            const removeBtn = document.createElement("button");
            removeBtn.classList.add("remove-btn");
            removeBtn.textContent = "remove";
            removeBtn.onclick = () => removeFromCart(index);

            itemContainer.appendChild(cartProductTitle);
            itemContainer.appendChild(cartProductPrice);
            itemContainer.appendChild(buyBtn);
            itemContainer.appendChild(removeBtn);

            itemSection.appendChild(itemContainer);
            itemSection.appendChild(document.createElement("hr"))
        });
        const cartTotal = document.querySelector('.cart-total-section');
        // cartTotal.style.display = "flex";
        cartTotal.innerHTML = "";
        const cartCountEle = document.createElement('p');
        cartCountEle.classList.add('cart-count-ele');
        cartCountEle.textContent = "Total no of items: " + cartArr.length;
        const totalSumEle = document.createElement('p');
        totalSumEle.classList.add('total-sum-ele');
        totalSumEle.textContent = "sum: " + cartArr.reduce((acc, curr) => acc + curr.price, 0)

        cartTotal.appendChild(cartCountEle)
        cartTotal.appendChild(totalSumEle);
    }
}


const removeFromCart = (index) => {
    cartArr.splice(index, 1);
    updateCartDisplay();
    saveToLocalStorage();
}

const saveToLocalStorage = () => {
    localStorage.setItem('cartItems', JSON.stringify(cartArr));
};

const loadCartDataFromLocalStorage = () => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
        cartArr = JSON.parse(storedCartItems);
        updateCartDisplay();
    }
};

document.addEventListener('DOMContentLoaded', loadCartDataFromLocalStorage);

const shopFunc = () => {
    alert("Let's pay!!!");
}

const handleAddToCart = (event) => {
    const button = event.target;
    const productContainer = button.closest('.card');

    const image = productContainer.querySelector('.product-pic').src;
    const description = productContainer.querySelector('.prod-description').textContent;
    const price = parseFloat(productContainer.querySelector('.prod-price .costt').textContent);

    const product = {
        image,
        description,
        price,
    };
    cartArr.push(product);
    saveToLocalStorage();
    updateCartDisplay();
};

const addToCartButtons = document.querySelectorAll('.cart-btnn');
addToCartButtons.forEach((button) => {
    button.addEventListener('click', handleAddToCart);
});

const shopButtons = document.querySelectorAll('.shop-btn');
shopButtons.forEach(button => {
    button.addEventListener('click', shopFunc);
})

const handleAddToCartSubSection = (event) => {
    const button = event.target;
    const productContainer = button.closest('.category-cardd');

    const image = productContainer.querySelector('.product-picc').src;
    const description = productContainer.querySelector('.prod-descriptionn').textContent;
    const price = parseFloat(productContainer.querySelector('.prod-pricee .costt').textContent);

    const product = {
        image,
        description,
        price,
    };
    cartArr.push(product);
    saveToLocalStorage();
    updateCartDisplay();
};

const addToCartButtonsSubSection = document.querySelectorAll('.cart-btnnn');
addToCartButtonsSubSection.forEach((button) => {
    button.addEventListener('click', handleAddToCartSubSection);
});