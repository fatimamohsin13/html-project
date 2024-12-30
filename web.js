const slides=document.querySelectorAll(".slide");
let counter=0;

slides.forEach(
 (slide,index)=>{
    slide.style.left=`${index *100}%`
 }
)

const goprev = () => {

    if (counter > 0) {
    counter--
    slideImage()
    }
}
const gonext = () => {
    
    if (counter < slides.length - 1){
    counter++
    slideImage()
    }

}

const slideImage =() => {
  
  
    slides.forEach(
       
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
            
            
        }
    )
}

function mouseover(element){
    element.style.color='red';

}

function mouseout(element){
    element.style.color= 'white';
}
function mouse(element){
    element.style.color='black';
}
function addToCart(productName) {
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push(productName);

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} added to cart!`);
}


function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartitems = document.getElementById('cart-items');

    if (cart.length === 0) {
        cartitems.innerHTML = '<p>Your cart is empty!</p>';
    } else {
        cartitems.innerHTML = cart
            .map(item => `<div class="cart-item">${item}</div>`)
            .join('');
    }
}
window.onload = loadCart; 


function clearCart()
 {
    localStorage.removeItem('cart');
    loadCart(); 
    alert('Cart has been cleared!');
}




