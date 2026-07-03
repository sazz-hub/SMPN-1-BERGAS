/*=========================================
        SMPN 1 BERGAS WEBSITE
=========================================*/

/* Navbar berubah warna saat scroll */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

header.classList.toggle("sticky",window.scrollY>50);

});


/*==============================
    Smooth Scroll
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


/*==============================
      Counter Animation
==============================*/

const counters=document.querySelectorAll(".counter");

const speed=200;

counters.forEach(counter=>{

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}

}

updateCounter();

});


/*==============================
      Back To Top
==============================*/

const toTop=document.querySelector(".top");

window.addEventListener("scroll",()=>{

if(window.pageYOffset>300){

toTop.style.display="flex";

}else{

toTop.style.display="none";

}

});

toTop.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}


/*==============================
       Loading Screen
==============================*/

window.onload=()=>{

const loader=document.querySelector(".loader");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

loader.style.transition=".6s";

},1200);

}


/*==============================
        Gallery Hover
==============================*/

const gallery=document.querySelectorAll(".galeri-grid img");

gallery.forEach(img=>{

img.addEventListener("mouseover",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


/*==============================
      Reveal Animation
==============================*/

const reveal=()=>{

const reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight;

let elementTop=reveals[i].getBoundingClientRect().top;

let elementVisible=120;

if(elementTop<windowHeight-elementVisible){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll",reveal);


/*==============================
      Typing Effect
==============================*/

const text="SMP NEGERI 1 BERGAS";

let index=0;

function typing(){

const title=document.querySelector(".typing");

if(title){

if(index<text.length){

title.innerHTML+=text.charAt(index);

index++;

setTimeout(typing,120);

}

}

}

typing();


/*==============================
      Dark Mode
==============================*/

const darkBtn=document.querySelector(".darkmode");

if(darkBtn){

darkBtn.onclick=()=>{

document.body.classList.toggle("dark");

}

}


/*==============================
      Mobile Menu
==============================*/

const menu=document.querySelector(".menu");

const nav=document.querySelector(".navbar ul");

if(menu){

menu.onclick=()=>{

nav.classList.toggle("show");

}

}