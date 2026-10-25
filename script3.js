
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
});

const message = document.getElementById('message');
const charCount = document.getElementById('char-count');

message.addEventListener('input', () => {
    const text = message.value;
    charCount.textContent = text.length + ' characters';
});


