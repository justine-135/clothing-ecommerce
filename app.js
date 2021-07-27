const addToCart = document.querySelectorAll(".card-top button");
const cards = document.querySelectorAll(".card");
const showCart = document.querySelector(".top-nav button");
const cartDiv = document.querySelector(".cart-div");
const cartDivInside = document.querySelector(".cart-div-inside");
const main = document.querySelector("main");
const addCartBtn = document.querySelectorAll(".card-top button");
const empyIcon = document.querySelector(".empty-person");
let counter = document.querySelector(".top-nav button h6");

showCart.addEventListener("click", () => {
	// cartDiv.classList.add("animate__fadeInTopRight");
	cartDiv.classList.toggle("show-cart");
});

function cartItemsCount() {
	let itemCount = cartDivInside.childElementCount;

	counter.innerHTML = itemCount;
	if (counter.innerHTML == "0") {
		empyIcon.style.display = "block";
	}
	console.log(itemCount);
}

for (let i = 0; i < addCartBtn.length; i++) {
	addCartBtn[i].addEventListener("click", () => {
		let item =
			addCartBtn[i].parentElement.parentElement.childNodes[3].childNodes[1]
				.childNodes[1];

		let itemPrice =
			addCartBtn[i].parentElement.parentElement.childNodes[3].childNodes[1]
				.childNodes[3];
		empyIcon.style.display = "none";
		addToCartItem(item, itemPrice);

		cartItemsCount();
	});
}

function removeItemFunc() {
	const removeItem = document.querySelectorAll(".close-item");

	for (let i = 0; i < removeItem.length; i++) {
		removeItem[i].addEventListener("click", (event) => {
			event.target.parentElement.remove();

			cartItemsCount();
		});
	}
}

function addToCartItem(item, price) {
	let eachItem = document.querySelectorAll(".item-name");
	console.log(item);
	for (let i = 0; i < eachItem.length; i++) {
		if (eachItem[i].value == item.innerHTML) {
			alert("Item is added");
			return;
		}
	}
	let createDiv = document.createElement("div");
	createDiv.setAttribute("class", "cart-div-items");
	let formContents = `
    <div class="item-img"></div>
    <input readonly class="item-name" type="text" name="item-name" value="${item.innerHTML}" id="" />
    <div class="quantity-div">
        <input
            readonly
            type="number"
            name="item-quantity"
            value="${price.innerHTML}"
            id=""
        />
        <div class="quantity-btn">
            <button class="up-btn">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="sort-down"
                    class="svg-inline--fa fa-sort-down fa-w-10"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                >
                    <path
                        fill="currentColor"
                        d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
                    ></path>
                </svg>
            </button>
            <button>
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="sort-down"
                    class="svg-inline--fa fa-sort-down fa-w-10"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                >
                    <path
                        fill="currentColor"
                        d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
                    ></path>
                </svg>
            </button>
        </div>
    </div>
    <button class="close-item">
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="times-circle"
            class="svg-inline--fa fa-times-circle fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill="currentColor"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
            ></path>
        </svg>
    </button>
    `;

	createDiv.innerHTML = formContents;
	cartDivInside.prepend(createDiv);
	// cartDiv.appendChild(createDiv);
	removeItemFunc();
}
