const navUser = document.querySelector('.navbar_user');
const desktop_menu = document.querySelector('.desktop_menu');
const menu_ham_icon = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile_menu');
const carrito_icon = document.querySelector('.navbar_sopping_cart');
const aside = document.querySelector('.product-detail');

navUser.addEventListener('click', toggle_Desktop_Menu);
menu_ham_icon.addEventListener('click', toggle_Mobile_Menu);
carrito_icon.addEventListener('click', toggle_Carrito);

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