// Получаем элементы из HTML
const themeBtn = document.getElementById('themeBtn');
const actionBtn = document.getElementById('actionBtn');
const outputText = document.getElementById('outputText');

// 1. Логика переключения темной и светлой темы
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    if (document.body.classList.contains('light-theme')) {
        themeBtn.textContent = '🌙 Темная тема';
    } else {
        themeBtn.textContent = '☀️ Светлая тема';
    }
});

// 2. Интерактивная кнопка, которая меняет текст в консоли на сайте
const messages = [
    "Статус: добро пожаловать",
    "Статус: Даниель гей пассив",
    "Статус: хз чо писать дани лох",
    "Статус: жди докса даниель😘",
    "Статус: дани я тебя сдам ментам"
];

let currentIndex = 0;

actionBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % messages.length;
    outputText.textContent = messages[currentIndex];
});
