                                /*==== Menu Show ====*/
const showMenu =(toggleId,navId)=>{
    const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

                            /*==== Remove Menu Mobile ====*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    //Active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove Menu
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

                            /*==== Image Slide ====*/
var Index = 0;
slides();

function slides() {
  var i;
  var x = document.getElementsByClassName('slide');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  Index++;
  if (Index > x.length) {Index = 1}    
  x[Index-1].style.display = "block";  
  setTimeout(slides, 2000); 
}
