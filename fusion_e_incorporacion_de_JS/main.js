const navUser = document.querySelector('.navbar_user');
const desktop_menu = document.querySelector('.desktop_menu');
const menu_ham_icon = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile_menu');
const carrito_icon = document.querySelector('.navbar_sopping_cart');
const aside = document.querySelector('.product-detail');
const contenedorTarjetas = document.querySelector(".cards_container");
const botonAll = document.querySelector('#all');
const botonClothes = document.querySelector('#clothes');
const botonElectronics = document.querySelector('#electronics');
const botonFurnitures = document.querySelector('#furnitures');
const botonToys = document.querySelector('#toys');
const botonOthers = document.querySelector('#others');
const botonAllMobile = document.querySelector('#all_mobile');
const botonClothesMobile = document.querySelector('#clothes_mobile');
const botonElectronicsMobile = document.querySelector('#electronics_mobile');
const botonFurnituresMobile = document.querySelector('#furnitures_mobile');
const botonToysMobile = document.querySelector('#toys_mobile');
const botonOthersMobile = document.querySelector('#others_mobile');

let productos = [];
let opcionesDeProductos;

class producto{
    constructor(imagen, precio, nombre, tipo){
        this.imagen = imagen;
        this.precio = precio;
        this.nombre = nombre;
        this.tipo = tipo;
    }
}

let bicicleta = new producto ("./Productos/pexels-photo-276517.jpeg", "120", "Bicicleta", "others");
let carroJuguete = new producto ("./Productos/carro_juguete.jpg", "10", "carro de juguete", "toys");
let camisetaNegra = new producto ("./Productos/camiseta_negra.jpg", "9", "camiseta negra", "clothes");
let muebleTv = new producto ("./Productos/mueble_televisor.jpg", "150", "mueble televisor", "furnitures");
let celularOppo = new producto ("./Productos/celulares-oppo.jpg", "300", "calular oppo", "electronics");
let faldaRosa = new producto ("./Productos/falda_rosa.jpg", "15", "falda rosa", "clothes");
let monopatin = new producto ("./Productos/monopatin.jpg", "100", "Monopatin", "others");
let sillon = new producto ("./Productos/sillon.jpg", "90", "sillon", "furnitures");
let smartwatch = new producto ("./Productos/smartwatch.jpg", "250", "smartwatch", "electronics");
let babyYoda = new producto ("./Productos/baby_yoda.jpg", "30", "baby yoda", "toys");
let camaDoble = new producto ("./Productos/cama_doble.jpg", "150", "Cama doble", "furnitures");
let muebleL = new producto ("./Productos/Mueble_L.jpg", "100", "Mueble L", "furnitures");
let vestidoVerde = new producto ("./Productos/Vestido_verde.jpg", "30", "Vestido Verde", "clothes");

productos.push(bicicleta, carroJuguete, vestidoVerde, camisetaNegra, muebleTv, celularOppo, muebleL, faldaRosa, monopatin, sillon, smartwatch, babyYoda, camaDoble);

navUser.addEventListener('click', toggle_Desktop_Menu);
menu_ham_icon.addEventListener('click', toggle_Mobile_Menu);
carrito_icon.addEventListener('click', toggle_Carrito);
botonAll.addEventListener('click', tarjetas_producto_All);
botonClothes.addEventListener('click', tarjetas_producto_clothes);
botonElectronics.addEventListener('click', tarjetas_producto_electronics);
botonFurnitures.addEventListener('click', tarjetas_producto_furnitures);
botonToys.addEventListener('click', tarjetas_producto_toys);
botonOthers.addEventListener('click', tarjetas_producto_others);
botonAllMobile.addEventListener('click', tarjetas_producto_All_mobile);
botonClothesMobile.addEventListener('click', tarjetas_producto_clothes_mobile);
botonElectronicsMobile.addEventListener('click', tarjetas_producto_electronics_mobile);
botonFurnituresMobile.addEventListener('click', tarjetas_producto_furnitures_mobile);
botonToysMobile.addEventListener('click', tarjetas_producto_toys_mobile);
botonOthersMobile.addEventListener('click', tarjetas_producto_others_mobile);

function toggle_Desktop_Menu (){
    const is_carrito_open = carrito_icon.classList.contains('inactive');
    if (!is_carrito_open){
        aside.classList.add('inactive');
    }
    desktop_menu.classList.toggle('inactive');
    navUser.classList.toggle('bold');
}

function toggle_Mobile_Menu (){
    const is_carrito_open = carrito_icon.classList.contains('inactive');
    if (!is_carrito_open){
        aside.classList.add('inactive');
    }
    mobile_menu.classList.toggle('inactive');
}

