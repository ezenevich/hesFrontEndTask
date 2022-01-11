const getElemByClass = (className) => {
    return document.getElementsByClassName(className).item(0);
}

const getElemById = (id) => {
    return document.getElementById(id);
}

const useProduct = (item) => {
    let lastActiveItem = getElemByClass("products-list-item_active");
    if(lastActiveItem){
        lastActiveItem.className = "products-list-item";
    }

    item.className += " products-list-item_active";

    let itemData = item.children.item(0);
    for(let i = 2; i < itemData.attributes.length; i++){
        getElemById(itemData.attributes.item(i).name).value = itemData.attributes.item(i).nodeValue;
    }

    let productHeader = getElemByClass("product-description__header");
    productHeader.innerHTML = "Редактирование: " + itemData.getAttribute("name");

}

