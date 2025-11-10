// 1. Select the main header by ID and log it
const mainHeader = document.getElementById('main-header');
console.info('Main header:', mainHeader);

// 2. Select all links inside .navbar and log count
const navLinks = document.querySelectorAll('.navbar a');
console.info(`Number of navbar links: ${navLinks.length}`);

// 3. Select internal links and append [internal] to their text
const internalLinks = document.querySelectorAll('.navbar a[href^="/"]');
internalLinks.forEach(link => {
    link.textContent = `${link.textContent} [internal]`;
});

// 4. Select required inputs and add yellow outline
const requiredInputs = document.querySelectorAll('input[required]');
requiredInputs.forEach(input => {
    input.style.outline = '2px solid gold';
});

// 5. Select all cards and add data-viewed attribute
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.setAttribute('data-viewed', 'true');
});

// 6. Select specific product and update price
const product = document.querySelector('.card[data-product-id="2"]');
const priceElement = product.querySelector('.price');
priceElement.textContent = '$24.99';
// lab 2
const title = document.querySelector('[data-title-id="1"]'); // Modified to use data attribute selector
console.info(title);
const button = document.querySelector('.btn');
if (button) {
  button.addEventListener("click", handleClick); // Added event listener for click event
} else {
  console.info("Button not found—check your selector");
}
function handleClick() {
  console.info("Button clicked!");
}