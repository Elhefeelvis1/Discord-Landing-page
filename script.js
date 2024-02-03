const hamburger = document.querySelector(".hamburger");
const cancel = document.querySelector(".cancel");
const mobileNav = document.querySelector('.mobile-nav');
const safety = document.querySelector('.safety')
const back = document.querySelector('.back');

// hamburger.addEventListener('click', () => {
//     mobileNav.style.display = "flex";
//     console.log("clicked")
// })
window.addEventListener('click', (e) => {
    let target = e.target;
    if(target === hamburger){
        mobileNav.style.display = "flex";
        document.querySelector('body').style['overflow-y'] = "hidden";
        console.log("clicked");
    }
    if(target === cancel){
        mobileNav.style.display = "none";
    }
    console.log(e)
})
safety.addEventListener('click', () => {
    document.querySelector('.list').style.display ="none";
    document.querySelector('.mobile-nav-top').style.display ="none";
    document.querySelector('.safety-details').style.display ="block";
    back.style.display ="block";
})
back.addEventListener('click', () => {
    document.querySelector('.list').style.display ="block";
    document.querySelector('.safety-details').style.display ="none";
    back.style.display ="none";
})