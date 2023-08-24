const navUser = document.querySelector('.navbar_user');
const desktop_menu = document.querySelector('.desktop_menu');

navUser.addEventListener('click', toggle_Desktop_Menu);

function toggle_Desktop_Menu (){
    desktop_menu.classList.toggle('inactive');
    navUser.classList.toggle('bold');
}