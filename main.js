//Массив товаров
const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];


//Функция для формирования верстки каждого товара
const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <img src="https://static.rendez-vous.ru/files/catalog_models/resize_640x630/1/1868764_krossovki_ash_addict_belyy_kozha_natural_naya.JPG" alt="фото товара">
                <button class="buy-btn">Купить</button>
            </div>`
};

//Создаем новый массив с версткой и добавляем его в верстку с классом ProductList
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title,item.price));
    document.querySelector('.products').innerHTML = productsList.join(''); //При присваивании массива свойству .innerHTML, у него автоматически вызывается метод .toString, который эквивалентен вызову метода .join(',').
};

renderPage(products);