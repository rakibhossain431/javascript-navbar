

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

//  
const navItem = [...document.querySelectorAll('.nav li a')]

navItem.map(element =>{
    element.addEventListener('click',(e) =>{
      e.preventDefault();
      
      const id = e.target.getAttribute('href');
      const section = document.querySelector(id).offsetTop;

      window.scroll({
          top:section,
          left:0,
          behavior:'smooth'
      });
    });
});