const CatalogAPI = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';
const BasketAPI = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json';

class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = []; // массив товаров из JSON
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = data;
                this.render()
            });
    }

    _getProducts(){
        return fetch(CatalogAPI)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }
    calculatePrice() {
        let p = 0;
        this.goods.forEach(item=>{
            p+=item.price;
        })
    }
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
             const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
        }
    }
}


class ProductItem{
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render(){
           return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class BasketGoods{
    constructor(container='.basketGoods'){
        this.container = container;
        this.goods = []; // массив товаров из JSON
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = data;
                this.render()
            });
    }
    _getProducts(){
        return fetch(BasketAPI)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
        }
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
             const item = new BasketProduct(product);
             block.insertAdjacentHTML("beforeend",item.render());
        }
    }
}

class BasketProduct{
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
        this.quantity = product.quantity;
    }
    render(){
        return `<div class="basket-item">
                    <img src="${this.img}">
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                    <p>${this.quantity}</p>
                </div>`
    }
}


let list = new ProductList();