let menu = document.querySelector('.menu-icon');
menu.onclick = () => {
    menu.classList.toggle('move')
};
let header = document.querySelector('header');
window.addEventListener('scroll', ()=> {
    header.classList.toggle("header-active",window.scrollY > 0)
});
const animate = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: '10',
});
animate.reveal('.nav,.heading,.subscribe p,.email-box'); 
animate.reveal('.home-layer1,.home-layer2,.subscribe img', {origin: 'left'}); 
animate.reveal('.home-content', {origin: 'bottom'}); 
animate.reveal('.deal-box,.offer-box,.sale-box,.ticket-box,footer-box', {interval : 100}); 

const cartBtns = document.querySelectorAll('.addcart'); 
cartBtns.forEach(cartbtn => {
    cartbtn.addEventListener('click', (event) =>{
        event.preventDefault();
        const name = cartbtn.getAttribute('data-name');
        const price = cartbtn.getAttribute('data-price');
        const img = cartbtn.getAttribute('data-img');
        addToCart(name, price,img);
    });
});
let cart = [];
let total = 0;
function addToCart(pName,pPrice,pImg){
    cart.push({name:pName , price:pPrice ,img:pImg});
    total += Number(pPrice);
    renderCart();
}
function renderCart() {
    const cartContainer = document.querySelector('.cart-content');
    const totalPrice = document.getElementById('totalPrice');
    cartContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
        <div class="cart-info">
        <img src=${item.img} alt="">
        <h3>${item.name}</h3>
        <span>Price: $${item.price}</span>
        <a href="#" class="btn">Remove</a>
        </div>
        `;
        cartContainer.appendChild(cartItem);
    });
    if(totalPrice.textContent !== null){
        totalPrice.textContent = `Total: $${total}`;
    }

}
document.addEventListener('DOMContentLoaded', () => {
    const sideBar = document.querySelector('.side-bar');
    const closeBtn = document.querySelector('.close-btn');

    menu.addEventListener('click', () => {
        sideBar.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        sideBar.classList.remove('active');
        menu.classList.remove('move');
    });
});
