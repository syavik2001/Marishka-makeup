// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //    sec.classList.add('show-animate');
            //}
            //else {
            //    sec.classList.remove('show-animate');
        };
    });
    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


// animation text JS in home-block
//const words = ['Макіяж', 'Візаж', 'Зачіски', 'Корекція та фарбування бров', 'Ламінування вій'];

//let index = 0;
//let charIndex = 0;
//const textElement = document.getElementById('animated-textJS');
//let animationStarted = false;
//let animationPaused = false;
//let animationInterval;

//function typeText() {
//    if (!animationPaused) {
//        const word = words[index];
//        textElement.textContent = word.slice(0, charIndex);
//        charIndex++;
//        if (charIndex <= word.length) {
//            animationInterval = setTimeout(typeText, 100); // Интервал между буквами
//        } else {
//            setTimeout(nextWord, 1500); // Интервал между словами
//        }
//    }
//}

//function nextWord() {
//    index = (index + 1) % words.length;
//    charIndex = 0;
//    animationInterval = setTimeout(typeText, 0); // Начать вывод следующего слова
//}
//function startAnimation() {
//    if (!animationStarted) {
//        setTimeout(typeText, 1200); // Запуск анимации через 1 секунду после того, как блок стал видимым
//        animationStarted = true;
//    } else {
//        animationPaused = false;
//        charIndex = 0; // Сброс индекса символа при начале анимации снова
//        clearTimeout(animationInterval);
//        animationInterval = setTimeout(typeText, 1200); // Запуск анимации через 1 секунду после возвращения к блоку
//    }
//}

//function pauseAnimation() {
//    animationPaused = true;
//    clearTimeout(animationInterval);
//    animationInterval = null;
//}
//function handleScroll() {
//    const bounding = textElement.getBoundingClientRect();

//    // Проверяем, если блок с анимацией находится в видимой части окна
//    if (
//        bounding.top >= 0 &&
//        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//    ) {
//        startAnimation();
//    } else {
//        pauseAnimation();
//        textElement.textContent = ''; // Очищаем текст, когда блок не виден
//    }
//}
//// Добавляем обработчик события прокрутки страницы
//window.addEventListener('scroll', handleScroll);
//// Проверяем видимость блока сразу после загрузки страницы
//handleScroll();




