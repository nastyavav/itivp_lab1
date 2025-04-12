document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.querySelector(".contact-button");

    contactButton.addEventListener("mouseover", function () {
        contactButton.style.backgroundColor = "#a12bd0"; // Новый цвет при наведении
    });

    contactButton.addEventListener("mouseout", function () {
        contactButton.style.backgroundColor = "#2E2BD0"; // Возвращаем исходный цвет
    });
});