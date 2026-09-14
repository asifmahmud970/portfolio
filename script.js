console.log('Asif Portfolio Loaded');

const words = [
"CAD Designer",
"Product Development Engineer",
"Mechanical Design Specialist",
"SolidWorks CSWA Certified Engineer"
];


let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;


function type(){

currentWord = words[i];


if(isDeleting){

document.getElementById("typing").textContent =
currentWord.substring(0,j--);

}
else{

document.getElementById("typing").textContent =
currentWord.substring(0,j++);

}


if(!isDeleting && j === currentWord.length+1){

isDeleting=true;

setTimeout(type,1000);

return;

}



if(isDeleting && j===0){

isDeleting=false;

i++;

if(i===words.length){

i=0;

}

}



setTimeout(type,isDeleting?50:100);


}


type();

// scroll effet
window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );


        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});

const hamburger = document.getElementById("hamburger");

const mobileMenu = document.getElementById("mobileMenu");


hamburger.addEventListener("click", function(){

    mobileMenu.classList.toggle("show");

});