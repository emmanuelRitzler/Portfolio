// Saves the preferences of the user on his computer
const switchMode = document.querySelector('.darkmode-slider');

const switchTheme = () => {
    const rootElem = document.documentElement;
    let dataTheme = rootElem.getAttribute('data-theme');
    const newTheme = (dataTheme === "light") ? "dark" : "light";

    rootElem.setAttribute('data-theme', newTheme)
    console.log(dataTheme);

    localStorage.setItem('theme', newTheme);
};

switchMode.addEventListener('click', switchTheme);