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