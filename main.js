// const changeColor = document.querySelector('.main-container');
// const switchMode = document.querySelector('.darkmode-slider');

// switchMode.addEventListener('click', () => {
//     changeColor.classList.toggle('darkmode');
//     changeColor.classList.toggle('lightmode');
// });

const switchMode = document.querySelector('.darkmode-slider');

switchMode.addEventListener('click', moveButton => {
    switchMode.style.justifyContent = switchMode.style.justifyContent === 'flex-start' ? 'flex-end' : 'flex-start';
});