function toggle_Carrito (){
    const is_mobile_menu_closed = mobile_menu.classList.contains('inactive');
    const is_desktop_menu_closed = desktop_menu.classList.contains('inactive');
    if (!is_mobile_menu_closed){
        mobile_menu.classList.add('inactive');
    } else if (!is_desktop_menu_closed){
        desktop_menu.classList.add('inactive');
        navUser.classList.add('bold');
    }
    aside.classList.toggle('inactive');
}

function tarjetas_producto_All(){

    const is_clothes_boton_disable = botonClothes.classList.contains('disable');
    const is_electronics_boton_disable = botonElectronics.classList.contains('disable');
    const is_furnitures_boton_disable = botonFurnitures.classList.contains('disable');
    const is_toys_boton_disable = botonToys.classList.contains('disable');
    const is_others_boton_disable = botonOthers.classList.contains('disable');

    if(is_clothes_boton_disable){
        botonClothes.classList.remove('disable');
    }else if(is_electronics_boton_disable){
        botonElectronics.classList.remove('disable');
    }else if(is_furnitures_boton_disable){
        botonFurnitures.classList.remove('disable');
    }else if(is_toys_boton_disable){
        botonToys.classList.remove('disable');
    }else if(is_others_boton_disable){
        botonOthers.classList.remove('disable');
    }

    contenedorTarjetas.innerHTML = ' ';

    productos.forEach((producto) => {
        opcionesDeProductos = `
        <div class="product_card ${producto.tipo}">
            <img src=${producto.imagen} alt=${producto.nombre}>
            <div class="product_info">
                <div>
                    <h1>$ ${producto.precio}</h1>
                    <p>${producto.nombre}</p>
                </div>
                <figure>
                    <img src="./Iconos/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
        </div>`
        contenedorTarjetas.innerHTML += opcionesDeProductos;
    })
    botonAll.classList.add('disable');
}

function tarjetas_producto_clothes(){
    const is_all_boton_disable = botonAll.classList.contains('disable');
    const is_electronics_boton_disable = botonElectronics.classList.contains('disable');
    const is_furnitures_boton_disable = botonFurnitures.classList.contains('disable');
    const is_toys_boton_disable = botonToys.classList.contains('disable');
    const is_others_boton_disable = botonOthers.classList.contains('disable');

    if(is_all_boton_disable){
        botonAll.classList.remove('disable');
    }else if(is_electronics_boton_disable){
        botonElectronics.classList.remove('disable');
    }else if(is_furnitures_boton_disable){
        botonFurnitures.classList.remove('disable');
    }else if(is_toys_boton_disable){
        botonToys.classList.remove('disable');
    }else if(is_others_boton_disable){
        botonOthers.classList.remove('disable');
    }

    contenedorTarjetas.innerHTML = ' ';

    for (var i = 0; i < productos.length; i++) {

        if(productos[i].tipo == "clothes"){

            opcionesDeProductos = `
            <div class="product_card ${productos[i].tipo}">
                <img src=${productos[i].imagen} alt=${productos[i].nombre}>
                <div class="product_info">
                    <div>
                        <h1>$ ${productos[i].precio}</h1>
                        <p>${productos[i].nombre}</p>
                    </div>
                    <figure>
                        <img src="./Iconos/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>`
            contenedorTarjetas.innerHTML += opcionesDeProductos;
          
        }

    }

    botonClothes.classList.add('disable');
}

function tarjetas_producto_electronics(){
    const is_all_boton_disable = botonAll.classList.contains('disable');
    const is_clothes_boton_disable = botonClothes.classList.contains('disable');
    const is_furnitures_boton_disable = botonFurnitures.classList.contains('disable');
    const is_toys_boton_disable = botonToys.classList.contains('disable');
    const is_others_boton_disable = botonOthers.classList.contains('disable');

    if(is_all_boton_disable){
        botonAll.classList.remove('disable');
    }else if(is_clothes_boton_disable){
        botonClothes.classList.remove('disable');
    }else if(is_furnitures_boton_disable){
        botonFurnitures.classList.remove('disable');
    }else if(is_toys_boton_disable){
        botonToys.classList.remove('disable');
    }else if(is_others_boton_disable){
        botonOthers.classList.remove('disable');
    }
    
    contenedorTarjetas.innerHTML = ' ';

    for (var i = 0; i < productos.length; i++) {

        if(productos[i].tipo == "electronics"){

            opcionesDeProductos = `
            <div class="product_card ${productos[i].tipo}">
                <img src=${productos[i].imagen} alt=${productos[i].nombre}>
                <div class="product_info">
                    <div>
                        <h1>$ ${productos[i].precio}</h1>
                        <p>${productos[i].nombre}</p>
                    </div>
                    <figure>
                        <img src="./Iconos/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>`
            contenedorTarjetas.innerHTML += opcionesDeProductos;
          
        }

    }

    botonElectronics.classList.add('disable');
}

