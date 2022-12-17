const Menubtn = document.querySelector('.fa-bars')
const NavBar = document.getElementById('navbar')
const CloseMenubtn = document.querySelector('.fa-xmark')

Menubtn.addEventListener('click' ,function(){
    NavBar.style.right = '0px'
})

CloseMenubtn.addEventListener('click',function(){
    NavBar.style.right = '-300px'
})