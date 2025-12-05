let cart = JSON.parse(localStorage.getItem("cart")) || [];

const summaryItems = document.getElementById("summary-items");
const summaryTotal = document.getElementById("summary-total");
const dateBox = document.getElementById("checkoutDate");
const timeBox = document.getElementById("checkoutTime");

let total = 0;
summaryItems.innerHTML = "";

// Render each cart item
cart.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("summary-item");
    itemDiv.innerHTML = `
        <p>${item.service} - £${item.price}</p>
    `;
    summaryItems.appendChild(itemDiv);
    total += Number(item.price);
});

// Display total
summaryTotal.textContent = total;

// Display date and time (assuming same date/time for all items)
if (cart.length > 0) {
    dateBox.textContent = cart[0].date || "Not selected";
    timeBox.textContent = cart[0].time || "Not selected";
}
