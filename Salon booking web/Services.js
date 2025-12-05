function bookService(service, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        service: service,
        price: Number(price),
        image: image,
        date: null,  // user will pick this later
        time: null
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    // No prompt, no alert
    window.location.href = "cart.html"; // redirect user to cart page
}
