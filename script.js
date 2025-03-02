const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');  // 
    });
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');  // 
    });
}
// Example of fetching products
async function getProducts() {
    try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        // Handle the data here
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}