

 const rakib = document.querySelector('.rakib')
 const navigation = document.querySelector('.navigation')
 const btn = document.querySelector('.btn')
 const menu = document.querySelector('.menu')
 const body = document.querySelector('body')




 const listmenuButtton = ()=>{
     rakib.style.left = "20%"
     body.classList.add('show');
    
 }



 function remove(){
     body.classList.remove('show');
     rakib.style.left = "0";
}
 menu.addEventListener('click',listmenuButtton);
 btn.addEventListener('click',remove);