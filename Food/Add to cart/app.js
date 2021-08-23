let products = [
    {
        name: "Beef Chicken burger",
        price: 400,
        image : "https://www.seriouseats.com/thmb/ON5cp8ZmQYYuKru9VMuXEZAJL5I=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__07__20150702-sous-vide-hamburger-anova-primary-bf5eefff4505446f9cbf33f5f2d9b2e6.jpg"  
    },
    {
        name: "Beef Burger",
        price: 450,
        image: "https://c.ndtvimg.com/2020-04/0830h4j_burger_625x300_22_April_20.jpg" 
    },
    {
        name: "Zinger Burger",
        price: 500,
        image: "https://st2.depositphotos.com/1020618/8867/i/600/depositphotos_88670080-stock-photo-close-up-of-home-made.jpg"   
    },
    {
        name: "Nulli Biryani",
        price: 230,
        image: "https://i.ytimg.com/vi/mgtmAA_gjtU/maxresdefault.jpg"   
     }, 

    
];


let main = document.getElementById('products');

for(var i = 0; i < products.length; i++){
    main.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${products[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${products[i].name}</h5>
        <p class="card-text">${products[i].price} Rupees</p>
        <a href="#" onclick='addToCart("${products[i].name}","${products[i].price}","${products[i].image}")' class="btn btn-primary">ADD TO CART</a>
    </div>
</div>
    `
}

let allCarts = [];
let carts = localStorage.getItem('carts')

if(carts !== null){
   allCarts = JSON.parse(carts)
   let cart_badge = document.getElementById('cart_badge');
   cart_badge.innerHTML = allCarts.length
}

function addToCart(name,price,image){
    let cart = {
        name,
        price,
        image
    }
    allCarts.push(cart)
    localStorage.setItem('carts',JSON.stringify(allCarts))
    let cart_badge = document.getElementById('cart_badge');
    cart_badge.innerHTML = allCarts.length
} 
 