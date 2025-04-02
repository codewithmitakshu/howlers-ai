
var typed = new Typed(".auto-type", {
    strings: ["Welcome to the World of AI"],
    typeSpeed: 80,
    loop: false,
    showCursor: false,
    onComplete: function () {
        startLoaderAnimation();
    }
  });
  
  function startLoaderAnimation() {
    var tl = gsap.timeline();
  
    tl.to("#loader h1", {
        opacity: 0,
        duration: 1
    }, "+=1") 
  
    .to("#loader", {
        height: 0,
        duration: 1,
        ease: "expo.inOut"
    })
  
    .set("#loader", { display: "none" }) 
    .set(".nav-bar", { display: "block" }); 
  }
  