function tarjetas_producto_furnitures(){
    const is_all_boton_disable = botonAll.classList.contains('disable');
    const is_clothes_boton_disable = botonClothes.classList.contains('disable');
    const is_electronics_boton_disable = botonElectronics.classList.contains('disable');
    const is_toys_boton_disable = botonToys.classList.contains('disable');
    const is_others_boton_disable = botonOthers.classList.contains('disable');

    if(is_all_boton_disable){
        botonAll.classList.remove('disable');
    }else if(is_electronics_boton_disable){
        botonElectronics.classList.remove('disable');
    }else if(is_clothes_boton_disable){
        botonClothes.classList.remove('disable');
    }else if(is_toys_boton_disable){
        botonToys.classList.remove('disable');
    }else if(is_others_boton_disable){
        botonOthers.classList.remove('disable');
    }

    contenedorTarjetas.innerHTML = ' ';

    for (var i = 0; i < productos.length; i++) {

        if(productos[i].tipo == "furnitures"){

            opcionesDeProductos = `
            <div class="product_card ${productos[i].tipo}">
                <img src=${productos[i].imagen} alt=${productos[i].nombre}>
                <div class="product_info">
                    <div>
                        <h1>$ ${productos[i].precio}</h1>
                        <p>${productos[i].nombre}</p>
                    </div>
                    <figure>
                        <img src="./Iconos/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>`
            contenedorTarjetas.innerHTML += opcionesDeProductos;
          
        }

    }
    
    botonFurnitures.classList.add('disable');
}

function tarjetas_producto_toys(){
    const is_all_boton_disable = botonAll.classList.contains('disable');
    const is_clothes_boton_disable = botonClothes.classList.contains('disable');
    const is_electronics_boton_disable = botonElectronics.classList.contains('disable');
    const is_furnitures_boton_disable = botonFurnitures.classList.contains('disable');
    const is_others_boton_disable = botonOthers.classList.contains('disable');

    if(is_all_boton_disable){
        botonAll.classList.remove('disable');
    }else if(is_electronics_boton_disable){
        botonElectronics.classList.remove('disable');
    }else if(is_furnitures_boton_disable){
        botonFurnitures.classList.remove('disable');
    }else if(is_clothes_boton_disable){
        botonClothes.classList.remove('disable');
    }else if(is_others_boton_disable){
        botonOthers.classList.remove('disable');
    }

    contenedorTarjetas.innerHTML = ' ';

    for (var i = 0; i < productos.length; i++) {

        if(productos[i].tipo == "toys"){

            opcionesDeProductos = `
            <div class="product_card ${productos[i].tipo}">
                <img src=${productos[i].imagen} alt=${productos[i].nombre}>
                <div class="product_info">
                    <div>
                        <h1>$ ${productos[i].precio}</h1>
                        <p>${productos[i].nombre}</p>
                    </div>
                    <figure>
                        <img src="./Iconos/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>`
            contenedorTarjetas.innerHTML += opcionesDeProductos;
          
        }

    }
    
    botonToys.classList.add('disable');
}

function tarjetas_producto_others(){
    const is_all_boton_disable = botonAll.classList.contains('disable');
    const is_clothes_boton_disable = botonClothes.classList.contains('disable');
    const is_electronics_boton_disable = botonElectronics.classList.contains('disable');
    const is_furnitures_boton_disable = botonFurnitures.classList.contains('disable');
    const is_toys_boton_disable = botonToys.classList.contains('disable');

    if(is_all_boton_disable){
        botonAll.classList.remove('disable');
    }else if(is_electronics_boton_disable){
        botonElectronics.classList.remove('disable');
    }else if(is_furnitures_boton_disable){
        botonFurnitures.classList.remove('disable');
    }else if(is_toys_boton_disable){
        botonToys.classList.remove('disable');
    }else if(is_clothes_boton_disable){
        botonClothes.classList.remove('disable');
    }

    contenedorTarjetas.innerHTML = ' ';

    for (var i = 0; i < productos.length; i++) {

        if(productos[i].tipo == "others"){

            opcionesDeProductos = `
            <div class="product_card ${productos[i].tipo}">
                <img src=${productos[i].imagen} alt=${productos[i].nombre}>
                <div class="product_info">
                    <div>
                        <h1>$ ${productos[i].precio}</h1>
                        <p>${productos[i].nombre}</p>
                    </div>
                    <figure>
                        <img src="./Iconos/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>`
            contenedorTarjetas.innerHTML += opcionesDeProductos;
          
        }

    }
    
    botonOthers.classList.add('disable');
}

