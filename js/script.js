const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const open = navList.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

const cartKey = "mayaCart";
const cartItems = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");

function getCart() {
  try { return JSON.parse(localStorage.getItem(cartKey)) || []; }
  catch (_) { return []; }
}

function saveCart(cart) {
  localStorage.setItem(cartKey, JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  if (!cartItems || !cartTotal) return;
  const cart = getCart();
  if (!cart.length) {
    cartItems.innerHTML = "<li>Cart is empty</li>";
    cartTotal.textContent = "$0.00";
    return;
  }
  cartItems.innerHTML = cart.map(item =>
    `<li><span>${item.name}</span><b>$${Number(item.price).toFixed(2)}</b></li>`
  ).join("");
  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

document.querySelectorAll(".add-button").forEach(button => {
  button.addEventListener("click", () => {
    const cart = getCart();
    cart.push({
      id: button.dataset.id,
      name: button.dataset.name,
      price: Number(button.dataset.price)
    });
    saveCart(cart);
    const original = button.textContent;
    button.textContent = "Added ✓";
    setTimeout(() => { button.textContent = original; }, 900);
  });
});

renderCart();

const bookingForm = document.querySelector("#booking-form");
if (bookingForm) {
  const dateInput = document.querySelector("#date");
  if (dateInput) {
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
      .toISOString().split("T")[0];
    dateInput.min = localToday;
  }

  bookingForm.addEventListener("submit", event => {
    event.preventDefault();
    const message = document.querySelector("#form-error");
    if (!bookingForm.checkValidity()) {
      bookingForm.reportValidity();
      message.textContent = "Please complete all required fields correctly.";
      message.className = "form-message";
      return;
    }
    const name = document.querySelector("#name").value.trim();
    message.textContent = `Thank you, ${name}! Your request has been confirmed. We will contact you shortly.`;
    message.className = "form-message success";
    bookingForm.reset();
  });
}
