// Saves the preferences of the user on his computer
let darkMode = localStorage.getItem('darkMode');

const switchMode = document.querySelector('.darkmode-slider');

const switchTheme = () => {
    const currentJustifyContent = switchMode.style.justifyContent || 'flex-start';
    switchMode.style.justifyContent = currentJustifyContent === 'flex-start' ? 'flex-end' : 'flex-start';

    const enableDarkMode = () => {
        localStorage.setItem('darkMode', 'enabled');
    };
    const disableDarkMode = () => {
        localStorage.setItem('darkMode', 'disabled');
    };

    const darkModeEnabled = localStorage.getItem('darkMode');
    
    if (darkModeEnabled === 'enabled') {
        enableDarkMode();
    };

    const rootElem = document.documentElement;
    let dataTheme = rootElem.getAttribute('data-theme');
    const newTheme = (dataTheme === "light") ? "dark" : "light";


    if (dataTheme === "light") {
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
    rootElem.setAttribute('data-theme', newTheme)
    console.log(dataTheme);
}

switchMode.addEventListener('click', switchTheme);

