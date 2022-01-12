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

    let newProductData = getElemByClass('product-description__input_field');
    let oldProductData = getElemByClass('products-list-item_active').item(0).children.item(0);

    for(let i = 0; i < newProductData.length; i++) {
        oldProductData.setAttribute(newProductData[i].id, newProductData[i].value);
    }

    oldProductData.innerHTML = oldProductData.getAttribute("name");
    getElemByClass("product-description__header").item(0).innerHTML =
        "Редактирование: " + oldProductData.getAttribute("name");
}

