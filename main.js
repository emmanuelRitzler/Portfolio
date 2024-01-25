// Saves the preferences of the user on his computer
const switchMode = document.querySelector('.darkmode-slider');

const switchTheme = () => {
    const currentJustifyContent = switchMode.style.justifyContent || 'flex-start';
    switchMode.style.justifyContent = currentJustifyContent === 'flex-start' ? 'flex-end' : 'flex-start';

    const rootElem = document.documentElement;
    let dataTheme = rootElem.getAttribute('data-theme');
    const newTheme = (dataTheme === "light") ? "dark" : "light";

    rootElem.setAttribute('data-theme', newTheme)
    console.log(dataTheme);

    localStorage.setItem('theme', newTheme);

    let localSto = localStorage.getItem('theme')
    if (localSto === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    };
}

switchMode.addEventListener('click', switchTheme);