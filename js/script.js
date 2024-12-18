document.addEventListener('DOMContentLoaded', () => {
    const footer = document.getElementById('slide_footer');
    const originalParent = document.getElementById('slide_container');
    const newParent = document.getElementById('slide_content'); 

    function updateParent() {
        if (window.innerWidth <= 480) {
            if (footer.parentNode !== newParent) {
                newParent.appendChild(footer);
            }
        } else {
            if (footer.parentNode !== originalParent) {
                originalParent.appendChild(footer);
            }
        }
    }

    updateParent();
    
    window.addEventListener('resize', updateParent);
});


const menuToggle = document.getElementById('menu-toggle');
const headerNav = document.querySelector('.nav_burger');
const menuBurger = document.querySelector('.menu_burger');

// Переключаем класс для отображения меню
menuToggle.addEventListener('click', function () {
    headerNav.classList.toggle('active');
});


// swiper

var swiper = new Swiper(".welcomeSwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // autoplay: {
    //     delay: 6000,
    //     disableOnInteraction: false, 
    // },
    allowTouchMove: false,
});


