const intro = gsap.timeline();

intro

.from(".sun",{

    opacity:0,

    scale:.4,

    duration:1.8,

    ease:"power4.out"

})

.from(".cloud",{

    opacity:0,

    y:80,

    stagger:.15,

    duration:1

},"-=1.2")

.from(".mountain",{

    y:150,

    opacity:0,

    stagger:.2,

    duration:1.5,

    ease:"power4.out"

},"-=1")

.from(".hero-content > *",{

    y:60,

    opacity:0,

    stagger:.15,

    duration:1

},"-=1");

gsap.registerPlugin(ScrollTrigger);

const hero = gsap.timeline({

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"+=4000",

        scrub:1,

        pin:true,

        anticipatePin:1

    }

});

hero

hero

.to(".background",{

    scale:1.12,

    transformOrigin:"50% 50%",

    ease:"none"

},0)

.to(".background",{

    filter:"brightness(.65) saturate(1.15)",

    ease:"none"

},0)

.to(".hero",{

    backgroundColor:"#020202",

    ease:"none"

},0)

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

.to(".fog1",{

    y:-220,

    opacity:.05,

    ease:"none"

},0)

.to(".fog2",{

    y:-300,

    opacity:0,

    ease:"none"

},0)

.to(".fog3",{

    y:-420,

    opacity:0,

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

const heroSection = document.querySelector(".hero");

heroSection.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5);
    const y = (e.clientY / window.innerHeight - 0.5);

    gsap.to(".sun",{
        x:x*80,
        y:y*60,
        duration:2,
        ease:"power3.out"
    });

    gsap.to(".cloud1",{
        x:x*60,
        y:y*40,
        duration:2
    });

    gsap.to(".cloud2",{
        x:x*90,
        y:y*50,
        duration:2
    });

    gsap.to(".cloud3",{
        x:x*120,
        y:y*70,
        duration:2
    });

    gsap.to(".back",{
        x:x*15,
        y:y*8,
        duration:2
    });

    gsap.to(".middle",{
        x:x*30,
        y:y*15,
        duration:2
    });

    gsap.to(".front",{
        x:x*55,
        y:y*25,
        duration:2
    });

    gsap.to(".hero-content",{
        x:x*20,
        y:y*15,
        duration:2
    });

});

gsap.to(".sun",{

    scale:1.08,

    duration:5,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

gsap.to(".cloud1",{

    x:"+=250",

    duration:55,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

gsap.to(".cloud2",{

    x:"-=180",

    duration:70,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

gsap.to(".cloud3",{

    x:"+=300",

    duration:85,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

gsap.to(".fog1",{

    x:150,

    duration:40,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

gsap.to(".fog2",{

    x:-100,

    duration:55,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

gsap.to(".fog3",{

    x:220,

    duration:70,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

gsap.to(".particles",{

    y:-250,

    duration:40,

    repeat:-1,

    ease:"none"

});

gsap.to(".stars",{

    rotation:1,

    transformOrigin:"50% 50%",

    duration:180,

    repeat:-1,

    ease:"none"

});

gsap.to(".sun-rays",{

    scale:1.15,

    duration:8,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

window.addEventListener("mousemove",(e)=>{

    const rx=(e.clientY/window.innerHeight-.5)*4;
    const ry=(e.clientX/window.innerWidth-.5)*6;

    gsap.to(".background",{

        rotateX:-rx,

        rotateY:ry,

        transformPerspective:2500,

        transformOrigin:"center",

        duration:2

    });

});
