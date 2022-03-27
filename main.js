const up = document.getElementsByClassName("upArrow")
const down = document.getElementsByClassName("downArrow")

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

const start = document.getElementsByClassName("start")
const header = document.getElementsByClassName("header")

const startPage = () => {
    window.scrollTo({
        top: header[0].scrollHeight,
        behavior: 'smooth'
    });
}