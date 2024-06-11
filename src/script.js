let img=document.querySelector('img')

function changeClairoPic(){
    let img=document.querySelector('img')
    img.src='images/clairosmiling.webp'
    img.className='newClass';
    doSomething();
}

const doSomething = () => {
    document.querySelector('.newClass').style.width = '300px';
}

function changeClairoPicBack(){
    let img=document.querySelector('img')
    img.src='images/clairo.jpg'
    img.style.width='384px'

}

img.addEventListener('mouseover',changeClairoPic)
img.addEventListener('mouseleave',changeClairoPicBack)

//buttons
let charm=document.querySelector('#presave')
function goCharm(){
    window.open('https://clairo.lnk.to/Charm', '_blank');
}

charm.addEventListener('click',goCharm)