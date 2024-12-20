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

window.onload = () => {
    const swiperContainer = document.querySelector('.swiper_frequently');
    const swiperSlides = document.querySelectorAll('.frequently-slide');

    if (!swiperContainer || swiperSlides.length === 0) {
        console.error('Swiper container or slides not found!');
        return;
    }

    // Функция для вычисления количества видимых слайдов
    function calculateSlidesPerView() {
        const containerWidth = swiperContainer.offsetWidth;
        const slideWidth = swiperSlides[0].offsetWidth;
        const spaceBetween = 20; // Расстояние между слайдами

        const totalSlideWidth = slideWidth + spaceBetween;
        return Math.max(Math.floor(containerWidth / totalSlideWidth), 1);
    }

    // Функция для обновления видимости слайдов
    function updateVisibleSlides(activeIndex, slidesPerView) {
        swiperSlides.forEach((slide, index) => {
            if (index >= activeIndex && index < activeIndex + slidesPerView) {
                slide.classList.add('swiper-slide-active'); // Добавляем класс active
                slide.style.display = 'block'; // Показываем слайд
            } else {
                slide.classList.remove('swiper-slide-active'); // Убираем класс active
                slide.style.display = 'none'; // Скрываем слайд
            }
        });
    }

    // Инициализация Swiper
    let slidesPerView = calculateSlidesPerView();
    const frequentlySwiper = new Swiper('.swiper_frequently', {
        slidesPerView: 1, // Управляем группами вручную
        spaceBetween: 20,
        loop: false,
        pagination: {
            el: '.swiper-pagination-frequently',
            clickable: true,
        },
        on: {
            init: () => {
                updateVisibleSlides(0, slidesPerView);
            },
            slideChange: () => {
                const activeIndex = frequentlySwiper.activeIndex * slidesPerView;
                updateVisibleSlides(activeIndex, slidesPerView);
            },
        },
    });

    // Обновление при изменении размера окна
    window.addEventListener('resize', () => {
        slidesPerView = calculateSlidesPerView();
        updateVisibleSlides(frequentlySwiper.activeIndex * slidesPerView, slidesPerView);
    });
};






    // Для второго слайдера (welcomeSwiper)
    const welcomeSwiper = new Swiper(".welcomeSwiper", {
        loop: true, // Зацикливание
        pagination: {
            el: ".swiper-pagination", // Уникальная пагинация для второго слайдера
            clickable: true,
        },
            // autoplay: {
    //     delay: 6000,
    //     disableOnInteraction: false, 
    // },
        allowTouchMove: false, // Отключаем возможность прокрутки слайдов свайпом
    });

    
