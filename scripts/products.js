const getElemByClass = (className) => {
    return document.getElementsByClassName(className);
}


const getElemById = (id) => {
    return document.getElementById(id);
}


const loadProduct = (item) => {
    let lastActiveItem = getElemByClass("products-list-item_active").item(0);
    if(lastActiveItem){
        lastActiveItem.className = "products-list-item";
    }

    item.className += " products-list-item_active";

    let itemData = item.children.item(0);
    for(let i = 2; i < itemData.attributes.length; i++){
        getElemById(itemData.attributes.item(i).name).value = itemData.attributes.item(i).nodeValue;
    }

    let productHeader = getElemByClass("product-description__header").item(0);
    productHeader.innerHTML = "Редактирование: " + itemData.getAttribute("name");

}


const inputsNotEmpty = () => {
    let inputs = getElemByClass('product-description__input_field');
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].value === ''){
            alert("Все поля должны быть заполнены!");
            inputs[i].focus();
            return false;
        }
    }
    return true;
}


const saveProduct = () => {
    if(!inputsNotEmpty()){
        return 0;
    }
    if(getElemByClass("product-description__header").item(0).textContent === "Редактирование: ") {
        addNewProduct();
        return 0;
    }

    let newProductData = getElemByClass('product-description__input_field');
    let oldProductData = getElemByClass('products-list-item_active').item(0).children.item(0);

    for(let i = 0; i < newProductData.length; i++) {
        oldProductData.setAttribute(newProductData[i].id, newProductData[i].value);
    }

    oldProductData.innerHTML = oldProductData.getAttribute("name");
    getElemByClass("product-description__header").item(0).innerHTML =
        "Редактирование: " + oldProductData.getAttribute("name");
}


const clearProduct = () => {
    let lastActiveItem = getElemByClass("products-list-item_active").item(0);
    if(lastActiveItem){
        lastActiveItem.className = "products-list-item";
    }

    let productData = getElemByClass('product-description__input_field');
    for(let i = 0; i < productData.length; i++) {
        productData[i].value = '';
    }

    getElemByClass("product-description__header").item(0).innerHTML = "Редактирование: ";
}


const addNewProduct = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let todayString = dd + '.' + mm + '.' + yyyy;

    let productsList = document.getElementsByClassName("products-list").item(0);

    let productsListItem = document.createElement('div');
    let productsListItemName = document.createElement('h3');
    let productsListItemNDate = document.createElement('p');

    productsListItem.className = "products-list-item products-list-item_active";
    productsListItem.setAttribute("onclick", 'loadProduct(this)');

    productsListItemName.className = "products-list-item__name";
    productsListItemNDate.className = "products-list-item__date";


    let productData = getElemByClass('product-description__input_field');

    let productHeader = getElemByClass("product-description__header").item(0);
    productHeader.innerHTML = "Редактирование: " + productData[0].value;
    productsListItemName.setAttribute("id", today.getTime().toString()); //id по милисикундам времени

    productsListItemName.innerText = productData[0].value;

    for(let i = 0; i < productData.length; i++) {
        productsListItemName.setAttribute(productData[i].id, productData[i].value);
    }

    productsListItemNDate.innerText = todayString;

    productsListItem.appendChild(productsListItemName);
    productsListItem.appendChild(productsListItemNDate);
    productsList.appendChild(productsListItem);
}

