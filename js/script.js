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


document.addEventListener('DOMContentLoaded', () => {
    // Находим все элементы названий городов и блоков описаний
    const cityNames = document.querySelectorAll('.location_map_img_city_name');
    const cityDesks = document.querySelectorAll('.location_city-desk');

    // Функция для смены активного города
    function setActiveCity(cityId) {
        // Убираем активный класс со всех блоков
        cityDesks.forEach(desk => desk.classList.remove('active'));
        // Добавляем активный класс к выбранному блоку
        const activeDesk = document.getElementById(`city-desk-${cityId}`);
        if (activeDesk) activeDesk.classList.add('active');
    }

    // Добавляем обработчики событий на каждый элемент города
    cityNames.forEach(city => {
        city.addEventListener('click', () => {
            const cityId = city.id.replace('city-name-', ''); // Извлекаем идентификатор города
            setActiveCity(cityId);
        });
    });
});


