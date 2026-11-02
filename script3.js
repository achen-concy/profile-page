fetch("modules.json")
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

fetch("modules.json")
.then(response => {
    if (!response.ok) {
        throw new Error("could not load modules.json");
    }
    return response.json();
})
.then(modules => {
    const list = document.getElementById("module-list");
    modules.forEach(module => {
        const li = document.createElement("li");
        li.textContent = `${module.name} - ${module.hours} hours`;
        list.appendChild(li);
    });
})
.catch(error => {
    document.getElementById("error-message").textContent =
    "Sorry, the modules could not be loaded. please try again later.";
    console.error(error);
});



