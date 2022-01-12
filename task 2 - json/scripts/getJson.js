function readJsonFile(file, callback) {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status === 200) {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


//use func
readJsonFile("./content/loanProducts.json", function(text){
    let products = JSON.parse(text);
    let productsList = document.getElementsByClassName("products-list").item(0);

    products.forEach(prod => {
        let productsListItem = document.createElement('div');
        let productsListItemName = document.createElement('h3');
        let productsListItemNDate = document.createElement('p');

        productsListItem.className = "products-list-item";
        productsListItem.setAttribute("onclick", 'loadProduct(this)');

        productsListItemName.className = "products-list-item__name";
        productsListItemNDate.className = "products-list-item__date";

        productsListItemName.innerText = prod.name;
        productsListItemName.setAttribute("id", prod.id);
        productsListItemName.setAttribute("name", prod.name);
        productsListItemName.setAttribute("min-amount", prod.min_amount);
        productsListItemName.setAttribute("max-amount", prod.max_amount);
        productsListItemName.setAttribute("min-term", prod.min_term);
        productsListItemName.setAttribute("max-term", prod.max_term);
        productsListItemName.setAttribute("rate", prod.rate);
        productsListItemNDate.innerText = prod.date;

        productsListItem.appendChild(productsListItemName);
        productsListItem.appendChild(productsListItemNDate);
        productsList.appendChild(productsListItem);
    })
});



