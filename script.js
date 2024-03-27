ulet menuicon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');
let sections= document.querySelectorAll('section');
let navlinks= document.querySelectorAll('header nav a');
document.getElementById('myresume').addEventListener('click', function(){
  window.open('Resume Winner.pdf','_blank');
})


window.onscroll=()=>{
    sections.forEach(sec => {
      let top= window.scrollY;
      let offset= sec.offsetTop-150;
      let height= sec.offserHeight;
      let id= sec.getAttribute('id');

      if(top>=offset && top<offset+height){
        let bar= document.getElementById("links");
        let s= window.getComputedStyle(bar).visibility
        if(s=='hidden'){
         bar.classList.add("active"); 
        }
        else{
          bar.classList.remove("active");
}
      }
menuicon.onclick = () => {
    menuicon.classList.toggle('bx');
    navbar.classList.toggle('active');
}
