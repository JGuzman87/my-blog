document.addEventListener('DOMContentLoaded', function () {
    const backButton = document.getElementById('backButton');
    const modeToggle = document.getElementById('mode-toggle');
    
    backButton.addEventListener('click', function() {
        window.location.href = "http://127.0.0.1:5500/index.html";
    });

    let isDarkMode = false;
    modeToggle.addEventListener('click', function () {
        isDarkMode = !isDarkMode;
        document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
        document.body.style.color = isDarkMode ? '#fff' : '#333';
    });
});





