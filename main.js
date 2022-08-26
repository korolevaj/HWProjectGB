class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = []; // записывается в методе fetchProducts
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
             const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
//              block.innerHTML += item.render();
        }
    }
}


class ProductItem{
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
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

let list = new ProductList();

class BasketGoods{
    constructor(basket){
        this.boughtProducts=[]; // купленные товары
        this._boughtProductList();
        this.plusGoods(); // добавить товары в корзину
        this.minusGoods(); // удалить товары из корзины
        this.changeCount(); // изменение количества товара в корзине
        this.calculatePrice(); // расчет цены
    }
    _boughtProductList(){
        this.boughtProducts = [
            {count: 1, title: 'Notebook', price: 2000},
            {count: 1, title: 'Mouse', price: 20},
            {count: 1, title: 'Keyboard', price: 200},
            {count: 1, title: 'Gamepad', price: 50},
        ];
    }
    calculatePrice() {
        if(boughtProducts === undefined) {
            return 0 ;
           }else if (boughtProducts.length === 0) {
            return 0;
            }else {
           return boughtProducts.reduce((acc, curr) => {return acc + curr.price;}, 0);
            }
        }
    }


class BasketProduct{
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.count = product.count;
        this.title = product.title;
        this.price = product.price;
    }
}