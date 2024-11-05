let btnElement = document.getElementById('buton')

btnElement.addEventListener('click' , function(){
    
    alert('You Just Booked Your First Car')
})
let butonelement = document.getElementById('next-btn')

butonelement.addEventListener('click', function(){
    alert('You Subscribed Our News Letter')
})
let navelement = document.getElementById('b-nav')
let burgerelement = document.getElementById('b-bar')

    burgerelement.addEventListener('click', function(){
    navelement.classList.toggle('nav-h')
})