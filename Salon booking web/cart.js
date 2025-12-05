// ===== CART LOGIC =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");

// Render cart items
function renderCart() {
    cartContainer.innerHTML = ""; // clear container
    let total = 0;

    cart.forEach((item, index) => {
        total += Number(item.price);

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
            <img src="${item.image || 'default.jpg'}">
            <div class="cart-info">
                <h4>${item.service}</h4>
                <p>£${item.price}</p>
                <p>Date: ${item.date || "Not selected"}</p>
                <p>Time: ${item.time || "Not selected"}</p>
            </div>
            <button class="remove-btn">Remove</button>
        `;

        // Remove button
        itemDiv.querySelector(".remove-btn").addEventListener("click", () => {
            removeItem(index);
        });

        cartContainer.appendChild(itemDiv);
    });

    totalPriceEl.textContent = total;
}

// Remove item from cart
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// Save date/time to all items
document.getElementById("saveDateTime").addEventListener("click", () => {
    const date = document.getElementById("appointmentDate").value;
    const time = document.getElementById("appointmentTime").value;

    // Skip if not selected, no alert
    if (!date || !time) return;

    // Update all items
    cart = cart.map(item => ({
        ...item,
        date: date,
        time: time
    }));

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart(); // re-render with updated date/time
});

// Initial render
renderCart();
