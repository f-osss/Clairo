let img = document.querySelector('img')

function changeClairoPic() {
    let img = document.querySelector('img')
    img.src = 'images/clairosmiling1.jpg'
    // img.className = 'newClass';
    // doSomething();
}

const doSomething = () => {
    document.querySelector('.newClass').style.width = '300px';
    document.querySelector('.newClass').style.height = '176px';
    document.querySelector('.newClass').style.marginLeft = '80px'
}

function changeClairoPicBack() {
    let img = document.querySelector('img')
    img.src = 'images/clairo.jpg'
    // img.style.width = '384px'
    // img.style.height = '176px'
    // img.style.marginLeft = '80px'

}

img.addEventListener('mouseover', changeClairoPic)
img.addEventListener('mouseleave', changeClairoPicBack)

//buttons
let charm = document.querySelector('#presave')

function goCharm() {
    window.open('https://clairo.lnk.to/Charm', '_blank');
}

charm.addEventListener('click', goCharm)

let sling=document.querySelector('#listenSling')

function goSling(){
    window.open('https://clairo.lnk.to/Sling','_blank')
}
sling.addEventListener('click',goSling)

let immunity=document.querySelector('#listenImmunity')

function goImmunity(){
    window.open('https://clairo.lnk.to/immunity','_blank')
}
immunity.addEventListener('click',goImmunity)

let diary=document.querySelector('#listenDiary')

function goDiary(){
    window.open('https://clairo.lnk.to/diary001','_blank')
}
diary.addEventListener('click',goDiary)