gsap.registerPlugin(ScrollTrigger);

const hero = gsap.timeline({

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"+=2500",

        scrub:1,

        pin:true,

        anticipatePin:1

    }

});

hero

.to(".sky",{

    scale:1.15,

    y:-180,

    ease:"none"

},0)

.to(".sun",{

    scale:1.25,

    opacity:.2,

    y:-250,

    ease:"none"

},0)

.to(".stars",{

    y:-300,

    opacity:.35,

    ease:"none"

},0)

.to(".cloud1",{

    x:700,

    y:-250,

    ease:"none"

},0)

.to(".cloud2",{

    x:-500,

    y:-180,

    ease:"none"

},0)

.to(".cloud3",{

    x:350,

    y:-320,

    ease:"none"

},0)

.to(".back",{

    y:-120,

    scale:1.05,

    ease:"none"

},0)

.to(".middle",{

    y:-280,

    scale:1.12,

    ease:"none"

},0)

.to(".fog",{

    y:-340,

    opacity:.15,

    ease:"none"

},0)

.to(".front",{

    y:-520,

    scale:1.22,

    ease:"none"

},0)

.to(".hero-content",{

    y:-220,

    opacity:0,

    ease:"none"

},0);