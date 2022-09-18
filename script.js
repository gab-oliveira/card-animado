const tenis1 = document.getElementById('tenis-1')
const tenis2 = document.getElementById('tenis-2')

const setaright = document.getElementById('right')
const setaleft = document.getElementById('left')

setaleft.addEventListener('click', () =>{
    tenis1.style.left ='650px'
    tenis2.style.left = '-50px'
})

setaright.addEventListener('click', () =>{
    tenis1.style.left = '-50px'
    tenis2.style.left = '-650px'
})