function tarjetas_producto_All_mobile(){

    const is_mobile_menu_closed = mobile_menu.classList.contains('inactive');

    if (!is_mobile_menu_closed){
        mobile_menu.classList.add('inactive');
    }

    contenedorTarjetas.innerHTML = ' ';

    productos.forEach((producto) => {
        opcionesDeProductos = `
        <div class="product_card ${producto.tipo}">
            <img src=${producto.imagen} alt=${producto.nombre}>
            <div class="product_info">
                <div>
                    <h1>$ ${producto.precio}</h1>
                    <p>${producto.nombre}</p>
                </div>
                <figure>
                    <img src="./Iconos/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
        </div>`
        contenedorTarjetas.innerHTML += opcionesDeProductos;
    })

}

function tarjetas_producto_clothes_mobile() {

    const is_mobile_menu_closed = mobile_menu.classList.contains('inactive');
    
    if (!is_mobile_menu_closed){
        mobile_menu.classList.add('inactive');
    }

    contenedorTarjetas.innerHTML = ' ';

    for (var i = 0; i < productos.length; i++) {

        if(productos[i].tipo == "clothes"){

            opcionesDeProductos = `
            <div class="product_card ${productos[i].tipo}">
                <img src=${productos[i].imagen} alt=${productos[i].nombre}>
                <div class="product_info">
                    <div>
                        <h1>$ ${productos[i].precio}</h1>
                        <p>${productos[i].nombre}</p>
                    </div>
                    <figure>
                        <img src="./Iconos/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>`
            contenedorTarjetas.innerHTML += opcionesDeProductos;
          
        }

    }

}

function tarjetas_producto_electronics_mobile() {

    const is_mobile_menu_closed = mobile_menu.classList.contains('inactive');
    
    if (!is_mobile_menu_closed){
        mobile_menu.classList.add('inactive');
    }

    contenedorTarjetas.innerHTML = ' ';

    for (var i = 0; i < productos.length; i++) {

        if(productos[i].tipo == "electronics"){

            opcionesDeProductos = `
            <div class="product_card ${productos[i].tipo}">
                <img src=${productos[i].imagen} alt=${productos[i].nombre}>
                <div class="product_info">
                    <div>
                        <h1>$ ${productos[i].precio}</h1>
                        <p>${productos[i].nombre}</p>
                    </div>
                    <figure>
                        <img src="./Iconos/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>`
            contenedorTarjetas.innerHTML += opcionesDeProductos;
          
        }

    }

}

function tarjetas_producto_furnitures_mobile() {

    const is_mobile_menu_closed = mobile_menu.classList.contains('inactive');
    
    if (!is_mobile_menu_closed){
        mobile_menu.classList.add('inactive');
    }

    contenedorTarjetas.innerHTML = ' ';

    for (var i = 0; i < productos.length; i++) {

        if(productos[i].tipo == "furnitures"){

            opcionesDeProductos = `
            <div class="product_card ${productos[i].tipo}">
                <img src=${productos[i].imagen} alt=${productos[i].nombre}>
                <div class="product_info">
                    <div>
                        <h1>$ ${productos[i].precio}</h1>
                        <p>${productos[i].nombre}</p>
                    </div>
                    <figure>
                        <img src="./Iconos/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>`
            contenedorTarjetas.innerHTML += opcionesDeProductos;
          
        }

    }

}

function tarjetas_producto_toys_mobile(){

    const is_mobile_menu_closed = mobile_menu.classList.contains('inactive');
    
    if (!is_mobile_menu_closed){
        mobile_menu.classList.add('inactive');
    }

    contenedorTarjetas.innerHTML = ' ';

    for (var i = 0; i < productos.length; i++) {

        if(productos[i].tipo == "toys"){

            opcionesDeProductos = `
            <div class="product_card ${productos[i].tipo}">
                <img src=${productos[i].imagen} alt=${productos[i].nombre}>
                <div class="product_info">
                    <div>
                        <h1>$ ${productos[i].precio}</h1>
                        <p>${productos[i].nombre}</p>
                    </div>
                    <figure>
                        <img src="./Iconos/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>`
            contenedorTarjetas.innerHTML += opcionesDeProductos;
          
        }

    }

}

function tarjetas_producto_others_mobile (){

    const is_mobile_menu_closed = mobile_menu.classList.contains('inactive');
    
    if (!is_mobile_menu_closed){
        mobile_menu.classList.add('inactive');
    }

    contenedorTarjetas.innerHTML = ' ';

    for (var i = 0; i < productos.length; i++) {

        if(productos[i].tipo == "others"){

            opcionesDeProductos = `
            <div class="product_card ${productos[i].tipo}">
                <img src=${productos[i].imagen} alt=${productos[i].nombre}>
                <div class="product_info">
                    <div>
                        <h1>$ ${productos[i].precio}</h1>
                        <p>${productos[i].nombre}</p>
                    </div>
                    <figure>
                        <img src="./Iconos/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>`
            contenedorTarjetas.innerHTML += opcionesDeProductos;
          
        }

    }

}