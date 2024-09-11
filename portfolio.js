const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

var typed = new Typed(".auto-type",{
    strings : ["Programmer", "Ai engineer", "Fullstack developer"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
});     
   
var moon = document.getElementById("moon");
moon.onclick =  function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        moon.src = "sun.png";
    } else {
        moon.src = "moon.png";
    }
}

function setProgress(element, value) {
    const angle = (value / 100) * 360;
    const progressColor = element.getAttribute('data-color');
    element.style.background = `conic-gradient(${progressColor} ${angle}deg, #444 ${angle}deg)`;
}

function animateProgress(progressElement, endValue, speed) {
    let startValue = 0;
    const progressValueElement = progressElement.querySelector('.progress-value');

    const interval = setInterval(() => {
        startValue++;
        progressValueElement.textContent = `${startValue}%`;
        setProgress(progressElement, startValue);

        if (startValue === endValue) {
            clearInterval(interval);
        }
    }, speed);
}

document.addEventListener('DOMContentLoaded', () => {
    const progress1 = document.getElementById('progress1')
    const progress2 = document.getElementById('progress2');
    const progress3 = document.getElementById('progress3');
    const progress4 = document.getElementById('progress4');
    const progress5 = document.getElementById('progress5');
    const progress6 = document.getElementById('progress6');

    animateProgress(progress1, 70, 20); 
    animateProgress(progress2, 70, 20);  
    animateProgress(progress3, 50, 20);  
    animateProgress(progress4, 55, 20); 
    animateProgress(progress5, 78, 20);  
    animateProgress(progress6, 5, 20);  
});

gsap.from("h3", {
    y:50,
    duration: 1.8,
    delay:0.5,
    opacity:0,
    stagger:1,
})