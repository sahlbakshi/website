const topOfPage = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const bottomOfPage = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

const changeTheme = () => {
    const button = document.querySelector('button');
    const theme = button.dataset.theme;
    if (theme == 'light') {
        button.dataset.theme = 'dark';
        enableDarkMode();
    } else if (theme == 'dark') {
        button.dataset.theme = 'light';
        enableLightMode();
    }
}

function enableDarkMode() {
    const body = document.body;
    const svg = document.querySelector('.mode');
    const external = document.querySelectorAll('.light-ex');
    const internal = document.querySelectorAll('.light-in');
    for (let elem of external) {
        elem.classList.remove('light-ex')
        elem.classList.add('dark-ex')
    }
    for (let elem of internal) {
        elem.classList.remove('light-in')
        elem.classList.add('dark-in')
    }
    svg.classList.remove('filter-black')
    svg.classList.add('filter-white')
    body.classList.remove('light-body')
    body.classList.add('dark-body')
}

function enableLightMode() {
    const body = document.body;
    const svg = document.querySelector('.mode');
    const external = document.querySelectorAll('.dark-ex');
    const internal = document.querySelectorAll('.dark-in');
    for (let elem of external) {
        elem.classList.remove('dark-ex')
        elem.classList.add('light-ex')
    }
    for (let elem of internal) {
        elem.classList.remove('dark-in')
        elem.classList.add('light-in')
    }
    svg.classList.remove('filter-white')
    svg.classList.add('filter-black')
    body.classList.remove('dark-body')
    body.classList.add('light-body')
}