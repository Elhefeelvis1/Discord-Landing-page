const hamburger = document.querySelector(".hamburger");
const cancel = document.querySelector(".cancel");
const mobileNav = document.querySelector('.mobile-nav');
const safety = document.querySelector('.safety')
const back = document.querySelector('.back');

// Mobile Navigation Click Events start
window.addEventListener('click', (e) => {
    let target = e.target;
    if(target === hamburger){
        mobileNav.style.transform = "translateX(0)";
        document.querySelector('body').style['overflow-y'] = "hidden";
        console.log("clicked");
    }
    if(target !== mobileNav && target !== hamburger && target !== safety && target !== back){
        mobileNav.style.transform = "translateX(325px)";
        document.querySelector('body').style['overflow-y'] = "scroll";
    }
    if(target === cancel){
        mobileNav.style.transform = "translateX(325px)";
        document.querySelector('body').style['overflow-y'] = "scroll";
    }
    console.log(e)
})
safety.addEventListener('click', () => {
    document.querySelector('.mobile-nav-top').style.display ="none";
    document.querySelector('.list').style.display ="none";
    document.querySelector('.safety-details').style.display ="block";
    back.style.display ="block";
})
back.addEventListener('click', () => {
    document.querySelector('.mobile-nav-top').style.display ="flex";
    document.querySelector('.list').style.display ="block";
    document.querySelector('.safety-details').style.display ="none";
    back.style.display ="none";
})
// Mobile Navigation Click Events stop
