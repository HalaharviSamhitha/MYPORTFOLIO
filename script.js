let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");
 document.getElementById('contactformsection').addEventListener('click', function(event) {
  event.preventDefault(); // Prevents the default form submission

  // Clear the message textarea
  document.getElementById('a').value = '';
   document.getElementById('b').value = '';
   document.getElementById('c').value = '';
   document.getElementById('d').value = '';
    document.getElementById('e').value = '';
  // Show alert message
  alert('Hey, thanks a bunch for reaching out to me through the contact form on the website. I'll get back to you soon!');
});


function openresume(){
  window.open('mydearresume.pdf','_blank');
}
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offserHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + " ]")
          .classList.add("active");
      });
    }
  });
};
menuicon.onclick = () => {
  menuicon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};


