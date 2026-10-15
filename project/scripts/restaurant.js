const dishes = [
    {
        name: "Grilled Chicken",
        description: "Herb marinade, seasonal sides",
        price: 329,
        category: "mains",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=80",
        alt: "Grilled chicken served with fresh sides"
    },
    {
        name: "Classic Burger",
        description: "House sauce, crisp lettuce",
        price: 399,
        category: "mains",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
        alt: "Classic burger with lettuce and tomato"
    },
    {
        name: "Creamy Alfredo",
        description: "Silky sauce, parmesan",
        price: 599,
        category: "pasta",
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=900&q=80",
        alt: "Creamy pasta served in a bowl"
    },
    {
        name: "Margherita Pizza",
        description: "Tomato, basil, mozzarella",
        price: 2599,
        category: "mains",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80",
        alt: "Freshly baked pizza topped with cheese and basil"
    },
    {
        name: "Chocolate Cake",
        description: "Rich chocolate, soft crumb",
        price: 3899,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
        alt: "Slice of chocolate cake"
    },
    {
        name: "Fresh Lemonade",
        description: "Lemon, mint, a little sparkle",
        price: 229,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1574689685526-a9281777ee89?auto=format&fit=crop&w=900&q=80",
        alt: "Refreshing lemonade with lemon slices"
    }
];

//terribly written code incoming

function createDishCard(dish) {
    const article = document.createElement("article");
    article.className = "dish-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "dish-image-wrap";

    const image = document.createElement("img");
    image.src = dish.image;
    image.alt = dish.alt;
    image.loading = "lazy";
    imageWrap.append(image);

    const info = document.createElement("div");
    info.className = "dish-info";

    const details = document.createElement("div");
    const heading = document.createElement("h3");
    heading.textContent = dish.name;
    const description = document.createElement("p");
    description.textContent = dish.description;
    details.append(heading, description);

    const price = document.createElement("span");
    price.className = "dish-price";
    price.textContent = `₱${dish.price}`;

    info.append(details, price);
    article.append(imageWrap, info);
    return article;
}

function renderDishes(container, items) {
    if (!container) return;
    container.replaceChildren();
    if (items.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No dishes found in this category.";
        container.append(message);
        return;
    }
    items.forEach(dish => container.append(createDishCard(dish)));
}

renderDishes(document.querySelector("#featured-dishes"), dishes.slice(0, 4));
renderDishes(document.querySelector("#all-dishes"), dishes);

const categoryFilter = document.querySelector("#category-filter");
if (categoryFilter) {
    categoryFilter.addEventListener("change", () => {
        const category = categoryFilter.value;
        const filteredDishes = category === "all"
            ? dishes
            : dishes.filter(dish => dish.category === category);
        renderDishes(document.querySelector("#all-dishes"), filteredDishes);
    });
}

const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector("#main-nav");
if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
        const isOpen = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", String(!isOpen));
        mainNav.classList.toggle("is-open", !isOpen);
    });
};
// footer year
const currentyear = document.querySelector("#currentyear")
const today = new Date();
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;