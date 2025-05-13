'use strict';

const container = document.querySelector('.container');
const header = document.querySelector('header');
const sidebarLeft = document.querySelector('.sidebar-left');

const sidebarRight = document.querySelector('.sidebar-right');

const redColor = '#EE5564';

const resetColor = () => {
    if (container) {
        Array.from(container.children).forEach(element => {
            element.style.backgroundColor = '#f0f0f0';
        });
    }
};

const setColor = (element, color) => {
    if (element) {
        element.style.backgroundColor = color;
    }
};

// Основна функція для зміни кольору
const updateLayoutColors = () => {
    resetColor();

    const width = window.innerWidth;

    if (width < 768) {
        setColor(header, redColor);
        setColor(sidebarLeft, redColor);
    } else if (width >= 768 && width < 1024) {
        setColor(header, redColor);
        setColor(sidebarRight, redColor);
    } else {
        setColor(header, redColor);
        setColor(sidebarRight, redColor);
    }
};

window.addEventListener('load', updateLayoutColors);

window.addEventListener('resize', updateLayoutColors);
