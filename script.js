const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');  // Toggle instead of just adding
    });
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');  // Toggle instead of just adding
    });
}