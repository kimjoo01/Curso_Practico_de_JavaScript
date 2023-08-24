const navUser = document.querySelector('.navbar_user');
const desktop_menu = document.querySelector('.desktop_menu');
const menu_ham_icon = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile_menu');

navUser.addEventListener('click', toggle_Desktop_Menu);
menu_ham_icon.addEventListener('click', toggle_Mobile_Menu);

function toggle_Desktop_Menu (){
    desktop_menu.classList.toggle('inactive');
    navUser.classList.toggle('bold');
}

function toggle_Mobile_Menu (){
    mobile_menu.classList.toggle('inactive');
}