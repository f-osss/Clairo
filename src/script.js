let img = document.querySelector('img')

function changeClairoPic() {
    let img = document.querySelector('img')
    img.src = 'images/clairosmiling.webp'
    img.className = 'newClass';
    doSomething();
}

const doSomething = () => {
    document.querySelector('.newClass').style.width = '300px';
    document.querySelector('.newClass').style.height = '176px';
    document.querySelector('.newClass').style.marginLeft = '80px'
}

function changeClairoPicBack() {
    let img = document.querySelector('img')
    img.src = 'images/clairo.jpg'
    img.style.width = '384px'
    img.style.height = '176px'
    img.style.marginLeft = '80px'

}

img.addEventListener('mouseover', changeClairoPic)
img.addEventListener('mouseleave', changeClairoPicBack)

//buttons
let charm = document.querySelector('#presave')

function goCharm() {
    window.open('https://clairo.lnk.to/Charm', '_blank');
}

charm.addEventListener('click', goCharm)