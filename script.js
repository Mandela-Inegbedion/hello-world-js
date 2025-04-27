colors = ['#ADD8E6', '#7FFFD4', '#2E8B57', '#FFD700'];

function message() {
    alert('Hello World!')
}


function backgroundChanges() {
    const index = Math.floor(Math.random() * colors.length);
    const randomColor = colors[index];
    document.body.style.backgroundColor = randomColor;
}
backgroundChanges()

setTimeout(message, 3000);
setInterval(backgroundChanges, 3000);











