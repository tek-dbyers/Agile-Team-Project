function getProducts() {
    
    return [];

}
let products = getProducts();
let comingSoon = document.querySelector('#coming-soon');
if (products.length === 0 ) {
    comingSoon.style.visibility = 'visible'
} 

/*
function myFunction() {
    document.getElementsByClassName("button").innerHTML = "Item added to cart";
}
*/