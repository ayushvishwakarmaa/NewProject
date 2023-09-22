var tl = gsap.timeline()
gsap.registerPlugin(ScrollTrigger);

tl.from(".nav img , .nav h3 , .nav button",{
    y:100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
})
tl.from(".main h1",{
    y:200,
    duration:1,
    opacity:0,
    stagger:0.2
})
tl.from(".main .left-image",{
    x:-200,
    duration:0.6,
    opacity:0
})
tl.from(".main .right-image",{
    x:200,
    duration:0.6,
    opacity:0
})
tl.from(".main h5",{
    scale:0,
    opacity:0
})
tl.to(".main h5",{
    y:30,
    repeat:-1,
    duration:0.7,
    yoyo:true 
})
tl.from(".main2 img",{
    x:-200,
    opacity:0,
    duration:1.5
})
tl.to(".main2 img",{ 
    opacity:1,
    
})

$(document).ready(function(){
    $(".heading").textillate({
        loop:true,
        in:{
            effect:"fadeInLeft",
            delay:200
        },
        out:{
            effect:"fadeOutRight",
            delay:200
        }
    })
    $(".paragraph").textillate({
        loop:true,
        in:{
            effect:"fadeInLeft",
            delay:20
        },
        out:{
            effect:"fadeOutRight",
            delay:20
        }
    })


    
})

gsap.fromTo(".text", {x: "-100px"}, {
    duration: 1.25, 
    x: 0,
    autoAlpha: 1, 
    ease: "expo", 
});

ScrollTrigger.create({
    trigger: ".main2",
})

gsap.from(".text", {
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: ".main2", 
        start: "top 80%", 
        end: "bottom top", 
        scrub: true, 
    }
});
