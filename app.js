let btn = document.querySelector('.btn')
let navbar = document.querySelector('.nav-bar')
let header = document.querySelector('.header')
let autherLinks =  document.querySelectorAll('.auther-links')
let link =  document.querySelectorAll('.link')
let linkImage =document.querySelectorAll('.link-image')
let menuOpen=false;


btn.addEventListener('click',function(){

    if(!menuOpen){
        this.classList.add('open')
        navbar.classList.add('display')
        menuOpen=true;

    }else{
        this.classList.remove('open')
        navbar.classList.remove('display')

        menuOpen=false;
    }
    
    
})

// var jsdom = require("jsdom").jsdom;
// global.$ = require('jquery/dist/jquery')(jsdom().createWindow());
        
    $('.link-image').click(function(){

        $('.link-image').removeClass('active')
        $(this).addClass('active')
    })

// for (let i = 0; i < link.length; i++) {
//     const element = link[i];
//     console.log(element)
    
//       element.addEventListener('click',function()
//     {

//     autherLinks[i].classList.toggle('visibel')
// })
    
// }

// link.addEventListener('click',function(){

//     autherLinks.classList.toggle('visibel')
// })