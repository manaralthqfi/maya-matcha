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
    const fields = {
      name: { element: document.querySelector("#name"), error: document.querySelector("#name-error"), empty: "Please enter your full name.", short: "Name must contain at least 3 characters." },
      email: { element: document.querySelector("#email"), error: document.querySelector("#email-error"), empty: "Please enter your email address.", invalid: "Please enter a valid email address." },
      phone: { element: document.querySelector("#phone"), error: document.querySelector("#phone-error"), empty: "Please enter your phone number.", invalid: "Phone number must contain exactly 10 digits." },
      orderType: { element: document.querySelector("#orderType"), error: document.querySelector("#orderType-error"), empty: "Please select an order type." },
      date: { element: document.querySelector("#date"), error: document.querySelector("#date-error"), empty: "Please select a date.", invalid: "Please select a valid future date." },
      time: { element: document.querySelector("#time"), error: document.querySelector("#time-error"), empty: "Please select a time." },
      terms: { element: document.querySelector("#terms"), error: document.querySelector("#terms-error"), empty: "Please agree to the order and pickup policy." }
    };

    let valid = true;
    Object.values(fields).forEach(field => {
      if (field.element) field.element.classList.remove("invalid");
      if (field.error) field.error.textContent = "";
    });

    if (!fields.name.element.value.trim()) {
      fields.name.error.textContent = fields.name.empty;
      fields.name.element.classList.add("invalid");
      valid = false;
    } else if (fields.name.element.value.trim().length < 3) {
      fields.name.error.textContent = fields.name.short;
      fields.name.element.classList.add("invalid");
      valid = false;
    }

    if (!fields.email.element.value.trim()) {
      fields.email.error.textContent = fields.email.empty;
      fields.email.element.classList.add("invalid");
      valid = false;
    } else if (!fields.email.element.validity.valid) {
      fields.email.error.textContent = fields.email.invalid;
      fields.email.element.classList.add("invalid");
      valid = false;
    }

    if (!fields.phone.element.value.trim()) {
      fields.phone.error.textContent = fields.phone.empty;
      fields.phone.element.classList.add("invalid");
      valid = false;
    } else if (!fields.phone.element.validity.valid) {
      fields.phone.error.textContent = fields.phone.invalid;
      fields.phone.element.classList.add("invalid");
      valid = false;
    }

    if (!fields.orderType.element.value) {
      fields.orderType.error.textContent = fields.orderType.empty;
      fields.orderType.element.classList.add("invalid");
      valid = false;
    }

    if (!fields.date.element.value) {
      fields.date.error.textContent = fields.date.empty;
      fields.date.element.classList.add("invalid");
      valid = false;
    } else if (!fields.date.element.validity.valid) {
      fields.date.error.textContent = fields.date.invalid;
      fields.date.element.classList.add("invalid");
      valid = false;
    }

    if (!fields.time.element.value) {
      fields.time.error.textContent = fields.time.empty;
      fields.time.element.classList.add("invalid");
      valid = false;
    }

    if (!fields.terms.element.checked) {
      valid = false;
      fields.terms.element.closest("label").classList.add("invalid");
      fields.terms.error.textContent = fields.terms.empty;
    } else {
      fields.terms.element.closest("label").classList.remove("invalid");
      fields.terms.error.textContent = "";
    }

    if (!valid) {
      message.textContent = "Please correct the highlighted fields.";
      message.className = "form-message";
      return;
    }
    const name = document.querySelector("#name").value.trim();
    message.textContent = `Thank you, ${name}! Your request has been confirmed. We will contact you shortly.`;
    message.className = "form-message success";
    bookingForm.reset();
  });
}
