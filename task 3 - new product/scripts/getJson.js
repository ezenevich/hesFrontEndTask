const readJsonFile = () => {
    fetch("./content/loanProducts.json")
        .then(response => response.json())
        .then(json => {
            let products = [...json];

            let productsList = document.querySelector(".products-list");

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
        })
        .catch(() => {
            let productsList = document.querySelector(".products-list");
            let errMessage = document.createElement('h3');
            errMessage.className = "products-list-item__name";
            errMessage.innerText = '404 - loans not found!';
            productsList.appendChild(errMessage);
        })
};

readJsonFile();


