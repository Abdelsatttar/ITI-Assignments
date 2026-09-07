// Task 1
document.getElementById("update-btn").onclick = function() {
    document.getElementById("display-name").innerHTML = document.getElementById("input-name").value;
    document.getElementById("display-age").innerHTML = document.getElementById("input-age").value;
};


// Task 2
document.getElementById("toggle-btn").onclick = function() {
    document.body.classList.toggle("dark-mode");
};


// Task 3
document.getElementById("btn-cat").onclick = function() {
    document.getElementById("my-image").setAttribute("src", "https://cataas.com/cat"); 
};

document.getElementById("btn-dog").onclick = function() {
    document.getElementById("my-image").setAttribute("src", "https://placedog.net/300/300");
};

document.getElementById("btn-remove").onclick = function() {
    document.getElementById("my-image").removeAttribute("src");
};


// Task 5
document.getElementById("add-product-btn").onclick = function() {
    let card = document.createElement("div");
    card.className = "product-card"; 
    
    let prodImg = document.createElement("img");
    prodImg.setAttribute("src", "https://via.placeholder.com/100");
    card.appendChild(prodImg); 

    let prodName = document.createElement("h3");
    prodName.innerHTML = "Awesome Product";
    card.appendChild(prodName);
    
    let prodPrice = document.createElement("p");
    prodPrice.innerHTML = "Price: $99";
    card.appendChild(prodPrice);
    
    let buyBtn = document.createElement("button");
    buyBtn.innerHTML = "Buy Now";
    card.appendChild(buyBtn);
    
    document.getElementById("products-container").appendChild(card);
};